let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input);

const cards = Array.from({ length: n }, (_, i) => i + 1);
const discarded = [];

while (cards.length > 1) {
  discarded.push(cards.shift());

  // 제일 위의 카드를 제일 아래로 이동
  cards.push(cards.shift()); // shift() 메서드는 배열의 첫 번째 요소를 제거하고 그 요소를 반환
}

// 결과 출력
if (discarded.length > 0) {
  console.log(discarded.join(' '));
}
console.log(cards[0]);