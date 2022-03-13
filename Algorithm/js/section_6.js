// 1번문제
// 올바른 괄호
function solution(s) {
    // let stack = [];
    let cnt = 0;
    for (let x of s) {
        if (x === "(") {
            cnt++;
        } else {
            cnt--;
        }
    }
    return cnt === 0 ? "YES" : "NO";
}

// let a = "(()(()))(()";
// let a = "()()(())((()))(()())";
// console.log(solution(a));

// 2번 문제
// 괄호 문자 제거
function solution(s) {
    let flag = false;
    let cnt = 0;
    let str = "";
    for (let x of s) {

        if (x === "(") {
            cnt++;
        } else if (x === ")") {
            cnt--;
        } else {
            if (cnt === 0) {
                str += x;
            }
        }


    }
}

function solution(board, moves) {
    let score = 0;
    let container = [];
    let arrIdx0 = [];
    let arrIdx1 = [];
    let arrIdx2 = [];
    let arrIdx3 = [];
    let arrIdx4 = [];
    // moves 값에 따라서 탐색하는 배열의 위치를 정해야한다.
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            switch (j) {
                case 0:
                    arrIdx0.push(board[i][j])
                    break;
                case 1:
                    arrIdx1.push(board[i][j])
                    break;
                case 2:
                    arrIdx2.push(board[i][j])
                    break;
                case 3:
                    arrIdx3.push(board[i][j])
                    break;
                case 4:
                    arrIdx4.push(board[i][j])
                    break;
            }
        }
    }


    const getItems = (item) => {
        let arr;
        if (item === 1) {
            arr = arrIdx0;
        } else if (item === 2) {
            arr = arrIdx1;
        } else if (item === 3) {
            arr = arrIdx2;
        } else if (item === 4) {
            arr = arrIdx3;
        } else {
            arr = arrIdx4;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                continue;
            } else {
                container.push(arr[i]);
                arr[i] = 0;
                break;
            }
        }
    }

    for (let x of moves) {
        getItems(x);
        let len = container.length;
        if (container[len - 1] !== undefined && container[len - 2] !== undefined) {
            if (container[len - 1] === container[len - 2]) {
                container.pop();
                container.pop();
                score += 2;
            }
        }
    }
    
    return score;

}
let a =
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
    ];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));