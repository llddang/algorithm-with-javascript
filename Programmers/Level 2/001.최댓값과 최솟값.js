function solution(s) {
    const n = s.split(" ").map(Number);
    
    return [Math.min(...n), Math.max(...n)].join(" ");
}
