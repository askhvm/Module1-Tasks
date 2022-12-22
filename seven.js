    let arr = [5,10, 15, 20, 10, 25, 20, 30, 15]
    let n = 55

    const sum = (array,num) => {
        let i = 0
        let result = 0
        while (i <= array.length && result <= num){
            result += array[i]
        }
        return result
    }

    console.log(sum(arr,n))