function jump(n) {
    if(n === 1) return 1;
    
    let [a, b] = [1, 1];
    for(let _=2; _<=n; _++) {
        [a, b] = [b, (a + b) % 1234567];
    }
    return b;
}

function solution(n) {
    return jump(n);
}
