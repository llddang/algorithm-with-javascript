process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(Number);
    
    Array(m).fill(0).forEach(() => console.log("*".repeat(n)));
});
