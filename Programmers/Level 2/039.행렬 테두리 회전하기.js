function rotate(query, map) {
    const [si, sj, ei, ej] = query.map(n => n - 1);
    
    let min = Number.POSITIVE_INFINITY;
    const first = map[si][sj];
    for(let i=si; i<ei; i++){ min = Math.min(min, map[i][sj]); map[i][sj] = map[i+1][sj]; }
    for(let j=sj; j<ej; j++){ min = Math.min(min, map[ei][j]); map[ei][j] = map[ei][j+1]; }
    for(let i=ei; i>si; i--){ min = Math.min(min, map[i][ej]); map[i][ej] = map[i-1][ej]; }
    for(let j=ej; j>sj; j--){ min = Math.min(min, map[si][j]); map[si][j] = map[si][j-1]; }
    map[si][sj+1] = first;
    return min;
}

function solution(rows, columns, queries) {
    const map = Array.from({length: rows}, 
                           (_, i) => Array.from({length: columns}, (_, j) => (i*columns + j + 1)));
    
    return queries.map(query => rotate(query, map));
}
