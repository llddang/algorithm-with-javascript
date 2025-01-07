function solution(arr) {
    let answer = new Set(), sum, len = arr.length;
    
    for(let size=1; size<=len; size++){
        for(let i=0; i<len; i++){
            sum = 0;
            for(let k=0; k<size; k++) sum += arr[(i + k) % len];
            answer.add(sum);
        }
    }
    
    return answer.size;
}
