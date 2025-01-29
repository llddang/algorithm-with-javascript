function solution(arr) {
    const dk = [[0,0],[0,1],[1,0],[1,1]];
    function quadZip(ci, cj, n) {
        if(n < 2) return arr[ci][cj] ? [0, 1] : [1, 0];
        let cnt0 = 0, cnt1 = 0; n >>= 1;
        for(const [i, j] of dk) {
            const [zero, one] = quadZip(ci + i*n, cj + j*n, n);
            cnt0 += zero;
            cnt1 += one;
        }
        if(cnt0 === 0) return [0, 1];
        if(cnt1 === 0) return [1, 0];
        return [cnt0, cnt1];
    }
    return quadZip(0, 0, arr.length);
}
