const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, _] = input.shift().split(" ").map(Number);
const edges = input.map((row) => row.split(" ").map(Number));

const time = Array.from({length: N + 1}, () => Infinity);
time[1] = 0;

for(let n=1; n<=N; n++){
  for(const [s, e, t] of edges) {
    if(n === N && time[e] > time[s] + t) return console.log(-1);
    time[e] = Math.min(time[e], time[s] + t);
  }
}

time.slice(2).map((v) => v === Infinity ? -1 : v).forEach(v => console.log(v));
