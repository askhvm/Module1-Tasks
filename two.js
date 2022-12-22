let arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]


function conc(array) {
    let another = []

    for (let i = 0; i <= array.length - 1; i = i + 2){
        another.push(arr[i])
    }


    return another
}

console.log(conc(arr))
