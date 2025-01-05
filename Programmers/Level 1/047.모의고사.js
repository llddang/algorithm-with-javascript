function solution(answers) {
    const onePick = [1, 2, 3, 4, 5];
    const twoPick = [2, 1, 2, 3, 2, 4, 2, 5];
    const thrPick = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let score = [0, 0, 0];
    
    answers.forEach((a, i) => {
        if(onePick[i % 5] === a) score[0]++;
        if(twoPick[i % 8] === a) score[1]++;
        if(thrPick[i % 10] === a) score[2]++;
    })
    
    const max = Math.max(...score);
    
    return score.reduce((acc, e, i) => e === max ? [...acc, i+1] : acc, [])
}
