const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;
let scores = [];

rl.question('', (answer) => {
  N = parseInt(answer);
  rl.question('', (answer) => {
    scores = answer.split(' ').map(Number);

    //성적을 새로운 평균으로 계산하여 출력
    console.log(calculateNewAverage(scores));

    rl.close();
  });
});

function calculateNewAverage(scores) {
    var maxScore = Math.max(...scores);

    // 모든 점수를 새로운 값으로 변환하여 저장할 배열 생성
    var newScores = [];

    // 새로운 값으로 변환한 점수를 배열에 저장
    for (var i = 0; i < scores.length; i++) {
        newScores.push(scores[i] / maxScore * 100);
    }

    // 새로운 점수들의 평균 계산
    var newAverage = newScores.reduce((acc, cur) => acc + cur, 0) / newScores.length;

    return newAverage.toFixed(2); // 소수점 이하 두 자리까지 출력
}
