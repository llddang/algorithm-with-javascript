function convertTimeToNum(time) {
    const times = time.split(":").map(Number);
    return times[0] * 60 + times[1];
}

function calculatePrice(fees, time) {
    const [dTime, dPrice, aTime, aPrice] = fees;
    
    if(dTime > time) return dPrice;
    return dPrice + aPrice * Math.ceil((time - dTime) / aTime);
}

function solution(fees, records) {
    const map = new Map();
    
    const adjustment = records.reduce((acc, record) => {
        const [timeStr, car, type] = record.split(" ");
        const time = convertTimeToNum(timeStr);
        
        if(type === "IN") map.set(car, time);
        else {
            const inTime = map.get(car); map.delete(car);
            acc[car] = acc[car] + time - inTime || time - inTime;
        }
        
        return acc;
    }, {});
    
    const maxTime = convertTimeToNum("23:59");
    map.forEach((time, car) => adjustment[car] = adjustment[car] + maxTime - time || maxTime - time);
    
    return Object.entries(adjustment).sort((a, b) => a[0] - b[0]).map(item => calculatePrice(fees, item[1])); 
}
