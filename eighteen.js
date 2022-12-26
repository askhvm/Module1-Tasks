const name = "Иванов Пётр Андреевич";

const objected = (fullName) => {
  const arrOfString = [];
  let names = "";
  for (let i = 0; i <= fullName.length; i++) {
    names += fullName[i];
    if (fullName[i] === " " || i === fullName.length - 1) {
      arrOfString.push(names);
      names = "";
    }
  }
  return {
    first_name: arrOfString[1],
    last_name: arrOfString[0],
    patronymic_name: arrOfString[2],
  };
};

console.log(objected(name));
