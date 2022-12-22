let arr = [1, 2, 3, 4];

const filt = (array) => {
  let result;
  result = array.filter((e) => e % 2 == 0);
  return result;
};

const mult = (array) => array.map((e) => e * 2);

const transform = (array, filt, mult) => {
  return mult(filt(array)).join("\n");
};

console.log(transform(arr, filt, mult));
