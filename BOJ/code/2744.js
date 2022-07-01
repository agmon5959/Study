// 대소문자 바꾸기
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let a = (input[0]);
let str = '';
for (let x of a) {
    if (x === x.toUpperCase()) {
        str += x.toLowerCase();
    } else {
        str += x.toUpperCase();
    }
}
console.log(str);