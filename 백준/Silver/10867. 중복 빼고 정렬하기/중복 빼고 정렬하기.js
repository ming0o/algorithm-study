let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0], 10);
const numbers = input[1].split(' ').map(Number);

// 중복 제거 후 정렬
const uniqueSortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);

// 결과 출력
console.log(uniqueSortedNumbers.join(' '));