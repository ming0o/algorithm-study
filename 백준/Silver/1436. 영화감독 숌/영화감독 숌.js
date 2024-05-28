let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);
let count = 0;
let num = 666;

while (count < N) {
    if (String(num).includes('666')) {
        count++;
    }
    num++;
}

console.log(num - 1);