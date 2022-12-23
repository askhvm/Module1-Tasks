let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [6, 7];

function arrConcate(first, second, third) {
  let empty = [];
  let final = empty.concat(...arguments)
  return final;
}

console.log(arrConcate(arr, arr2, arr3));
