let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const arr_n = [];

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number); //숫자 쌍으로 변환
    arr_n.push([a, b]);
}

// 각 학생의 덩치 등수를 계산
const ranks = new Array(n).fill(1); // 모든 학생의 초기 등수는 1

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i !== j) {
            if (arr_n[i][0] < arr_n[j][0] && arr_n[i][1] < arr_n[j][1]) {
                ranks[i]++; // 두 조건 모두 만족하면 i번째 학생의 등수가 하나 증가
            }
        }
    }
}

console.log(ranks.join(' '));