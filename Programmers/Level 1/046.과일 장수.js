function solution(k, m, score) {
    return score.sort((a, b) => b - a).reduce((acc, s, i) => i % m === m - 1 ? acc + s * m : acc , 0);
}
