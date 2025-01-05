function solution(a, b, n) {
    let answer = 0;
    while(n >= a) {
        const newCola = Math.floor(n / a) * b;
        answer += newCola;
        n = n % a + newCola;
    }
    return answer;
}
