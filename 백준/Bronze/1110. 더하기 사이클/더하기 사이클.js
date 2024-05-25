let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function cycleLen(n) {
  const original = n;
  let count = 0;

  while (true) {
    const tens = Math.floor(n / 10); //십의 자리 수 분할
    const units = n % 10; //일의 자리 수 분할
    const sumDigits = tens + units;
    const newNumber = (units * 10) + (sumDigits % 10);
    count++;

    if (newNumber === original) {
        break;
    }
      
    n = newNumber;
    }
    return count;
}

const n = parseInt(input, 10);
console.log(cycleLen(n));