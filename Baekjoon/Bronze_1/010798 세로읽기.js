const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = input.length;
const maxLength = input.reduce((max, str) => Math.max(max, str.length), 0);

let answer = "";
for(let j=0; j<maxLength; j++)
for(let i=0; i<N; i++) 
  if(input[i].length <= j) continue;
  else answer += input[i][j];

console.log(answer);
