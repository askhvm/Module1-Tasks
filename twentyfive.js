const str = "find_and_replace_element_of_array";

function camel(first) {
  let result = "";
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== "_" && first[i - 1] !== "_") result += first[i];
    if (first[i - 1] === "_") result += "\n" + first[i].toUpperCase();
  }
  return result;
}
console.log(camel(str));
