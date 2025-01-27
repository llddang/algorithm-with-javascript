function solution(numbers) {
    const set = new Set(numbers);
    if(set.size === 1 && numbers[0] === 0) return '0';
    
    return numbers.map(String).sort((a, b) => {
        return Number(b + a) - Number(a + b);
    }).join("");
}
