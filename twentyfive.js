let name = "Иванов Пётр Андреевич";

const objected = (fullName) => {
  let i = 0;
  let strNames = "";
  const arrOfStrings = [];
  for (let i = 0; i <= fullName.length - 1; i++) {
    if (fullName[i] !== " ") strNames += fullName[i];
    if (fullName[i] === " " || i === fullName.length - 1) {
      arrOfStrings.push(strNames);
      strNames = "";
    }
  }

  return {
    first_name: arrOfStrings[1],
    last_name: arrOfStrings[0],
    patronymic_name: arrOfStrings[2],
  };
};

console.log(objected(name));
