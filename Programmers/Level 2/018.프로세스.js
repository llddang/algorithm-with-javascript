function solution(priorities, location) {
    let queue = priorities.map((p, idx) => ({p, me: idx === location}));
    
    let answer = 1;
    while(1){
        const maxIdx = queue.reduce((acc, v, idx) => v.p > queue[acc].p ? idx : acc, 0);
        
        if(queue[maxIdx].me) break;
        
        queue = [...queue.slice(maxIdx+1), ...queue.slice(0, maxIdx) ];
        answer++;
    }
    
    return answer;
}
