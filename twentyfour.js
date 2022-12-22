let arr = [4, 5, 2, 4, 1, 5, 3]

function sorting(array,str) {
    if (str === 'ASC') array.sort((a,b) => a - b)
    if (str === 'DESC') array.sort((a,b) => b - a)

    return array
}

console.log(sorting(arr,'ASC'))