const arr = Array(10);
let result = "";
for (let i = 0; i < 10; i++) {
  arr[i] = [...arr].map((_, j) => ("" + i + j) ** 2);
  result += arr[i].join(" ") + "\n";
}
console.log(result);
