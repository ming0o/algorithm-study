let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');  //한 줄씩 분리해 저장

let caseNum = Number(input[0]); //첫째 줄 변수 저장
let results = [];

for (let i = 1; i <= caseNum; i++) {
    let scores = input[i].split(' ').map(Number);
    let N = scores[0];
    let sum = 0;

    for (let j = 1; j <= N; j++) {
        sum += scores[j];
    }

    let avg = sum / N;
    let count = 0;

    for (let j = 1; j <= N; j++) {
        if (scores[j] > avg) {
            count++;
        }
    }

    let percentage = (count / N) * 100;
    results.push(percentage.toFixed(3) + '%');
}

console.log(results.join('\n'));