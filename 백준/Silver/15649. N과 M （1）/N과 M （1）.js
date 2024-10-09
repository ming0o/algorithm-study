let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const n = parseInt(input[0]);
const m = parseInt(input[1]);

function backtrack(n, m, arr, visited) {
    if (arr.length === m) {
        console.log(arr.join(' '));  // M개의 숫자를 선택했으면 출력
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {  // 숫자 i가 아직 선택되지 않았다면
            visited[i] = true;  // 숫자 i를 선택
            arr.push(i);        // 배열에 추가
            backtrack(n, m, arr, visited);  // 재귀적으로 다음 숫자 선택
            arr.pop();          // 백트래킹: 마지막에 추가한 숫자 제거
            visited[i] = false; // 숫자 i를 다시 선택 가능하게 되돌림
        }
    }
}

// 방문 여부를 체크할 배열
const visited = new Array(n + 1).fill(false);
backtrack(n, m, [], visited);