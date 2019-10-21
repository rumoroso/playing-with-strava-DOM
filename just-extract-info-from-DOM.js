const runners = {
    29041600: {name: 'Jorge Rumoroso', team: 'zurich'},
    23067415: {name: 'Anca-Elena Alexandrescu', team: 'zurich'},
    6228065: {name: 'Andrei C', team: 'zurich'},
    15282580: {name: 'Andres Sanchez', team: 'zurich'},
    26022333: {name: 'G L Lorenz', team: 'zurich'},
    5257885: {name: 'Nicola Terrenghi', team: 'zurich'},
    20385538: {name: 'Stefano Pongelli', team: 'zurich'},
    23837170: {name: 'Theodor Radu', team: 'zurich'},
    29177863: {name: 'Ezani Schultheiss', team: 'zurich'},
    23870845: {name: 'Marc Bodenmüller', team: 'zurich'},
    12048356: {name: 'Paul Tuxford', team: 'zurich'},
    18897560: {name: 'Artyom Romanov', team: 'zurich'},
    44854315: {name: 'Vaclav Skarka', team: 'zurich'},
    45584106: {name: 'Guy Emry', team: 'zurich'},
    34873377: {name: 'Rebecca Michel', team: 'zurich'},
    15297420: {name: 'Yevgeniy Ilyin', team: 'zurich'},
    18519747: {name: 'Bryan Flores', team: 'manila'},
    16500041: {name: 'Jerome Sevilla', team: 'manila'},
    42704472: {name: 'PJ de Leon', team: 'manila'},
    41904167: {name: 'Kevin Francisco', team: 'manila'},
    43010190: {name: 'Renz Estacio', team: 'manila'},
    42168384: {name: 'Andre Gabo', team: 'manila'},
    43058513: {name: 'Kat Samboa', team: 'manila'},
    41572080: {name: 'Kristian Villabroza', team: 'manila'},
    43451502: {name: 'Ann Margaret Silva', team: 'manila'},
    39378771: {name: 'Rex Nohay', team: 'manila'},
    43451716: {name: 'Michael Christian Torres', team: 'manila'},
    44193374: {name: 'Jam Marce', team: 'manila'},
    44232903: {name: 'Homer Irineo', team: 'manila'},
    44600322: {name: 'Nikki Aquino', team: 'manila'},
    44602808: {name: 'Jayy Alop', team: 'manila'},
    44661594: {name: 'timothy lee', team: 'manila'},
    44430664: {name: 'Eiman Mission', team: 'manila'},
    44232405: {name: 'Metch Vince Cruz', team: 'manila'},
    45655039: {name: 'Engel Alfaro', team: 'manila'},
    46343095: {name: 'Syd Evangelista', team: 'manila'},
    46535931: {name: 'Kenneth Daniel', team: 'manila'},
    43058566: {name: 'Rose Ann Apostol', team: 'manila'},
    46717966: {name: 'Riselle Denisse Domingo', team: 'manila'},
    3491386: {name: 'Mauro MDC', team: 'madrid'},
    14570654: {name: 'nathan quadrio', team: 'lugano'},
    25044835: {name: 'Emanuele Della Valle', team: 'lugano'},
    5690359: {name: 'Michele  Sasso', team: 'lugano'},
    30041945: {name: 'Martina Dotta', team: 'lugano'},
    26765072: {name: 'Daniele Proserpio', team: 'lugano'},
    13629176: {name: 'Adamo Maddalena', team: 'lugano'},
    5027913: {name: 'Riccardo Burgaletta', team: 'lugano'},
    43940121: {name: 'Alessandro Bertocchi', team: 'lugano'},
    43945001: {name: 'Giuliano Paris', team: 'lugano'},
    45579552: {name: 'Luca Pavin', team: 'lugano'},
    45946021: {name: 'Matteo Martinetti', team: 'lugano'},
    18177642: {name: 'Dennis Piovesana', team: 'lugano'},
    46413641: {name: 'Domenico Marzolla', team: 'lugano'},
    46612170: {name: 'Andrea Scanzio', team: 'lugano'},
    47102771: {name: 'Isabella Ronzoni Marescalchi', team: 'lugano'},
    29710337: {name: 'Alfietto Marzullo', team: 'lugano'},
    47486834: {name: 'Silvia Rovati', team: 'lugano'},
    44057878: {name: 'Becky Pitts', team: 'london'},
    23851097: {name: 'Lucas Main', team: 'london'},
    576337: {name: 'd h', team: 'edinburgh'},
    16031782: {name: 'John Clark', team: 'edinburgh'},
    31565097: {name: 'Stuart Dodds', team: 'edinburgh'},
    42912286: {name: 'Stuart Thomson', team: 'edinburgh'},
    42945930: {name: 'Gavin Donoghue', team: 'edinburgh'},
    42949260: {name: 'Pirmin Zenklusen', team: 'edinburgh'},
    8620322: {name: 'Iain Ronald', team: 'edinburgh'},
    19160860: {name: 'Cameron Doyle', team: 'edinburgh'}
};

