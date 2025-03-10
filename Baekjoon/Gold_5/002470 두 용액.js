const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number).sort((a, b) => a - b);

let l = 0, r = N - 1;
let ans = [nums[l], nums[r]], min = Math.abs(nums[l] + nums[r]);
while(l < r) {
  const sum = nums[l] + nums[r];
  const abs = Math.abs(sum);
  if(abs < min) {
    ans = [nums[l], nums[r]];
    min = abs;
  }

  if(sum > 0) r--;
  else if(sum < 0) l++;
  else break;
}

console.log(ans.join(" "));
