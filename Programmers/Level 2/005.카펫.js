function solution(brown, yellow) {
    const B = (brown + 4) / 2;
    const C = brown + yellow;
    
    const disc = Math.sqrt(B * B - 4 * C);
    return [(B + disc) / 2, (B - disc) / 2]
}
