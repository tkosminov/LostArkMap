(function () {

    class LostArkSearch {

        constructor() {
            this.activeSearchEntries = {};
            this.activeSearchText = undefined;
            this.nextSearchResultId = 0;
            this.fuse = undefined;
            this.entryCountTotal = 0;
            this.entryCountByType = {};
            this.fuseOptions = {
                shouldSort: true,
                threshold: 0.1,
                location: 0,
                distance: 10000,
                maxPatternLength: 64,
                minMatchCharLength: 1,
                tokenize: true,
                matchAllTokens: true,
                includeMatches: true,
                keys: [
                    'text',
                    'title',
                    'hintText',
                    'popupText',
                    'loc',

                    // Note: Disabled heart cause we make markers with special text on the island, removes double search result
                    //'meta.heart',

                    'meta.entry',
                    'meta.card-line',
                    'meta.card-obtain',
                    'meta.card-skill-names',
                    'meta.card-skill-text',
                    'meta.crew-obtain',
                    'meta.crew-skill-names',
                    'meta.crew-skill-text',
                ]
            }
        }

        initialize() {
            this.initializeFuse();
            this.initializeUI();
        }

        initializeFuse(){
            let entries = [];

            // TODO: gather all entries that we want to be able to search

            // Area
            this.entryCountByType[SearchResultTypeEnum.Area] = 0;
            for (let areaName in LAM.areas) {
                let area = LAM.areas[areaName];
                for(let zoneName in area.maps) {
                    let zoneData = area.maps[zoneName];
                    switch (zoneData.type) {
                        case MapTypeEnum.Internal: {
                            continue;
                        }
                    }

                    let entry = {
                        area: areaName,
                        zone: zoneName,
                        type: SearchResultTypeEnum.Area,
                        loc: [areaName, zoneName],

                        // Fields to search in
                        text: areaName + ' - ' + zoneName,
                        meta: {}
                    };

                    if(zoneData.meta !== undefined) {
                        for(let metaKey in zoneData.meta) {
                            let metaValue = zoneData.meta[metaKey];
                            if(typeof metaValue === 'string') {
                                entry.meta[metaKey] = metaValue;
                                entry.loc.push(metaValue);
                            }
                        }
                    }

                    this.entryCountByType[SearchResultTypeEnum.Area]++;
                    entries.push(entry);
                }
            }

            // Markers
            this.entryCountByType[SearchResultTypeEnum.Marker] = 0;
            for (let areaName in LAM.areas) {
                let area = LAM.areas[areaName];
                for(let i in area.markerLayer.markers) {
                    let markerData = area.markerLayer.markers[i];

                    switch (markerData.type) {
                        case MarkerTypeEnum.ZoningWorld:
                        case MarkerTypeEnum.Zoning:
                        case MarkerTypeEnum.ZoningIsland:
                        case MarkerTypeEnum.ZoningIslandFlux:
                        case MarkerTypeEnum.ZoningIslandPVP:
                        case MarkerTypeEnum.ZoningDungeon:
                        case MarkerTypeEnum.Internal:
                        {
                            continue;
                        }
                    }

                    if(markerData.title === undefined
                        && markerData.popupText === undefined
                        && markerData.hintText === undefined){
                        continue;
                    }

                    entries.push({
                        id: markerData.id,
                        area: areaName,
                        type: SearchResultTypeEnum.Marker,
                        loc: [areaName, markerData.title, markerData.popupText, markerData.hintText],

                        // Fields to search in
                        title: markerData.title,
                        popupText: markerData.popupText,
                        hintText: markerData.hintText,
                    });

                    this.entryCountByType[SearchResultTypeEnum.Marker]++;
                }
            }

            // Cards
            this.entryCountByType[SearchResultTypeEnum.Card] = 0;
            for(let id in LAM.cards.entries) {
                let cardData = LAM.cards.entries[id];
                let entry = {
                    id: cardData.id,
                    type: SearchResultTypeEnum.Card,
                    loc: [cardData.name, LAM.cards.getLineName(cardData.line)],

                    title: cardData.name,
                    meta: {
                        'card-line': LAM.cards.getLineName(cardData.line)
                    }
                };

                if(cardData.obtain !== undefined){
                    entry.meta['card-obtain'] = [];
                    for (let i in cardData.obtain) {
                        entry.loc.push(cardData.obtain[i]);
                        entry.meta['card-obtain'].push(cardData.obtain[i])
                    }
                }

                if(cardData.skills !== undefined){
                    entry.meta['card-skill-names'] = [];
                    entry.meta['card-skill-text'] = [];

                    for(let i in cardData.skills) {
                        let skillId = cardData.skills[i][0];
                        let skillVariant = cardData.skills[i][1];
                        let skillData = LAM.cardSkills[skillId];

                        entry.loc.push(skillData.name);
                        entry.loc.push(skillData.var[skillVariant]);

                        entry.meta['card-skill-names'].push(skillData.name);
                        entry.meta['card-skill-text'].push(skillData.var[skillVariant]);
                    }
                }

                entries.push(entry);

                this.entryCountByType[SearchResultTypeEnum.Card]++;
            }

            // Crew
            this.entryCountByType[SearchResultTypeEnum.Crew] = 0;
            for(let id in LAM.crew.entries) {
                let crewData = LAM.crew.entries[id];
                let entry = {
                    id: crewData.id,
                    type: SearchResultTypeEnum.Crew,
                    loc: [crewData.name],

                    title: crewData.name,
                    meta: {
                        'crew-obtain': crewData.obtain === undefined ? undefined : crewData.obtain.join('\n')
                    }
                };

                if(crewData.obtain !== undefined){
                    entry.meta['crew-obtain'] = [];
                    for (let i in crewData.obtain) {
                        entry.loc.push(crewData.obtain[i]);
                        entry.meta['crew-obtain'].push(crewData.obtain[i]);
                    }
                }

                if(crewData.skills !== undefined){
                    entry.meta['crew-skill-names'] = [];
                    entry.meta['crew-skill-text'] = [];

                    for(let i in crewData.skills) {
                        let skillId = crewData.skills[i];
                        let skillData = LAM.crewSkills[skillId];

                        entry.loc.push(skillData.name);
                        entry.loc.push(skillData.text);

                        entry.meta['crew-skill-names'].push(skillData.name);
                        entry.meta['crew-skill-text'].push(skillData.text);
                    }
                }

                entries.push(entry);

                this.entryCountByType[SearchResultTypeEnum.Card]++;
            }

            // FAQ
            this.entryCountByType[SearchResultTypeEnum.FAQ] = 0;
            for(let id in LAM.faq.entries) {
                let faqData = LAM.faq.entries[id];
                entries.push({
                    id: faqData.id,
                    type: SearchResultTypeEnum.FAQ,
                    loc: [faqData.n, faqData.a],

                    // Fields to search in
                    text: faqData.n,
                    textAlt: faqData.a
                });

                this.entryCountByType[SearchResultTypeEnum.FAQ]++;
            }

            // Guides
            this.entryCountByType[SearchResultTypeEnum.Guide] = 0;
            for(let id in LAM.guide.entries) {
                let guideData = LAM.guide.entries[id];
                entries.push({
                    id: guideData.id,
                    type: SearchResultTypeEnum.Guide,
                    loc: [guideData.title],

                    // Fields to search in
                    title: guideData.title
                });

                this.entryCountByType[SearchResultTypeEnum.Guide]++;
            }

            // Process the localization
            for(let i in entries) {
                let entry = entries[i];
                if(entry.loc === undefined) {
                    continue;
                }

                let newLoc = [];
                for(let ic in entry.loc) {
                    let str = entry.loc[ic];
                    if(str === undefined || str === ""){
                        continue;
                    }

                    newLoc.push(_L(str));
                }

                entry.loc = newLoc;
            }

            this.entryCountTotal = entries.length;

            $('#searchEntryCountInfo').text(this.entryCountTotal + ' Possible Results');

            this.fuse = new Fuse(entries, this.fuseOptions);
        }

        initializeUI() {
            $('#searchField').change(function(e){
                LAM.activateContent(ContentTypeEnum.Search);
                LAM.search.execSearch($(this).val());
            });

            $('#searchCopyButton').click(function(e){
                if(LAM.search.activeSearchText !== undefined) {
                    let link = '?c=' + ContentTypeEnum.Search + '&t=' + LAM.search.activeSearchText.replace(/\s/g, '_');
                    LAM.showCopyLinkDialog(link, "Copy Search");
                }
            });

            this.clearResults();
        }

        execSearch(text) {
            this.clearResults();

            if(text === undefined || text === null || text === "") {
                return;
            }

            this.activeSearchText = text;

            let fuseResults = this.fuse.search(text);
            if(fuseResults.length === 0) {
                return;
            }

            let resultParent = $('#searchResults');

            if(fuseResults.length > Constants.MaxSearchResults) {
                $('#searchResultLimitWarning').show();
            }

            this.updateResultCount(fuseResults.length);

            for(let i in fuseResults) {
                if(i >= Constants.MaxSearchResults) {
                    break;
                }

                let element = this.buildResultEntryElement(fuseResults[i]);
                if(element !== undefined){
                    resultParent.append(element);
                }
            }

            $('#searchExamples').hide();
        }

        updateResultCount(count) {
            let element = $('#searchResultCount');
            if(count === undefined || count <= 0){
                element.text('No Results');
            } else {
                element.text(count + ' Results');
            }
        }

        clearResults() {
            this.activeSearchText = undefined;
            this.activeSearchEntries = {};
            this.nextSearchResultId = 0;

            this.updateResultCount(0);

            $('#searchResults').empty();
            $('#searchExamples').show();
            $('#searchResultLimitWarning').hide();
        }

        gotoSearchResult(id) {
            let entryData = this.activeSearchEntries[id];
            if(entryData === undefined) {
                return;
            }

            let data = this.getSearchResultSourceData(entryData.item);
            if(data === undefined) {
                return;
            }

            switch (entryData.item.type) {
                case SearchResultTypeEnum.Area: {
                    if(data.bounds === undefined) {
                        return;
                    }

                    LAM.gotoMapArea(GetBoundsCenter(data.bounds), entryData.item.area);
                    return;
                }

                case SearchResultTypeEnum.Marker:
                {
                    LAM.gotoMapArea([data.x, data.y], data.area);
                    return;
                }
            }
        }

        getSearchResultSourceData(entry) {
            switch (entry.type) {
                case SearchResultTypeEnum.Area: {
                    return LAM.areas[entry.area].maps[entry.zone];
                }

                case SearchResultTypeEnum.Card: {
                    return LAM.cards.entries[entry.id];
                }

                case SearchResultTypeEnum.Crew: {
                    return LAM.crew.entries[entry.id];
                }

                case SearchResultTypeEnum.FAQ: {
                    return LAM.faq.entries[entry.id];
                }

                case SearchResultTypeEnum.Guide: {
                    return LAM.guide.entries[entry.id];
                }

                case SearchResultTypeEnum.Marker: {
                    return LAM.areas[entry.area].markerLayer.markerIdLookup[entry.id];
                }
            }
        }

        getSearchResultLink(entry, resultId) {
            let data = this.getSearchResultSourceData(entry);
            if(data === undefined) {
                return undefined;
            }

            switch (entry.type) {
                case SearchResultTypeEnum.Guide:
                case SearchResultTypeEnum.FAQ: {
                    if(data.url !== undefined) {
                        return $('<a type="button" class="btn btn-primary searchResultLink" href="' + data.url + '" target="_blank">Open</a>');
                    }

                    return undefined;
                }

                case SearchResultTypeEnum.Marker:
                case SearchResultTypeEnum.Area:
                case SearchResultTypeEnum.Card: {
                    return $('<a type="button" class="btn btn-primary searchResultLink" id="showSearchResult_' + resultId + '" href="#">Show</a>');
                }
            }

            return undefined;
        }

        getSearchResultIcon(entry) {
            let data = this.getSearchResultSourceData(entry);
            if(data === undefined) {
                return undefined;
            }

            let image = undefined;
            switch (entry.type) {
                case SearchResultTypeEnum.Marker:
                {
                    image = 'images/icons/' + data.type;
                    break;
                }

                case SearchResultTypeEnum.Guide: {
                    image = 'images/guides/' + data.preview;
                    break;
                }

                case SearchResultTypeEnum.FAQ: {
                    image = data.img;
                    break;
                }

                case SearchResultTypeEnum.Card: {
                    image = 'images/cards/' + RarityImage(data.rarity) + '/' + data.img;
                    break;
                }

                case SearchResultTypeEnum.Crew: {
                    image = 'images/crew/' + data.img;
                    break;
                }
            }

            if(image !== undefined) {
                return $('<img src="' + image + '" class="search-icon">');
            }

            return undefined;
        }

        getSearchResultTitle(entry) {
            let data = this.getSearchResultSourceData(entry);
            if(data === undefined) {
                return undefined;
            }

            switch (entry.type) {
                case SearchResultTypeEnum.Area: {
                    return entry.zone;
                }

                case SearchResultTypeEnum.Marker: {
                    if(data.popupText !== undefined){
                        return data.popupText;
                    }

                    if(data.title !== undefined) {
                        return data.title;
                    }

                    return MarkerTypeDefaultTitle(data.type);
                }

                case SearchResultTypeEnum.Guide: {
                    return data.title;
                }

                case SearchResultTypeEnum.FAQ: {
                    return data.q;
                }

                case SearchResultTypeEnum.Card: {
                    return data.name;
                }

                case SearchResultTypeEnum.Crew: {
                    return data.name;
                }
            }

            return 'NOT_SET';
        }

        buildResultEntryElement(result) {
            result.resultId = this.nextSearchResultId++;

            let row = $('<tr data-status="' + result.item.type + '"></tr>');

            let linkColumn = $('<td></td>');
            row.append(linkColumn);

            let iconColumn = $('<td></td>');
            row.append(iconColumn);

            let contentColumn = $('<td class="w-100"></td>');
            row.append(contentColumn);

            let contentBody = $('<div class="search-content-body"></div>');
            let content = $('<div class="search-content"></div>');
            content.append(contentBody);
            contentColumn.append(content);

            // Link
            let link = this.getSearchResultLink(result.item, result.resultId);
            if(link !== undefined){
                linkColumn.append(link);
            }

            // Icon
            let icon = this.getSearchResultIcon(result.item);
            if(icon !== undefined) {
                iconColumn.append(icon);
            }

            let title = this.getSearchResultTitle(result.item);
            contentBody.append($('<h4 class="title">' + _L(title) + '<span class="float-right search-type ' + result.item.type + '">(' + GetKeyByValue(SearchResultTypeEnum, result.item.type) + ')</span></h4>'));

            // Content
            let matchList = $('<ul></ul>');
            content.append(matchList);
            for(let i in result.matches) {
                let matchData = result.matches[i];
                let value = matchData.value;
                let markedValue = "";
                let currentOffset = 0;
                for(let ix in matchData.indices) {
                    let indexData = matchData.indices[ix];
                    if(indexData[1] - indexData[0] <= 2) {
                        // Don't mark too small results
                        continue;
                    }

                    let segment = value.substring(indexData[0], indexData[1] + 1);
                    if(segment === undefined || segment === "") {
                        continue;
                    }

                    markedValue += value.substring(currentOffset, indexData[0]);
                    markedValue += '<span class="search-match-mark">' + segment + '</span>';
                    currentOffset = indexData[1] + 1;
                }
                if(currentOffset < value.length) {
                    markedValue += value.substring(currentOffset, value.length);
                }

                matchList.append($('<li class="match">' + markedValue + '</li>'));
            }

            this.activeSearchEntries[result.resultId] = result;

            return row;
        }
    }

    $(document).ready(function() {
        $('body').on('click', 'a.searchResultLink', function() {
            let idSegments = this.id.split('_');
            LAM.search.gotoSearchResult(idSegments[1]);
        });

        $('.btn-filter-search').on('click', function () {
            let target = $(this).data('target');
            let results = $('.table tr');

            if (target !== 'all') {
                results.css('display', 'none');
                results.filter('[data-status="' + target + '"]').fadeIn('slow');
            } else {
                results.css('display', 'none').fadeIn('slow');
            }
        });

        $('.searchExample').on('click', function () {
            let target = $(this).data('text');
            $('#searchField').val(target);
            LAM.search.execSearch(target);
        })
    });

    LAM.search = new LostArkSearch();

}());