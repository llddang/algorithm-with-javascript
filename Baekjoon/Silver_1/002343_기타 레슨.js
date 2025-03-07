const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const times = input[1].split(" ").map(Number);

let s = Math.max(...times);
let e = times.reduce((acc, time) => acc + time);
let m;

while(s <= e) {
  m = Math.floor((s + e) / 2);

  const cnt = getOverlayCount(m);
  if(cnt <= M) e = m - 1;
  else s = m + 1;
}
console.log(s);


function getOverlayCount(standTime) {
  let count = 1, sum = 0;
  for(const time of times) {
    if(sum + time > standTime) {
      sum = 0;
      count++;
    }
    sum += time
  }
  return count;
}
