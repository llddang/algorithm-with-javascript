const queue = [];

function isPrimeNumber(num) {
    if(num < 2) return false;
    if(num !== 2 && num % 2 === 0) return false;
    
    const sqrt = Math.sqrt(num); 
    for(let i=3; i<=sqrt; i+=2) 
        if(num % i === 0) return false;
    return true;
}

function makeNumbers(num, visited, res) {
    if(res.length === visited.length) return;
    
    for(let i=0; i<visited.length; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        queue.push(res + num[i]);
        makeNumbers(num, visited, res + num[i]);
        visited[i] = false;
    }
    return;
}

function solution(numbers) {
    const num = numbers.split("");
    
    makeNumbers(num, Array(num.length).fill(false), "");
    
    let st = 0;
    const answer = new Set();
    while(st < queue.length) {
        const n = +queue[st++];
        if(isPrimeNumber(n)) answer.add(n);
    }
    return answer.size;
}
