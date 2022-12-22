let name = "Иванов Пётр Андреевич";

const objected = (fullName) => {
  let eachOfName = fullName.split(" ");
  const obj = {
    first_name: eachOfName[1],
    last_name: eachOfName[0],
    patronymic_name: eachOfName[2],
  };
  return obj;
};

console.log(objected(name));
