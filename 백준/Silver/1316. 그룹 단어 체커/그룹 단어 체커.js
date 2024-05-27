let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let caseNum = Number(input[0]); //첫째 줄 변수 저장
let count = 0;

function groupWord(word) {
    const hello = new Set(); // 방문문자 저장
    for (let i = 0; i < word.length; i++) {
        const helloChar = word[i];

        if (hello.has(helloChar) && word[i-1] != helloChar){ // has = 가지고 있는지 검사, i-1 = 직전 문자와 같은지 검사
            return false;
        }
        hello.add(helloChar); // 중복이 아니면 문자 등록
    }
    return true;
}

for (let i = 1; i <= caseNum; i++) {
    if (groupWord(input[i])) {
        count++;
    }  
}

console.log(count);