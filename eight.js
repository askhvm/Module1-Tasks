    let arr = [{ name: "Ivan", age: 24 }, { name: "Oleg", age: 16}, { name: "Igor", age: 24}]

    const sum = (array) => {
        return result = array.reduce((sumAge,e) => sumAge + e.age ,0)
    }

    console.log(sum(arr))