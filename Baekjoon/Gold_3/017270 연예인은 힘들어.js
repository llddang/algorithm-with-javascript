const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input.shift().split(" ").map(Number);
const [J, S] = input.pop().split(" ").map(Number);
const map = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => Infinity));

input.forEach((path) => {
  const [s, e, t] = path.split(" ").map(Number);
  map[s][e] = Math.min(map[s][e], t);
  map[e][s] = Math.min(map[e][s], t);
});

for(let m=1; m<=N; m++){
  map[m][m] = 0;

  for(let s=1; s<=N; s++)
  for(let e=1; e<=N; e++) {
    map[s][e] = Math.min(map[s][e], map[s][m] + map[m][e]);
  }
}

let sum = Infinity;
let candidate = [];

for(let i=1; i<=N; i++) {
  if(i === J || i === S) continue;

  let s = map[J][i] + map[i][S];
  if(s < sum) {
    sum = s;
    candidate = [];
  }
  if( s === sum && map[J][i] <= map[i][S] )
    candidate.push([i, map[J][i]]);
}

candidate.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
if(candidate.length === 0) console.log(-1);
else console.log(candidate[0][0]);
