function solution(abs, signs) {
    return abs.reduce((ac, cu, i) => signs[i] ? ac + cu : ac - cu, 0);
}
