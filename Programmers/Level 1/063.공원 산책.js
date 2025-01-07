function findStart(park) {
    const [N, M] = [park.length, park[0].length];
    
    for(let i=0; i<N; i++)
    for(let j=0; j<M; j++)
        if(park[i][j] === "S") return [i, j];
}

function check(park, op, n, s, e) {
    const [N, M] = [park.length, park[0].length];
    
    const dir = {"N":[-1, 0], "S":[1, 0], "W":[0, -1], "E":[0, 1]};
    
    const [di, dj] = dir[op];
    if(0 > s + di*n || s + di*n >= N ||
       0 > e + dj*n || e + dj*n >= M ) return [s, e];
    
    for(let k=1; k<=n; k++)
        if(park[s + di*k][e + dj*k] === "X") return [s, e];
    
    return [s + di*n, e + dj*n];
}

function solution(park, routes) {
    let answer = findStart(park);
    
    routes.forEach((command) => {
        const [op, n] = command.split(" ");
        answer = check(park, op, +n, ...answer);
    });
    
    return answer;
}
