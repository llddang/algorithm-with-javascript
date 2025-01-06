function getCount(num) {
    let res = 0;
    for(let i=1; i*i <= num; i++) {
        if(i * i === num) res++;
        else if(num % i === 0) res += 2;
    }
    return res;
}


function solution(number, limit, power) {
    return Array.from({length: number}, (_, i) => getCount(i + 1))
                    .reduce((acc, e) => acc + (e <= limit ? e : power), 0);
}
