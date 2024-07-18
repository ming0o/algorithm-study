let input = require('fs').readFileSync('/dev/stdin').toString().trim();

function binaryToOctal(binary) {
  // 입력된 이진수를 3자리씩 끊어서 8진수로 변환
  let result = '';
  let len = binary.length;

  // 입력된 이진수가 3의 배수가 아닌 경우, 앞에 0을 채워줌
  if (len % 3 === 1) {
    result += binary[0];
  } else if (len % 3 === 2) {
    result += (binary[0] * 2 + binary[1] * 1);
  }

  // 나머지 부분을 3자리씩 끊어서 8진수로 변환
  for (let i = len % 3; i < len; i += 3) {
    result += binary[i] * 4 + binary[i + 1] * 2 + binary[i + 2] * 1;
  }

  return result;
}

console.log(binaryToOctal(input));