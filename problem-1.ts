{
    const sumArray = (arr: number[]): number => {
        let sum = 0

        arr.forEach(item => {
            sum += item
        })

        return sum

    }


    let solution = sumArray([1, 2, 3, 4, 5])
    console.log(solution);
}