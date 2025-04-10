function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  const arr: string[] = s.split("");
  for (let i = 0; i < arr.length; i++) {
    const current = romanMap[arr[i]];
    const next = romanMap[arr[i+1]];

    if (current < next) {
      res -= current;
    } else {
      res += current;
    }
  }
  return res;
}