const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = +input.shift();
const ans = input.map((line) => {
  const [repeat, str] = line.split(" ");
  return str.split("").map(c => c.repeat(+repeat)).join("");
})

console.log(ans.join("\n"));
