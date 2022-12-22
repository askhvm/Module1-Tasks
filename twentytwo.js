let arr = [13,14,32,23,34,21,44,47,86]


function spl(array,start,end) {
    let result = array.splice(start , (end - start) + 1)
    return result
}


console.log(spl(arr,4,6))