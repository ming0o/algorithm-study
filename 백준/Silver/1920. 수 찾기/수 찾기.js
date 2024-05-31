let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const m = parseInt(input[2]);
const arr_n = input[1].split(' ').map(Number);
const arr_m = input[3].split(' ').map(Number);

const set_n = new Set(arr_n);
let result = '';

for (let i = 0; i < m; i++) {
    if (set_n.has(arr_m[i])) {
        result += '1\n';
    } else {
        result += '0\n';
    }
}

console.log(result);