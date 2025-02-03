function solution(queue1, queue2) {
    let diff = queue1.reduce((sum, num, idx) => sum + num - queue2[idx], 0);
    
    let st1 = 0, st2 = 0, count = 0;
    const N = queue1.length;
    while(diff !== 0 && count < 3 * N) {
        if(diff < 0) {
            queue1.push(queue2[st2++]);
            diff += queue1.at(-1) * 2;
        } else {
            queue2.push(queue1[st1++]);
            diff -= queue2.at(-1) * 2;
        }
        count++;
   }
    return diff ? -1 : count;
}
