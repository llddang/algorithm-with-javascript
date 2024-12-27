function gcd(a, b) {
    return a === 0 ? b : gcd(b % a, a);
}

function solution(n, m) {
    const gcdv = gcd(Math.min(n, m), Math.max(n, m));
    return [gcdv, n * m / gcdv];
}
