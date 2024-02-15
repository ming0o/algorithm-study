const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const num1 = Number(input[0]);
const num2 = Number(input[1]);

const three = num1 * (num2 % 10); 
const four = num1 * Math.floor((num2 % 100) / 10); // num1과 num2의 십의자리수를 곱함
const five = num1 * Math.floor(num2 / 100); // num1과 num2의 백자리수를 곱함
const six = num1 * num2;

console.log(three);
console.log(four);
console.log(five);
console.log(six);