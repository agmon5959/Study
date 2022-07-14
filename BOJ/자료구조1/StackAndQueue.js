// !
// *
// todo && TODO
// ?
function _1406() {

    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

    const targetArr = [...input.shift()];
    const len = Number(input.shift());
    const param = input;
    let tempArr = [];

    for (let i = 0; i < len; i++) {
        const command = param[i].split(' ')[0];

        switch (command) {
            case "L":   // target -> temp
                if (targetArr.length !== 0) {
                    tempArr.push(targetArr.pop());
                }

                break;
            case "D": // temp -> target
                if (tempArr.length !== 0) {
                    targetArr.push(tempArr.pop())
                }
                break;
            case "B":
                targetArr.pop()
                break;
            case "P":
                let value = param[i].split(' ')[1];
                targetArr.push(value);
                break;
        }
    }


    console.log(
        targetArr.concat(tempArr.reverse()).join('')
    );
}

function _10845() {
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    const len = input.shift();
    const param = input;
    const queue = [];
    const ans = [];

    for (let i = 0; i < len; i++) {
        const type = param[i].split(' ')[0];
        switch (type) {
            case "push": // push X: 정수 X를 큐에 넣는 연산이다.
                const value = param[i].split(' ')[1];
                queue.push(value);
                break;
            case "pop": // pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
                if (queue.length === 0) {
                    ans.push(-1);
                } else {
                    ans.push(queue.shift());
                }
                break;
            case "size": // size: 큐에 들어있는 정수의 개수를 출력한다.
                ans.push(queue.length);
                break;
            case "empty": // empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
                if (queue.length === 0) {
                    ans.push(1);
                } else {
                    ans.push(0);
                }
                break;
            case "front": // front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
                if (queue.length === 0) {
                    ans.push(-1);
                } else {
                    ans.push(queue[0]);
                }
                break;
            case "back": // back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
                if (queue.length === 0) {
                    ans.push(-1);
                } else {
                    ans.push(queue[queue.length - 1]);
                }
                break;
        }
    }

    console.log(ans.join('\n'));
}

function _1158() {
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    // const len = input.shift();
    const param = input.pop().split(' ');
    let cnt = Number(param[1]) - 1;
    const target = Array.from({ length: param[0] }).fill().map((iter, i) => i + 1);
    const ans = [];
    while (target.length) {
        if (cnt === 0) {
            ans.push(target.shift());
            cnt = Number(param[1]) - 1;
        } else {
            target.push(target.shift());
            cnt--;
        }
    }

    console.log(`<${ans.join(', ')}>`);
}

function _10866() {
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    // const len = input.shift();
    const len = input.shift();
    const param = input;


    let ans = [];
    let deque = []
    for (let i = 0; i < len; i++) {
        const type = param[i].split(' ')[0];
        const value = param[i].split(' ')[1];
        switch (type) {
            case "push_front":  // push_front X: 정수 X를 덱의 앞에 넣는다.
                deque.unshift(value);
                break;
            case "push_back":   // push_back X: 정수 X를 덱의 뒤에 넣는다.
                deque.push(value);
                break;
            case "pop_front":   // pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
                if (deque.length === 0) {
                    ans.push(-1);
                } else {
                    ans.push(deque.shift());
                }
                break;
            case "pop_back":    // pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
                if (deque.length === 0) {
                    ans.push(-1);
                } else {
                    ans.push(deque.pop());
                }
                break;
            case "size":    // size: 덱에 들어있는 정수의 개수를 출력한다.
                ans.push(deque.length)
                break;
            case "empty":   // empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
                if (deque.length === 0) {
                    ans.push(1)
                } else {
                    ans.push(0)
                }
                break;
            case "front":   // front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
                if (deque.length === 0) {
                    ans.push(-1);
                } else {
                    ans.push(deque[0])
                }

                break;
            case "back":    // back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
                if (deque.length === 0) {
                    ans.push(-1);
                } else {
                    ans.push(deque[deque.length - 1]);
                }
                break;
        }
    }

    console.log(
        ans.join('\n')
    );
}

function _17413() {
    let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    const param = input;
    const arr = [...param.pop()];

    let comArr = [];
    let reverseArr = [];
    let bool = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "<") {
            bool = true;
        } else if (arr[i] === ">") {
            bool = false;
        }

        if (bool) { // <
            if (
                (arr[i] === "<" || arr[i] === '')
                && i !== 0) {
                comArr.push(reverseArr.reverse());
                reverseArr = [];
            }
            comArr.push(arr[i]);
        } else { // >
            if (arr[i] === ">") {
                comArr.push(arr[i]);
            } else {
                if (arr[i] === ' ') {
                    comArr.push(reverseArr.reverse());
                    reverseArr.push(arr[i]);
                    reverseArr = [];
                } else {
                    reverseArr.push(arr[i]);
                }
            }
        }
    }
    if (reverseArr.length !== 0) {
        comArr.push(reverseArr.reverse());
    }
    console.log(String(comArr.join()).replace(/,/gi, ""));

}

function _10799() {
    let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    const value = input.pop();
    const arr = [];
    let ans = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "(") {
            arr.push(value[i]);
        } else {
            if (value[i - 1] !== undefined && value[i - 1] === "(") { // 레이저인 경우
                arr.pop();
                ans += arr.length;
            } else {
                arr.pop();
                ans += 1;
            }
        }
    }
    console.log(ans);
}

// 오큰수 시간초과 풀이
function _17298() {
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let arr = input[1].split(' ').map(e => Number(e));
    let returnArr = [];
    console.log(arr);

    while (arr.length) {

        if (arr.length === 1) {
            returnArr.push(-1);
            break;
        }

        let target = arr.shift();
        let value = findBiggerFiveNum(target, arr);
        returnArr.push(value);
    }

    function findBiggerFiveNum(targetNum, originArr) {
        let ans = undefined;
        for (let i = 0; i < originArr.length; i++) {
            if (targetNum < originArr[i]) {
                ans = originArr[i];
                break;
            }
        }
        // 다 돌았는데 없는 경우
        if (ans === undefined) {
            return -1;
        }
        return ans;
    }

    console.log(returnArr.join(' '));
}

// 오큰수 통과 풀이
// 이해하는데 시간 오래걸렸음,.
function _17298_2() {
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
    let seg = input[1].split(' ').map(e => Number(e));
    let stack = [];
    let ansArr = Array.from({ length: seg.length }).fill(-1);

    for (let i = 0; i < Number(input[0]); i++) {
        while (stack.length && seg[i] > seg[stack[stack.length - 1]]) {
            ansArr[stack.pop()] = seg[i];
        }
        stack.push(i)
    }
    console.log(ansArr.join(' '));
}

function _17299() {
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
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

    console.log(ansArr.join(' '));
}