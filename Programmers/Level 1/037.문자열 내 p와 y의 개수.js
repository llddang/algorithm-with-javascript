function solution(s){
    const a = s.toLowerCase();
    
    let p = 0, y = 0;
    a.split("").forEach((e) => e === 'p' ? p++ : e === 'y' && y ++);
    
    return p === y;
}
