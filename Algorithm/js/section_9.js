// Section 9
// 그래프와 탐색 ( DFS(깊이우선탐색), BFS(넓이우선탐색))

// 문제 1번
// 경로탐색 ( 인접행렬 )
function solution(n, arr) {
    return {n, arr};
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));