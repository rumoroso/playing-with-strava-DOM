const runners = {
    29041600: {name: "Jorge Rumoroso", team: 'zurich'},
    23067415: {name: "Anca-Elena Alexandrescu", team: 'zurich'},
    6228065: {name: "Andrei C", team: 'zurich'},
    15282580: {name: "Andres Sanchez", team: 'zurich'},
    26022333: {name: "G L Lorenz", team: 'zurich'},
    5257885: {name: "Nicola Terrenghi", team: 'zurich'},
    20385538: {name: "Stefano Pongelli", team: 'zurich'},
    23837170: {name: "Theodor Radu", team: 'zurich'},
    29177863: {name: "Ezani Schultheiss", team: 'zurich'},
    23870845: {name: "Marc Bodenmüller", team: 'zurich'},
    43480837: {name: "Nick Krommydas", team: 'zurich'},
    12048356: {name: "Paul Tuxford", team: 'zurich'},
    18519747: {name: "Bryan Flores", team: 'manila'},
    16500041: {name: "Jerome Sevilla", team: 'manila'},
    42704472: {name: "PJ de Leon", team: 'manila'},
    41904167: {name: "Kevin Francisco", team: 'manila'},
    43010190: {name: "Renz Estacio", team: 'manila'},
    42168384: {name: "Andre Gabo", team: 'manila'},
    43058513: {name: "Kat Samboa", team: 'manila'},
    41572080: {name: "Kristian Villabroza", team: 'manila'},
    43451502: {name: "Ann Margaret Silva", team: 'manila'},
    39378771: {name: "Rex Nohay", team: 'manila'},
    43451716: {name: "Michael Christian Torres", team: 'manila'},
    16031782: {name: "John Clark", team: 'edinburgh'},
    31565097: {name: "Stuart Dodds", team: 'edinburgh'},
    42912286: {name: "Stuart Thomson", team: 'edinburgh'},
    42945930: {name: "Gavin Donoghue", team: 'edinburgh'},
    42949260: {name: "Pirmin Zenklusen", team: 'edinburgh'},
    14570654: {name: "nathan quadrio", team: 'lugano'},
    25044835: {name: "Emanuele Della Valle", team: 'lugano'},
    5690359: {name: "Michele  Sasso", team: 'lugano'},
    30041945: {name: "Martina Dotta", team: 'lugano'},
    26765072: {name: "Daniele Proserpio", team: 'lugano'},
    13629176: {name: "Adamo Maddalena", team: 'lugano'},
    3491386: {name: "Mauro MDC", team: 'madrid'},
    5027913: {name: "Riccardo Burgaletta", team: 'lugano'},
    43940121: {name: "Alessandro Bertocchi", team: 'lugano'},
    43945001: {name: "Giuliano Paris", team: 'lugano'},
    18897560: {name: "Artyom Romanov", team: 'zurich'},
    44057878: {name: "Becky Pitts", team: 'london'},
    15297420: {name: "Yevgeniy Ilyin", team: 'zurich'},
    18177642: {name: "Dennis Piovesana", team: 'lugano'},
    44193374: {name: "Jam Marce", team: 'manila'}
};

const createEventButton = document.querySelector('#club-event-js');
let runnersList;
let runnersNotIdentified;

createEventButton.click();
setTimeout(() => {
    const eventModal = document.querySelector('.lightbox.event-modal');
    const organizer = eventModal.querySelector('#athlete_id').parentElement;
    const runnersListItems = getRunnersList(organizer.querySelectorAll('li'));
    runnersList = runnersListItems.runners;
    runnersNotIdentified = runnersListItems.runnersNotIdentified;
    console.log(runnersList);
    console.log(runnersNotIdentified);
}, 1000);

function getRunnersList(list) {
    const runnersIdentified = {};
    const runnersNotIdentified = {};
    list.forEach((item) => {
            const userId = item.getAttribute('data-value');
            if (userId) {
                const name = item.textContent.trim();
                if (runners[userId]) {
                    runnersIdentified[userId] = {name}
                } else {
                    runnersNotIdentified[userId] = {name}
                }
            }
        }
    );
    return {runners: runnersIdentified, runnersNotIdentified};
}