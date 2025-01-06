function solution(n, lost, reserve) {
    const student = Array(n + 2).fill(1);
    
    student[0] = 0; student[n+1] = 0;
    lost.forEach((s) => student[s]--);
    reserve.forEach((s) => student[s]++);
    
    for(let i=1; i<=n; i++){
        if(student[i] !== 0) continue;
        
        if(student[i-1] === 2) [ student[i-1], student[i] ] = [ 1, 1 ];
        else if(student[i+1] === 2) [ student[i+1], student[i] ] = [ 1, 1 ];
    }
    
    return student.filter((s) => s >= 1).length;
}
