class PriorityQueue {
   constructor(compareFn) {
    this.arr = [ -1 ];
    this.compareFn = compareFn || ((a, b) => a - b);
   };

   push(n) {
    this.arr.push(n);
    this.bubbleUp(this.arr.length - 1);
   }

   pop() {
    if(this.arr.length === 1) return undefined;
    const ans = this.arr[1];
    const last = this.arr.pop();
    if(this.arr.length !== 1) {
      this.arr[1] = last;
      this.bubbleDown(1);
    }
    return ans;
   }

   bubbleUp(cIdx) {
    let pIdx = Math.floor(cIdx / 2);
    while(pIdx > 0 && this.compareFn(this.arr[pIdx], this.arr[cIdx]) > 0) {
      [this.arr[pIdx], this.arr[cIdx]] = [this.arr[cIdx], this.arr[pIdx]];
      cIdx = pIdx;
      pIdx = Math.floor(cIdx / 2);
    }
   }

   bubbleDown(cIdx) {
    let leftIdx, rightIdx, standIdx;
    while(true) {
      leftIdx = cIdx * 2;
      rightIdx = cIdx * 2 + 1;
      standIdx = cIdx;

      if(leftIdx < this.arr.length && this.compareFn(this.arr[cIdx], this.arr[leftIdx]) > 0) cIdx = leftIdx;
      if(rightIdx < this.arr.length && this.compareFn(this.arr[cIdx], this.arr[rightIdx]) > 0) cIdx = rightIdx;

      if(standIdx === cIdx) break;

      [this.arr[cIdx], this.arr[standIdx]] = [this.arr[standIdx], this.arr[cIdx]];
    }
  }

  empty() {
    return this.arr.length === 1;
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input.shift().split(" ").map(Number);
const [V1, V2] = input.pop().split(" ").map(Number);

const map = Array.from({length: N + 1}, () => []);
input.forEach((line) => {
  const [s, e, t] = line.split(" ").map(Number);
  map[s].push([e, t]);
  map[e].push([s, t]);
});

const sMap = Array.from({length: N + 1}, () => -1);
const eMap = Array.from({length: N + 1}, () => -1);
const vMap = Array.from({length: N + 1}, () => -1);

const spq = new PriorityQueue(((a, b) => a[1] - b[1]));
spq.push([1, 0]); // s t
while(!spq.empty() && (sMap[V1] === -1 || sMap[V2] === -1)) {
  const [c, time] = spq.pop();
  if(sMap[c] !== -1) continue;
  sMap[c] = time;

  for(const [n, t] of map[c]) {
    if(sMap[n] !== -1) continue;
    spq.push([n, time + t]);
  }
}

const epq = new PriorityQueue(((a, b) => a[1] - b[1]));
epq.push([N, 0]); // s t
while(!epq.empty() && (eMap[V1] === -1 || eMap[V2] === -1)) {
  const [c, time] = epq.pop();
  if(eMap[c] !== -1) continue;
  eMap[c] = time;

  for(const [n, t] of map[c]) {
    if(eMap[n] !== -1) continue;
    epq.push([n, time + t]);
  }
}

const vpq = new PriorityQueue(((a, b) => a[1] - b[1]));
vpq.push([V1, 0]); // s t
while(!vpq.empty() && vMap[V2] === -1) {
  const [c, time] = vpq.pop();
  if(vMap[c] !== -1) continue;
  vMap[c] = time;

  for(const [n, t] of map[c]) {
    if(vMap[n] !== -1) continue;
    vpq.push([n, time + t]);
  }
}


const answer = [];
if(vMap[V2] !== -1 && sMap[V1] !== -1 && eMap[V2] !== -1) answer.push(vMap[V2] + sMap[V1] + eMap[V2]);
if(vMap[V2] !== -1 && sMap[V2] !== -1 && eMap[V1] !== -1) answer.push(vMap[V2] + sMap[V2] + eMap[V1]);

if(answer.length === 0) console.log(-1);
else console.log(Math.min(...answer));
