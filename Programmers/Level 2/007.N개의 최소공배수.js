function gcd(a, b) {
    while(b !== 0) [a, b] = [b, a % b];
    return a;
}

function lcm(a, b) {
    return a * b / gcd(a, b)
}

function solution(arr) {
    return arr.reduce((g, a) => lcm(g, a), arr[0]);
}
