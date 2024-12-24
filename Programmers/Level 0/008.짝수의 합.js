function solution(n) {
    if(n % 2 === 1) n--;
    if(n === 2) return 2;
    
    return (2 + n) * (n / 2) / 2;
}
