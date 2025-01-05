function solution(cards1, cards2, goal) {
    let idx1 = 0, idx2 = 0;
    
    for(const word of goal) {
        if(cards1[idx1] === word){ idx1++; continue; }
        if(cards2[idx2] === word){ idx2++; continue; }
        return "No";
    }
    return "Yes";
}
