/*var strength = {
    neck: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    traps: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    shoulders: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    chest: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    biceps: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    triceps: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    forearms: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    lats: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    'middle Back': {
        reps: 0,
        power: 0,
        recovery: 10
    },
    'lower Back': {
        reps: 0,
        power: 0,
        recovery: 10
    },
    glutes: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    quads: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    hamstrings: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    calves: {
        reps: 0,
        power: 0,
        recovery: 10
    },
    back: {
        reps: 0,
        power: 0,
        recovery: 10
    },
};*/
var chest = {
    reps: 0,
    power: 0
}


function onPushUp(){
    if(chest.reps < 10){
        chest.power = chest.power + 1;
        chest.reps = chest.reps + 1;
        document.getElementById('chest').innerHTML = chest.power;
        document.getElementById('chestreps').innerHTML = chest.reps;

    }
    else if(strength.chest.reps >= 10 && strength.shoulders.reps >= 10 && strength.triceps.reps >= 10){
        alert('You have done to many reps for that muscle today!');
    }
};


/*for (var item in strength) {
    console.log(item);
    var thisExercise = strength[item];
    console.log(thisExercise);
    $('#teams-table').append('<tr>' + '<td>' + capitalizeFirstLetter(item) + '</td>' + '<td>' + thisExercise.power + '</td>' + '<td>' + thisExercise.reps + '</td>'  +  '</tr>');
};
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
