// Section 9
// 그래프와 탐색 ( DFS(깊이우선탐색), BFS(넓이우선탐색))

// 문제 1번
// 경로탐색 ( 인접행렬 )
function solution(n, arr) {
    let answer = 0;
    // 2차원 인접행렬 생성
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    // 이미 들린 간선을 들리지 않기 위해서 1차원 체크배열 생성
    let ch = Array.from({ length: n + 1 }, () => 0);

    // 인접배열에 간선노드를 표현하기 위한 반복문
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }

    // 트리구조로 탐색하기 위한 재귀함수 ( DFS, BFS 둘 다 사용됨 )
    function DFS(v) {
        // 레벨이 n과 동일하다면 ans ++;
        // else 로직에서 간선이 없는 경우 해당 조건문 안으로 들어올 수 없음.
        if (v === n) {
            answer++;
        } else {
            // DFS 핵심 로직 부분
            // i는 1부터 동작하고 n과 크거나 같을 때까지
            for (let i = 1; i <= n; i++) {
                // 인접행렬인 graph에서 체크가 되어있다면 해당 레벨에서 i번으로 갈 수 있다는 뜻
                // 인접행렬에 체크가 되어있고 ch배열에 체크가 안되어있다면 아래 조건문을 실행한다.
                if (graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    DFS(i);
                    ch[i] = 0;
                }
            }
        }
    }
    ch[1] = 1;
    DFS(1);
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));