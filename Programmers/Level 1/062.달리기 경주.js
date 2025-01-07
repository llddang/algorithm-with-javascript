function solution(players, callings) {
    const scores = {};
    players.forEach((name, idx) => scores[name] = idx);
    
    callings.forEach((name) => {
        const idx = scores[name];
        [players[idx-1], players[idx]] = [players[idx], players[idx-1]];
        scores[players[idx]] = idx;
        scores[players[idx - 1]] = idx - 1;
    });
    
    return players;
}
