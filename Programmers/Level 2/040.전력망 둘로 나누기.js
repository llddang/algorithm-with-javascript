function solution(n, wires) {
    const graph = Array.from({length: n + 1}, () => []);
    for(const edge of wires) {
        const v1 = edge[0];
        const v2 = edge[1];
        
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    const parent = Array.from({length: n + 1}, () => -1);
    const queue = [1];
    
    for(let i=0; i<queue.length; i++){
        const e = queue[i];
        for(const v of graph[e]){
            if(v === parent[e]) continue;
            
            parent[v] = e;
            queue.push(v);
        }
    }
    
    let ans = n;
    
    const dp = Array.from({length: n + 1}, () => 1);
    for(let i=queue.length - 1; i > 0; i--){
        const v = queue[i];
        dp[parent[v]] += dp[v];
        
        const diff = Math.abs(n - 2 * dp[v]);
        ans = Math.min(diff, ans);
    }
    
    return ans;
}
