const arrOfStr = ["one", "two", "three"];

const showStr = (array) => {
  while (array.length > 0) {
    console.log(array.pop());
  }
};

console.log(showStr(arrOfStr));
