const arr = [
  { from: "Ivan", to: "Oleg", amount: 2500 },
  { from: "Ivan", to: "Igor", amount: 2000 },
  { from: "Oleg", to: "Igor", amount: 1500 },
];

let arrOfAmount = arr.map((amo) => amo.amount);
let diff = 0;
for (let i = 0; i <= arrOfAmount.length - 1; i++) {
  diff += arrOfAmount[i];
}

diff /= arrOfAmount.length;

const avg = (array, average) => {
  const arrOfAvg = array.map(
    (element, index) => (element.diff = element.amount - average)
  );

  for (let i = 0; i <= array.length - 1; i++) {
    array[i] = {
      ...array[i],
      diff: arrOfAvg[i],
    };
  }

  return array;
};

console.log(diff, avg(arr, diff));
