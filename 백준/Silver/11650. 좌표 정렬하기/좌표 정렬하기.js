let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const points = [];

for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    points.push([x, y]);
}

points.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0]; // x끼리 비교
    } else {
        return a[1] - b[1]; // y로 넘어감
    }
});

let result = '';
points.forEach(point => {
    result += `${point[0]} ${point[1]}\n`; // 시간 초과 이슈로 result에 누적시킴
});

console.log(result);