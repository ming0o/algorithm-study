let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

// 최대 공약수를 구하는 함수 (유클리드 호제법)
function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

// 최소 공배수를 구하는 함수
function lcm(x, y, gcdValue) {
    return (x * y) / gcdValue;
}

let gcdValue = gcd(a, b);
let lcmValue = lcm(a, b, gcdValue);

console.log(gcdValue);
console.log(lcmValue);
