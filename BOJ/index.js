// 사파리월드
let input = require('fs').readFileSync('input.txt').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let ans = Math.abs(a - b);
console.log(ans);
