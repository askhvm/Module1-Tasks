const arrOfNums = Array(10);
let multTable = "";
for (let i = 0; i < 10; i++) {
  arrOfNums[i] = [...Array(10)].map((_, j) => i * j);
  multTable += arrOfNums[i].join(" ") + "\n";
}
console.log(multTable);
