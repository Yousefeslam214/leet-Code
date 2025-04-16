function plusOne(digits: number[]): number[] {
    let str = ""
    for (let i = 0; i < digits.length; i++) {
        str += digits[i].toString();
    }
    let out = BigInt(str) + BigInt(1)
    return (out.toString().split("").map(Number));
    
};

console.log(plusOne([9]))