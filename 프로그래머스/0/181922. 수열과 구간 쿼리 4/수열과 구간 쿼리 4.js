function solution(arr, queries) {
    const result = [...arr]; // arr를 복사하여 새로운 배열 생성

    // 각 쿼리에 대해 처리
    for (const query of queries) {
        const [s, e, k] = query; // 쿼리의 시작, 끝, 배수(k)를 추출

        // 시작부터 끝까지 순회하면서 k의 배수인 경우 해당 인덱스의 값을 증가
        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                result[i]++;
            }
        }
    }

    return result;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let queries = [];

console.log(solution(arr, queries)); 
