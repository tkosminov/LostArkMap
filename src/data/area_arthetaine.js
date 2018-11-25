(function(){

    /*메마른 통로
슈테른[대도시]
갈라진 땅
네벨호른
바람결 구릉지
토트리치
전투개미 둥지[던전]
리제 폭포
크라테르의 심장[던전]
아이히만의 연구기지[던전]
붉은 모래 사막
에어가이츠[던*/

    let area = LAM.createArea("Arthetaine", {
        kr: "아르데타인",
        path: "maps/areas/Arthetaine",
        zoomLevel: 4
    });

    area.registerMap("Cracked Land", {
        kr: "갈라진 땅",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Nebelhorn Lab", {
        kr: "네벨호른 연구소",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Totrerich", {
        kr: "토트리치",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Riza Waterfall", {
        kr: "리제 폭포",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Wind Hill", {
        kr: "바람결 구릉지",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Red Sand Desert", {
        kr: "붉은 모래 사막",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Barren Passage", {
        kr: "메마른 통로",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Stern", {
        kr: "슈테른",
        type: MapTypeEnum.City
    });

    area.registerMap("Heart of Klaer", {
        kr: "크라테르의 심장",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

    area.registerMap("Aishman's Research Base", {
        kr: "아이히만의 연구기지",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Nest Of Battle Ants", {
        kr: "전투 개미 둥지",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Air Gate", {
        kr: "에어가이츠",
        type: MapTypeEnum.Dungeon
    });

})();