let input = require('fs').readFileSync('/dev/stdin').toString().trim();

function BagSugar(n) {
  let count = 0;

  //5키로 나누기
  while (n > 0) {
    if (n % 5 === 0) {
      return count + (n / 5);
    }
    n -= 3; // 3키로를 쓰고 남은 무게에 따라 카운트 증가
    count++;
  }

  if (n === 0) {
    return count;
  } else {
    return -1; //나누어 떨어지지 않으면 -1
  }
} 

console.log(BagSugar(input))
