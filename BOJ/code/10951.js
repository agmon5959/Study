// A+B
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let ansArr = input.map(iter => iter.split(' '));

for (let i = 0; i < ansArr.length; i++) {
    console.log(Number(ansArr[i][0]) + Number(ansArr[i][1]));
}