let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const len = (input.shift());
const value = (input);

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
const arr = [];
const ans = [];
value.forEach((iter) => {
    switch (iter.split(' ')[0]) {
        case "push":
            arr.push(Number(iter.split(' ')[1]));
            break;
        case "top":
            if (arr.length === 0) {
                ans.push(-1)
                // console.log(-1);
            } else {
                ans.push(arr[arr.length - 1]);
            }
            break;
        case "size":
            ans.push(arr.length);
            break;
        case "empty":
            if (arr.length === 0) {
                ans.push(1);
            } else {
                ans.push(0);
            }
            break;
        case "pop":
            if (arr.length === 0) {
                ans.push(-1)
            } else {
                ans.push(arr.pop());                
            }
            break;
    }
})

console.log(ans.join('\n'));