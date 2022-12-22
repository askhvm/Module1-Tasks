let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function another(array) {
    let result = array.join(',')
    return result.split(',')
}

console.log(another(arr))