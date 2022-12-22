    let arr = [{ from: "Ivan", to: "Oleg", amount: 2500}, { from: "Ivan", to: "Igor", amount: 2000}, { from: "Oleg", to: "Igor", amount: 1500}]
    let diff = arr.reduce((acc,e) => e.amount + acc ,0) / arr.length

    const avg = (array,average) => {
        
        let arrOfAvg = array.map((e,i) => e.diff = e.amount - average)

        for (let i = 0; i <= array.length - 1; i++) {
            array[i] = {
                ...array[i],
                diff: arrOfAvg[i]
            }
        }

        console.log(arrOfAvg)

        return array
    }

    console.log(diff,avg(arr,diff))