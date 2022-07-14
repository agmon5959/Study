let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
input.shift();
let calc = [...input.shift()];
let pNum = [...input];
const len = calc.length;
const numStack = [];
let cnt = 0;
let obj = {};

function checkType(value) {
    if (value.charCodeAt() <= 90 && value.charCodeAt() >= 65) {
        return true;
    } else {
        return false;
    }
}


calc.forEach((iter) => {
    if (checkType(iter)) {
        obj[iter] = pNum[cnt];
        if (pNum[cnt + 1] !== undefined) {
            cnt++;
        }

    }
})


for (let i = 0; i < len; i++) {
    let fv;
    let tv;

    if (checkType(calc[i])) { // 알파벳
        numStack.push(obj[calc[i]]);
    } else {
        fv = Number(numStack.pop());
        tv = Number(numStack.pop());
        if (calc[i] === "+") {
            numStack.push(fv + tv);
        } else if (calc[i] === "-") {
            numStack.push(tv - fv);
        } else if (calc[i] === "*") {
            numStack.push(fv * tv);
        } else {
            numStack.push(tv / fv);
        }
    }
}

