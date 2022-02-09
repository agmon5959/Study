// 1번째 문제
// 큰 수 출력하기
function solution(arr) {
    let answer = [];
    answer.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (arr[i + 1] !== undefined) {
            if (arr[i] < arr[i + 1]) { answer.push(arr[i + 1]) }
        }
    }
    return answer;

}

// 2번 문제
// 보이는 학생
function solution(arr) {
    let ans = 0;
    // MAX 값을 지정해서 해당 값보다 크다면 카운트 해주는 식으로 풀면 O(N)으로 풀 수 있음.
    // 앞에 누구든 키가 제일 큰 사람을 max 값으로 해놓으면 그 값만 비교해주면 된다.
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i]
            ans++;
        }
    }

    return ans;
}

// 3번 문제
// 가위바위보
function solution(a, b) {
    // A가 이기면 A , B가 이기면 B , 비기면 D 출력
    // 1: 가위 2: 바위 3: 보
    let ans = '';
    for (let i = 0; i < a.length; i++) {
        // 비기는 경우
        if (a[i] === b[i]) {
            ans += "D";
            // A가 이기는 경우
        } else if (
            (a[i] === 1 && b[i] === 3) ||
            (a[i] === 2 && b[i] === 1) ||
            (a[i] === 3 && b[i] === 2)
        ) {
            ans += "A";
            // B가 이기는 경우
        } else {
            ans += "B";
        }
    }
    return ans;
}

// 4번 문제
// 점수 계산
function solution(arr) {
    let ans = 0;
    let cnt = 0;

    // 내가 짠 코드.. 반성한다. 비슷한 부분이 보이면 최대한 없앨 생각을 해야하는데 말야 !
    // for (let i = 0; i < arr.length; i++) {
    //     cnt = 0;
    //     if (arr[i] === 1) {
    //         cnt++;
    //         ans++;
    //         while (arr[i + cnt] === 1) {
    //             cnt++;
    //             ans++;
    //         }
    //     }
    // }

    // 아래 효율적인 코드
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            cnt = 0;
        } else {
            cnt++;
        }
        ans += cnt;
    }

    return ans;
}

// 5번 문제
// 등수 구하기
function solution(arr) {
    // 배열을 정해놓고 구하기 넘어가고 구하고 넘어가고 해야함.
    // 나보다 값이 큰 애들의 수 +1 = 나의 등수
    // 복습
    let ans;
    let scoreArr = [];
    for (let i = 0; i < arr.length; i++) {
        let score = 0; // 스코어 초기화
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                score++;
            }
        }
        scoreArr[i] = score + 1;
    }
    return ans = scoreArr;
}

// 문제 6번
// 격자판 최대합
function solution(arr) {
    let sumDiag_1 = sumDiag_2 = 0;    // 대각선 합
    let resultArr = [0, 0, 0, 0]; // 0 : 가로합 , 1: 세로합 , 2/3 : 대각선 합

    for (let i = 0; i < arr.length; i++) {
        let row = col = 0;

        // 각 row,col의 합계를 구하는 반복문
        for (let j = 0; j < arr.length; j++) {
            row += arr[i][j];
            col += arr[j][i];
        }

        // 최대값을 resultArr에 할당
        if (resultArr[0] < row) {
            resultArr[0] = row
        }
        if (resultArr[1] < col) {
            resultArr[1] = col;
        }
        // 대각선의 합을 구함
        sumDiag_1 += arr[i][i];
        sumDiag_2 += arr[i][(arr.length - 1) - i];
    }
    resultArr[2] = sumDiag_1;
    resultArr[3] = sumDiag_2;

    // 최대값 출력
    return Math.max(...resultArr)
}

// 7번 문제
// 봉우리
function solution(arr) {
    // 복습 필요!!
    // 3중 포문! 
    let cnt = 0;
    const dx = [-1, 1, 0, 0];    // 상,하,좌,우 
    const dy = [0, 0, -1, 1];    // 상,하,좌,우
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let flag = true;
            for (let k = 0; k < dx.length; k++) {
                let mx = i + dx[k];
                let my = j + dy[k];
                if ((mx >= 0 && mx < arr.length) && (my >= 0 && my < arr.length)) {
                    if (arr[i][j] <= arr[mx][my]) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag) {
                cnt++;
            }
        }
    }
    return cnt;
}