function solution(wallpaper) {
    let answer = [];
    wallpaper.forEach((column, i) => column.split("").forEach((e, j) => {
        if(e !== "#") return;
        
        if(answer.length === 0) answer = [i, j, i+1, j+1];
        else answer = [Math.min(answer[0], i), Math.min(answer[1], j), Math.max(answer[2], i+1), Math.max(answer[3], j+1)]; 
    }));
    return answer;
}
