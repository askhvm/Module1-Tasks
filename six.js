const users = [
  { name: "Ivan", age: 24 },
  { name: "Oleg", age: 16 },
  { name: "Igor", age: 24 },
];

const ages = (obj) => {
  let answer = "";
  let arrName = Object.values(obj).map((user) => user.age > 18 && user.name);
  for (let i = 0; i < arrName.length; i++) {
    if (typeof arrName[i] !== "string") arrName.splice(i, 1);
    answer += arrName[i] + "\n";
  }
  return answer;
};

console.log(ages(users));
