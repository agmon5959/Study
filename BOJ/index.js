// 띄어쓰기로 들어오는 경우
// let input = require('fs').readFileSync('input.txt').toString().split(' ');
// 줄바꿈으로 들어오는 경우
// let input = require('fs').readFileSync('input.txt').toString().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

// 줄바꿈으로 들어오는 경우
let input = require('fs').readFileSync('input.txt').toString().split('\n');
var a = (input[0]);
// var b = parseInt(input[1]);
console.log((a) + '??!');