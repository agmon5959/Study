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

// 124 숫자의 나라
function solution(n) {
    var answer = '';
    const arr = ['4', '1', '2'];
    while (n > 0) {
        answer = arr[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }


    return answer;
}

// 문자열 압축
// 남의 풀이
function solution(s) {
    if (s.length === 1) return 1;
    let min = 1000;
    for (let i = 1; i <= s.length / 2; i++) {
        let str1 = '';
        let str2 = '';
        let ans = '';
        let count = 1;
        for (let j = 0; j < s.length; j += i) {

            if (j === 0) {
                str1 = s.slice(j, j + i);
            } else {
                str2 = s.slice(j, j + i)
                if (str1 === str2) {
                    count++;
                    if (j + i === s.length) ans += `${count}${str1}`;

                } else {
                    if (count > 1) {
                        ans += `${count}${str1}`
                    } else {
                        ans += str1;
                    }
                    count = 1;
                    if (str1.length > str2.length) {
                        ans += str2;
                    }
                    str1 = str2;
                    if (j + i === s.length) ans += str2;
                }
            }
        }
        min = Math.min(ans.length, min);
    }
    return min;
}

// 프린터
// 나의풀이
function solution(priorities, location) {

    let cnt = 1;
    while (priorities.length) {
        if (priorities[0] === Math.max(...priorities)) {
            if (location == 0) {
                return cnt;
            } else {
                cnt++;
                priorities.shift();
                location--;
            }
        } else {
            if (location == 0) {
                location = priorities.length - 1
            } else {
                location--;
            }
            priorities.push(priorities.shift());
        }
    }
    return cnt;
}

// 남의 풀이
function solution(priorities, location) {
    var list = priorities.map((t, i) => ({
        my: i === location,
        val: t
    }));
    var count = 0;
    while (true) {
        var cur = list.splice(0, 1)[0];
        if (list.some(t => t.val > cur.val)) {
            list.push(cur);
        }
        else {
            count++;
            if (cur.my) return count;
        }
    }
}

// 가장 큰 수 
// 나의 풀이
function solution(numbers) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let returnArr = [];
    let modular = 1;
    // 탈출 조건 필요
    while (numbers.length) {
        // 1의 자리 / 10의자리 / 100의 자리 ... 
        modular *= 10;
        let tempArr = [];
        for (let i = 0; i < numbers.length; i++) {
            // 해당 반복문에서 제일 작은 자릿수
            if (numbers[i] % modular !== 0) {
                if (numbers[i] <= modular) {
                    tempArr.push(numbers[i]);
                    numbers[i] = 0;
                }
            }
        }

        if (tempArr.length !== 0) {
            debugger
            tempArr.sort((a, b) => b - a);
            debugger
        }


    }
}

console.log(solution([3, 30, 34, 5, 9]));


// 위장
function solution(clothes) {
    let obj = {};
    for (let i = 0; i < clothes.length; i++) {
        
        obj[clothes[i][1]] = clothes[i][0];
    }
    console.log(obj);
}