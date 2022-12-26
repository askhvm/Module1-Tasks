const arr = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [6, 7];

function arrConcate(first, second, third) {
  const empty = [];
  const final = empty.concat(...arguments)
  return final;
}

console.log(arrConcate(arr, arr2, arr3));
