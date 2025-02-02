function solution(sequence, k) {
    
    let sum = 0;
    
    for(let i=sequence.length-1; i>=0; i--){
        sum += sequence[i];
        
        if( sum > k ) {
            sum -= sequence.pop();
        } 
        if(sum === k) {
            while(sequence[i-1] === sequence[sequence.length - 1] && i > 0){
                i--;
                sequence.pop();
            }  
            return [i, sequence.length -1]
        }
    }
    return [];
}
