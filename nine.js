    let arr = [{ name: "Ivan", age: 24 }, { name: "Oleg", age: 16}, { name: "Igor", age: 24}]

    const range = (array) => {
        let min = Math.min(...array.map(e => e.age))
        let max = Math.max(...array.map(e => e.age))
        
        return {min, max}
    }

    console.log(range(arr))