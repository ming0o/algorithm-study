let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const S = new Set();

for (let i = 1; i <= n; i++) {
    S.add(input[i]); //밑줄부터 set으로 문자열을 집합에 넣음
}

let count = 0;
for (let i = n + 1; i <= n + m; i++) {
    if (S.has(input[i])) { //집합 S안에 추가 입력된 m이 있는지 체크
        count++;
    }
}

console.log(count);