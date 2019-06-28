const teams1 = {
    zurich: ['/athletes/29041600', '/athletes/23067415', '/athletes/6228065', '/athletes/15282580', '/athletes/26022333',
        '/athletes/5257885', '/athletes/20385538', '/athletes/23837170', '/athletes/29177863', '/athletes/23870845',
        '/athletes/12048356', '/athletes/43480837'],
    manila: ['/athletes/18519747', '/athletes/16500041', '/athletes/42704472', '/athletes/41904167', '/athletes/43010190',
        '/athletes/39378771', '/athletes/42168384', '/athletes/43058513', '/athletes/41572080', '/athletes/43451502', '/athletes/43451716'],
    edinburgh: ['/athletes/16031782', '/athletes/31565097', '/athletes/42912286', '/athletes/42949260', '/athletes/42945930'],
    lugano: ['/athletes/14570654', '/athletes/25044835', '/athletes/5690359', '/athletes/30041945', '/athletes/26765072'],
    madrid: ['/athletes/3491386']
};

const teams = {
    "zurich": [
        {"url": "/athletes/29041600", "name": "Jorge Rumoroso"}, //
        {"url": "/athletes/23067415", "name": "Anca-Elena Alexandrescu"},//
        {"url": "/athletes/6228065", "name": "Andrei C"},//
        {"url": "/athletes/15282580", "name": "Andres Sanchez"},//
        {"url": "/athletes/26022333", "name": "G L Lorenz"},//
        {"url": "/athletes/5257885", "name": "Nicola Terrenghi"},
        {"url": "/athletes/20385538", "name": "Stefano Pongelli"},
        {"url": "/athletes/23837170", "name": "Theodor Radu"},
        {"url": "/athletes/29177863", "name": "Ezani Schultheiss"},
        {"url": "/athletes/23870845", "name": "Marc Bodenmüller"},
        {"url": "/athletes/43480837", "name": "Nick Krommydas"},
        {"url": "/athletes/12048356", "name": "Paul Tuxford"}
    ],
    "manila": [
        {"url": "/athletes/18519747", "name": "Bryan Flores"},//
        {"url": "/athletes/16500041", "name": "Jerome Sevilla"},//
        {"url": "/athletes/42704472", "name": "PJ de Leon"},
        {"url": "/athletes/41904167", "name": "Kevin Francisco"},//
        {"url": "/athletes/43010190", "name": "Renz Estacio"},
        {"url": "/athletes/39378771", "name": "Rex Nohay"},
        {"url": "/athletes/42168384", "name": "Andre Gabo"},
        {"url": "/athletes/43058513", "name": "Kat Samboa"},
        {"url": "/athletes/41572080", "name": "Kristian Villabroza"},
        {"url": "/athletes/43451502", "name": "Ann Margaret Silva"},
        {"url": "/athletes/39378771", "name": "Rex Nohay"},
        {"url": "/athletes/43451716", "name": "Michael Christian Torres"}
    ],
    "edinburgh": [
        {"url": "/athletes/16031782", "name": "John Clark"},//
        {"url": "/athletes/31565097", "name": "Stuart Dodds"},
        {"url": "/athletes/42912286", "name": "Stuart Thomson"},
        {"url": "/athletes/42945930", "name": "Gavin Donoghue"},//
        {"url": "/athletes/42949260", "name": "Pirmin Zenklusen"}
    ],
    "lugano": [
        {"url": "/athletes/14570654", "name": "nathan quadrio"},
        {"url": "/athletes/25044835", "name": "Emanuele Della Valle"},
        {"url": "/athletes/5690359", "name": "Michele  Sasso"},
        {"url": "/athletes/5690359", "name": "Martina Dotta"},
        {"url": "/athletes/26765072", "name": "Daniele Proserpio"}
    ],
    "madrid": [
        {"url": "/athletes/3491386", "name": "Mauro MDC"}//
    ]
};

const athletesThatHaveRan = ["/athletes/16031782", "/athletes/16500041", "/athletes/14570654", "/athletes/41904167", "/athletes/43010190", "/athletes/29041600", "/athletes/42949260", "/athletes/25044835", "/athletes/43451716", "/athletes/43451502", "/athletes/23837170", "/athletes/42704472", "/athletes/39378771", "/athletes/42945930", "/athletes/29177863", "/athletes/42912286", "/athletes/42168384", "/athletes/41572080", "/athletes/43058513", "/athletes/6228065", "/athletes/18519747", "/athletes/5257885", "/athletes/31565097", "/athletes/15282580", "/athletes/12048356", "/athletes/30041945"];
const athletesThatHaveRanByTeam = {edinburgh: 5, manila: 11, lugano: 3, zurich: 8, madrid: 0};

