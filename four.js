    let n = 7

    const fib = (num) => {

        let arr = [0,1]

        for (let i = 2; i < num; i++) {
            arr[i] = arr[i - 2] + arr[i - 1]
        }

        return arr
    }

    console.log(fib(n))