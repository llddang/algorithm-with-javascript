function permutation(k, routes, dungeons) {
    if(routes.length === dungeons.length) return routes.length;
    
    let answer = routes.length;
    for(let i=0; i<dungeons.length; i++){
        if(routes.includes(i)) continue;
        if(k < dungeons[i][0]) continue;
        
        routes.push(i);
        const t = permutation(k - dungeons[i][1], routes, dungeons);
        answer = Math.max(answer, t);
        routes.pop(i);
    }
    return answer;
}

function solution(k, dungeons) {
    return permutation(k, [], dungeons);
}
