function readInput() {
  const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
  const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);
 
  const fruitCount = +input[0];
  const fruitTypes = input[1].split(" ").map(Number);
 
  return { fruitCount, fruitTypes };
}
 
function findMaxTanghuruLength(fruitTypes) {
  let maxLength = 0;
  let left = 0;
  const typeCount = new Map();
 
  for (let right = 0; right < fruitTypes.length; right++) {
    const currentType = fruitTypes[right];
 
    typeCount.set(currentType, (typeCount.get(currentType) || 0) + 1);
 
    while (typeCount.size > 2) {
      const leftType = fruitTypes[left];
      const leftCount = typeCount.get(leftType);
 
      if (leftCount === 1) typeCount.delete(leftType);
      else typeCount.set(leftType, leftCount - 1);
 
      left++;
    }
 
    maxLength = Math.max(maxLength, right - left + 1);
  }
 
  return maxLength;
}
 
const { fruitTypes } = readInput();
const result = findMaxTanghuruLength(fruitTypes);
console.log(result);
