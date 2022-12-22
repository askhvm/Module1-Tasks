let arr = ["aaa", "bbb", "ccc", "aaa", "bbb", "aaa"]

function unique(array) {
    let unic = array.filter((e, i, ar) => ar.indexOf(e) === i)

    let amount = array.reduce((acc, val) =>
        (acc[val] = (acc[val] || 0) + 1, acc), {})
    
    let vals = Object.values(amount)
    let result = []

    for (let i = 0; i < unic.length; i++) {
        result[i] = unic[i] + ' ' + vals[i]
    }
    
    return result.join('\n')
}

console.log(unique(arr))


