// 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n').pop();
let arr = Array.from({ length: 122 - 97 + 1 }).fill(-1);


for (let i = 0; i < input.length; i++){
    if (arr[input[i].charCodeAt() - 97] !== -1) {
        continue;
    }
    arr[input[i].charCodeAt() - 97] = i;
}
// let result = [];
// for (let i = 97; i <= 122; i++) {
//     result.push(input.indexOf(String.fromCharCode(i)));
// }

console.log(arr.join(" "));