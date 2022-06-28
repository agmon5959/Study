// 사분면 고르기
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > 0) {
    a = true;
} else {
    a = false;
}

if (b > 0) {
    b = true;
} else {
    b = false;
}

if (a && b) {
    console.log('1');
} else if (!a && !b) {
    console.log('3');
} else if (a && !b) {
    console.log('4');
} else {
    console.log('2');
}
