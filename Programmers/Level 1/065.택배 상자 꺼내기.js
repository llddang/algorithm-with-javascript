function solution(n, w, num) {
    const totalI = Math.ceil(n / w);
    const currI = Math.ceil(num / w);
    const totalJ = n % w || w;
    const currJ = num % w || w;
    
    if(totalI % 2 === currI % 2) return totalI - currI + (totalJ >= currJ ? 1 : 0);
    return totalI - currI + (totalJ + currJ > w ? 1 : 0);
}
