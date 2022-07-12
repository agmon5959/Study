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

// 3번 문제
// 크레인 인형뽑기 ( 카카오 )
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

// 4번문제
// 후위식 연산
function solution(s) {
    let answer;
    let stack = [];
    let left, right;
    for (let x of s) {
        if (!isNaN(Number(x))) {
            stack.push(Number(x));
        } else {
            right = stack.pop();
            left = stack.pop();
            switch (x) {
                case "+":
                    stack.push(Number(left + right));
                    break;
                case "-":
                    stack.push(Number(left - right));
                    break;
                case "*":
                    stack.push(Number(left * right));
                    break;
                case "/":
                    stack.push(Number(left / right));
                    break;
            }
        }
    }
    return stack.pop();
}

// 6번 문제
// 쇠막대기
function solution(s) {

    // stack이라는 temp 메모리를 활용해야했음.
    // 입력값으로  () / {} / [] 이런 애들이 들어오는 경우엔 80%는 스택을 사용하여 풀면 편리하다.

    let answer = 0;
    
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        // 여는 괄호
        if (s[i] === "(") {
            stack.push(s[i]);
        } else if (s[i] === ")") {
            // 닫는괄호
            if (s[i - 1] === "(") { // 레이저
                stack.pop();
                answer += stack.length;
            } else {  // 막대기의 끝
                stack.pop();
                answer += 1;
            }
        }
    }

    return answer;
}

// 6번 문제
// 공주 구하기
function solution(n, k) {
    let cnt = 0;
    let arr = Array.from({ length: n }, (v, k) => k + 1 );
    // 주기는 k
    // cnt가 k가 되면 해당 인덱스를 제외한다.

    while(arr.length > 1){
        cnt ++;
        if(cnt === k){
            arr.push(arr.shift());
            arr.pop();
            cnt = 0;
        }else{
            // 배열 맨 앞의 값을 맨 뒤로 옮긴다.
            arr.push(arr.shift());
        }
    }
    return arr.pop();
}

// 7번 문제
// 교육과정설계
function solution(need, plan){
    let arr = [...need];
    let tempArr = [];
    [...plan].forEach((iter)=>{
        if(arr.includes(iter)){
            tempArr.push(iter);
        }
    })
    return tempArr.join('') === need ? "YES" : "NO"
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));