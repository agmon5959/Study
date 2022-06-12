// 짝지어 제거하기

function solution(s) {
    let str = s;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (str[i] === str[i + 1]) {
            str = str.substring(0, i) + str.substring(i + 2);
            if (str.length === 2) {
                if (str[0] === str[1]) {
                    ans = 1;
                }
                break;
            }
            i = -1;
        }


    }
    return ans;
}

function solution(s) {
    let ans = 0;
    let arr = [...s];

    for (let i = 0; i < s.length; i++) {

        if (arr[i] === arr[i + 1]) {
            arr = arr.slice(0, i).concat(arr.slice(i + 2));
            i = i - 2;
        }

        if (arr.length === 2) {
            if (arr[0] === arr[1]) {
                return 1;
            }
        }

    }
    return ans;
}

function solution(s) {
    let compArr = [];
    let p = -1;
    let ans = 0;


    for (let i = 0; i < s.length; i++) {
        // 두 개가 다른 경우
        if (s[i] !== compArr[p]) {
            compArr.push(s[i]);
            p++;
            // 두 개가 같은 경우
        } else {
            compArr.pop();
            p--;
        }
    }

    if (compArr.length == 0) {
        ans = 1;
    }
    return ans;

}

// 최종 성공한 풀이
function solution(s) {
    const compArr = [];
    let p = -1;
    let ans = 0;


    for (let i = 0; i < s.length; i++) {
        // 두 개가 다른 경우
        if (s[i] !== compArr[p]) {
            compArr.push(s[i]);
            p++;
            // 두 개가 같은 경우
        } else {
            compArr.pop();
            p--;
        }
    }

    if (compArr.length == 0) {
        return 1;
    }

    return ans;
}

// 행렬 테두리 회전하기
function solution(rows, columns, queries) {
    const answer = [];
    let arr = Array.from(new Array(rows + 1), () =>
        new Array(columns + 1).fill(0)
    );

    // 숫자 채우기
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            arr[i][j] = (i - 1) * columns + j;
        }
    }

    for (let tc = 0; tc < queries.length; tc++) {
        const [x1, y1, x2, y2] = queries[tc];
        const stack = [];
        // 맨 위 직사각형 고르기 x1은 행 고정, y1이 y2 직전까지 1씩 증가
        for (let i = y1; i < y2; i++) stack.push(arr[x1][i]);
        // 오른쪽 직사각형 고르기 y2는 고정, x1이 x2 직전까지 1씩 증가
        for (let i = x1; i < x2; i++) stack.push(arr[i][y2]);
        // 아래쪽 직사각형 고르기 x2는 고정, y2가 y1 직전까지 1씩 감소
        for (let i = y2; i > y1; i--) stack.push(arr[x2][i]);
        // 왼쪽 직사각형 고르기y1는 고정, x2가 x1 직전까지 1씩 감소
        for (let i = x2; i > x1; i--) stack.push(arr[i][y1]);

        // 정답 찾기
        answer.push(Math.min(...stack));
        const temp = stack.pop();
        stack.unshift(temp);

        for (let i = y1; i < y2; i++) arr[x1][i] = stack.shift();
        for (let i = x1; i < x2; i++) arr[i][y2] = stack.shift();
        for (let i = y2; i > y1; i--) arr[x2][i] = stack.shift();
        for (let i = x2; i > x1; i--) arr[i][y1] = stack.shift();
    }

    return answer;
}
