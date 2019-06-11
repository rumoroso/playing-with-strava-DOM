const currentDate = new Date();
const formattedDate = currentDate.getDate() + '.' + currentDate.getMonth() + '.' + currentDate.getFullYear();
const teams = {
    zurich: ['/athletes/29041600', '/athletes/23067415', '/athletes/6228065', '/athletes/15282580', '/athletes/26022333',
        '/athletes/5257885', '/athletes/20385538', '/athletes/23837170', '/athletes/29177863'],
    manila: ['/athletes/18519747', '/athletes/16500041', '/athletes/42704472', '/athletes/41904167', '/athletes/43010190',
        '/athletes/39378771', '/athletes/42168384', '/athletes/43058513', '/athletes/41572080'],
    edinburgh: ['/athletes/16031782', '/athletes/31565097', '/athletes/42912286', '/athletes/42949260', '/athletes/42945930'],
    lugano: ['/athletes/14570654']
};
getTeamsData();

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
        }
    }
};

const initialValues = {
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
    generateResults();
    generateResults(true);

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
            const athletesNameCell = createElement('td', {}, list);

            rows.push(createElement('tr', {}, [teamName, athletesCell, athletesNameCell]));
        }
        const th1 = createElement('th', {}, 'team');
        const th2 = createElement('th', {'colspan': '2'}, 'members (at ' + formattedDate + ')');
        const thead = createElement('thead', {}, [th1, th2]);
        const tbody = createElement('tbody', {}, rows);
        return createElement('table', {'style': 'width: 60%; margin: auto'}, [thead, tbody]);
    }

    function generateResults(byAthelete = false) {
        const table = !byAthelete ? leadersRankingTableByTeam : leadersRankingTableByAthlete;

        dimensions.forEach((dimension, dimensionIndex) => {
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
            }

            orderedRanking.forEach((item, index) => {
                let row = table.querySelector('tbody').querySelectorAll('tr')[index];

                if (!row) {
                    row = createElement('tr', {}, createAchievementCell('achievement kom-' + (index + 1) + (index ? '' : 'a')));
                    table.querySelector('tbody').appendChild(row);
                }
                const team = item.team;
                let value = item.value;

                if (dimension === 'distance') {
                    const distance = value / 1000;
                    const mi = value / 1609;
                    value = distance.toFixed(2) + 'km - ' + mi.toFixed(2) + 'mi';
                } else if (dimension === 'time') {
                    value = secondsTimeConvert(value);
                } else if (dimension === 'elevation') {
                    const elevation = value.toFixed(2);
                    const ft = value / 0.3048;
                    value = elevation + 'm - ' + ft.toFixed(2) + 'ft';
                } else if (dimension === 'pace') {
                    const byMi = secondsTimeConvert(value * 1609, true);
                    value = secondsTimeConvert(value * 1000, true) + ' /km - ' + byMi + ' /mi';
                }

                row.appendChild(createCellResult(team, value));
            });
        });

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
            const athlete = cells[1].querySelector('a').getAttribute('href');
            const team = getTeamForUser(athlete);
            const realDistance = parseFloat(cells[2].textContent.trim().replace(',', '.')) || 0; // in km
            const distance = realDistance * 1000; // in meters
            cells[2].textContent = realDistance;
            const runs = parseFloat(cells[3].textContent.trim().replace(',', '.')) || 0;
            cells[3].textContent = runs;
            const longest = parseFloat(cells[4].textContent.trim().replace(',', '.')) || 0;
            cells[4].textContent = longest;

            const avg = cells[5].textContent.replace('/km', '').trim();
            const avgPace = timeConverterToSeconds(avg); // in seconds
            const time = realDistance * avgPace;
            cells[5].textContent = secondsTimeConvert(time);

            const elevation = parseFloat(cells[6].textContent.trim().replace('.', '')) || 0;
            cells[6].textContent = elevation;

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
            ranking[team].pace.avgByAthlete = ranking[team].time.avgByAthlete / ranking[team].distance.avgByAthlete;
            ranking[team].pace.total = ranking[team].time.total / ranking[team].distance.total;
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
            const athletes = teams[team].map((athlete) => {
                return athlete.url || athlete;
            });
            if (athletes.indexOf(athlete) > -1) {
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