function solution(arr) {
    let answer = new Set(), sum, len = arr.length;
    
    for(let st=0; st<len; st++){
        sum = 0;
        for(let en=0; en<len; en++){
            sum += arr[(st + en) % len];
            answer.add(sum);
        }
    }
    
    return answer.size;
}
