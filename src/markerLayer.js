(function () {

    class LostArkMarkerLayer {

        constructor(data) {
            this.imagePath = data['imagePath'];
            this.zoomLevel = data['zoomLevel'];
            this.area = data['area'];

            this.markers = [];
            this.markerIdLookup = {};
            this.markerLayer = undefined;
            this.markerTypeLayers = {};
            this.markerTypeLayerState = {};
            this.mapLayer = undefined;
            this.layerControl = undefined;
            this.nextMarkerId = 0;
            this.generatedMarkerLayer = undefined;

            this.initializeLayers();
        }

        initializeLayers() {
            this.mapLayer = L.tileLayer('', {
                tileSize: Constants.TileSize,
                noWrap: true,
                maxZoom: this.zoomLevel ? this.zoomLevel : 0,
                minZoom: 0,
                errorTileUrl: Constants.ErrorImagePath
            });

            this.mapLayer.getTileUrl = LAM.getMapTileUrl(this.imagePath);

            this.markerLayer = L.layerGroup();

            this.generatedMarkerLayer = L.layerGroup();

            let baseLayers = {
                "Map": this.mapLayer
            };

            let overlays = {
                "All Markers": this.markerLayer
            };

            if(Constants.EditMode === true) {
                overlays["Auto Generated"] = this.generatedMarkerLayer;
            }

            this.layerControl = L.control.layers(baseLayers, overlays);
        }

        activate() {
            LAM.map.addLayer(this.mapLayer);
            LAM.map.addLayer(this.markerLayer);

            for (let type in this.markerTypeLayers) {
                LAM.map.addLayer(this.markerTypeLayers[type]);
            }

            this.layerControl.addTo(LAM.map);
        }

        deactivate() {
            LAM.map.removeLayer(this.markerLayer);

            for (let type in this.markerTypeLayers) {
                LAM.map.removeLayer(this.markerTypeLayers[type]);
            }

            LAM.map.removeLayer(this.mapLayer);

            this.layerControl.remove();
        }

        deleteMarker(id) {
            if(id === undefined) {
                return;
            }

            let markerData = this.markerIdLookup[id];
            if(markerData.activeMarker !== undefined){
                this.markerLayer.removeLayer(markerData.activeMarker);
                if(markerData.isGenerated !== true && Constants.EditMode === true) {
                    this.generatedMarkerLayer.removeLayer(markerData.activeMarker);
                }

                let markerTypeLayer = this.markerTypeLayers[markerData.type];
                if(markerTypeLayer !== undefined){
                    markerTypeLayer.removeLayer(markerData.activeMarker);
                }

                delete markerData['activeMarker'];
            }

            delete this.markerIdLookup[id];
            for(var i = this.markers.length - 1; i >= 0; i--) {
                if(this.markers[i].id === id) {
                    this.markers.splice(i, 1);
                    break;
                }
            }

            LAM.statistics.rebuildStats();
        }

        prepareMarkerDataTitle(markerData) {
            let isZoningMarker = false;
            switch (markerData.type) {
                case MarkerTypeEnum.Zoning:
                case MarkerTypeEnum.ZoningWorld: {
                    if(markerData.teleportTo === undefined) {
                        return;
                    }

                    isZoningMarker = true;
                    break;
                }
            }


            if(isZoningMarker === true) {

                let targetArea = markerData.area;
                if(markerData.teleportArea !== undefined){
                    targetArea = markerData.teleportArea;
                }

                let targetZone = LAM.areas[targetArea].getZoneForPoint(markerData.teleportTo[0], markerData.teleportTo[1]);

                if(markerData.area == 'World'){
                    markerData.title = '##' + _L('To ') + _L(markerData.area);
                } else {
                    markerData.teleportTo
                    markerData.title = '##' + _L('To ') + _L(targetZone)
                }

                return;
            }

            if(markerData.title === undefined) {
                markerData.title = MarkerTypeDefaultTitle(markerData.type);
            }
        }

        prepareMarkerData(markerData) {
            // Set a marker id if none is set and its not a generated marker
            if(markerData.isGenerated !== true) {
                if (markerData.id === undefined) {
                    markerData.id = this.nextMarkerId++;
                } else {
                    if (this.nextMarkerId <= markerData.id) {
                        this.nextMarkerId = markerData.id + 1;
                    }
                }
            }

            markerData.area = this.area;
            markerData.maxZoomLevel = this.zoomLevel;

            // Detect marker zone
            if(this.area !== undefined && markerData.type !== MarkerTypeEnum.Internal) {
                let markerZone = LAM.areas[this.area].getZoneForPoint(markerData.x, markerData.y);
                if(markerZone === undefined){
                    console.warn("Marker is not in any area zone: [" + markerData.x + "," + markerData.y + "] @ " + markerData.area);
                } else {
                    markerData.zone = markerZone;
                }
            }

            // set title After area + zone
            this.prepareMarkerDataTitle(markerData);
        }

        createLeafletMarker(markerData, style) {
            switch (style) {

                case MarkerStyleEnum.Point:
                case MarkerStyleEnum.Label: {
                    let idPrefix = "";

                    if(markerData.isGenerated !== true) {
                        idPrefix = '#' + (markerData.id + 1) + ' ';
                    }

                    let title = undefined;
                    switch (markerData.type) {
                        case MarkerTypeEnum.ZoningIsland:
                        case MarkerTypeEnum.ZoningIslandFlux:
                        case MarkerTypeEnum.ZoningIslandPVP:
                        case MarkerTypeEnum.ZoningDungeon:
                        {
                            break;
                        }

                        default:
                        {
                            title = idPrefix + _L(markerData.title);
                            break;
                        }
                    }

                    let result = L.marker([markerData.x, markerData.y], {
                        icon: LAM.getMarkerIcon(markerData.type),
                        draggable: Constants.EditMode && markerData.isGenerated !== true,
                        title: title
                    });

                    return result;
                }

                case MarkerStyleEnum.Rectangle: {
                    // Upgrade old bounds data
                    if(markerData.bounds !== undefined){
                        let center = GetBoundsCenter(markerData.bounds);
                        markerData.x = center[0];
                        markerData.y = center[1];
                        markerData.size = GetBoundsSize(markerData.bounds);
                        delete markerData.bounds;
                    }

                    let result = L.rectangle([[0,0],[10, 10]], {
                        color: MarkerDefaultColor(markerData.type)
                    });

                    RepositionRectangleMarker(result, markerData);

                    if(Constants.EditMode && markerData.isGenerated !== true) {
                        result.on('mousedown', function (e){
                            LAM.editor.beginDragElement(e);
                        });
                    }

                    return result;
                }

                case MarkerStyleEnum.Circle: {
                    if(markerData.radius === undefined) {
                        console.error("Circle marker is missing radius information");
                        return undefined;
                    }

                    let result = L.circle([markerData.x, markerData.y], {
                        radius: markerData.radius,
                        color: MarkerDefaultColor(markerData.type)
                    });

                    if(Constants.EditMode && markerData.isGenerated !== true) {
                        result.on('mousedown', function (e){
                            LAM.editor.beginDragElement(e);
                        });
                    }

                    return result;
                }

                default: {
                    console.error("Marker Style not supported: " + style);
                    return undefined;
                }
            }
        }

        setMarkerEvents(marker, markerData) {
            if(Constants.EditMode) {
                marker.on('dragend', function (e) {
                    LAM.editor.markerDragged(e.target);
                });

                marker.on('click', function(e) {
                    LAM.editor.markerClicked(e.target);
                });
            }

            if (markerData.teleportTo !== undefined) {
                marker.teleportData = markerData.teleportTo;
                marker.teleportArea = markerData.teleportArea;
                marker.teleportZoom = markerData.teleportZoom;
                marker.on('click', function(e){
                    if(Constants.EditMode) {
                        console.warn("TeleportMarker disabled in EditMode");
                        return;
                    }

                    LAM.gotoMapArea(this.teleportData, this.teleportArea, this.teleportZoom);
                });
            }
        }

        setMarkerPopup(marker, markerData) {
            if (markerData.popupText === undefined
                && markerData.hintText === undefined
                && markerData.hintImage === undefined) {
                return;
            }

            let popupContent = '<div>';

            let pinId = 'markerPin_' + markerData.area + '_' + markerData.id;
            popupContent = popupContent + '<a href="#" class="markerPinLink" id="' + pinId + '"><img src="images/icons/map-pin.svg"/></a>';

            var popupText = markerData.popupText;
            if(popupText === undefined && markerData.title !== undefined){
                popupText = markerData.title;
            }

            if(popupText !== undefined){
                popupContent = popupContent + '<h4>' + _L(popupText) + '</h4>';
            }

            if(markerData.hintImage !== undefined){
                popupContent = popupContent + '<img src="images/marker_hints/' + markerData.hintImage + '"/>';
            }

            if(markerData.hintText !== undefined){
                popupContent = popupContent + '<p>' + _L(markerData.hintText) + '</p>';
            }

            popupContent = popupContent + '</div>';

            marker.bindPopup(popupContent, {
                minWidth: 300
            });
        }

        getMarkerPinLink(id) {
            let markerData = this.markerIdLookup[id];
            return LAM.getMapLink(markerData.x, markerData.y, undefined, markerData.area) + '&mid=' + id;
        }

        showCopyMarkerPin(id) {
            LAM.showCopyLinkDialog(this.getMarkerPinLink(id), "Direct link for " + this.area + " Marker #" + id);
        }

        processMarkerSpecialTooltip(marker, markerData) {
            switch (markerData.type) {
                case MarkerTypeEnum.ZoningIslandFlux:
                case MarkerTypeEnum.ZoningIsland:
                case MarkerTypeEnum.ZoningDungeon:
                case MarkerTypeEnum.ZoningIslandPVP: {
                    if(markerData.isGenerated === true || markerData.area !== "World" || markerData.teleportTo === undefined) {
                        return;
                    }

                    let area = LAM.areas['Islands'];
                    let zone = area.getZoneForPoint(markerData.teleportTo[0], markerData.teleportTo[1]);
                    if(zone === undefined){
                        return;
                    }

                    let zoneData = area.maps[zone];
                    if(zoneData === undefined || zoneData.meta === undefined) {
                        return;
                    }
                    let element = $('<div></div>');

                    let title = $('<h5 class="island-tooltip-title ' + Constants.LocalizedTextClass + '">' + _L(zone) + '</h5>');
                    element.append(title);

                    let metaList = $('<table></table>');
                    element.append(metaList);

                    for(let meta in zoneData.meta){
                        let title = undefined;
                        let value = zoneData.meta[meta];

                        switch (meta) {
                            case 'ilvl': {
                                title = 'Item Level';
                                break;
                            }

                            case 'heart': {
                                title = 'Island Heart';
                                break;
                            }

                            case 'entry': {
                                title = 'Entry';

                                if(value.indexOf('/') > 0) {
                                    value = '##' + value;
                                }

                                break;
                            }

                            default:{
                                continue;
                            }
                        }

                        metaList.append('<tr class="w-100 island-tooltip-meta">' +
                            '<td class="island-tooltip-metatitle align-top">' + _L(title) + ':</td>' +
                            '<td class="float-right island-tooltip-metavalue">' + _L(zoneData.meta[meta]) + '</td>' +
                            '</tr>')
                    }

                    // TODO: build detailed island tooltip
                    marker.bindTooltip(element.html(), {
                        className: 'island-detail-tooltip'
                    });

                    LAM.islandRegister.registerIsland(zone, markerData);

                    break;
                }
            }
        }

        processMarkerSpecialContent(marker, markerData) {
            switch (markerData.type) {

                case MarkerTypeEnum.TreasureMap: {
                    LAM.treasureMapList.registerTreasureMap(markerData);
                    return;
                }

                case MarkerTypeEnum.Zoning:
                case MarkerTypeEnum.ZoningIslandPVP:
                case MarkerTypeEnum.ZoningIsland:
                case MarkerTypeEnum.ZoningDungeon:
                case MarkerTypeEnum.ZoningIslandFlux:
                case MarkerTypeEnum.ZoningWorld: {
                    if(markerData.isGenerated || markerData.noReverseLink === true) {
                        return;
                    }

                    if(markerData.teleportTo === undefined) {
                        console.warn("Zoning Marker has no teleport data: " + markerData.area + " #" + markerData.id);
                        return;
                    }

                    if (markerData.zone === undefined) {
                        return;
                    }

                    // Create the reverse marker data that will point us to this zoning marker
                    let zoneMarkerClone = this.cloneMarkerData(markerData);
                    let zoneType = LAM.getZoneType(markerData.area, markerData.zone);

                    switch (zoneType) {
                        case MapTypeEnum.Dungeon: {
                            zoneMarkerClone.title = '##' + _L(markerData.zone) + _L(" Dungeon");
                            break;
                        }

                        default: {
                            zoneMarkerClone.title = '##' + _L("To ") + _L(markerData.zone);
                            break;
                        }
                    }

                    delete(zoneMarkerClone['id']);
                    zoneMarkerClone.x = markerData.teleportTo[0];
                    zoneMarkerClone.y = markerData.teleportTo[1];
                    zoneMarkerClone.teleportTo = [markerData.x, markerData.y];
                    zoneMarkerClone.isGenerated = true;

                    if(zoneMarkerClone.teleportZoom !== undefined){
                        delete zoneMarkerClone['teleportZoom'];
                    }

                    if(markerData.teleportArea === undefined) {
                        this.createMarker(zoneMarkerClone);
                    } else {
                        let targetMarkerLayer = LAM.getAreaMarkerLayer(markerData.teleportArea);
                        if(targetMarkerLayer === undefined) {
                            console.warn("Zoning Marker has invalid target area: "  + markerData.area + " #" + markerData.id + ' == ' + markerData.teleportArea);
                            return;
                        }

                        zoneMarkerClone.teleportArea = markerData.area;
                        zoneMarkerClone.title = zoneMarkerClone.title + ' (' + markerData.area + ')';
                        targetMarkerLayer.createMarker(zoneMarkerClone);
                    }

                    return;
                }

            }
        }

        enableMarkerLayer(type) {
            if(this.markerTypeLayerState[type] === false) {
                delete this.markerTypeLayerState[type];
            }
        }

        disableMarkerLayer(type) {
            this.markerTypeLayerState[type] = false;
        }

        createMarker(markerData) {

            this.prepareMarkerData(markerData);

            if(markerData.isGenerated !== true) {
                this.markerIdLookup[markerData.id] = markerData;
            }

            let style = markerData.style;
            if (style === undefined){
                style = MarkerStyleEnum.Point;
            }

            let marker = this.createLeafletMarker(markerData, style);
            if(marker === undefined){
                return;
            }

            if(markerData.style === MarkerStyleEnum.Label) {
                RefreshMarkerLabel(marker, markerData);
            }

            markerData.activeMarker = marker;
            marker.area = markerData.area;
            marker.markerDataId = markerData.id;

            this.setMarkerEvents(marker, markerData);
            this.setMarkerPopup(marker, markerData);

            this.markers.push(markerData);
            this.markerLayer.addLayer(marker);

            switch (markerData.type) {
                case MarkerTypeEnum.Internal: {
                    break;
                }

                default:
                {
                    let typeLayer = this.markerTypeLayers[markerData.type];
                    if (typeLayer === undefined){
                        typeLayer = L.layerGroup();
                        typeLayer.markerType = markerData.type;
                        typeLayer.markerLayer = this;

                        typeLayer.on('add', function(e) {
                            e.target.markerLayer.enableMarkerLayer(e.target.markerType);
                        });

                        typeLayer.on('remove', function(e) {
                            e.target.markerLayer.disableMarkerLayer(e.target.markerType);
                        });

                        let layerTitle = '<img class="layerSelectIcon" src="images/icons/' + typeLayer.markerType + '"/>' + MarkerTypeDefaultTitle(typeLayer.markerType);
                        this.layerControl.addOverlay(typeLayer, layerTitle);
                        this.markerTypeLayers[typeLayer.markerType] = typeLayer;
                    }

                    typeLayer.addLayer(marker);
                    break;
                }
            }

            if(Constants.EditMode === true && markerData.isGenerated === true) {
                this.generatedMarkerLayer.addLayer(marker);
            }

            this.processMarkerSpecialTooltip(marker, markerData);
            this.processMarkerSpecialContent(marker, markerData);

            LAM.statistics.rebuildStats();
            return markerData.id;
        }

        getMarkerData(id, noErrorIfFail){
            let result = this.markerIdLookup[id];
            if(result === undefined && noErrorIfFail !== true){
                return undefined;
            }

            return result;
        }

        compareMarker(a, b){
            if(a.id > b.id) {
                return 1;
            }

            if(a.id < b.id) {
                return -1;
            }

            return 0;
        }

        exportAllMarkerData() {
            this.markers.sort(this.compareMarker);

            let result = [];
            for(let i in this.markers) {
                let markerData = this.markers[i];
                if(markerData.isGenerated === true) {
                    continue;
                }

                let markerCopy = this.cloneMarkerData(markerData);
                result.push(markerCopy);
            }

            return result;
        }

        cloneMarkerData(markerData) {
            let markerCopy = $.extend(true, {}, markerData);
            for(let key in markerCopy) {
                switch (key) {
                    case 'id':
                    case 'x':
                    case 'y':
                    case 'type':
                    case 'teleportTo':
                    case 'teleportArea':
                    case 'teleportZoom':
                    case 'color':
                    case 'style':
                    case 'size':
                    case 'radius':
                    case 'rarity':
                    case 'tmLand':
                    case 'tmArea':
                    case 'noReverseLink': {
                        break;
                    }

                    case 'hintText':
                    case 'hintImage':
                    case 'popupText':{
                        if(markerCopy[key] === "") {
                            delete markerCopy[key];
                        }

                        break;
                    }

                    case 'title': {
                        if(markerCopy[key] === "" || MarkerTypeDefaultTitle(markerData.type) === markerData[key]) {
                            delete markerCopy[key];
                        }

                        break;
                    }

                    default:
                    {
                        delete markerCopy[key];
                        break;
                    }
                }
            }

            return markerCopy;
        }
    }

    $(document).ready(function() {
        $('body').on('click', 'a.markerPinLink', function() {
            let idSegments = this.id.split('_');
            LAM.activeMarkerLayer.showCopyMarkerPin(idSegments[2]);
        });
    });

    LAM.createMarkerLayer = function(data){
        return new LostArkMarkerLayer(data);
    }

}());