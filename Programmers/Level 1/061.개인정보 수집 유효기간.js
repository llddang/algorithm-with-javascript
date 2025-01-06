function solution(today, terms, privacies) {
    const termType = {};
    terms.forEach(temp => {
        const [type, term] = temp.split(" ");
        termType[type] = +term;
    });
    
    const stand = new Date(today);
    
    return privacies.map((temp, idx) => {
        const [dateStr, type] = temp.split(" ");
        const date = new Date(dateStr);
        date.setMonth(date.getMonth() + termType[type]);
        
        if(stand.getTime() >= date.getTime()) return idx + 1;
        return null;
    }).filter((s) => s);
}
