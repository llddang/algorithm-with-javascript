const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);

let answer = 0;

numbers.forEach((num, idx) => {
  let left = 0, right = N-1;

  while(left < right) {
    if(left === idx) { left++; continue; }
    if(right === idx) { right--; continue; }
    
    const sum = numbers[left] + numbers[right];
    if (sum < num) left++;
    else if (sum > num) right--;
    else {
      answer++;
      break;
    }
  }
})

console.log(answer);
