function solution(numbers) {
    return 45 - numbers.reduce((ac, cu) => ac + cu, 0);
}
