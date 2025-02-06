function solution(k, d) {
    let answer = 0;
    for(let i=0; i<=d; i+=k) {
        const sqrt = Math.sqrt(d*d - i*i);
        const count = Math.floor(sqrt / k) + 1;
        answer += count;
    }
    return answer;
}
