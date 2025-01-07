function solution(citations) {
    citations.sort((a, b) => b - a);
    
    for(const idx in citations) {
        if(+idx + 1 >= citations[idx]) return Math.max(+idx, citations[idx]);
    }
    return citations.length;
}
