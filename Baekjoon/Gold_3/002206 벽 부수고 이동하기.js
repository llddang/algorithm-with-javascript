const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input.shift().split(" ").map(Number);
const map = input;

const dt = [[0, 1], [1, 0], [0, -1], [-1, 0]];

let idx = 0;
const queue = [[0, 0, 1, false]]; //  ci, cj, cost, destroyed

const visited = Array.from({length: N}, () => Array(M).fill(0));
visited[0][0] = 2;

function BFS () {
  if(N === 1 && M === 1) return 1;

  while(idx < queue.length) {
    const [ci, cj, cost, destroyed] = queue[idx++];

    for(let i=0; i<4; i++){
      const [di, dj] = dt[i];
      const ni = ci + di, nj = cj + dj;

      if(0 > ni || ni >= N || 0 > nj || nj >= M) continue;
      if(visited[ni][nj] === 2) continue;
      if(visited[ni][nj] === 1 && destroyed) continue;

      if(ni === N - 1 && nj === M - 1) return cost + 1;

      if(map[ni][nj] === '0'){ queue.push([ni, nj, cost + 1, destroyed]); visited[ni][nj] = destroyed ? 1 : 2; }
      else if(!destroyed){ queue.push([ni, nj, cost + 1, true]); visited[ni][nj] = 1; }
    }
  }

  return -1;
}

console.log(BFS());
