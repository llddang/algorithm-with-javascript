function solution(n) {
    const sqr = Math.sqrt(n);
    if(sqr === ~~sqr) return (sqr + 1) ** 2;
    return -1;
}
