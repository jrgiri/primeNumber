var primeNumberFromArray = [5,9,63,29,35,6,55,23]
primeNumberFromArray = primeNumberFromArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(primeNumberFromArray);