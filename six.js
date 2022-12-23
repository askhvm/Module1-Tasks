const users = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 },
];

const ages = (obj) => {
  let result = "";
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].age > 18) result += obj[i].name + "\n";
  }

  return result;
};

console.log(ages(users));
