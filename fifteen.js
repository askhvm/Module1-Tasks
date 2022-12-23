const arr = [1, 2, 3, 4];

const filt = (array) => result = array.filter((num) => num % 2 == 0);

const mult = (array) => array.map((digit) => digit * 2);

const transform = (array, filt, mult) => {
  return mult(filt(array)).join("\n");
};

console.log(transform(arr, filt, mult));
