let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let arr = input[1].split(' ').map(e => Number(e));
let returnArr = [];
console.log(arr);

while (arr.length) {
    
    if (arr.length === 1) {
        returnArr.push(-1);
        break;
    } 
    
    let target = arr.shift();
    let value = findBiggerFiveNum(target, arr);
    returnArr.push(value);
}

function findBiggerFiveNum(targetNum, originArr) {
    let ans = undefined;
    for (let i = 0; i < originArr.length; i++){
        if (targetNum < originArr[i]) {
            ans = originArr[i];
            break;
        }
    }
    // 다 돌았는데 없는 경우
    if (ans === undefined) {
        return -1;
    }
    return ans;
}

console.log(returnArr.join(' '));