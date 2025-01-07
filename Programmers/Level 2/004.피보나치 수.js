function fibonacci (n) {
    let [a, b] = [0, 1];
    
    for(let _=2; _<n + 1; _++)
        [a, b] = [b, (a + b) % 1234567];
    
    return b;
}

function solution(n) {
    return fibonacci(n);
}
