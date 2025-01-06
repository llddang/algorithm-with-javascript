function solution(n, m, section) {
    let coverage = 0, answer = 0;
    
    section.forEach((idx) => {
        if(coverage >= idx) return;
        coverage = idx + m - 1;
        answer++;
    });
    
    return answer;
}
