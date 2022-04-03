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
            answer += num%2;
        }
    }

    DFS(n);

    return answer;
}

// 3번 문제
// 이진트리순회
function solution(n){
    function DFS(n){
        if(){
            
        }else{

        }
    }
}

console.log(solution(1));