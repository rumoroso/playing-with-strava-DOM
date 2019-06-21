const teams1 = {
    zurich: ['/athletes/29041600', '/athletes/23067415', '/athletes/6228065', '/athletes/15282580', '/athletes/26022333',
        '/athletes/5257885', '/athletes/20385538', '/athletes/23837170', '/athletes/29177863', '/athletes/23870845', '/athletes/12048356'],
    manila: ['/athletes/18519747', '/athletes/16500041', '/athletes/42704472', '/athletes/41904167', '/athletes/43010190',
        '/athletes/39378771', '/athletes/42168384', '/athletes/43058513', '/athletes/41572080', '/athletes/43451502'],
    edinburgh: ['/athletes/16031782', '/athletes/31565097', '/athletes/42912286', '/athletes/42949260', '/athletes/42945930'],
    lugano: ['/athletes/14570654', '/athletes/25044835', '/athletes/5690359'],
    madrid: ['/athletes/3491386']
};

const teams = {
    "zurich": [{
        "url": "/athletes/23067415",
        "name": "Anca-Elena Alexandrescu"
    }, {"url": "/athletes/6228065", "name": "Andrei C"}, {
        "url": "/athletes/15282580",
        "name": "Andres Sanchez"
    }, {"url": "/athletes/26022333", "name": "G L Lorenz"}, {
        "url": "/athletes/5257885",
        "name": "Nicola Terrenghi"
    }, {"url": "/athletes/20385538", "name": "Stefano Pongelli"}, {
        "url": "/athletes/23837170",
        "name": "Theodor Radu"
    }, {"url": "/athletes/29041600", "name": "Jorge Rumoroso"},
        {"url": "/athletes/29177863", "name": "Ezani Schultheiss"}, {
            "url": "/athletes/23870845",
            "name": "Marc Bodenmüller"
        }, {"url": "/athletes/12048356", "name": "Paul Tuxford"}],
    "manila": [{"url": "/athletes/18519747", "name": "Bryan Flores"}, {
        "url": "/athletes/16500041",
        "name": "Jerome Sevilla"
    }, {"url": "/athletes/42704472", "name": "PJ de Leon"}, {
        "url": "/athletes/41904167",
        "name": "Kevin Francisco"
    }, {"url": "/athletes/43010190", "name": "Renz Estacio"}, {
        "url": "/athletes/39378771",
        "name": "Rex Nohay"
    }, {"url": "/athletes/42168384", "name": "Andre Gabo"}, {
        "url": "/athletes/43058513",
        "name": "Kat Samboa"
    }, {"url": "/athletes/41572080", "name": "Kristian Villabroza"},
        {"url": "/athletes/43451502", "name": "Ann Margaret Silva"},
        {"url": "/athletes/43451716", "name": "Michael Christian Torres"}],
    "edinburgh": [{"url": "/athletes/16031782", "name": "John Clark"}, {
        "url": "/athletes/31565097",
        "name": "Stuart Dodds"
    }, {"url": "/athletes/42912286", "name": "Stuart Thomson"}, {
        "url": "/athletes/42949260",
        "name": "Pirmin Zenklusen"
    }, {"url": "/athletes/42945930", "name": "Gavin Donoghue"}],
    "lugano": [{"url": "/athletes/14570654", "name": "nathan quadrio"},
        {"url": "/athletes/25044835", "name": "Emanuele Della Valle"},
        {"url": "/athletes/5690359", "name": "Michele Sasso"}],
    "madrid": [{"url": "/athletes/3491386", "name": "Mauro MDC"}]
};
const currentDate = new Date();
const formattedDate = currentDate.getDate() + '.' + currentDate.getMonth() + '.' + currentDate.getFullYear();

// getTeamsData();

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
    }
};

