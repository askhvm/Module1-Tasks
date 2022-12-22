    let arr = [{a: 5, b: 3, c: 4}, {a: 1, b: 3, c: 4}, {a: 4, b: 7, c: 4}, {a: 2, b: 2, c: 3}]

    const triangle = (el) => {

        let result = []

        for (let i = 0; i <= el.length - 1; i++) {
            result.push(el[i] = {p: el[i].a + el[i].b + el[i].c})
        }

        return result
        

    }

    console.log(triangle(arr))