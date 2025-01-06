function solution(s, skip, index) {
    const key = "abcdefghijklmnopqrstuvwxyz".split("");
    
    skip.split("").forEach(char => key.splice(key.indexOf(char), 1));
    
    return s.split("").map(char => {
        const idx = key.indexOf(char);
        const newIdx = (idx + index) % key.length;
        
        return key[newIdx];
    }).join("");
}
