let numberFirst = parseInt (prompt("Escoge el primer número que desee comparar:"));
let numberSecond = parseInt (prompt("Escoge el segundo número que desee comparar:"));;
let largestNumber;

while (numberFirst == numberSecond) {
    numberSecond = parseInt (prompt("Son iguales!! Escoge de nuevo el segundo número:"));
}
numberFirst>numberSecond? largestNumber = numberFirst : largestNumber = numberSecond;
console.log (`El mayor de ambos números es el ${largestNumber}`);