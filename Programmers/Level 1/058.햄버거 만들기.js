function solution(ingredient) {
    let answer = 0;
    let stack = [];

    for (const o of ingredient) {
        stack.push(o);

        if (stack.length >= 4 &&
            stack.slice(-4).join('') === "1231") {
            answer++;
            stack.splice(-4);
        }
    }

    return answer;
}
