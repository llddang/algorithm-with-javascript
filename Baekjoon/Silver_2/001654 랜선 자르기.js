const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input.shift().split(" ").map(Number);
const wires = input.map(Number);

const sum = wires.reduce((acc, num) => acc + num);
let st = 1, en = Math.floor(sum / N), mid;
let answer = 0;

while(st <= en) {
  mid = Math.floor((st + en) / 2);
  const count = wires.reduce((acc, num) => acc + Math.floor(num / mid), 0);
  if(count >= M) { st = mid + 1; answer = Math.max(answer, mid); }
  if(count < M) en = mid - 1;
}
console.log(answer);
