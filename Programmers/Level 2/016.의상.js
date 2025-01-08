function solution(clothes) {
    const typeCount = {};
    clothes.forEach(([name, type]) => {
        typeCount[type] = typeCount[type] + 1 || 1;
    });
    
    return Object.values(typeCount).reduce((acc, curr) => acc * (curr + 1), 1) - 1;
}