const currentDate = new Date();
const formattedDate = currentDate.getDate() + '.' + currentDate.getMonth() + '.' + currentDate.getFullYear();

//getTeamsData();

function getTeamsData() {
    const athletes = {};
    const listsOfAthletes = document.querySelectorAll('.list-athletes li .text-headline a');
    listsOfAthletes.forEach((item) => {
            const href = item.getAttribute('href');
            athletes[href] = item.textContent;
        }
    );

    for (const team in teams) {
        const athletesInTeamLength = teams[team].length;
        for (let i = 0; i < athletesInTeamLength; i++) {
            teams[team][i] = {'url': teams[team][i], 'name': athletes[teams[team][i]]};
        }
    }
    console.log(JSON.stringify(teams));
}

const dimensions = ['distance', 'elevation', 'time', 'pace'];

const initial = {
    week_1: {
        manila: {
            distance: {
                total: 61080,
                avgByAthlete: 0
            },
            elevation: {
                total: 828,
                avgByAthlete: 0
            },
            time: {
                total: 26288,
                avgByAthlete: 0
            }
        },
        zurich: {
            distance: {
                total: 30950,
                avgByAthlete: 0
            },
            elevation: {
                total: 562,
                avgByAthlete: 0
            },
            time: {
                total: 10576,
                avgByAthlete: 0
            }
        },
        edinburgh: {
            distance: {
                total: 23200,
                avgByAthlete: 0
            },
            elevation: {
                total: 167,
                avgByAthlete: 0
            },
            time: {
                total: 10047,
                avgByAthlete: 0
            }
        },
        lugano: {
            distance: {
                total: 25480,
                avgByAthlete: 0
            },
            elevation: {
                total: 236,
                avgByAthlete: 0
            },
            time: {
                total: 7567,
                avgByAthlete: 0
            }
        },
        madrid: {
            distance: {
                total: 0,
                avgByAthlete: 0
            },
            elevation: {
                total: 0,
                avgByAthlete: 0
            },
            time: {
                total: 0,
                avgByAthlete: 0
            }
        }
    },
    week_II: {
        "manila": {
            "distance": {"total": 212580, "avgByAthlete": 23620},
            "elevation": {"total": 2419, "avgByAthlete": 268.77777777777777},
            "time": {"total": 96155.5, "avgByAthlete": 10683.944444444445},
            "pace": {"avgByAthlete": 0.45232618308401545, "total": 0.45232618308401545}
        },
        "zurich": {
            "distance": {"total": 107750, "avgByAthlete": 11972.222222222223},
            "elevation": {"total": 1730, "avgByAthlete": 192.22222222222223},
            "time": {"total": 36381.299999999996, "avgByAthlete": 4042.3666666666663},
            "pace": {"avgByAthlete": 0.33764547563805103, "total": 0.33764547563805103}
        },
        "edinburgh": {
            "distance": {"total": 127000, "avgByAthlete": 25400},
            "elevation": {"total": 1243, "avgByAthlete": 248.6},
            "time": {"total": 44050.5, "avgByAthlete": 8810.1},
            "pace": {"avgByAthlete": 0.34685433070866145, "total": 0.3468543307086614}
        },
        "lugano": {
            "distance": {"total": 48380, "avgByAthlete": 48380},
            "elevation": {"total": 346, "avgByAthlete": 346},
            "time": {"total": 14940.8, "avgByAthlete": 14940.8},
            "pace": {"avgByAthlete": 0.30882182720132284, "total": 0.30882182720132284}
        },
        "madrid": {
            "distance": {"total": 0, "avgByAthlete": 0},
            "elevation": {"total": 0, "avgByAthlete": 0},
            "time": {"total": 0, "avgByAthlete": 0},
            "pace": {"avgByAthlete": 0, "total": 0}
        }
    },
    week_III: {
        "manila": {
            "distance": {"total": 303180, "avgByAthlete": 27561.81818181818},
            "elevation": {"total": 4197, "avgByAthlete": 381.54545454545456},
            "time": {"total": 134763.2, "avgByAthlete": 12251.2},
            "pace": {"avgByAthlete": 0.4444989775051125, "total": 0.4444989775051125}
        },
        "zurich": {
            "distance": {"total": 217150, "avgByAthlete": 19740.909090909092},
            "elevation": {"total": 3898, "avgByAthlete": 354.3636363636364},
            "time": {"total": 76535.79999999999, "avgByAthlete": 6957.799999999999},
            "pace": {"avgByAthlete": 0.3524559060557218, "total": 0.3524559060557218}
        },
        "edinburgh": {
            "distance": {"total": 176500, "avgByAthlete": 35300},
            "elevation": {"total": 1662, "avgByAthlete": 332.4},
            "time": {"total": 59183.09999999999, "avgByAthlete": 11836.619999999999},
            "pace": {"avgByAthlete": 0.3353150141643059, "total": 0.3353150141643059}
        },
        "lugano": {
            "distance": {"total": 134380, "avgByAthlete": 33595},
            "elevation": {"total": 1374, "avgByAthlete": 343.5},
            "time": {"total": 44457.6, "avgByAthlete": 11114.4},
            "pace": {"avgByAthlete": 0.33083494567643995, "total": 0.33083494567643995}
        },
        "madrid": {
            "distance": {"total": 0, "avgByAthlete": 0},
            "elevation": {"total": 0, "avgByAthlete": 0},
            "time": {"total": 0, "avgByAthlete": 0},
            "pace": {"avgByAthlete": 0, "total": 0}
        }
    }
};

