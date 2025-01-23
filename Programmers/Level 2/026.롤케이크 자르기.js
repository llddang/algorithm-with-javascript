function solution(topping) {
    const set1 = new Set();
    const set2 = new Set();
    
    const arr = Array.from({length: topping.length - 1}, () => [-1, -1]);
    const len = topping.length;
    
    for(let i=0; i < len - 1; i++){
        set1.add(topping[i]); set2.add(topping[len -i -1]);
        arr[i][0] = set1.size;
        arr[len -i -2][1] = set2.size;
    }
    
    return arr.reduce((ans, [a, b]) => a === b ? ans + 1 : ans , 0);
}