const teams = {};
const currentDate = new Date();
const formattedDate = currentDate.getDate() + '.' + currentDate.getMonth() + '.' + currentDate.getFullYear();
const dimensions = ['distance', 'elevation', 'time', 'pace'];
let totalRunners = 0;
let runnersThatHaveRanLength = 0;

groupAndAnaliseData(runners);

function runnersThatHaveRan(rows){
    const runnersThatRanObject = {};
    for (let i = 0; i < rows.length; i++) {
        const {runnerId, name, runs, elevation, team, distance, time} = getParametersFromRow(rows[i]);
        if (!runnersThatRanObject[runnerId]) {
            runnersThatRanObject[runnerId] = {distance: 0, elevation: 0, time: 0, runs: 0};
        }
        runnersThatRanObject[runnerId].runnerId = runnerId;
        runnersThatRanObject[runnerId].name = name;
        runnersThatRanObject[runnerId].team = team;
        runnersThatRanObject[runnerId].distance += distance;
        runnersThatRanObject[runnerId].elevation += elevation;
        runnersThatRanObject[runnerId].time += time;
        runnersThatRanObject[runnerId].runs += runs;
    }

    const runnersThatRan = [];
    for (const runnerId in runnersThatRanObject) {
        runnersThatRan.push(runnersThatRanObject[runnerId]);
    }

    runnersThatRan.sort(sortDesc('distance', 'elevation'));
    console.log(runnersThatRan);

    return runnersThatRan;
}

function runnersGroupedByTeam(runners){
    const groupedRunners = {};
    for (const runnerId in runners) {
        const team = runners[runnerId].team;
        const name = runners[runnerId].name;
        if (!groupedRunners[team]) {
            groupedRunners[team] = [];
        }

        groupedRunners[team].push(name);
    }

    return groupedRunners;
}

