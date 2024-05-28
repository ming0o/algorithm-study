let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let i = 1;
while (input >= i) {
  input -= i;
  i++;
}

console.log(i - 1);