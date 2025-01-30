function solution(order) {
    const assist = [];
    
    let answer = 0, oIdx = 0, stand = 1;
    while(oIdx < order.length) {
        if(order[oIdx] < stand && order[oIdx] !== assist.at(-1)) break;
        if(order[oIdx] === stand) {
            answer++; oIdx++; stand++;
        } else if(order[oIdx] < stand) {
            answer++; oIdx++; assist.pop();
        } else {
            for(;stand<order[oIdx]; stand++) assist.push(stand);
            stand++; answer++; oIdx++;
        }
    }
    return answer;
}
