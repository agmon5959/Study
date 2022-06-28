// 윤년
let input = require('fs').readFileSync('input.txt').toString().split('\n');
var a = parseInt(input[0]);

if (a % 4 === 0 && a % 100 !== 0) console.log('1');
else if (a % 4 === 0 && a % 400 === 0) console.log('1');
else console.log('0');
