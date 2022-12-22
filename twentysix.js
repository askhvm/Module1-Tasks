let arr = [1,2,3]

function another(array,a,b) {
    let second = []
    for (let i = 1; i < arguments.length; i++) {
        second.push(arguments[i])
    }
    return array.concat(second)
}

console.log(another(arr,4,5))