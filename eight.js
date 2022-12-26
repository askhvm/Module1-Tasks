const arr = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 },
];

const sum = (array) => {
  return (result = array.reduce((prev, next) => prev + next.age, 0));
};

console.log(sum(arr));
