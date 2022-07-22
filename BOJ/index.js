const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let param = input.pop().split(' ');
let value1 = Number(param[0]);
let value2 = Number(param[1]);

let valueArr = [];

function getZeroCnt(p) {
    let tempP = p;
    let cnt_2 = 0;
    let cnt_5 = 0;

    while (p >= 2) {
        cnt_2 += parseInt(p / 2);
        p /= 2;
    }

    while (tempP >= 5) {
        cnt_5 += parseInt(tempP / 5);
        tempP /= 5;
    }
    valueArr.push([cnt_2, cnt_5]);
}

getZeroCnt(value1);
getZeroCnt(value2);
getZeroCnt(value1 - value2);

let firstValue = valueArr[0];
let secondValue = valueArr[1];
let thirdValue = valueArr[2];

console.log(Math.min((firstValue[0] - (secondValue[0] + thirdValue[0])), (firstValue[1] - (secondValue[1] + thirdValue[1]))));
