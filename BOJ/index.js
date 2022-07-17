const input = require('fs').readFileSync('input.txt').toString().split('\n')
let returnArr = [];
let param = [...input.pop()];
for (let x of param) {
    let value = x.charCodeAt();
    if (value >= 97 && value <= 122) {
        value += 13;
        if (value > 122) {
            value = value - 26;
        }

        returnArr.push(String.fromCharCode(value));
    } else if (value >= 65 && value <= 90) {
        value += 13;
        if (value > 90) {
            value = value - 26;
        }

        returnArr.push(String.fromCharCode(value));
    } else if (value === 32) {
        returnArr.push(' ');
    } else {
        returnArr.push(x);
    }

}
console.log(returnArr.join(''));