const numberFirst = parseInt (prompt("Escoge el primer número que desee comparar:"));
const numberSecond = parseInt (prompt("Escoge el segundo número que desee comparar:"));
let largestNumber;

numberFirst>numberSecond? largestNumber = numberFirst : largestNumber = numberSecond;
console.log (`El mayor de ambos números es el ${largestNumber}`);