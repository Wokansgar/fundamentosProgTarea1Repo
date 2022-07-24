function oddNumbers(array){
	let selectNumber = 0;
	for(let i=0; i<=array.length-1; i++){
	if (array[i] % 2 != 0) selectNumber++;
	}
return (selectNumber);
}

function oneHundredAboveNumber(array) {
	let hundredNumber = 0;
	for(let i=0; i<=array.length-1; i++){
	if (array[i] > 100) hundredNumber++;
	}
return (hundredNumber);
}
export { oddNumbers, oneHundredAboveNumber };


 

