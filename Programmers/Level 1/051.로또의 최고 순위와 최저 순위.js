function solution(lottos, win_nums) {
    const zero = lottos.filter((s) => s === 0).length;
    const matches = lottos.filter((s) => win_nums.indexOf(s) !== -1).length;
    
    return [Math.min(6, 7 - matches - zero), Math.min(6, 7 - matches)];
}
