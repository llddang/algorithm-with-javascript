function solution(arr, divisor) {
    const ans = arr.filter((x) => x % divisor === 0).sort((a, b) => a - b);
    return ans.length === 0 ? [-1] : ans;
}