const initialValues = {
    "manila": {
        "distance": {"total": 393780, "avgByAthlete": 35798.181818181816},
        "elevation": {"total": 3711, "avgByAthlete": 337.3636363636364},
        "time": {"total": 173370.90000000002, "avgByAthlete": 15760.990909090911},
        "pace": {"avgByAthlete": 0.44027350297120227, "total": 0.44027350297120227}
    },
    "zurich": {
        "distance": {"total": 314150, "avgByAthlete": 28559.090909090908},
        "elevation": {"total": 2730, "avgByAthlete": 248.1818181818182},
        "time": {"total": 112573.5, "avgByAthlete": 10233.954545454546},
        "pace": {"avgByAthlete": 0.3583431481776222, "total": 0.35834314817762214}
    },
    "edinburgh": {
        "distance": {"total": 226000, "avgByAthlete": 45200},
        "elevation": {"total": 2081, "avgByAthlete": 416.2},
        "time": {"total": 74315.69999999998, "avgByAthlete": 14863.139999999996},
        "pace": {"avgByAthlete": 0.3288305309734512, "total": 0.3288305309734513}
    },
    "lugano": {
        "distance": {"total": 208680, "avgByAthlete": 61226.666666666664},
        "elevation": {"total": 2152, "avgByAthlete": 598},
        "time": {"total": 68747.199999999994, "avgByAthlete": 20092.63333333333},
        "pace": {"avgByAthlete": 0.3281680095818815, "total": 0.3281680095818815}
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

    const tableDataByTeams = generateTableDataByTeams();
    tableParent.insertBefore(tableDataByTeams, leadersRankingTableByTeam);
    tableParent.insertBefore(createElement('h2', {'style': 'text-align: center'}, 'Teams'), tableDataByTeams);
    tableParent.insertBefore(createElement('h2', {'style': 'text-align: center'}, 'Classification by team (at ' + formattedDate + ')'), leadersRankingTableByTeam);
    tableParent.insertBefore(createElement('h2', {'style': 'text-align: center'}, 'Average by athlete (at ' + formattedDate + ')'), leadersRankingTableByAthlete);

    const resultsByAthlete = {};
    const ranking = getRanking();

    console.log(JSON.stringify(ranking));
    generateResults(ranking);
    generateResultsByAthlete(ranking);

    function generateTableDataByTeams() {
        const rows = [];
        for (const team in teams) {
            const teamName = createElement('td', {}, team);
            const athletesInTeamLength = teams[team].length;
            teamName.style.fontWeight = 'bold';
            teamName.style.fontVariant = 'small-caps';
            teamName.style.textTransform = 'capitalize';


            const athletesCell = createElement('td', {}, athletesInTeamLength);

            let list = '';
            for (let i = 0; i < athletesInTeamLength; i++) {
                const name = teams[team][i].name;
                list += name ? name + ', ' : '';
            }
            list = list.slice(0, -2);
            const athletesNameCell = createElement('td', {}, list);

            rows.push(createElement('tr', {}, [teamName, athletesCell, athletesNameCell]));
        }
        const th1 = createElement('th', {}, 'team');
        const th2 = createElement('th', {'colspan': '2'}, 'members (at ' + formattedDate + ')');
        const thead = createElement('thead', {}, [th1, th2]);
        const tbody = createElement('tbody', {}, rows);
        return createElement('table', {'style': 'width: 60%; margin: auto'}, [thead, tbody]);
    }

    function generateResultsByAthlete(ranking) {
        return generateResults(ranking, true)
    }

    function generateResults(ranking, byAthelete = false) {
        const table = !byAthelete ? leadersRankingTableByTeam : leadersRankingTableByAthlete;
        const totals = {distance: 0, time: 0, elevation: 0, pace: 0};

        dimensions.forEach((dimension) => {
            table.querySelector('thead tr').appendChild(createElement('th', {}, dimension));

            const rankingByDimensionAndTeam = getRankingByDimension(ranking, dimension, byAthelete);
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

        const totalsHeaderCell = createElement('td', {'style': 'font-weight: bold'}, 'Totals');
        const totalsRow = createElement('tr', {'style': 'text-align: center'}, totalsHeaderCell);

        for (const dimension in totals) {
            const value = totals[dimension];
            const totalCell = createElement('td', {}, adaptValueToShow(dimension, value));
            totalsRow.appendChild(totalCell);
        }
        table.querySelector('tbody').appendChild(totalsRow);

        function adaptValueToShow(dimension, value){
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

        function getRankingByDimension(ranking, dimension, byAthlete) {
            const rankingByDimension = {};
            for (const team in ranking) {
                let value = !byAthlete ? ranking[team][dimension].total : ranking[team][dimension].avgByAthlete;
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
            ranking[team].distance.avgByAthlete = (ranking[team].distance.total / teamLength);
            ranking[team].distance.total = ranking[team].distance.total;
            ranking[team].elevation.avgByAthlete = ranking[team].elevation.total / teamLength;
            ranking[team].elevation.total = ranking[team].elevation.total;
            ranking[team].time.avgByAthlete = ranking[team].time.total / teamLength;
            ranking[team].time.total = ranking[team].time.total;
            ranking[team].pace = {};
            ranking[team].pace.avgByAthlete = ranking[team].time.avgByAthlete ? (ranking[team].time.avgByAthlete / ranking[team].distance.avgByAthlete) : 0;
            ranking[team].pace.total = ranking[team].time.total ? (ranking[team].time.total / ranking[team].distance.total) : 0;
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
