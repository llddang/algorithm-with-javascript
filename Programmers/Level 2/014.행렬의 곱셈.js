function solution(arr1, arr2) {
    const N = arr1.length, M = arr2[0].length, K = arr1[0].length;
    
    const answer = Array.from({length: N}, () => Array(M).fill(0));
    
    for(let i=0; i<N; i++) 
    for(let j=0; j<M; j++) 
        for(let k=0; k<K; k++) answer[i][j] += arr1[i][k] * arr2[k][j];
    
    
    return answer;
}
