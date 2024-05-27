const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function factorial(n) {
  if (n === 0 || n === 1) {
      return 1n; // BigInt 형태의 1로 반환
  }
  
  let result = 1n; // BigInt 형태의 1로 초기화
  for (let i = 2n; i <= n; i++) { // BigInt 형태로 숫자 사용
      result *= i;
  }
  return result;
}

let num = factorial(BigInt(input)); // 입력값을 BigInt로 변환
let count = 0;

while (num % 10n === 0n) { // BigInt 형태로 비교
  count++;
  num /= 10n; // BigInt 형태의 10으로 나누기
}

console.log(count);