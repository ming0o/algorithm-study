let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
let arr = [];

for (i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  arr.push({ x, y });
}

arr.sort((a, b) => {
  if (a.y === b.y) {
    return a.x - b.x;
  }
  return a.y - b.y;
});

// 결과 출력
const result = arr.map(point => `${point.x} ${point.y}`).join('\n')
console.log(result);