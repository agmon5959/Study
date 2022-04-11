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
function solution(m, ps, pt) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = ps.length;
    function DFS(L, sum, time) {
        if (time > m) return;
        if (L === n) {
            answer = Math.max(answer, sum);
        }
        else {
            DFS(L + 1, sum + ps[L], time + pt[L]);
            DFS(L + 1, sum, time);
        }
    }

    DFS(0, 0, 0);
    return answer;
}


// 8번 문제
// 중복순열
function solution(number, times) {
    let answer = [];
    let arr = Array.from({ length: times }, () => 0);

    function DFS(L) {
        if (L === times) {
            answer.push([...arr]);
        } else {
            for (let i = 1; i <= number; i++) {
                arr[L] = i;
                console.log(arr);
                DFS(L + 1);
            }
        }
    }
    DFS(0);
    console.log(answer);
}

// 9번 문제
// 동전교환
function solution(m, arr) {
    let cnt = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    function DFS(L, pSum) {

        if (pSum > m) return;
        if (L >= ans) return;
        if (pSum === m) {
            // 조건 충족시 cnt ++;
            // cnt 중에서 제일 작은 cnt로 덮어쓰기 Math.min(ans,cnt)
            ans = Math.min(ans, L);
        } else {
            // arr.length회 반복
            for (let i = 0; i < arr.length; i++) {
                DFS(L + 1, pSum + arr[i]);
            }
        }
    }
    DFS(0, 0);

    return ans;
}

// 순열과 조합
// 집에가서 천천히 로직 따라가보기.
function solution(number, arr) {
    let ans = [];
    // 1이라면 한 개씩 반환
    if (number === 1) {
        return arr.map((dr) => [dr]);
    }
    arr.forEach((fixed, idx, origin) => {
        let rest = []; // 배열의 원소 중 하나를 고른 나머지들을 rest 변수에 담아준다.

        // 1) 조합
        // rest = origin.slice(idx + 1);

        // 2) 중복조합
        // rest = origin.slice(idx);

        // 3) 순열
        // rest = [...origin.splice(0,idx) , ...origin.slice(idx+1)];

        // 4) 중복순열
        rest = origin;
        

        let combination = solution(number - 1, rest); // 나머지에 대한 조합 값

        let attached = combination.map((iter) => { // 나온 결과 값에 대해 fixed값 붙여주기
            return [fixed, ...iter];
        })
        
        ans.push(...attached); // 리턴 배열에 넣어주기
    });


    return ans;

}

let arr = [3, 6, 9];
console.log(solution(2, arr));