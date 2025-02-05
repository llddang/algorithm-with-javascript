function strToNum(time) {
    const [h, m] = time.split(':').map(Number);   
    return h * 60 + m;
}

function solution(book_time) {
    const times = book_time.map(time => time.map(strToNum));
    times.sort((a, b) => a[0] - b[0]);
    
    const rooms = [];
    
    let i;
    times.forEach(([s, e]) => {
        for(i=0; i<rooms.length; i++){
            if(rooms[i] > s) continue;
            rooms[i] = e + 10;
            break;
        }
        if(i === rooms.length) rooms.push(e + 10);
    });
    
    return rooms.length;
}
