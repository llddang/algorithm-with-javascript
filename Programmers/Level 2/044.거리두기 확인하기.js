function check(place) {
    const dk = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    
    for(let i=0; i<5; i++)
    for(let j=0; j<5; j++) {
        if(place[i][j] !== 'P') continue;
        
        for(let x=0; x<4; x++){
            let ci = i + dk[x][0];
            let cj = j + dk[x][1];
            if(0 > ci || ci >= 5 || 0 > cj || cj >= 5) continue;
            if(place[ci][cj] === "X") continue;
            if(place[ci][cj] === "P") return 0;
            for(let y=0; y<4; y++){
                let cci = ci + dk[y][0];
                let ccj = cj + dk[y][1];
                if(0 > cci || cci >= 5 || 0 > ccj || ccj >= 5) continue;
                if(cci === i && ccj === j) continue;
                if(place[cci][ccj] === "P") return 0;
            }
        }
    }
    return 1;
}

function solution(places) {
    return places.map(check);
}
