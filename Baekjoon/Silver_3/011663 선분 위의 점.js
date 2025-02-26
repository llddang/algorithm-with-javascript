const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, _] = input.shift().split(" ").map(Number);
const dots = input.shift().split(" ").map(Number).sort((a, b) => a - b);

const result = [];
for(const line of input) {
  const l = line.split(" ").map(Number);
  const [st, en] = l.map(find);

  if(l[1] === dots[en]) result.push(en - st + 1);
  else result.push(en - st);
}
console.log(result.join("\n"));

function find(goal) {
  let st = 0, en = N - 1, mid;
  while(st <= en) {
    mid = Math.floor((st + en) / 2);

    if (goal > dots[mid]) st = mid + 1;
    else if(goal < dots[mid]) en = mid - 1; 
    else return mid;
  }
  return st;
}
