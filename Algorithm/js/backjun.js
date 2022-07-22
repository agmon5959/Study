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

// 꽤나 어려웠다 .. 수학적인 부분이 굉장히 까다로웁다 ,, 

function _6588() {
    const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

    input.pop();
    //? 소수는 변하지않기 때문에 파라미터로 들어온 숫자 중 가장 큰 숫자를 기준으로 소수 배열을 만들어주기 위해서 최대 값을 구한다.
    //? 반복문을 돌 때 마다 소수를 구해주면 효율성이 떨어지기 때문.
    const maxNum = Math.max(...input);

    //? 위에서 구한 최대값보다 1만큼 크게 배열을 만든 뒤 false로 기본값 초기화를 해준다.
    //? 0번 인덱스는 사용하지 않는다. ( 인덱스가 곧 숫자로 인지하기 편하도록 )
    const check = Array(maxNum + 1).fill(false);

    for (let i = 2; i <= maxNum; i++) {
        if (!check[i]) {
            for (let j = i * i; j <= maxNum; j += i) {
                check[j] = true;
            }
        }
    }

    //! 만들어진 소수 배열을 통해 골드바흐의 추측을 풀어내는 부분
    input.forEach((iter) => {
        for (let i = 3; i < iter; i += 2) {
            if (!check[i] && !check[iter - i]) {
                console.log(`${iter} = ${i} + ${iter - i}`);
                break;
            }
        }
    })
}

function _1676() {
    const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    //? 소수는 변하지않기 때문에 파라미터로 들어온 숫자 중 가장 큰 숫자를 기준으로 소수 배열을 만들어주기 위해서 최대 값을 구한다.
    //? 반복문을 돌 때 마다 소수를 구해주면 효율성이 떨어지기 때문.
    const maxNum = Math.max(...input);
    //? 위에서 구한 최대값보다 1만큼 크게 배열을 만든 뒤 false로 기본값 초기화를 해준다.
    //? 0번 인덱스는 사용하지 않는다. ( 인덱스가 곧 숫자로 인지하기 편하도록 )
    const check = Array.from({ length: maxNum + 1 }).fill(false);

    //? 에라토스테네스의 체를 통하여 check 배열에서 소수부분을 true로 바꿔주기위한 반복문.
    //? 1은 소수가 아니기 떄문에 2부터 동작하도록 한다.
    for (let i = 2; i <= maxNum; i++) {
        //? 체크배열에서 false가 아니라면 해당 조건문을 통과하지 못한다. 
        //? 즉 처음엔 무조건 타며 이미 체크가 된 인덱스에는 적용하지 않도록 하기 위함.
        if (!check[i]) {

            //? j=i*i        :  j가 i*i가 되어야 i의 제곱근만 체크해줄 수 있기 때문 (에라토스테네스의 체)
            //? i<maxNum     :  i가 최대값보다 커지면 무한루프가 돌며 의미 없는 루프를 돌게 됨.
            //? j +=i        :  j++ 을 하지 않은 이유
            //?                 >> 효율성과 ++하지 않아도 모든 경우를 탐색할 수 있기 때문
            for (let j = i * i; j <= maxNum; j += i) {
                //? 제곱근을 체크 ( --> 제곱근을 체크하는 것이 소수를 찾는 방법 )
                check[j] = true;
            }
        }
    }

    //! 만들어진 소수 배열을 통해 골드바흐의 추측을 풀어내는 부분
    input.forEach((iter) => {
        for (let i = 3; i < iter; i += 2) {
            if (!check[i] && !check[iter - i]) {
                console.log(`${iter} = ${i} + ${iter - i}`);
                break;
            }
        }
    })
}

function _1676() {
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    var inputs5 = Number(input);
    var answer5 = 0;
    while (inputs5 >= 5) {
        answer5 += parseInt(inputs5 / 5);
        inputs5 /= 5;
    }
    console.log(answer5);
}

function _2004() {
    const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let param = input.pop().split(' ');
    let value1 = Number(param[0]);
    let value2 = Number(param[1]);

    let valueArr = [];

    function getZeroCnt(p) {
        let tempP = p;
        let cnt_2 = 0;
        let cnt_5 = 0;

        while (p >= 2) {
            cnt_2 += parseInt(p / 2);
            p /= 2;
        }

        while (tempP >= 5) {
            cnt_5 += parseInt(tempP / 5);
            tempP /= 5;
        }
        valueArr.push([cnt_2, cnt_5]);
    }

    getZeroCnt(value1);
    getZeroCnt(value2);
    getZeroCnt(value1 - value2);

    let firstValue = valueArr[0];
    let secondValue = valueArr[1];
    let thirdValue = valueArr[2];

    console.log(Math.min((firstValue[0] - (secondValue[0] + thirdValue[0])), (firstValue[1] - (secondValue[1] + thirdValue[1]))));

}

function _9613() {
    
}