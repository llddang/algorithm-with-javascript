function solution(keymap, targets) {
    const map = {};
    
    keymap.forEach((word) => word.split("")
                   .forEach((char, idx) => map[char] = (map[char] < idx + 1 ? map[char] : idx + 1)));
    
    return targets.map((word) => word.split('').reduce((acc, char) => acc += map[char], 0) || -1)
}
