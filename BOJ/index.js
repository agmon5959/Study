let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let ans = Array.from({ length: 26 }).fill(0);

// 97 ~ 122
[...input.pop()].forEach((iter => {
    ans[iter.charCodeAt() - 97] += 1;
    // console.log(iter.charCodeAt() - 97)
}))

console.log(ans.join(' '));
