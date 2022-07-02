// 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
let param = input.map(iter => Number(iter)).sort((a, b) => a - b);
let ans = [];
for (let i = 0; i < param.length; i++){
    if (param[i + 1] === undefined) break;
    if (param[i]+1 !== param[i+1]) {
        console.log(param[i] + 1);
    }
}