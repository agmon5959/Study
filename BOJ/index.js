let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
// const len = input.shift();
// const len = input.shift();
const param = input;
const arr = [...param.pop()];
const ans = [];
let temp = [];
let bool = false;
for (let i = 0; i < arr.length; i++){

    if (arr[i] === "<") {
        bool = true;
    } else if (arr[i] === ">") {
        bool = false;
    }

    temp.push(arr[i]);
    // false 만나면 bool = true;
    

}
console.log(temp);