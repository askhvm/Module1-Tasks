let arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]

function conc(array) {

    return array.filter((e,i) => i % 2 == 0)
}

console.log(conc(arr))