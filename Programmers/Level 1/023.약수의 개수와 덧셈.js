function count (n) {
    return Array(n).fill(1).reduce((a, c, i) => n % (i+1) === 0 ? a + 1 : a, 0);
}

function solution(left, right) {
    return Array(right - left + 1).fill(1).reduce((a, c, i) => count(left + i) % 2 === 0 ? a + left + i : a - left - i, 0);
}
