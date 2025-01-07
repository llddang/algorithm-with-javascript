function solution(n, left, right) {
    const answer = [];
    const [s, e] = [Math.floor(left/n), Math.floor(right/n)];
    
    for(let i=s; i<=e; i++) 
    for(let j=0; j<n; j++) {
        if(left > i * n + j || i * n + j > right) continue;

        answer.push(Math.max(i+1, j+1));
    }   
    
    return answer;
}
