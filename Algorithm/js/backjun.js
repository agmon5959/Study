function com(parameter) {
    const fs = require('fs');
}

function t1() {

    // 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
    // const fs = require('fs');
    // const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
    // const input = fs.readFileSync(filePath).toString().split('\n').pop();
    let input = "baekjoon";
    let arr = Array.from({ length: 122 - 97 }).fill(-1);


    for (let i = 0; i <= input.length; i++) {
        debugger
        if (arr[input[i].charCodeAt() - 97] !== -1) {
            continue;
        }
        arr[input[i].charCodeAt() - 97] = i;
    }

    console.log(arr);
}


function 오큰수() {
    let input = [3, 5, 2, 7];
    let temp = [];
    let result = Array.from({ length: input.length }).fill(-1);
    for (let i = 0; i < input.length; i++) {
        while (temp.length && input[temp[temp.length - 1]] < input[i]) {
            result[temp.pop()] = input[i];
        }
        temp.push(i);
    }
    console.log(result.join(" "))
}


function 오등큰수() {
    let input = [7, '1 1 2 3 4 2 1'];
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

    console.log(ansArr);
}


function _10808() {
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let ans = Array.from({ length: 26 }).fill(0);

    // 97 ~ 122
    [...input.pop()].forEach((iter => {
        ans[iter.charCodeAt() - 97] += 1;
        // console.log(iter.charCodeAt() - 97)
    }))

    console.log(ans.join(' '));

}

function _10820() {
    const input = require('fs').readFileSync('input.txt').toString().split('\n')

    const t = input.filter(str => str.length < 1)

    if (t.length) {
        input.splice(input.indexOf(t[0]), 1)
    }

    input.forEach(str => {
        const lower = str.length - str.replace(/[a-z]/g, '').length
        const upper = str.length - str.replace(/[A-Z]/g, '').length
        const num = str.length - str.replace(/[0-9]/g, '').length
        const blank = str.length - str.replace(/\ /g, '').length

        console.log(lower, upper, num, blank)
    })
}

function _11655() {
    const input = require('fs').readFileSync('input.txt').toString().split('\n')
    let returnArr = [];
    let param = [...input.pop()];
    for (let x of param) {
        let value = x.charCodeAt();
        if (value >= 97 && value <= 122) {
            value += 13;
            if (value > 122) {
                value = value - 26;
            }

            returnArr.push(String.fromCharCode(value));
        } else if (value >= 65 && value <= 90) {
            value += 13;
            if (value > 90) {
                value = value - 26;
            }

            returnArr.push(String.fromCharCode(value));
        } else if (value === 32) {
            returnArr.push(' ');
        } else {
            returnArr.push(x);
        }

    }
    console.log(returnArr.join(''));
}

function _1918() {

}
