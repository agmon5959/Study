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
// 부분집합 구하기 >> 조합 문제 
// 근데 이게 진짜 병신같은게 ch라는 체크배열을 따로 만들어줌 ;
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

// 11번 문제
// 팩토리얼

// return param * DFS(param-1) 부분에서 ans = param * DFDS(param-1)을 해줘서 답이 안나왔음.... ㅠ_ㅠ
// return => 호출부로 반환하는 것 ... ! , ans에는 왜 답이 안들어갔을까 ? => 해당 함수에서 Return은
// param이 1일때만 해주는 return이 전부라서 .. !
function solution(n) {
    let ans;
    function DFS(param) {

        if (param == 1) {
            return 1;
        } else {
            // DFS함수의 리턴은 DFS 함수로 오기 때문에
            // 그 함수의 리턴값 * param으로 계속 계산식을 타게 된다.
            return param * DFS(param - 1);
        }

    }
    ans = DFS(n);
    return ans;
}

// 12번 문제
// 조합수(메모이제이션)
function solution(n, r) {
    let answer = [];
    // dy > 메모이제이션을 활용하기 위한 배열
    let dy = Array.from(Array(35), () => Array(35).fill(0));

    function DFS(n, r) {

        if (dy[n][r] > 0) return dy[n][r]; // 메모리제이션 사용
        if (n === r || r === 0) return 1;
        else return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
    answer = DFS(n, r);
    return answer;
}

// 순열과 조합
function solution(number, arr) {

    /*
        rest에 범위를 추리는 방법에 따라서 조합/중복조합/순열/중복순열이 결정된다.
        순열은 현재 방문한 i번째 아이템을 제외한 나머지 아이템들이 모두 rest에 올 수 있음
        조합은 현재 방문한 i번째 아이템의 뒤에 있는 아이템들만 rest에 올 수 있음.
        조합에서는 [i-1, i]과 [i, i-1]이 동일한 경우의 수이므로 현재 아이템보다 앞서 선택했던 아이템은 다시 선택할 필요가 없기 때문.
    */

    let ans = [];
    
    if (number === 1) {
        return arr.map((dr) => [dr]);
    }
    arr.forEach((fixed, idx, origin) => {
        let rest = []; // 배열의 원소 중 하나를 고른 나머지들을 rest 변수에 담아준다.
        // 1) 조합
        rest = origin.slice(idx + 1); // 파라미터로 들어온 배열의 0번째 인덱스를 잘라서 rest에 넣는다.
        // 2) 중복조합
        // rest = origin.slice(idx);
        // 3) 순열
        // rest = [...origin.slice(0,idx) , ...origin.slice(idx+1)];
        // 4) 중복순열
        // rest = origin;
        let combination = solution(number - 1, rest); // 나머지에 대한 조합 값

        let attached = combination.map((iter) => { // 나온 결과 값에 대해 fixed값 붙여주기
            return [fixed, ...iter];
        })
        ans.push(...attached); // 리턴 배열에 넣어주기
    });


    return ans;

}


// 13번 문제
// 수열 추측하기
function solution(n, f){         
    let answer, flag=0;
    let dy= Array.from(Array(11), () => Array(11).fill(0));
    let ch=Array.from({length:n+1}, ()=>0);
    let p=Array.from({length:n}, ()=>0);
    let b=Array.from({length:n}, ()=>0);
    function combi(n, r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0) return 1;
        else return dy[n][r]=combi(n-1, r-1)+combi(n-1, r);
    }
    function DFS(L, sum){
        if(flag) return;
        if(L===n && sum===f){
            answer=p.slice();
            flag=1;
        }
        else{
            for(let i=1; i<=n; i++){
                if(ch[i]===0){
                    ch[i]=1;
                    p[L]=i;
                    DFS(L+1, sum+(b[L]*p[L]));
                    ch[i]=0;
                }
            }
        }
    }
    for(let i=0; i<n; i++){
        b[i]=combi(n-1, i);
    }
    DFS(0, 0);
    return answer;
}

console.log(solution(4, 16));