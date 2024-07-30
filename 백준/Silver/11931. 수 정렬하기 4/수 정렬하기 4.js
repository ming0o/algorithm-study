let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const arr_n = [];

for (let i = 1; i <= n; i++) {
    arr_n.push(Number(input[i]));
}

arr_n.sort((a, b) => b - a); // reverse는 문자열일 때만 쓸 수 있음
console.log(arr_n.join('\n'));