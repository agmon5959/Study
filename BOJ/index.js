const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let param = Number(input.pop());
let answer = 0;

while (param >= 5) {
    answer += param / 5;
    param /= 5;
}

console.log(answer)