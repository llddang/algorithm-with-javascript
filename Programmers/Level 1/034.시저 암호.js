function solution(s, n) {
    let answer = '';
    for(const c of s) {
        const numOfChar = c.charCodeAt(0);
        
        if(65 <= numOfChar && numOfChar <= 90) answer += String.fromCharCode(65 + (numOfChar - 65 + n) % 26);
        else if(97 <= numOfChar && numOfChar <= 122) answer += String.fromCharCode(97 + (numOfChar - 97 + n) % 26);
        else answer += c;
    }
    
    return answer;
}
