const di = [0, 1, 0, -1];
const dj = [1, 0, -1, 0];

function BFS(ci, cj, maps, visited){
    let ans = Number(maps[ci][cj]);
    
    const c = maps.length;
    const r = maps[0].length;
    
    const queue = [[ci, cj]];
    visited[ci][cj] = true;
    
    while( queue.length ){
        const [i, j] = queue.shift();
        
        for(let k=0; k<4; k++){
            const ni = i + di[k];
            const nj = j + dj[k];
            
            if( ni < 0 || ni >= c || 
                nj < 0 || nj >= r) continue;
            
            if(visited[ni][nj] || maps[ni][nj] === 'X') continue;
            
            visited[ni][nj] = true;
            ans += Number(maps[ni][nj]);
            queue.push([ni, nj]);
        }
    }
    
    return ans;
}

function solution(maps) {
    const answer = [];
    
    const c = maps.length;
    const r = maps[0].length;
    
    const visited = Array.from({length: c}, () => Array.from({length: r}, () => false));
    
    for(let i=0; i<c; i++)
    for(let j=0; j<r; j++){
        if(visited[i][j] || maps[i][j] === 'X') continue;
        
        const days = BFS(i, j, maps, visited);
        
        answer.push(days);
    }
    
    answer.sort((a, b) => a - b);
    if(answer.length === 0) answer.push(-1);
    
    return answer;
}