function groupAndAnaliseData(runners) {
    const leadersRankingTableByTeam = document.querySelector('.leaders table');
    if (!leadersRankingTableByTeam) {
        return;
    }

    const runnersRanking = document.querySelectorAll('.leaderboard table tbody tr');
    const runnersThatRan = runnersThatHaveRan(runnersRanking);
    const runnersThatHaveRanByTeam = runnersGroupedByTeam(runnersThatRan);

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

    const totals = generateResults(ranking, leadersRankingTableByTeam, 'total');
    generateResults(ranking, leadersRankingTableByAthlete, 'avgByAthlete');
    generateResults(ranking, leadersRankingTableByAthleteThaRan, 'avgByAthleteThaRan');

    function generateTableDataByTeams() {
        const rows = [];
        let totalAthletesThatRan = 0;
        for (const runnerId in runners) {
            const team = runners[runnerId].team;
            if(!teams[team]){
                teams[team] = [];
            }
            teams[team].push(runners[runnerId].name);
        }
        for (const team in teams) {
            const teamName = createElement('td', {}, team);
            const athletesInTeamLength = teams[team].length;
            totalRunners += athletesInTeamLength;
            teamName.style.fontWeight = 'bold';
            teamName.style.fontVariant = 'small-caps';
            teamName.style.textTransform = 'capitalize';


            const athletesCell = createElement('td', {'style': 'text-align: center'}, athletesInTeamLength);

            const list = teams[team].join(', ');
            const athletesNameCell = createElement('td', {}, list);
            const runnersLength = (runnersThatHaveRanByTeam[team] && runnersThatHaveRanByTeam[team].length) || 0;
            const runnersNames = (runnersThatHaveRanByTeam[team] && runnersThatHaveRanByTeam[team].join(', ')) || '';
            const percentage = runnersLength ? (runnersLength * 100 / athletesInTeamLength).toFixed(2) : 0;
            const runnersThaHaveRanText = runnersLength ? (runnersLength + ' (' + percentage + '%): ' + runnersNames) : runnersLength;
            const athletesThatHaveRan = createElement('td', {}, runnersThaHaveRanText);
            totalAthletesThatRan += runnersLength;

            rows.push(createElement('tr', {}, [teamName, athletesCell, athletesNameCell, athletesThatHaveRan]));
        }

        runnersThatHaveRanLength += totalAthletesThatRan;

        const totalsCell = createElement('td', {'style': 'font-weight: bold'}, 'Totals');
        const athletesTotalsCell = createElement('td', {'style': 'text-align: center'}, totalRunners);
        const emtpyCell = createElement('td', {}, '');
        const percentage = totalAthletesThatRan ? (totalAthletesThatRan * 100 / totalRunners).toFixed(2) : 0;
        const runnersThaHaveRanText = totalAthletesThatRan ? (totalAthletesThatRan + ' (' + percentage + '%)') : totalAthletesThatRan;
        const athletesTotalsThatRanCell = createElement('td', {}, runnersThaHaveRanText);
        rows.push(createElement('tr', {}, [totalsCell, athletesTotalsCell, emtpyCell, athletesTotalsThatRanCell]));

        const th1 = createElement('th', {}, 'team');
        const th2 = createElement('th', {'colspan': '2'}, 'members (at ' + formattedDate + ')');
        const th3 = createElement('th', {'style': 'white-space: nowrap'}, 'have ran');
        const thead = createElement('thead', {}, [th1, th2, th3]);
        const tbody = createElement('tbody', {}, rows);
        return createElement('table', {'style': 'width: 90%; margin: auto'}, [thead, tbody]);
    }

    function generateResults(ranking, table, pattern = 'total') {
        const totalsByRunner = {distance: 0, time: 0, elevation: 0, pace: 0};

        dimensions.forEach((dimension) => {
            table.querySelector('thead tr').appendChild(createElement('th', {}, dimension));

            const rankingByDimensionAndTeam = getRankingByDimension(ranking, dimension, pattern);
            const orderedRanking = [];
            for (const team in rankingByDimensionAndTeam) {
                const value = rankingByDimensionAndTeam[team];
                orderedRanking.push({team, value});
            }

            if (dimension !== 'pace') {
                orderedRanking.sort(sortDesc('value'));
            } else {
                orderedRanking.sort(sortAsc('value'));
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

                totalsByRunner[dimension] += value;

                row.appendChild(createCellResult(team, adaptValueToShow(dimension, value)));
            });
        });


        if(pattern === 'total'){
            addTotalsRow(table, totalsByRunner);
            return totalsByRunner;
        }else{
            const updatedTotalsAverages = Object.assign({}, totals);
            const factor = (pattern === 'avgByAthlete') ? totalRunners : runnersThatHaveRanLength;
            for (const dimension in updatedTotalsAverages) {
                updatedTotalsAverages[dimension] = updatedTotalsAverages[dimension] / factor;
            }
            addTotalsRow(table, updatedTotalsAverages);
        }

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
        const ranking = {};
        runnersRanking.forEach((item) => {
            if (!item.querySelectorAll('td').length) {
                return;
            }

            const {runnerId, runs, longest, elevation, team, distance, avgPace, time} = getParametersFromRow(item);

            resultsByAthlete[runnerId] = {distance, runs, longest, avgPace, elevation, time};

            addToTeam(team, {distance, elevation, time});
        });

        console.log(teams);
        for (const team in ranking) {
            const teamLength = teams[team].length;
            const thatRan = runnersThatHaveRanByTeam[team] && runnersThatHaveRanByTeam[team].length;
            const selectedTeam = ranking[team];
            selectedTeam.distance.avgByAthlete = (selectedTeam.distance.total / teamLength);
            selectedTeam.distance.avgByAthleteThaRan = (selectedTeam.distance.total / thatRan);
            selectedTeam.elevation.avgByAthlete = selectedTeam.elevation.total / teamLength;
            selectedTeam.elevation.avgByAthleteThaRan = (selectedTeam.elevation.total / thatRan);
            selectedTeam.time.avgByAthlete = selectedTeam.time.total / teamLength;
            selectedTeam.time.avgByAthleteThaRan = (selectedTeam.time.total / thatRan);
            selectedTeam.pace = {};
            selectedTeam.pace.avgByAthlete = selectedTeam.time.avgByAthlete ? (selectedTeam.time.avgByAthlete / selectedTeam.distance.avgByAthlete) : 0;
            selectedTeam.pace.avgByAthleteThaRan = selectedTeam.time.avgByAthleteThaRan ? (selectedTeam.time.avgByAthleteThaRan / selectedTeam.distance.avgByAthleteThaRan) : 0;
            selectedTeam.pace.total = selectedTeam.time.total ? (selectedTeam.time.total / selectedTeam.distance.total) : 0;
        }

        for (const team in ranking) {
            if (!ranking[team].distance.total) {
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

function getParametersFromRow(row){
    const runnerId = row.querySelector('.athlete a').getAttribute('href').replace('/athletes/', '');
    const realDistance = parseFloat(row.querySelector('.distance').textContent.trim().replace(',', '.')) || 0; // in km
    const runs = parseFloat(row.querySelector('.num-activities').textContent.trim().replace(',', '.')) || 0;
    const longest = parseFloat(row.querySelector('.longest-activity').textContent.trim().replace(',', '.')) || 0;
    const avg = row.querySelector('.average-pace').textContent.replace('/km', '').trim();
    const elevation = parseFloat(row.querySelector('.elev-gain').textContent.trim().replace('.', '')) || 0;

    const team = runners[runnerId].team;
    const name = runners[runnerId].name;
    const distance = realDistance * 1000; // in meters
    const avgPace = timeConverterToSeconds(avg); // in seconds
    const time = realDistance * avgPace;

    return {runnerId, name, runs, longest, avg, elevation, team, distance, avgPace, time};
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

function sortDesc(parameterA, parameterB = undefined) {
    return (a, b) => {
        if (a[parameterA] >  b[parameterA]) {
            return -1;
        } else if (a[parameterA] < b[parameterA]) {
            return 1;
        } else if(parameterB){
            if (a[parameterB] >  b[parameterB]) {
                return -1;
            } else if (a[parameterB] < b[parameterB]) {
                return 1;
            }
        }
        return 0;
    }
}

function sortAsc(parameter, parameterB = undefined) {
    return (a, b) => {
        if (a[parameter] > b[parameter]) {
            return 1;
        } else if (a[parameter] < b[parameter]) {
            return -1;
        } else if(parameterB){
            if (a[parameter] > b[parameter]) {
                return 1;
            } else if (a[parameter] < b[parameter]) {
                return -1;
            }
        }
        return 0;
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
