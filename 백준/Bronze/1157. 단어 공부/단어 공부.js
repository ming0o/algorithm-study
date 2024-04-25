const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMostUsedLetter(word) {
    // 대소문자 구분 없이 모두 소문자로 변환
    word = word.toLowerCase();

    // 알파벳 별로 사용 횟수를 저장할 객체 생성
    const letterCount = {};

    // 주어진 단어에서 각 알파벳의 사용 횟수 카운트
    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        // 알파벳인 경우에만 카운트
        if (/[a-z]/.test(char)) {
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }

    // 가장 많이 사용된 알파벳 찾기
    let maxCount = 0;
    let mostUsedLetter = '';
    let multipleMax = false;

    for (const letter in letterCount) {
        if (letterCount[letter] > maxCount) {
            maxCount = letterCount[letter];
            mostUsedLetter = letter;
            multipleMax = false;
        } else if (letterCount[letter] === maxCount) {
            multipleMax = true;
        }
    }

    // 출력
    if (multipleMax) {
        console.log('?');
    } else {
        console.log(mostUsedLetter.toUpperCase());
    }
}

// 사용자로부터 입력 받기
rl.question('', (word) => {
    findMostUsedLetter(word);
    rl.close();
});
