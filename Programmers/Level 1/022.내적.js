function solution(a, b) {
    return a.reduce((ac, cu, i) => ac + cu * b[i], 0);
}
