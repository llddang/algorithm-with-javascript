function solution(progresses, speeds) {
    const takeTime = [];
    progresses.forEach((progress, idx) => takeTime.push(Math.ceil((100 - progress) / speeds[idx])));
    
    const answer = [];
    let prevTime = 0;
    takeTime.forEach((time) => {
        if (prevTime < time) { answer.push(1); prevTime = time; }
        else answer[answer.length - 1]++;
    });
    return answer;
}
