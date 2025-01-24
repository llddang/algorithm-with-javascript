function solution(x, y, n) {
    if(x === y) return 0;
    
    const queue = [[y, 0]];
    
    let answer = -1, idx=0;
    while(idx < queue.length){
        const [curr, count] = queue[idx++];
        
        if(curr / 2 === x || curr / 3 === x || curr - n === x) {
            answer = count + 1;
            break;
        }
        
        if(curr % 2 === 0 && curr / 2 > x) queue.push([curr / 2, count + 1]);
        if(curr % 3 === 0 && curr / 3 > x) queue.push([curr / 3, count + 1]);
        if(curr - n > x) queue.push([curr - n, count + 1]);
    }
    
    return answer;
}
