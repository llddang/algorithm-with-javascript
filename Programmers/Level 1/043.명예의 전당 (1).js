class PriorityQueue {
    constructor (compareFn) {
        this.array = [];
        this.compareFn = compareFn || ((a, b) => a - b);
    }

    push(e) {
        this.array.push(e);
        this.bubbleUp();
        
        return this.array.length;
    }
    
    pop() {
        if(this.array.length === 0) return undefined;
        const ret = this.array[0];
        const last = this.array.pop();
        if(this.array.length !== 0) {
            this.array[0] = last;
            this.bubbleDown();
        }
        
        return last;
    }
    
    get() { return this.array[0]; }
    
    bubbleUp() {
        let currIdx = this.array.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);
        
        while(currIdx > 0 && this.compareFn(this.array[parentIdx], this.array[currIdx]) > 0) {
            [this.array[parentIdx], this.array[currIdx]] = [this.array[currIdx], this.array[parentIdx]]
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
    }
    
    bubbleDown() {
        let currIdx = 0;
        
        while(1) {
            let changeIdx = currIdx;
            let leftIdx = currIdx * 2 + 1;
            let rightIdx = currIdx * 2 + 2;

            if(leftIdx < this.array.length &&
               this.compareFn(this.array[changeIdx], this.array[leftIdx]) > 0) changeIdx = leftIdx;
            if(rightIdx < this.array.length && 
               this.compareFn(this.array[changeIdx], this.array[rightIdx]) > 0) changeIdx = rightIdx;

            if(changeIdx === currIdx) break;
            [this.array[currIdx], this.array[changeIdx]] = [this.array[changeIdx], this.array[currIdx]];

            currIdx = changeIdx;
        }
    }
}

function solution(k, score) {
    const pq = new PriorityQueue();
    
    return score.map((s) => {
        pq.push(s);
        if(pq.array.length > k) pq.pop();
        
        return pq.get();
    })
}
