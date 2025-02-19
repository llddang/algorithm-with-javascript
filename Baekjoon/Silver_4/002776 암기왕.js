const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const T = +input[0];
let line = 0;

for(let _=0; _<T; _++) {
  const set = new Set(input[line+2].split(" ").map(Number)); line += 2;
  const mem = input[line+2].split(" ").map(Number); line += 2;

  const answer = mem.reduce((acc, n) => set.has(n) ? acc + "1\n" : acc + "0\n", "");
  console.log(answer.trim());
} 
