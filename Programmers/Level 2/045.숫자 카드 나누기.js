function gcd(a, b) {
    if (a < b) [a, b] = [b, a];
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}

function getDivisors(num) {
    const divisors = new Set();
    const sqrt = Math.sqrt(num);
    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) {
            divisors.add(i);
            divisors.add(num / i);
        }
    }
    return Array.from(divisors).sort((a, b) => b - a);
}

function getAnswer(divisors, array) {
    for(let s of divisors) {
        const res = array.every((n) => Math.floor(n / s) !== n / s);
        if(res) return s;
    }
    return 0;
}

function solution(arrayA, arrayB) {
    const gcdA = arrayA.reduce((acc, num) => gcd(num, acc));
    const gcdB = arrayB.reduce((acc, num) => gcd(num, acc));
    
    const divisorsA = getDivisors(gcdA);
    const divisorsB = getDivisors(gcdB);
    
    const ansA = getAnswer(divisorsA, arrayB);
    const ansB = getAnswer(divisorsB, arrayA);
    
    return Math.max(ansA, ansB);
}