const initialValues = {
    "manila": {
        "distance": {"total": 502680, "avgByAthlete": 41890},
        "elevation": {"total": 6616, "avgByAthlete": 551.3333333333334},
        "time": {"total": 217934.80000000002, "avgByAthlete": 18161.233333333334},
        "pace": {"avgByAthlete": 0.43354579454125886, "total": 0.4335457945412589}
    },
    "zurich": {
        "distance": {"total": 273550, "avgByAthlete": 22795.833333333332},
        "elevation": {"total": 4430, "avgByAthlete": 369.1666666666667},
        "time": {"total": 95779.49999999999, "avgByAthlete": 7981.624999999999},
        "pace": {"avgByAthlete": 0.3501352586364467, "total": 0.3501352586364467}
    },
    "edinburgh": {
        "distance": {"total": 275500, "avgByAthlete": 55100},
        "elevation": {"total": 1958, "avgByAthlete": 391.6},
        "time": {"total": 92877.29999999999, "avgByAthlete": 18575.46},
        "pace": {"avgByAthlete": 0.33712268602540835, "total": 0.3371226860254083}
    },
    "lugano": {
        "distance": {"total": 208580, "avgByAthlete": 52145},
        "elevation": {"total": 2270, "avgByAthlete": 567.5},
        "time": {"total": 69080.6, "avgByAthlete": 17270.15},
        "pace": {"avgByAthlete": 0.3311947454214211, "total": 0.3311947454214211}
    },
    "madrid": {
        "distance": {"total": 0, "avgByAthlete": 0},
        "elevation": {"total": 0, "avgByAthlete": 0},
        "time": {"total": 0, "avgByAthlete": 0},
        "pace": {"avgByAthlete": 0, "total": 0}
    }
};

groupAndAnaliseData(teams);

