function solution(array, commands) {
    return commands.map(
        ([s, e, idx]) => array.slice(s - 1, e).sort((a, b) => a - b)[idx - 1]);
}
