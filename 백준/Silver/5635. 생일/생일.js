let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const students = input.slice(1).map(line => {
    const [name, d, m, y] = line.split(" ");
    const date = new Date(y, m - 1, d); // Date 객체로 변환
    return { name, date };
});

students.sort((a, b) => a.date - b.date);

console.log(students[n - 1].name);
console.log(students[0].name);