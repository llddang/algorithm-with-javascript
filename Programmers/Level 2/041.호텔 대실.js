
function strToNum(time) {
    const [h, m] = time.split(':')
    
    return Number(h) * 60 + Number(m);
}

function solution(book_time) {
    const times = [];
    
    for(const e of book_time){
        const st = strToNum(e[0]);
        const en = strToNum(e[1]);
        
        times.push([st, en]);
    }
    
    times.sort((a, b) => a[0] - b[0]);
    
    const rooms = [];
    
    let i;
    for(const e of times){
        
        for(i=0; i<rooms.length; i++){
            if(rooms[i] > e[0]) continue;
            
            rooms[i] = e[1] + 10;
            break;
        }
        if(i === rooms.length) rooms.push(e[1] + 10);
        
        console.log(rooms);
        
    }
    
    return rooms.length;
}
