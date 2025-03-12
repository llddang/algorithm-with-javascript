const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M, V] = input.shift().split(" ").map(Number)

const map = Array.from({length: N + 1}, () => []);

input.forEach((line) => {
  const [s, e] = line.split(" ").map(Number);
  map[s].push(e);
  map[e].push(s);
});
map.forEach(arr => arr.sort((a, b) => a - b));

const bfs = getBFS(V, map, N);
const dfs = getDFS(V, map, N);

console.log(bfs.join(" "));
console.log(dfs.join(" "));


function getBFS(V, map, N) {
  const visited = Array.from({length: N + 1}, () => false);
  const order = [];
  
  bfs(V);
  return order;

  function bfs(v) {
    visited[v] = true;
    order.push(v);

    for(const next of map[v]) {
      if(visited[next]) continue;
      bfs(next);
    }
  }
}

function getDFS(V, map, N) {
  const visited = Array.from({length: N + 1}, () => false);
  const order = [];

  dfs(V);

  return order;
  
  function dfs(V){
    const queue = [V]; 
    let idx = 0;

    while(queue.length > idx) {
      const curr = queue[idx++];
      if(visited[curr]) continue;

      visited[curr] = true;
      order.push(curr);

      for(const next of map[curr]) {
        if(visited[next]) continue;
        queue.push(next);
      }
    }
  }
}
