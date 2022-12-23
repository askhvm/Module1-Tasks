let arr = ["str", 123, "123", true, null, {}, 2];

const response = (array) => {
  for (let i = 0; i < array.length; i++) {
    switch (typeof array[i]) {
      case "string":
        array[i] = "Это строка";
        break;
      case "number":
        array[i] = "Это число";
        break;
      case "boolean":
        array[i] = "Это булево значение";
        break;
      default:
        array[i] = "Неизвестное значение";
    }
  }

  return array.join("\n");
};

console.log(response(arr));
