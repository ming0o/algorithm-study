// 입력 처리
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0]);
let M = parseInt(input[1]);

// 쪼개기 횟수 계산
let result = N * M - 1;

// 결과 출력
console.log(result);
