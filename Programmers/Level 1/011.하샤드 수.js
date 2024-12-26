function solution(x) {
    const sum = x.toString().split("").reduce((ac, cu) => ac + +cu, 0);
    return x % sum === 0;
}
