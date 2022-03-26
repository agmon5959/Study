// 1번 문제
// 선택 정렬
function solution(arr) {
    let ans;

    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) {
                idx = j;
            }

        }
        // 두개를 바꿔야함
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        console.log('i > ', i, 'idx > ', idx)
    }
    return arr;
}

// 2번 문제
// 버블 정렬
function solution(arr) {
    let answer = arr;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}

// 3번 문제
// Special Sort
function solution(arr) {

    let nagativeArr = [];
    let positiveArr = [];
    let returnArr = [];
    for (let x of arr) {
        if (x < 0) {
            nagativeArr.push(x);
        } else {
            positiveArr.push(x);
        }
    }

    let correctAnswer = returnArr = nagativeArr.concat(positiveArr).join();

    // 버블정렬 이용 ( 앞, 뒤 비교 )
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;

}

// 4번 문제
// 삽입 정렬
function solution(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < temp) {
                break;
            } else {
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// 5번 문제
// LRU
function solution(size, arr) {
    let returnArr = [];

    for (let i = 0; i < arr.length; i++) {
        // 배열에 중복된 요소가 존재하는가 ?
        if (returnArr.indexOf(arr[i]) < 0) {  // NO

            // returnArr의 길이가 주어진 길이보다 작다면 값 넣어주기
            if (returnArr.length < size) {
                returnArr.splice(0, 0, arr[i]);
            } else {
                returnArr.splice(0, 0, arr[i]);
                returnArr.pop();
            }

        } else {  // 배열에 중복된 요소 존재
            returnArr.splice(returnArr.indexOf(arr[i]), 1) // 중복된 값 제거
            returnArr.splice(0, 0, arr[i])
        }
    }

    // return returnArr

    return arr.reverse().splice(0, size);
}

// 6번 문제
// 장난꾸러기 현수
function solution(arr) {

    let ans = [];
    let sortingArr = [...arr].sort();

    arr.forEach((iter, idx) => {
        if (iter !== sortingArr[idx]) {
            ans.push(idx + 1);
        }
    })

    return ans;
}

// 7번 문제
// 좌표 정렬
function solution(arr) {
    return arr.sort();
}

// 8번 문제
// 회의실 배정
function solution(arr) {
    // let ing = [];
    // let returnArr = [];
    // let cnt = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     ing = arr[i];
    //     cnt = 0;
    //     for (let j = 0; j < arr.length; j++) {
    //         if (i === j) continue;
    //         if (ing[1] <= arr[j][0]) {
    //             ing = arr[j];
    //             cnt++;
    //         }
    //     }
    //     returnArr.push(cnt);
    // }
    // return Math.max(...returnArr) + 1;

    // 내가 풀었는데 이중포문을 굳이 안써도 됨.
    // 1) 끝나는 시간을 기준으로 정렬
    // 2) 끝나는 시간이 모두 같을 경우 다르게 정렬 (sort함수 내에 조건문 걸어주면 됨)
    // 3) 배열 순회하며 첫 시간이 끝 시간보다 크거나 같을 때 cnt ++ 해준다.

    // 끝시간을 기준으로 정렬하되, 끝시간이 동일한 경우 첫번째 시간으로 정렬하도록 한다.
    arr.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    })
    let endTime = 0;
    let cnt = 0;
    for (let x of arr) {
        if (x[0] >= endTime) {
            endTime = x[1];
            cnt ++;
        }
    }
    return cnt;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
// let arr = [[3, 3], [1, 3], [2, 3]];
console.log(solution(arr));
