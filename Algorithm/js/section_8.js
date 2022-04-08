// 섹션 8 [ 재귀함수와 완전탐색 (깊이우선탐색 DFS ) ]

// 문제 1 재귀함수
function solution(n) {
    function DFS(num) {
        if (num === 0) return
        else {
            DFS(num - 1);
            console.log(num);
        }
    }
    return DFS(n);
}

// 문제 2 이진수 출력(재귀)
function solution(n) {
    let answer = "";
    const DFS = (num) => {
        if (num === 0) return
        else {

            DFS(parseInt(num / 2));
            answer += num % 2;
        }
    }

    DFS(n);

    return answer;
}

// 3번 문제
// 이진트리순회
function solution(n) {
    function DFS(n) {
        if (n > 7) {
            return
        } else {
            // console.log(n); 전위
            DFS(n * 2);
            // console.log(n); 중위
            DFS((n * 2) + 1);
            // console.log(n); 후위
        }
    }
    DFS(n);
}

// 4번 문제
// 부분집합 구하기
function solution(n) {
    let answer = [];
    let ch = Array.from({ length: n + 1 }, () => 0);
    function DFS(L) {
        if (L === n + 1) {
            let tmp = "";
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 1) tmp += (i + " ");
            }
            if (tmp.length > 0) answer.push(tmp.trim());
        }
        else {
            // 해당 문제를 기준으로 좌측은 True 우측은 False 로 생각한다.
            // 왼쪽 방향 갈래
            ch[L] = 1;
            DFS(L + 1);

            // 오른쪽 방향 갈래
            ch[L] = 0;
            DFS(L + 1);
        }
    }
    DFS(1);
    return answer;
}

// 5번 문제
// 합이 같은 부분집합
function solution(arr) {
    let answer = "NO"
    let flag = 0;
    // total = 배열의 합 
    let total = arr.reduce((a, b) => a + b, 0);
    // n은 배열의 길이 ( 종료조건 )
    let n = arr.length;

    function DFS(L, sum) {
        if (flag) return;
        if (L === n) {
            if ((total - sum) === sum) {
                answer = "YES";
                flag = 1;
            }
        }
        else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

function solution(c, arr) {
    let ans = 0;
    let sum = 0;
    let array = [];

    function DFS(idx, pSum) {
        if (pSum > c) return;
        if (idx === arr.length) {
            ans = Math.max(ans, pSum);
        } else {
            DFS(idx + 1, pSum + arr[idx]);
            DFS(idx + 1, pSum);
        }
    }

    DFS(0, sum)

    return ans;
}

// 7번 문제
// 최대 점수 구하기
function solution(m, ps, pt){         
    
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));