const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input.shift().split(" ").map(Number);

const answer = input.map(str => str.split("").reverse().join(""));
console.log(answer.join("\n"));
