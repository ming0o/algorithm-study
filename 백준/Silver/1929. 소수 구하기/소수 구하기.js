let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const [m, n] = input.map(Number);

// 소수 판별 함수
function isPrime(num) {
  if (num <= 1) return false; // 1 이하는 소수가 아님
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// m 이상 n 이하의 소수
for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}