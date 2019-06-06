//const lists = document.querySelectorAll('.list-athletes li .text-headline a')

//const athletes = [];
//lists.forEach((item)=>{athletes.push(item.getAttribute('href'))})

const teams = {
    zurich: ['/athletes/29041600', '/athletes/23067415', '/athletes/6228065', '/athletes/15282580', '/athletes/26022333',
        '/athletes/5257885', '/athletes/20385538', '/athletes/23837170', '/athletes/29177863'],
    manila: ['/athletes/18519747', '/athletes/16500041', '/athletes/42704472', '/athletes/41904167'],
    edinburgh: ['/athletes/16031782', '/athletes/31565097', '/athletes/42912286', '/athletes/42949260', '/athletes/42945930']
};
const dimensions = ['distance', 'time', 'elevation'];

const initialValues = {
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
        },
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
        },
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
        },
    }
};

const athletesRanking = document.querySelectorAll('.leaderboard table tbody tr');
const leadersRankingHeaderRow = document.querySelector('.leaders table thead tr');
const leadersRankingRows = document.querySelectorAll('.leaders table tbody tr');


const resultsByAthlete = {};
const ranking = getRanking();


dimensions.forEach((dimension, dimensionIndex) => {
    const dimensionHeader = leadersRankingHeaderRow.querySelector('th:nth-child(' + (dimensionIndex + 2) + ')');
    dimensionHeader.textContent = dimension;

    const rankingByDimension = getRankingByDimension(ranking, dimension);
    const orderedRanking = [];
    for (const team in rankingByDimension) {
        const value = rankingByDimension[team];
        orderedRanking.push({team, value});
    }

    orderedRanking.sort(compare);
    orderedRanking.forEach((item, index) => {
        const row = leadersRankingRows[index];
        const achievement = row.querySelector('td:nth-child(1) .achievement');
        achievement.setAttribute('class', 'achievement kom-' + (index + 1) + (index ? '' : 'a'));

        const cell = row.querySelector('td:nth-child(' + (dimensionIndex + 2) + ')');
        const team = item.team;
        let value = item.value;

        if (dimension === 'distance') {
            value = value / 1000;
        } else if (dimension === 'time') {
            value = secondsTimeConvert(value);
        }

        setCellData(cell, {team, value});
    });
});

function compare(a, b) {
    if (a.value > b.value) {
        return -1;
    } else if (a.value < b.value) {
        return 1;
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

function setCellData(cell, data) {
    cell.querySelector('.avatar').style.display = 'none';
    cell.querySelector('.athlete-name').textContent = data.team;
    cell.querySelector('.athlete-name').style.fontWeight = 'bold';
    cell.querySelector('.athlete-name').style.fontVariant = 'small-caps';
    cell.querySelector('.athlete-name').style.textTransform = 'capitalize';
    cell.querySelector('.dimension').textContent = data.value;
    cell.querySelector('.dimension').style.marginTop = '3px';
    cell.querySelector('.dimension').style.fontWeight = 'bold';
}

function getRanking() {
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

//        ranking[team].distance.avgByAthlete = (ranking[team].distance.total / teamLength) / 1000;
//        ranking[team].distance.total = ranking[team].distance.total / 1000;
//        ranking[team].elevation.avgByAthlete = ranking[team].elevation.total / teamLength;
//        ranking[team].elevation.total = ranking[team].elevation.total;
//        ranking[team].time.avgByAthlete = secondsTimeConvert(ranking[team].time.total / teamLength);
//        ranking[team].time.total = secondsTimeConvert(ranking[team].time.total);
    }

    return ranking;

    function getTeamForUser(athlete) {
        for (const team in teams) {
            if (teams[team].indexOf(athlete) > -1) {
                return team;
            }
        }
    }

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

function secondsTimeConvert(secondsTotal) {
    const hours = secondsTotal / 3600;
    const roundedHours = Math.floor(hours);
    const minutes = (hours - roundedHours) * 60;
    const roundedMinutes = Math.floor(minutes);
    const seconds = (minutes - roundedMinutes) * 60;
    const roundedSeconds = Math.round(seconds);

    return roundedHours + ':' + (roundedMinutes < 10 ? '0' + roundedMinutes : roundedMinutes) + ':' + (roundedSeconds < 10 ? '0' + roundedSeconds : roundedSeconds);
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
