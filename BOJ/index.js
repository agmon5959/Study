// 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const grade = {
    "A+": 4.3,
    "A0": 4.0.toFixed(1),
    "A-": 3.7,
    "B+": 3.3,
    "B0": 3.0.toFixed(1),
    "B-": 2.7,
    "C+": 2.3,
    "C0": 2.0.toFixed(1),
    "C-": 1.7,
    "D+": 1.3,
    "D0": 1.0.toFixed(1),
    "D-": 0.7,
    "F": 0.0.toFixed(1),
}
console.log(grade[input]);