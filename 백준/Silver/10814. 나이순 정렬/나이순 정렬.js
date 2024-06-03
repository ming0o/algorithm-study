let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let arr = [];

for (i = 1; i <= n; i++) {
  const [age, name] = input[i].split(' ');
  arr.push({ age: parseInt(age), name: name, order: i });
}

arr.sort((a, b) => {
  if (a.age === b.age) {
    return a.order - b.order;
  }
  return a.age - b.age;
});

// 결과 출력
const result = arr.map(person => `${person.age} ${person.name}`).join('\n');
console.log(result);