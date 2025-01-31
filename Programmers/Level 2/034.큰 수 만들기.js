function solution(number, k) {
    const accNumbers = [];

    for (let n of number) {
        n = Number(n);

        while (k > 0 && accNumbers.at(-1) < n) {
            accNumbers.pop();
            k--;
        }
        accNumbers.push(n);
    }

    if (k > 0) accNumbers.splice(-k);

    return accNumbers.join("");
}
