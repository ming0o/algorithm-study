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
    let finalStr = '';
    for (let i = 0; i<str.length; i++) {
        let CurrentStr = str[i];
        if (CurrentStr >= 'A' && CurrentStr <= 'Z') {
            finalStr += CurrentStr.toLowerCase();
        } else
            finalStr += CurrentStr.toUpperCase();
    }
    console.log(finalStr);
});