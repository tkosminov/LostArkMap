(function() {

    let area = LAM.createArea("World", {
        kr: "항해",
        path: "maps/areas/World",
        zoomLevel: 5
    });

    area.registerMap("Main", {
        kr: "",
        type: MapTypeEnum.World,
        markers: [
            { x: -360.5, y: 323.76, popupText: "Mane Waves Harbor (Lutheran East)", type: MarkerTypeEnum.Zoning,
                teleportTo: [-283.81, 437.72],
                teleportArea: "Lutheran East"},

            { x: -221.62, y: 336.58, type: MarkerTypeEnum.TreasureMap,
                hintImage: "world/TreasureMap1.jpg"},

            { x: -188.24, y: 455.74, type: MarkerTypeEnum.TreasureMap,
                hintImage: "world/TreasureMap2.jpg"},

            { x: -409.87, y: 394.89, type: MarkerTypeEnum.TreasureMap,
                hintImage: "world/TreasureMap3.jpg"},

            { x: -230.25, y: 423.32, type: MarkerTypeEnum.TreasureMap,
                hintImage: "world/TreasureMap4.jpg"},
        ]
    });


}());