const primeChecker = (num) => {
  if (num > 1000 || num === 1 || num === 0) {
    console.log("Entered value is incorrect");
  }

  if (num === 2) {
    console.log(`Number ${num} is prime`);
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`Number ${num} is not prime`);
      return;
    }
  }

  console.log(`Number ${num} is prime`);
};

primeChecker(103);
