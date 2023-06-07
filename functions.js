// Genera una lista de números aleatorios entre 1 y 100
function generateRandomNumbers(count) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
  return numbers;
}

// Encuentra el número máximo en la lista
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Encuentra el número mínimo en la lista
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// Calcula la sumatoria de los números en la lista
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Ordena la lista de números de menor a mayor utilizando el algoritmo de selección
function sortNumbers(numbers) {
  const sortedNumbers = [...numbers];
  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < sortedNumbers.length; j++) {
      if (sortedNumbers[j] < sortedNumbers[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = sortedNumbers[i];
      sortedNumbers[i] = sortedNumbers[minIndex];
      sortedNumbers[minIndex] = temp;
    }
  }
  return sortedNumbers;
}

module.exports = {
  generateRandomNumbers,
  findMax,
  findMin,
  calculateSum,
  sortNumbers
};
