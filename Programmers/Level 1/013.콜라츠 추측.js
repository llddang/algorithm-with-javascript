function solution(num, count = 0) {
    if(count > 500) return -1;
    if(num === 1) return count;
    if(num % 2) return solution(num * 3 + 1, count + 1);
    return solution(num / 2, count + 1);
}
