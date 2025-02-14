function sortByColAndFirst(a, b, col) {
    return a[col-1] - b[col-1] || b[0] - a[0];
}

function solution(data, col, row_begin, row_end) {
    const sortedData = [...data].sort((a, b) => sortByColAndFirst(a, b, col));
    
    return sortedData.slice(row_begin - 1, row_end)
                    .map((row, i) => row.reduce((sum, n) => sum + n % (i + row_begin), 0))
                    .reduce((ans, sum) => ans ^ sum);
}
