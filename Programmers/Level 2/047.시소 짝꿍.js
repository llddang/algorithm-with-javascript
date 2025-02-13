function solution(weights) {
  weights.sort((a, b) => b - a);
  const map = {};
  return weights.reduce((cnt, w) => {
    if (map[w]) cnt += map[w]; 
    if (map[(w * 4) / 3]) cnt += map[(w * 4) / 3];
    if (map[(w * 3) / 2]) cnt += map[(w * 3) / 2];
    if (map[w * 2]) cnt += map[w * 2];

    map[w] = (map[w] || 0) + 1;
    return cnt;
  }, 0);
}
