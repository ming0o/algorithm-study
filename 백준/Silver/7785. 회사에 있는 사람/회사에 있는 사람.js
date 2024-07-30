let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const set_n = new Set;
const keywords = "enter";
const byewords = "leave";

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ');
    if (b === keywords) {
        set_n.add(a);
    } else if (b === byewords) {
        set_n.delete(a);
    }
}

arr_n = Array.from(set_n).sort().reverse();
console.log(arr_n.join('\n'));