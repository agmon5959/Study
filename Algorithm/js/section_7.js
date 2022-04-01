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
            cnt++;
        }
    }
    return cnt;
}

// 9번 문제
// 결혼식
// 타임라인을 이용해서 풀었음.
// 오는시간 및 가는시간을 쪼갠 뒤 s / e 만나면서 최대값 추출
function solution(times) {
    let timeLine = [];
    let cnt = 0;
    let ans = 0;
    times.forEach((iter) => {
        timeLine.push([iter[0], 's']);
        timeLine.push([iter[1], 'e']);
    })
    timeLine.sort((a, b) => {
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else return a[0] - b[0];
    })

    for (let i = 0; i < timeLine.length; i++) {
        if (timeLine[i][1] === 's') {
            cnt++;
        } else {
            cnt--;
        }
        if (cnt > ans) {
            ans = cnt;
        }
    }

    return ans;
}

// 10번 문제
// 이분검색
function solution(target, arr) {
    // 이분검색은 자료가 반드시 정렬된 상태에서 사용할 수 있음.
    // 왼쪽 끝을 가르키는 포인터와 오른쪽 끝을 가르키는 포인터 두개가 있어야한다.
    // 검색범위를 반으로 쪼개가면서 찾는 방법.

    arr.sort();                     // 오름차순 정렬
    let lt = 0;                     // 초기 왼쪽 포인터 선언 및 할당
    let rt = arr.length - 1;        // 초기 오른쪽 포인터 선언 및 할당
    let mid = parseInt((lt + rt) / 2);  // 초기 중간 포인터 선언 및 할당
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[mid] === target) {
            ans = mid;
            break;
        }

        else if (arr[mid] > target) {
            rt = mid;
            mid = parseInt((lt + rt) / 2);
        }
        else {
            lt = mid;
            mid = parseInt((lt + rt) / 2);
        }

    }

    return ans + 1;
}

// 11번 문제
// 뮤직비디오
// 이분 검색을 이용한 결정 알고리즘
function solution(m, songs) {
    let ans = 0;

    // 해당 부분이 제일 중요함.
    let count = (arr, value) => {

        let cnt = 1;
        let sum = 0;

        for (let x of arr) {
            if (sum + x > value) {
                cnt++;
                sum = x;
            } else {
                sum += x;
            }
        }
        return cnt;
    }

    let lt = Math.max(...songs);    // 이분 검색을 위한 최소값으로 배열의 최대값을 넣어준다.
    let rt = songs.reduce((acc, cur) => acc + cur, 0); // 이분검색을 위한 최대값으로 배열의 합을 넣어준다.

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2); // parseInt로 소수점을 제거한다.

        if (count(songs, mid) <= m) {
            ans = mid;
            rt = mid-1; // -1 해주는것이 중요함. 아니면 무한루프를 돌게 됨.
        } else {
            lt = mid+1; // +1 해주는것이 중요함. 아니면 무한루프를 돌게 됨.
            
        }
    }

    return ans;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));