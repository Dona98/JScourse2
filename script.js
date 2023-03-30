'use strict';
/*const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `"${firstName} retires in ${retirement} years"`;
}
console.log(yearsUntilRetirement(1998, 'Donato'));

const cutPieces = function(fruit) {
    return fruit * 4;
};

const fruitProcessor = function(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
};

console.log(fruitProcessor(5, 7));

const calcAge = function(birthYear) {
    return 2023 - birthYear;
};
const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`"${firstName} retires in ${retirement} years"`)
        return retirement;
    } else {
        console.log(`"${firstName} retires in ${retirement} years"`)
        return -1;
        console.log(`${firstName} has already retired`)
    }

    //    return `"${firstName} retires in ${retirement} years"`;
}
console.log(yearsUntilRetirement(1998, 'Donato'));
console.log(yearsUntilRetirement(1940, 'Dario'));


const averageTeam = (avg1, avg2, avg3) => (avg1 + avg2 + avg3) / 3;
const checkWinner = (dolphins, koalas) => {
    if (dolphins >= 2 * koalas) {
        console.log(`Dolphins wins (${dolphins} vs ${koalas})`)
    } else if (koalas >= 2 * dolphins) {
        console.log(`Koalas wins (${koalas} vs ${dolphins})`)
    } else {
        console.log('There is no winner')
    }
}
let dolphinsAvg = averageTeam(44, 23, 71);
console.log(`The Average score of Dolphins Team is ${dolphinsAvg}`);
let koalasAvg = averageTeam(65, 54, 49);
console.log(`The Average score of Koalas Team is ${koalasAvg}`);

checkWinner(dolphinsAvg, koalasAvg);

dolphinsAvg = averageTeam(85, 54, 41);
console.log(`The Average score of Dolphins Team is ${dolphinsAvg}`);
koalasAvg = averageTeam(34, 23, 27);
console.log(`The Average score of Koalas Team is ${koalasAvg}`);
checkWinner(dolphinsAvg, koalasAvg);
*/
// function calctip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
// const totales = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2])];
// console.log('Las bills son: ' + bills[0] + ', ' + bills[1] + ', ' + bills[2]);
// console.log('Las tips son: ' + tips[0] + ', ' + tips[1] + ', ' + tips[2]);
// console.log('Las cuentas totales son: ' + totales[0] + ', ' + totales[1] + ', ' + totales[2])

const jonas = {
    age: 46,
    hasDriverLicense: false,
    job: 'teacher',
}

console.log(`Jonas is a ${jonas.age} years old ${jonas.job} and ${jonas.hasDriverLicense ? 'has driver license': "doesn't have driver license"}`);