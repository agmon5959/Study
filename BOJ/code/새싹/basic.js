/**
 *  백준 온라인 저지
 *  새싹문제 모음 
 */

function _1000() {
    const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    const a = parseInt(input[0]);
    const b = parseInt(input[0]);
    // var b = parseInt(input[1]);
    console.log(a + b);
}

function _1330() {
    const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
    const a = parseInt(input[0]);
    const b = parseInt(input[1]);
    if (a < b) {
        console.log('<');
    } else if (a > b) {
        console.log('>');
    } else {
        console.log('==');
    }
}

function _2420() {
    // 사파리월드
    let input = require('fs').readFileSync('input.txt').toString().split(' ');
    let a = Math.abs(parseInt(input[0]));
    let b = Math.abs(parseInt(input[1]));
    console.log(a, b);

}

function _2743() {
    // 단어길이재기
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let a = (input[0]);
    console.log(a.length);

}
function _2744() {
    // 대소문자 바꾸기
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let a = (input[0]);
    let str = '';
    for (let x of a) {
        if (x === x.toUpperCase()) {
            str += x.toLowerCase();
        } else {
            str += x.toUpperCase();
        }
    }
    console.log(str);
}
function _2754() {
    // 윤년
    let input = require('fs').readFileSync('input.txt').toString().split('\n');
    var a = parseInt(input[0]);

    if (a % 4 === 0 && a % 100 !== 0) console.log('1');
    else if (a % 4 === 0 && a % 400 === 0) console.log('1');
    else console.log('0');

}
function _10871() {
    // X보다 작은 수
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let param1 = input[0].split(' ');
    let param2 = input[1].split(' ');
    let ans = '';

    for (let i = 0; i < param1[0]; i++) {
        if (Number(param1[1]) > Number(param2[i])) {
            ans += param2[i]
            ans += ' ';
        }
    }
    console.log(ans.trim());


}
function _10872() {
    // 팩토리얼
    let input = require('fs').readFileSync('input.txt').toString().split(' ');
    let a = parseInt(input[0]);
    let ans = 1;
    for (let i = a; i > 0; i--) {
        ans = ans * i;
    }
    console.log(ans);
}
function _10926() {
    // 채점용 /dev/stdin
    let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    var a = (input[0]);
    // var b = parseInt(input[1]);
    console.log((a) + '??!');
}
function _10950() {
    // A+B
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let ansArr = input.map(iter => iter.split(' '));

    for (let i = 1; i < ansArr.length; i++) {
        console.log(Number(ansArr[i][0]) + Number(ansArr[i][1]));
    }

}
function _10951() {
    // A+B
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let ansArr = input.map(iter => iter.split(' '));

    for (let i = 0; i < ansArr.length; i++) {
        console.log(Number(ansArr[i][0]) + Number(ansArr[i][1]));
    }
}
function _11382() {
    let input = require('fs').readFileSync('input.txt').toString().split(' ');
    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
    let c = parseInt(input[2]);
    console.log(a + b + c);
}
function _14681() {
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

}
function _25083() {
    console.log(`         ,r'"7
r\`-_   ,'  ,/
 \\. ". L_r'
   \`~\\/
      |
      |`);
}

function _10807() {
    // 개수 세기
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let param2 = input[1].split(' ');
    let param3 = input[2];
    let cnt = 0;

    for (let x of param2) {
        if (x === param3) cnt++;
    }

    console.log(cnt);
}

function _5597() {
    // 과제 안 내신 분
    // 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다
    // 이게 왜 안되는지 .. ;; ^-^ ;;; 
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
    const input = fs.readFileSync(filePath).toString().split('\n');
    let param = input.map(iter => Number(iter)).sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < param.length; i++) {
        if (param[i + 1] === undefined) break;
        if (param[i] + 1 !== param[i + 1]) {
            console.log(param[i] + 1);
        }
    }
}

function _2738() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let input = [];
    rl.on("line", function (line) {
        input.push(line.toString());
    }).on("close", function () {
        let number = input
            .shift()
            .split(" ")
            .map((el) => Number(el));
        input = input.map((el) => el.split(" ").map((el) => Number(el)));
        let arr1 = input.splice(0, number[0]);
        let result = arr1.map((el1, idx1) =>
            el1.map((el2, idx2) => el2 + input[idx1][idx2])
        );
        let value = [];
        result.forEach((el) => {
            value.push(el.join(" "));
        });
        console.log(value.join("\n"));
        process.exit();
    });
}

function _2745() {
    // 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
    const input = fs.readFileSync(filePath).toString().split('\n');
    const grade = {
        'A+': '4.3',
        'A0': '4.0',
        'A-': '3.7',
        'B+': '3.3',
        'B0': '3.0',
        'B-': '2.7',
        'C+': '2.3',
        'C0': '2.0',
        'C-': '1.7',
        'D+': '1.3',
        'D0': '1.0',
        'D-': '0.7',
        'F': '0.0',
    }
    console.log(grade[input]);
}

function _9086() {
    // 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let repeat = input.shift();
    let param = [...input]
    for (let i = 0; i < param.length; i++) {
        if (param[i].length !== 1) {
            console.log(param[i][0] + param[i][param[i].length - 1]);
        } else {
            console.log(param[i] + param[i]);
        }
    }
}

