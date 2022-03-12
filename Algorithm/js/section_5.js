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
    let cnt = 0;
    let sum = 0;
    let L = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === m) { cnt++; }
        while (sum >= m) {
            sum -= arr[L++];
            if (sum === m) { cnt++; }
        }
    }
    return cnt;
}

// 4번 문제
// 연속부분수열2
function solution(m, arr) {
    let sum = 0;
    let L = 0;
    let cnt = 0;
    for (let R = 0; R < arr.length; R++) {
        sum += arr[R];
        if (sum <= m) {
            cnt++;
        }
        if (arr[R] <= m) {
            cnt++;
        }
        while (sum > m) {
            sum -= arr[L];
            L++;
            if (sum <= m) {
                cnt++;
            }
        }

    }
    return cnt;
}

// 5번 문제
// 최대 매출
function solution(k, arr) {
    // 슬라이딩 윈도우 알고리즘
    let sum = 0;
    let tempSum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    tempSum = sum;
    for (let i = k; i < arr.length; i++) {
        tempSum = (tempSum + arr[i]) - arr[i - k];
        if (tempSum > sum) {
            sum = tempSum;
        }
    }
    return sum;
}
// 문제 6
// 학급 회장(해쉬)
function solution(s) {
    let answer;
    let sH = new Map();
    let max = 0;
    for(let i of s){
        if(sH.has(i)){
            sH.set(i,(sH.get(i)+1 ));
        }else{
            sH.set(i,1);
        }
        if(max < sH.get(i)){
            max = sH.get(i);
            answer = i;
        }
    }
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
