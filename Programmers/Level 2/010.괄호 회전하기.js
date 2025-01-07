function checkParentheses(str) {
    const stack = [];
    
    for(const c of str)
        if(c === "{") stack.push("}");
        else if(c === "}"){ if(stack.pop() !== "}") return false; }
        else if(c === "[") stack.push("]");
        else if(c === "]"){ if(stack.pop() !== "]") return false; }
        else if(c === "(") stack.push(")");
        else if(c === ")"){ if(stack.pop() !== ")") return false; }

    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    
    for(let _=0; _<s.length; _++) {
        answer += checkParentheses(s);
        s = s.substring(1) + s[0];
    }
    
    return answer;
}
