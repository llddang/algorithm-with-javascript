function solution(food) {
    const str = food.reduce((acc, count, idx) => idx === 0 ? "" : acc + idx.toString().repeat(count / 2), "");
    
    return str + 0 + str.split("").reverse().join("");
}
