const users = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 },
];

const ages = (obj) =>
  Object.values(obj)
    .map((user) => user.age > 18 && user.name)
    .filter((item) => typeof item === "string")
    .join("\n");

console.log(ages(users));
