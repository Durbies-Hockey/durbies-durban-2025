const FIXTURES_DATA = {
    boys: [
        {
            day: "FRIDAY",
            time: "08h30",
            matches: [
                { field: "BISON A", team1: "Durbanville A", team2: "Outeniqua A" },
                { field: "BISON B", team1: "Durbanville B", team2: "Outeniqua B" }
            ]
        },
        {
            day: "FRIDAY",
            time: "10h00",
            matches: [
                { field: "BISON A", team1: "Durbanville B", team2: "Panorama B" }
            ]
        },
        {
            day: "FRIDAY",
            time: "10h30",
            matches: [
                { field: "FIELD F", team1: "Durbanville A", team2: "Bastion" }
            ]
        },
        {
            day: "FRIDAY",
            time: "12h00",
            matches: [
                { field: "FIELD E", team1: "Durbanville A", team2: "Rhenish" },
                { field: "FIELD F", team1: "Durbanville B", team2: "Bredasdorp" }
            ]
        },
        {
            day: "FRIDAY",
            time: "13h30",
            matches: [
                { field: "FIELD A", team1: "Woodridge Yellow", team2: "Durbanville A" },
                { field: "FIELD B", team1: "Woodridge White", team2: "Durbanville B" }
            ]
        },
        {
            day: "FRIDAY",
            time: "14h30",
            matches: [
                { field: "FIELD D", team1: "Durbanville A", team2: "Sun Valley" },
                { field: "FIELD E", team1: "Durbanville B", team2: "Sunridge" }
            ]
        },
        {
            day: "SATURDAY",
            time: "08h00",
            matches: [
                { field: "FIELD B", team1: "Durbanville B", team2: "Edgemead" },
                { field: "FIELD F", team1: "Durbanville A", team2: "Eversdal" }
            ]
        },
        {
            day: "SATURDAY",
            time: "09h00",
            matches: [
                { field: "BISON A", team1: "Durbanville B", team2: "Grove" }
            ]
        },
        {
            day: "SATURDAY",
            time: "09h30",
            matches: [
                { field: "FIELD B", team1: "Durbanville A", team2: "De Hoop" }
            ]
        },
        {
            day: "SATURDAY",
            time: "10h30",
            matches: [
                { field: "FIELD A", team1: "Durbanville B", team2: "Reddam" }
            ]
        },
        {
            day: "SATURDAY",
            time: "11h30",
            matches: [
                { field: "FIELD C", team1: "Durbanville A", team2: "Grove" },
                { field: "FIELD D", team1: "Durbanville B", team2: "Gene Louw B" }
            ]
        },
        {
            day: "SATURDAY",
            time: "12h30",
            matches: [
                { field: "FIELD B", team1: "Durbanville A", team2: "Bredasdorps" },
                { field: "FIELD H", team1: "Rhenish", team2: "Durbanville B" }
            ]
        },
        {
            day: "SUNDAY",
            time: "08h30",
            matches: [
                { field: "BISON B", team1: "Durbanville A", team2: "Sunridge" }
            ]
        },
        {
            day: "SUNDAY",
            time: "09h30",
            matches: [
                { field: "BISON B", team1: "Woodridge Yellow", team2: "Durbanville B" }
            ]
        },
        {
            day: "SUNDAY",
            time: "10h00",
            matches: [
                { field: "FIELD A", team1: "Durbanville A", team2: "Edgemead" }
            ]
        },
        {
            day: "SUNDAY",
            time: "10h30",
            matches: [
                { field: "FIELD C", team1: "Outeniqua A", team2: "Durbanville B" }
            ]
        }
    ],
    girls: [
        {
            day: "FRIDAY",
            time: "08h30",
            matches: [
                { field: "FIELD B", team1: "Durbanville B", team2: "Outeniqua B" }
            ]
        },
        {
            day: "FRIDAY",
            time: "09h00",
            matches: [
                { field: "FIELD A", team1: "Durbanville A", team2: "Outeniqua A" }
            ]
        },
        {
            day: "FRIDAY",
            time: "10h00",
            matches: [
                { field: "FIELD C", team1: "Durbanville B", team2: "Micklefield" },
                { field: "FIELD D", team1: "Durbanville A", team2: "Greenfield" }
            ]
        },
        {
            day: "FRIDAY",
            time: "11h30",
            matches: [
                { field: "FIELD B", team1: "Rhenish", team2: "Durbanville A" }
            ]
        },
        {
            day: "FRIDAY",
            time: "12h30",
            matches: [
                { field: "FIELD D", team1: "Durbanville A", team2: "Bastion" },
                { field: "BISON B", team1: "Durbanville B", team2: "Oakhurst" }
            ]
        },
        {
            day: "FRIDAY",
            time: "13h30",
            matches: [
                { field: "BISON A", team1: "Durbanville B", team2: "Panorama B" },
                { field: "BISON B", team1: "Durbanville A", team2: "Sun Valley" }
            ]
        },
        {
            day: "FRIDAY",
            time: "14h30",
            matches: [
                { field: "FIELD F", team1: "Durbanville B", team2: "Sunridge" }
            ]
        },
        {
            day: "SATURDAY",
            time: "08h30",
            matches: [
                { field: "FIELD A", team1: "Durbanville A", team2: "Woodridge Yellow" },
                { field: "FIELD B", team1: "Durbanville B", team2: "Woodridge White" }
            ]
        },
        {
            day: "SATURDAY",
            time: "09h30",
            matches: [
                { field: "FIELD C", team1: "Durbanville B", team2: "Reddam" },
                { field: "FIELD E", team1: "Durbanville A", team2: "Oakhurst" }
            ]
        },
        {
            day: "SATURDAY",
            time: "11h00",
            matches: [
                { field: "BISON A", team1: "Durbanville B", team2: "Rhenish" }
            ]
        },
        {
            day: "SATURDAY",
            time: "11h30",
            matches: [
                { field: "BISON B", team1: "Durbanville A", team2: "Bredasdorp" }
            ]
        },
        {
            day: "SATURDAY",
            time: "12h30",
            matches: [
                { field: "BISON A", team1: "Durbanville B", team2: "Groote Schuur" }
            ]
        },
        {
            day: "SATURDAY",
            time: "13h00",
            matches: [
                { field: "FIELD D", team1: "Durbanville A", team2: "De Hoop" }
            ]
        },
        {
            day: "SATURDAY",
            time: "14h00",
            matches: [
                { field: "FIELD B", team1: "Durbanville A", team2: "Sunridge" }
            ]
        },
        {
            day: "SATURDAY",
            time: "14h30",
            matches: [
                { field: "FIELD D", team1: "Bredasdorp", team2: "Durbanville B" }
            ]
        },
        {
            day: "SUNDAY",
            time: "09h00",
            matches: [
                { field: "FIELD C", team1: "Durbanville B", team2: "Eversdal" },
                { field: "FIELD D", team1: "Durbanville A", team2: "Grove" }
            ]
        },
        {
            day: "SUNDAY",
            time: "10h00",
            matches: [
                { field: "FIELD F", team1: "Durbanville A", team2: "Gene Louw B" }
            ]
        },
        {
            day: "SUNDAY",
            time: "10h30",
            matches: [
                { field: "BISON B", team1: "Durbanville B", team2: "Edgemead" }
            ]
        }
    ]
}; 
