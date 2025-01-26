function solution(bridge_length, weight, truck_weights) {
    let time = 1, st = 0, w = 0;
    const queue = [];
    
    truck_weights.forEach((value, idx) => {
        while(w + value > weight && st < queue.length) {
            const [v, t] = queue[st++];
            w -= v;
            time = Math.max(time, t + bridge_length);
        }
        queue.push([value, time]); w += value;
        time++;
    });
    
    return queue.at(-1)[1] + bridge_length;
}
