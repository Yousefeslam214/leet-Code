
function climbStairs(n: number): number {
    if (n <= 2) return n;

    let prev1 = 1, prev2 = 2, current = 0;
    for (let i = 3; i <= n; i++){
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current
        console.log(prev2)
    }

    // const recursiveClimb = (n: number): number => {
    //     if (n <= 2) return n;
    //     return recursiveClimb(n - 1) + recursiveClimb(n - 2);
    // };
    // return (recursiveClimb(n));

    return current;
};
