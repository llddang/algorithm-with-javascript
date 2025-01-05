const primeNum = Array.from({length: 3000}, () => true);

function makePrimeNum() {
    primeNum[0] = false; primeNum[1] = false;
    for(let i=2; i<3000; i++) {
        if( !primeNum[i] ) continue;
        for(let j=i*2; j<3000; j+=i) primeNum[j] = false;
    }
}

function combination(nums, idx, count, sum) {
    if(count === 3) return primeNum[sum] ? 1 : 0;
    
    let answer = 0
    for(let i=idx; i<nums.length; i++) {
        answer += combination(nums, i + 1, count + 1, sum + nums[i]);
    }
    return answer;
}

function solution(nums) {
    makePrimeNum();
    
    return combination(nums, 0, 0, 0);
}
