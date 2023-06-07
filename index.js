const { generateRandomNumbers, findMax, findMin, calculateSum, sortNumbers } = require('./functions');

const numbers = generateRandomNumbers(20);

console.log('Lista de números generados:', numbers);
console.log('Número mayor:', findMax(numbers));
console.log('Número menor:', findMin(numbers));
console.log('Sumatoria de los números:', calculateSum(numbers));
console.log('Lista ordenada de menor a mayor:', sortNumbers(numbers));
