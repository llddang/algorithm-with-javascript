function solution(X, Y) {
    const x = Array.from({length: 10}, () => 0);
    const y = Array.from({length: 10}, () => 0);
    
    X.split("").map((e) => x[+e]++);
    Y.split("").map((e) => y[+e]++);
    
    let answer = "";
    
    for(let i=9; i>=0; i--) {
        let min = Math.min(x[i], y[i]);
        if(answer === "" && i === 0) min = Math.min(1, min);
        answer += i.toString().repeat(min);
    }
    
    return answer === "" ? "-1" : answer;
}
