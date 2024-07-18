let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [a, b] = input.map(Number);

// 유클리드 호제법 사용
function gcd(a, b) { // 최대 공약수 구함
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b); // 최소공배수 = 두 자연수의 곱/최대공약수
}

console.log(lcm(a, b));