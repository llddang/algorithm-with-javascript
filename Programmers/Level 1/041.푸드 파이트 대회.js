function solution(food) {
    const str = food.reduce((acc, count, idx) => acc + idx.toString().repeat(count / 2), "");
    
    return str + 0 + str.split("").reverse().join("");
}
