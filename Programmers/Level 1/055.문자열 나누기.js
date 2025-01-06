function solution(s) {
    let answer = 0, diff = 0 , same = 0, stand = "";
    s.split("").forEach(w => {
        
        if (stand === "") { stand = w; same++; }
        else if (stand === w) same++;
        else diff++;
        
        if(same === diff) { answer++; [stand, same, diff] = ["", 0, 0]; }
    })
    if(same !== 0 || diff !== 0) answer++;
    
    return answer;
}
