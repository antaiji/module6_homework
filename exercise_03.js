const outerFunc = (num) => {
  let numb = num;

  return (innerFunc = (num) => {
    return num + numb;
  });
};

const separateFunc = outerFunc(3);

console.log(separateFunc(20));
