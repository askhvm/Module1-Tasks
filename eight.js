const arr = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 },
];

const sum = (array) => {
  return (result = array.reduce((acc, curr) => acc + curr.age, 0));
};

console.log(sum(arr));
