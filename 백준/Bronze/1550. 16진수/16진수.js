const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = parseInt(input, 16)

console.log(number)