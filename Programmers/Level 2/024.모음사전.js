let STAND_WORD;
const order = "AEIOU";

function makeWord(word, count) {
    if(word === STAND_WORD) return count;
    
    if(word.length < 5) return makeWord(word + "A", count + 1);
    
    let idx;
    while(word.length) {
        idx = order.indexOf(word.at(-1));
        word = word.substring(0, word.length - 1);
        if(idx !== 4) break;
    }
    return makeWord(word + order[idx+1], count + 1);
}

function solution(word) {
    STAND_WORD = word;
    return makeWord("", 0);
}
