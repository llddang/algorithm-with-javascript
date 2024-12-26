function solution(a, b) {
    const g = Math.max(a, b), l = Math.min(a, b);
    return Array.from({length: g - l + 1}, (c, i) => l + i).reduce((ac, cu) => ac + cu, 0);
}
