const operation = (first, second, sign) => {
  let result = "";

  switch (sign) {
    case "*":
      result = first * second;
      break;
    case "/":
      result = first / second;
      break;
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "^":
      result = Math.pow(first, second);
      break;
    default:
      result = "Нет такой операции";
  }

  return result;
};

console.log(operation(2, 3, "^"));
