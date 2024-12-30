function solution(sizes) {
    let max=0, min=0;
    sizes.forEach((box) => {
        const boxMax = Math.max(...box);
        const boxMin = Math.min(...box);
        
        if(max < boxMax) max = boxMax;
        if(min < boxMin) min = boxMin;
    })
    return max*min;
}
