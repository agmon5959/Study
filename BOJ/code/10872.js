// 팩토리얼
let input = require('fs').readFileSync('input.txt').toString().split(' ');
let a = parseInt(input[0]);
let ans = 1;
for (let i = a; i > 0; i--) {
    ans = ans * i;
}
console.log(ans);