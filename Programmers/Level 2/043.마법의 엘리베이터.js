function solution(storey) {
    const num = storey.toString().split('').map(Number).reverse();
    num.push(0);
    
    let answer = num.reduce((acc, n, idx) => {
        if(n < 5) return acc + n;
        if(n === 5 && num[idx+1] < 5) return acc + n;
        num[idx+1]++;
        return acc + 10 - n;
    }, 0);
    
    return answer;
}
