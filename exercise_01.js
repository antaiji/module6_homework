let arr = [1, 2, "something", 3, 4, null, true, 131, 0, 0];

const elementsCounter = (arr) => {
  let odd = 0;
  let even = 0;
  let zero = 0;

  for (let i of arr) {
    if (typeof i !== "number") continue;
    console.log(i);
    if (i === 0) {
      zero++;
      continue;
    }
    if (i % 2 === 0) even++;
    if (i % 2 !== 0) odd++;
  }

  console.log(
    `There are ${odd} odd numbers, ${even} even numbers and ${zero} zeros in this array`
  );
};

elementsCounter(arr);
