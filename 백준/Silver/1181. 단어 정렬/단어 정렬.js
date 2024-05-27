let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let words = new Set(input.slice(1, n + 1)); // Set 객체를 사용, 중복된 단어 제거

// Set을 배열로 변환한 후, 단어를 길이순, 같은 길이일 경우 사전순으로 정렬
let resultWords = Array.from(words).sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b); // localeCompare => 사전순으로 정렬
  }
  return a.length - b.length;
});

// 정렬된 단어를 출력
for (let word of resultWords) {
  console.log(word);
}
