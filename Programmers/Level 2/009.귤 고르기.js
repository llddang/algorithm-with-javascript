function solution(k, tangerine) {
    const count = {};
    
    tangerine.forEach((size) => count[size] = (count[size] + 1) || 1);
    
    const sizes = Object.values(count).sort((a, b) => b - a);
    
    for(let i=0; i<sizes.length; i++) {
        k -= sizes[i];
        if(k <= 0) return i + 1;
    }
    return sizes.length;
}
