function solution(N, road, K) {
    const distance = Array(N+1).fill(Number.POSITIVE_INFINITY);
    distance[1] = 0;
    for(let i=0; i<=N; i++){
        for(let j=0; j<road.length; j++) {
            const [s, e, t] = road[j];
            distance[s] = Math.min(distance[s], t + distance[e]);
            distance[e] = Math.min(distance[e], t + distance[s]);
        }
    }
    
    return distance.filter((dis) => dis <= K).length;
}
