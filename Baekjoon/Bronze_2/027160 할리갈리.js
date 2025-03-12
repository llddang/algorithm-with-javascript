const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input.shift());
const map = {};

input.forEach((line) => {
  const [type, n] = line.split(" ");
  map[type] = map[type] ? map[type] + Number(n) : Number(n);
})

const answer = Object.values(map).some((n) => n === 5);
console.log(answer ? "YES" : "NO")
