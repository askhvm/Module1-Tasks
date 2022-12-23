const arr = ["aaa", "bbb", "ccc", "aaa", "bbb", "aaa"];

function unique(array) {
  const unic = array.filter((e, i, ar) => ar.indexOf(e) === i);

  const amount = array.reduce(
    (acc, val) => ((acc[val] = (acc[val] || 0) + 1), acc),
    {}
  );

  const vals = Object.values(amount);
  const result = [];

  for (let i = 0; i < unic.length; i++) {
    result[i] = unic[i] + " " + vals[i];
  }

  return result.join("\n");
}

console.log(unique(arr));


