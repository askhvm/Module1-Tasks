let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [6, 7];

function arrConcate(first, second, third) {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    result.push(arguments[i]);
  }
  return result.flat();
}

console.log(arrConcate(arr, arr2, arr3));
