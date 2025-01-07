function solution(n,a,b) {
    const round = Math.log2(n);
    
    let ar, br;
    for(let i=1; i<=round; i++){
        ar = Math.ceil(a / Math.pow(2, i));
        br = Math.ceil(b / Math.pow(2, i));
        if(ar === br) return i;
    }
    return round;
}
