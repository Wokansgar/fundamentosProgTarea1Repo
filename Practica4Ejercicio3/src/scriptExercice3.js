import { oddNumbers, oneHundredAboveNumber } from "./functions.js";

const largeArray = parseInt (prompt("De cuantos números se compone tu Array?"));
let arrayOfNumber = [];

for (let i=1; i<=largeArray; i++) {
    let newNumber= parseInt (prompt(`Cual es el número ${i}?`));
    arrayOfNumber.push(newNumber);     
}

console.log(`La Array creada es: [${arrayOfNumber}].`);
console.log(`${oddNumbers(arrayOfNumber)} es la cantidad de números impares.`);
console.log(`${oneHundredAboveNumber(arrayOfNumber)} es la cantidad de números mayores de 100.`);