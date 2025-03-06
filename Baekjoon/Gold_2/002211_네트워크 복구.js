class PriorityQueue {
  constructor(compareFn) {
    this.array = [0];
    this.compareFn = compareFn || ((a, b) => a - b);
  }

  push(n) {
    this.array.push(n);
    this.bubbleUp(this.array.length - 1);
    return this.array;
  }

  pop() {
    if (this.array.length === 1) return undefined;
    const response = this.array[1];
    if(this.array.length === 2) this.array.pop();
    else this.array[1] = this.array.pop();
    this.bubbleDown(1);
    return response;
  }

  bubbleUp(currIdx){
    let parentIdx = Math.floor(currIdx / 2);
    while(parentIdx < 0 && this.compareFn(this.array[parentIdx], this.array[currIdx]) > 0) {
      [this.array[parentIdx], this.array[currIdx]] = [this.array[currIdx], this.array[parentIdx]];
      currIdx = parentIdx;
      parentIdx = Math.floor(currIdx / 2);
    }
  }

  bubbleDown(currIdx) {
    let leftChildIdx, rightChildIdx, cIdx;

    while(true) {
      leftChildIdx = currIdx * 2;
      rightChildIdx = currIdx * 2 + 1;
      cIdx = currIdx;

      if(leftChildIdx < this.array.length && this.compareFn(this.array[currIdx], this.array[leftChildIdx]) > 0) currIdx = leftChildIdx;
      if(rightChildIdx < this.array.length && this.compareFn(this.array[currIdx], this.array[rightChildIdx]) > 0) currIdx = rightChildIdx;
    
      if(cIdx === currIdx) break;
      [this.array[currIdx], this.array[cIdx]] = [this.array[cIdx], this.array[currIdx]];
    }
  }

  empty(){
    return this.array.length === 1;
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input.shift().split(" ").map(Number);

const wires = Array.from({length: N + 1}, () => []);

for(const wire of input) {
  const [s, e, t] = wire.split(" ").map(Number);
  wires[s].push([e, t]);
  wires[e].push([s, t]);
}

wires.forEach((wire) => wire.sort((a, b) => a[1] - b[1]));

const pq = new PriorityQueue((a, b) => a[1] - b[1]);
pq.push([1, 0]);
const times = Array.from({length: N + 1}, () => Infinity);
times[1] = 0
const parents = Array.from({length: N + 1}, () => -1);

while(!pq.empty()) {
  const [node, time] = pq.pop();

  wires[node].forEach(([next, t]) => {
    if( times[next] <= t + time ) return;
    pq.push([next, t + time]);
    times[next] = t + time;
    parents[next] = node;
  });
}

const answer = [];
parents.forEach((n, i) => {if(n !== -1) answer.push([i, n])});

console.log(answer.length);
console.log(answer.map((a) => a.join(" ")).join("\n"));
