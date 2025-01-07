function solution(people, report, k) {
    let reports = [...new Set(report)].map(a => a.split(" "));
    
    const ban = {}, email = {};
    reports.forEach(([er, ee]) => ban[ee] = ban[ee] + 1 || 1);
    
    reports.forEach(([er, ee]) => {
        if(ban[ee] >= k) email[er] = email[er] + 1 || 1;
    });
    
    return people.map((name) => email[name] || 0);
}
