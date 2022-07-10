let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const len = (input.shift());
const value = (input);

let arr = [1];
let ans = ['+'];
let cnt = 1;


while (value.length !== 0) {

    if (value[0] == arr[arr.length - 1]) {
        value.splice(0, 1);
        arr.pop();
        ans.push('-');
    } else {
        arr.push(++cnt);
        ans.push('+');
    }
    if (cnt > len) { 
        ans = ['NO'];
        break;
     }
}
console.log(ans.join('\n'));