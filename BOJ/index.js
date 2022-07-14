let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let seg = input[1].split(' ').map(e => Number(e));
let stack = [];
let ansArr = Array.from({ length: seg.length }).fill(-1);
let obj = {}

seg.forEach((iter) => {
    if (obj[iter] !== undefined) {
        obj[iter] += 1;
    } else {
        obj[iter] = 1;
    }
})

for (let i = 0; i < Number(input[0]); i++) {
    while (stack.length && obj[seg[i]] > obj[seg[stack[stack.length - 1]]]) {
        ansArr[stack.pop()] = seg[i];
    }
    stack.push(i)
}

console.log(ansArr.join(' '));