function groupAndAnaliseData(teams) {
    const athletesRanking = document.querySelectorAll('.leaderboard table tbody tr');
    const leadersRankingTableByTeam = document.querySelector('.leaders table');
    if (!leadersRankingTableByTeam) {
        return;
    }
    const tableParent = leadersRankingTableByTeam.parentNode;
    const leadersRankingHeaderRow = leadersRankingTableByTeam.querySelector('thead tr');
    while (leadersRankingHeaderRow.children.length) {
        leadersRankingHeaderRow.children[0].remove()
    }
    leadersRankingHeaderRow.appendChild(createElement('th'));

    const leadersRankingtbody = leadersRankingTableByTeam.querySelector('tbody');
    while (leadersRankingtbody.children.length) {
        leadersRankingtbody.children[0].remove()
    }

    const leadersRankingTableByAthlete = leadersRankingTableByTeam.cloneNode(true);
    tableParent.appendChild(leadersRankingTableByAthlete);

    const leadersRankingTableByAthleteThaRan = leadersRankingTableByTeam.cloneNode(true);
    tableParent.appendChild(leadersRankingTableByAthleteThaRan);

    const tableDataByTeams = generateTableDataByTeams();
    tableParent.insertBefore(tableDataByTeams, leadersRankingTableByTeam);
    tableParent.insertBefore(createElement('h2', {'style': 'text-align: center'}, 'Teams'), tableDataByTeams);
    tableParent.insertBefore(createElement('h2', {'style': 'text-align: center'}, 'Classification by team (at ' + formattedDate + ')'), leadersRankingTableByTeam);
    tableParent.insertBefore(createElement('h2', {'style': 'text-align: center'}, 'Average by athlete (at ' + formattedDate + ')'), leadersRankingTableByAthlete);
    tableParent.insertBefore(createElement('h2', {'style': 'text-align: center'}, 'Average by athlete that have ran at least once (at ' + formattedDate + ')'), leadersRankingTableByAthleteThaRan);

    const resultsByAthlete = {};
    const ranking = getRanking();

    console.log(JSON.stringify(ranking));
    generateResults(ranking, leadersRankingTableByTeam, 'total');
    generateResults(ranking, leadersRankingTableByAthlete, 'avgByAthlete');
    generateResults(ranking, leadersRankingTableByAthleteThaRan, 'avgByAthleteThaRan');

    function generateTableDataByTeams() {
        const rows = [];
        let totalAthletes = 0;
        let totalAthletesThatRan = 0;
        for (const team in teams) {
            const teamName = createElement('td', {}, team);
            const athletesInTeamLength = teams[team].length;
            totalAthletes += athletesInTeamLength;
            teamName.style.fontWeight = 'bold';
            teamName.style.fontVariant = 'small-caps';
            teamName.style.textTransform = 'capitalize';


            const athletesCell = createElement('td', {'style': 'text-align: center'}, athletesInTeamLength);

            let list = '';
            for (let i = 0; i < athletesInTeamLength; i++) {
                const name = teams[team][i].name;
                list += name ? name + ', ' : '';
            }
            list = list.slice(0, -2);
            const athletesNameCell = createElement('td', {}, list);
            const runnersLength = athletesThatHaveRanByTeam[team];
            const athletesThatHaveRan = createElement('td', {'style': 'text-align: center'}, runnersLength + ' (' + (runnersLength*100/athletesInTeamLength).toFixed(2) + '%)');
            totalAthletesThatRan += runnersLength;

            rows.push(createElement('tr', {}, [teamName, athletesCell, athletesNameCell, athletesThatHaveRan]));
        }
        const totalsCell = createElement('td', {'style': 'font-weight: bold'}, 'Totals');
        const athletesTotalsCell = createElement('td', {'style': 'text-align: center'}, totalAthletes);
        const emtpyCell= createElement('td', {}, '');
        const athletesTotalsThatRanCell = createElement('td', {'style': 'text-align: center'}, totalAthletesThatRan);
        rows.push(createElement('tr', {}, [totalsCell, athletesTotalsCell, emtpyCell, athletesTotalsThatRanCell]));

        const th1 = createElement('th', {}, 'team');
        const th2 = createElement('th', {'colspan': '2'}, 'members (at ' + formattedDate + ')');
        const th3 = createElement('th', {'style': 'white-space: nowrap'}, 'have ran');
        const thead = createElement('thead', {}, [th1, th2, th3]);
        const tbody = createElement('tbody', {}, rows);
        return createElement('table', {'style': 'width: 60%; margin: auto'}, [thead, tbody]);
    }

    function generateResults(ranking, table, pattern = 'total') {
        const totals = {distance: 0, time: 0, elevation: 0, pace: 0};

        dimensions.forEach((dimension) => {
            table.querySelector('thead tr').appendChild(createElement('th', {}, dimension));

            const rankingByDimensionAndTeam = getRankingByDimension(ranking, dimension, pattern);
            const orderedRanking = [];
            for (const team in rankingByDimensionAndTeam) {
                const value = rankingByDimensionAndTeam[team];
                orderedRanking.push({team, value});
            }

            if (dimension != 'pace') {
                orderedRanking.sort(sortDesc);
            } else {
                orderedRanking.sort(sortAsc);
                if (orderedRanking[0].value === 0) {
                    orderedRanking.push(orderedRanking[0]);
                    orderedRanking.splice(0, 1);
                }
            }

            orderedRanking.forEach((item, index) => {
                let row = table.querySelectorAll('tbody tr')[index];

                if (!row) {
                    row = createElement('tr', {}, createAchievementCell('achievement kom-' + (index + 1) + (index ? '' : 'a')));
                    table.querySelector('tbody').appendChild(row);
                }
                const team = item.team;
                let value = item.value;

                totals[dimension] += value;

                row.appendChild(createCellResult(team, adaptValueToShow(dimension, value)));
            });
        });

        addTotalsRow(table, totals);

        function addTotalsRow(table, totals) {
            const totalsHeaderCell = createElement('td', {'style': 'font-weight: bold'}, 'Totals');
            const totalsRow = createElement('tr', {'style': 'text-align: center'}, totalsHeaderCell);

            totals.pace = totals.time ? (totals.time / totals.distance) : 0;
            dimensions.forEach((dimension) => {
                const value = totals[dimension];
                const totalCell = createElement('td', {}, adaptValueToShow(dimension, value));
                totalsRow.appendChild(totalCell);
            });
            table.querySelector('tbody').appendChild(totalsRow);
        }


        function adaptValueToShow(dimension, value) {
            let valueToShow;

            if (dimension === 'distance') {
                const distance = value / 1000;
                const mi = value / 1609;
                valueToShow = parseFloat(distance.toFixed(2)) + 'km - ' + parseFloat(mi.toFixed(2)) + 'mi';
            } else if (dimension === 'time') {
                valueToShow = secondsTimeConvert(value);
            } else if (dimension === 'elevation') {
                const elevation = parseFloat(value.toFixed(2));
                const ft = parseFloat(value / 0.3048);
                valueToShow = parseFloat(elevation) + 'm - ' + parseFloat(ft.toFixed(2)) + 'ft';
            } else if (dimension === 'pace') {
                if (value) {
                    const byMi = secondsTimeConvert(value * 1609, true);
                    valueToShow = secondsTimeConvert(value * 1000, true) + ' /km - ' + byMi + ' /mi';
                } else {
                    valueToShow = '- /km - /mi';
                }
            }

            return valueToShow;
        }

        function sortDesc(a, b) {
            if (a.value > b.value) {
                return -1;
            } else if (a.value < b.value) {
                return 1;
            }
            return 0;
        }

        function sortAsc(a, b) {
            if (a.value > b.value) {
                return 1;
            } else if (a.value < b.value) {
                return -1;
            }
            return 0;
        }

        function getRankingByDimension(ranking, dimension, pattern) {
            const rankingByDimension = {};
            for (const team in ranking) {
                let value = ranking[team][dimension][pattern];
                rankingByDimension[team] = value;
            }


            return rankingByDimension;
        }
    }

    function getRanking() {
//        const ranking = Object.assign({}, initial.first);
        const ranking = Object.assign({}, initialValues);

        athletesRanking.forEach((item) => {
            const cells = item.querySelectorAll('td');
            if (!cells[1]) {
                return;
            }
            const athlete = cells[1].querySelector('a').getAttribute('href');
            const team = getTeamForUser(athlete);
            const realDistance = parseFloat(cells[2].textContent.trim().replace(',', '.')) || 0; // in km
            const distance = realDistance * 1000; // in meters
            const runs = parseFloat(cells[3].textContent.trim().replace(',', '.')) || 0;
            const longest = parseFloat(cells[4].textContent.trim().replace(',', '.')) || 0;

            const avg = cells[5].textContent.replace('/km', '').trim();
            const avgPace = timeConverterToSeconds(avg); // in seconds
            const time = realDistance * avgPace;

            const elevation = parseFloat(cells[6].textContent.trim().replace('.', '')) || 0;

            resultsByAthlete[athlete] = {distance, runs, longest, avgPace, elevation, time};

            addToTeam(team, {distance, elevation, time});
        });

        for (const team in ranking) {
            const teamLength = teams[team].length;
            const thatRan = athletesThatHaveRanByTeam[team];
            ranking[team].distance.avgByAthlete = (ranking[team].distance.total / teamLength);
            ranking[team].distance.avgByAthleteThaRan = (ranking[team].distance.total / thatRan);
            ranking[team].elevation.avgByAthlete = ranking[team].elevation.total / teamLength;
            ranking[team].elevation.avgByAthleteThaRan = (ranking[team].elevation.total / thatRan);
            ranking[team].time.avgByAthlete = ranking[team].time.total / teamLength;
            ranking[team].time.avgByAthleteThaRan = (ranking[team].time.total / thatRan);
            ranking[team].pace = {};
            ranking[team].pace.avgByAthlete = ranking[team].time.avgByAthlete ? (ranking[team].time.avgByAthlete / ranking[team].distance.avgByAthlete) : 0;
            ranking[team].pace.avgByAthleteThaRan = ranking[team].time.avgByAthleteThaRan ? (ranking[team].time.avgByAthleteThaRan / ranking[team].distance.avgByAthleteThaRan) : 0;
            ranking[team].pace.total = ranking[team].time.total ? (ranking[team].time.total / ranking[team].distance.total) : 0;
        }

        for (const team in ranking) {
            if(!ranking[team].distance.total){
                delete ranking[team];
            }
        }

        return ranking;

        function addToTeam(team, data) {
            if (!ranking[team]) {
                ranking[team] = {
                    distance: {total: 0, avgByAthlete: 0},
                    elevation: {total: 0, avgByAthlete: 0},
                    time: {total: 0, avgByAthlete: 0}
                }
            }

            ranking[team].distance.total += data.distance;
            ranking[team].elevation.total += data.elevation;
            ranking[team].time.total += data.time;

        }
    }

    function getTeamForUser(athlete) {
        for (const team in teams) {
            let isInTeam = false;
            const teamLength = teams[team].length;
            for (let i = 0; i < teamLength; i++) {
                if ((teams[team][i].url && teams[team][i].url === athlete) || teams[team][i] === athlete) {
                    isInTeam = true;
                    break
                }
            }
            if (isInTeam) {
                return team;
            }
        }
    }

    function secondsTimeConvert(secondsTotal, toMinutes = false) {
        const hours = secondsTotal / 3600;
        const roundedHours = Math.floor(hours);
        const minutes = (hours - roundedHours) * 60;
        const roundedMinutes = Math.floor(minutes);
        const seconds = (minutes - roundedMinutes) * 60;
        const roundedSeconds = Math.round(seconds);

        if (!toMinutes) {
            return roundedHours + ':' + (roundedMinutes < 10 ? '0' + roundedMinutes : roundedMinutes) + ':' + (roundedSeconds < 10 ? '0' + roundedSeconds : roundedSeconds);
        } else {
            return roundedMinutes + ':' + (roundedSeconds < 10 ? '0' + roundedSeconds : roundedSeconds);
        }
    }

    function timeConverterToSeconds(time) {
        const splittedTime = time.split(':');
        const partsLength = splittedTime.length;
        let timeInSeconds = 0;

        for (let i = partsLength - 1; i >= 0; i--) {
            timeInSeconds += parseInt(splittedTime[i]) * Math.pow(60, partsLength - i - 1);
        }

        return timeInSeconds;
    }

    function createAchievementCell(achievement) {
        const achievementDiv = createElement('div', {'class': achievement});

        return createElement('td', {}, achievementDiv);
    }

    function createCellResult(team, result) {
        const teamName = createElement('span', {'class': 'athlete-name', 'style': 'max-width: 100%; width: 99%'}, team);
        teamName.style.fontWeight = 'bold';
        teamName.style.fontVariant = 'small-caps';
        teamName.style.textTransform = 'capitalize';

        const dimension = createElement('span', {'class': 'dimension', 'style': 'font-size: .9em'}, result);
        dimension.style.marginTop = '3px';

        return createElement('td', {}, [teamName, dimension]);
    }
}

function createElement(tagName, attributes = {}, childNodes = [], events = []) {
    let newElement = document.createElement(tagName);

    for (let propertyName in attributes) {
        newElement.setAttribute(propertyName, attributes[propertyName]);
    }

    childNodes = Array.isArray(childNodes) ? childNodes : [childNodes];
    for (let i = 0; i < childNodes.length; i++) {
        if (typeof childNodes[i] === 'string' || typeof childNodes[i] === 'number') {
            let textNode = createTextNode(childNodes[i]);
            newElement.appendChild(textNode);
        } else {
            newElement.appendChild(childNodes[i]);
        }
    }

    events = Array.isArray(events) ? events : [events];
    for (let i = 0; i < events.length; i++) {
        const {name, callback} = events[i];
        newElement.addEventListener(name, callback);
    }

    return newElement
}

function createTextNode(text) {
    return document.createTextNode(text);
}
