const arr = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 },
];

const range = (array) => {
  const ages = array.map((user) => user.age);
  for (let i = 0; i <= ages.length; i++) {
    if (ages[i] > ages[i + 1]) {
      max = ages[i];
      min = ages[i + 1];
    } else if (ages[i] < ages[i + 1]) {
      min = ages[i];
      max = ages[i + 1];
    }
  }
  return { min, max };
};
console.log(range(arr));
