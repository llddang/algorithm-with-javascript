function go(sign, numbers, target, idx) {
    if(sign.length === numbers.length) {
        const sum = numbers.reduce(
            (acc, num, idx) => sign[idx] ? acc + num : acc - num, 0);
        
        return sum === target;
    }
    
    let answer = 0;
    sign.push(true);
    answer += go(sign, numbers, target, idx+1);
    sign.pop();
    sign.push(false);
    answer += go(sign, numbers, target, idx+1);
    sign.pop();
    
    return answer;
}

function solution(numbers, target) {
    return go([], numbers, target, 0);
}
