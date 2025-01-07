function solution(n, left, right) {
    const answer = [];
    
    for(let idx=left; idx<=right; idx++) {
        const i = Math.floor(idx / n);
        const j = idx - i * n;
        
        answer.push(Math.max(i+1, j+1));
    }
    
    return answer;
}
