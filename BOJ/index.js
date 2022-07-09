let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const len = (input.shift());
const value = (input);

for (let i = 0; i < value.length; i++) {
    console.log(괄호(value[i]));
}

function 괄호(param) {
    let arr = [];
    for (let i = 0; i < param.length; i++) {
        if (param[0] === ")") return "NO";

        if (param[i] === "(") {
            arr.push(param[i]);
        } else {
            if (arr.length === 0) {
                return "NO";
            }
            else if (arr[arr.length - 1] === ")") {
                return "NO";
            }
            else {
                arr.pop();
            }
        }
    }
    if (arr.length === 0) return "YES";
    else return "NO";
}