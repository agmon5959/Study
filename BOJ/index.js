// 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let repeat = input.shift();
let param =  [...input]
for (let i = 0; i < param.length; i++){
    if (param[i].length !== 1) {
        console.log(param[i][0] + param[i][param[i].length-1]);
    } else {
        console.log(param[i] + param[i]);
    }
}