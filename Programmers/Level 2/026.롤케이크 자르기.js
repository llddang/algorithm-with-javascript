function solution(topping) {
    const map1 = new Map();
    const map2 = new Map();
    
    const arr = Array.from({length: topping.length - 1}, () => [-1, -1]);
    const len = topping.length;
    
    for(let i=0; i < len - 1; i++){
        map1.set(topping[i], 1); map2.set(topping[len -i -1], 0);
        arr[i][0] = map1.size;
        arr[len -i -2][1] = map2.size;
    }
    
    return arr.reduce((ans, [a, b]) => a === b ? ans + 1 : ans , 0);
}
