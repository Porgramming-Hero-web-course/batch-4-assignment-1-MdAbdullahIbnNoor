{
    const removeDuplicates = (arr: number[]) : number[] => {
        let uniqueArray : number[] = []

        arr.forEach(item => {
            if(!uniqueArray.includes(item))
                uniqueArray.push(item)
        })

        return uniqueArray
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}