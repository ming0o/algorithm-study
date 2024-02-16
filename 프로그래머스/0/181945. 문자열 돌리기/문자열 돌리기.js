const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str1 = str.split('');
    for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}
});