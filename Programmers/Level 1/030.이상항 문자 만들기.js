function solution(s) {
    return s.split(" ").map((word) => 
                            word.split("").map((a, i) => i % 2 ? a.toLowerCase() : a.toUpperCase()).join("")
                           ).join(" ");
}
