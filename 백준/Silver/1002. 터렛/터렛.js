let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function turretTestCases(testCases) {
    const results = [];

    testCases.forEach(([x1, y1, r1, x2, y2, r2]) => {
        const distSquared = (x2 - x1) ** 2 + (y2 - y1) ** 2;
        const dist = Math.sqrt(distSquared);

        if (x1 === x2 && y1 === y2 && r1 === r2) {
            results.push(-1); // 무한대의 교점
        } else if (dist === r1 + r2 || dist === Math.abs(r1 - r2)) {
            results.push(1); // 한 점에서 접함
        } else if (dist > r1 + r2 || dist < Math.abs(r1 - r2)) {
            results.push(0); // 만나지 않음
        } else {
            results.push(2); // 두 점에서 만남
        }
    });

    return results;
}

const T = parseInt(input[0], 10);
const testCases = input.slice(1, T + 1).map(line => line.split(' ').map(Number));

// 결과 출력
const results = turretTestCases(testCases);
results.forEach(result => console.log(result));
