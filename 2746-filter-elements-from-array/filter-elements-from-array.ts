type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    
    let outArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {

    if(fn(arr[i], i)) outArr.push(arr[i])
    }
    return outArr
};