let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = parseInt(input);

let count = 0;

// 5원짜리 동전부터 사용하여 최대한 많이 사용
while (true) {
  if (n % 5 == 0) {
    count += n / 5;
    break;
  }

  n -= 2;
  count++;

  if (n < 0) {
    count = -1;
    break;
  }
}

console.log(count);