// 효율성 ( 투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

// 1번 문제
// 두 배열 합치기
function solution(arr1, arr2) {
    let newArr = [];
    let len = arr1.length < arr2.length ? arr2.length : arr1.length

    for (let i = 0; i < len; i++) {
        if (arr1[i] !== undefined) {
            newArr.push(arr1[i]);
        }
        if (arr2[i] !== undefined) {
            newArr.push(arr2[i]);
        }
    }

    return newArr.sort((a, b) => {
        return a - b;
    })
}

// 2번 문제
// 공통원소 구하기
function solution(arr1, arr2) {
    let ans = [];
    arr1.forEach((iter) => {
        if (arr2.indexOf(iter) >= 0) {
            ans.push(iter)
        }
    })
    return ans.sort((a, b) => { return a - b })
}

// 3번 문제
// 연속 부분 수열
function solution(m, arr) {
    let left = 0;
    let right = 1;
    let cnt = 0;
    let sum = arr[left] + arr[right];

    for (let i = 0; i < arr.length; i++) {
        if (arr[right] === undefined || arr[left] === undefined) break;
        debugger
        if (sum < m) { // sum이 m보다 작을 때
            debugger
            sum += arr[right];
            right++;
            if (sum + arr[right] === m) {
                sum -= arr[left];
                cnt++;
                left--;
            }
        } else if (sum > m) {
            debugger
            sum -= arr[left];
            left++;
            
            if (sum + arr[right] === m) {
                sum -= arr[left];
                cnt++;
                left--;
            }
            
        }


    }
    debugger

    return cnt;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
