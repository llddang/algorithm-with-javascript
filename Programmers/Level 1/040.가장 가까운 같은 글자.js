function solution(s) {
    const alphabets = new Map();
    
    return s.split("").map((e, idx) => {
        const prevIdx = alphabets.get(e);
        alphabets.set(e, idx);
        return prevIdx === undefined ? -1 : idx - prevIdx;
    });
}
