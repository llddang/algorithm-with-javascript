function solution(t, p) {
    return Array(t.length - p.length + 1).fill(0).reduce((acc, _, i) => +t.substr(i, p.length) <= +p ? acc + 1 : acc, 0);
}
