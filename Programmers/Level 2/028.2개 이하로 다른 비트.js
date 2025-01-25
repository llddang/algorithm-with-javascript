function solution(numbers) {
    return numbers.map((num) => {
        let str = num.toString(2);
        const zeroIdx = str.lastIndexOf('0');
        const oneIdx = str.indexOf('1', zeroIdx);
        
        if(zeroIdx !== -1 && oneIdx !== -1)
            return parseInt(
                str.slice(0, zeroIdx) + '1' + str.slice(zeroIdx + 1, oneIdx) + '0' + str.slice(oneIdx+1),
                2
            )
        
        if(zeroIdx !== -1) 
            return parseInt(
                str.slice(0, zeroIdx) + '1' + str.slice(zeroIdx+1),
                2
            )
        
        return parseInt('10' + str.slice(1), 2);
    });
}
