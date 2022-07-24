import { dicesDoble, averageOfArray } from "./function.js";

let arrayOfResultsDices = [];

for (let i=0; i<=6000-1; i++){
    arrayOfResultsDices.push (dicesDoble(i));    
}

console.log(arrayOfResultsDices);
console.log(`la media del vector es: ${averageOfArray(arrayOfResultsDices)}`);