function isLater(a, b) {
  const minLen = Math.min(a.length, b.length);

  for(let i=0; i<minLen; i++) 
    if(a[i] !== b[i]) return a[i] > b[i];

  if(a.length === b.length) return false;
  if(a.length === minLen) return false;
  return true;  
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = +input[0];
const M = +input[2];

const A = input[1].split(' ').map(Number);
const B = input[3].split(' ').map(Number);

const dp = Array.from({length: N+1}, () => Array.from({length: M+1}, () => []));

for(let i=N-1; i>=0; i--)
for(let j=M-1; j>=0; j--) {
  if(A[i] === B[j]) {
    
    const newSeq = [A[i], ...dp[i+1][j+1]];

    if(isLater(newSeq, dp[i+1][j]) && isLater(newSeq, dp[i][j+1])) dp[i][j] = newSeq;
    else if(isLater(dp[i+1][j], dp[i][j+1])) dp[i][j] = dp[i+1][j];
    else dp[i][j] = dp[i][j+1];
  } else {
    if(isLater(dp[i+1][j], dp[i][j+1])) dp[i][j] = dp[i+1][j];
    else dp[i][j] = dp[i][j+1];
  }
}

const answer = dp[0][0];

console.log(answer.length);
if(answer.length) console.log(answer.join(" "));
