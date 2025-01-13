function isPrime(num) {
    if (num <= 1) return false;
    
    const sqr = Math.sqrt(num);
    for(let i=2; i<=sqr; i++) 
        if(num % i === 0) return false;
    return true;
}

function solution(n, k) {
    return n.toString(k).split('0').filter(x => isPrime(+x)).length;
}
