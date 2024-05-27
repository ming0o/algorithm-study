let input = require('fs').readFileSync('/dev/stdin').toString().split('');
input.sort((a, b) => b - a);

let result = input.join(''); // join으로 합치기
console.log(result);