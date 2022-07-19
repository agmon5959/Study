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

function _1943() {
    const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')
    let param = input.pop();
    let pNum1 = param.split(" ")[0];
    let pNum2 = param.split(" ")[1];


    function 유클리드호제법(num1, num2) {

        const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
        const lcm = (a, b) => a * b / gcd(a, b);
        return [gcd(num1, num2), lcm(num1, num2)];
    }

    console.log(유클리드호제법(Number(pNum1), Number(pNum2)).join('\n'));
}

function _1943() {
    // 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다.이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다.예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
    // 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.
    const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')
    const len = input.shift();

    for (let i = 0; i < len; i++) {
        console.log(유클리드호제법(Number(input[i].split(' ')[0]), Number(input[i].split(' ')[1])));
    }

    function 유클리드호제법(num1, num2) {
        const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
        const lcm = (a, b) => a * b / gcd(a, b);
        return lcm(num1, num2);
    }

}

function _1978() {
    const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')
    const len = input.shift();
    let param = input[0].split(' ');

    const isPrime = (n) => {
        if (n == 1) {
            return false;
        }

        for (let i = 2; i <= (Math.sqrt(n)); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }


    console.log(param.filter(v => isPrime(v)).length);
}

function _6588() {
    
}