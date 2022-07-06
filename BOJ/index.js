let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let num = input.pop();
let ans=0;
for (let i = 0; i < num.length; i++){
    ans += Math.pow((num[i]), 5);
}
// let dfs = (d,p) => {
//     if (d === 5) {
//         return
//     } else {
//         dfs(d, p * p);
//     }
// }
console.log(ans);