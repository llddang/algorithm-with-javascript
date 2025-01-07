const check = (want, number, material) => {
    for(let i=0; i<want.length; i++)
        if( !(material[want[i]] >= number[i]) ) return false;
    return true;
}

function solution(want, number, discount) {
    const material = {};
    for(let i=0; i<9; i++)
        material[discount[i]] = material[discount[i]] + 1 || 1;
    
    let answer = 0;
    for(let i=0; i<discount.length-9; i++) {
        material[discount[i + 9]] = material[discount[i + 9]] + 1 || 1;
        if( check(want, number, material) ) answer++;
        material[discount[i]]--;
    }
    return answer;
}
