const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = input.length;

for (let i = 0; i < N; i += 10) {
    console.log(input.slice(i, i + 10));
}