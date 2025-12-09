function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let outArr: number[] = []
    for (let i = 0 ; i < arr.length; i++){
        outArr.push(fn(arr[i], i))
    }
    return outArr
};