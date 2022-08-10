const numPrinter = (a, b) => {
  let n = a;

  const myInterval = setInterval(() => {
    if (n === b) {
      console.log(n);
      return clear();
    }

    if (n < b) {
      console.log(n);
      n += 1;
      return;
    }

    if (n > b) {
      console.log(n);
      n -= 1;
      return;
    }
  }, 1000);

  function clear() {
    clearInterval(myInterval);
  }
};

numPrinter(5, 8);
