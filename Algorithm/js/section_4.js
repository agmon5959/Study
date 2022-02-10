// 1번 문제
// 자리수의 합
function solution(n, arr) {
    let returnValue;
    let ans = [];
    let tmpValue = 0;
    let string = String(arr).split(',');
    string.forEach((iter, idx) => {
        for (x of iter) {
            tmpValue += Number(x)
        }
        ans[idx] = tmpValue;
        tmpValue = 0;
    })

    let maxNum = Math.max(...ans);
    let cnt = 0;
    ans.forEach((iter) => {
        if (iter === maxNum) {
            cnt++;
        }
    })

    if (cnt > 1) {
        let idxList = [];
        // maxNum이 몇개인지 알아야한다.
        ans.forEach((iter, idx) => {
            if (iter === maxNum) {
                idxList.push(idx)
            }
        })
        returnValue = idxList;
    } else {
        // maxNum이 담긴 ans의 인덱스를 찾아서 해당 arr[idx]리턴
        ans.forEach((iter, idx) => {
            if (iter === maxNum) {
                returnValue = arr[idx];
            }
        })
        return returnValue;
    }
    // 자릿수의 합을 더한 값이 같은게 2개 이상인 경우
    let tempMaxNum = 0;
    for (let i = 0; i < returnValue.length; i++) {
        if (arr[returnValue[i]] < arr[returnValue[i + 1]]) {
            tempMaxNum = arr[returnValue[i + 1]];
        } else {
            tempMaxNum = arr[returnValue[i]];
        }
    }
}

// 1번 문제
// 자리수의 합 효율적으로 코딩한 것
function solution(n, arr) {
    let sum = 0;
    let max = 0;
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = String(arr[i]).split('').reduce((a, b) => a + Number(b), 0);
        if (max < sum) {
            max = sum;
            idx = i;
        } else if (max === sum) {
            if (arr[idx] < arr[i]) {
                idx = i;
            }
        }
    }
    return arr[idx];
}

// 2번 문제
// 뒤집은 소수
function solution(arr) {
    // 소수 판별 함수
    // 제곱근으로 구하는 방법
    isPrimeNum = (n) => {
        if (n === 1) { return false }
        // 제곱근까지만 반복한다.
        for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
            // 여기 조건문에 걸리면 약수가 있다는 것이니까 소수가 아님
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    let array = [];
    // 1) 뒤집고 ( Number로 바꿔서 앞에 0인 경우 없애기 )
    // 2) 소수인지 판단 ( 본인과 1을 제외한 나머지가 0인 경우 )
    // 3) 소수라면 return
    for (x of arr) {
        let tempNum = Number(x.toString().split('').reverse().join(''));
        if (isPrimeNum(tempNum)) {
            array.push(tempNum);
        }
    }
    debugger
    return array;
}

// 소수 판별 함수
// 에라토스테네스의 체
isPrimeNum_2 = (n) => {
    let tempArr = [];
    if (n === 1) { return false }
    // 배열 초기화
    for (let i = 2; i <= n; i++) {
        tempArr[i] = i;
    }
    // 
    for (let i = 2; i <= n; i++) {
        // 이미 지워진 숫자라면 넘어간다.
        if (tempArr[i] === 0) continue;
        // 지워진 숫자가 아니라면 특정 숫자의 배수부터 출발해서 가능한 모든 경우의 수를 탐색하여
        // 숫자를 지워준다.
        for (let j = i + i; j <= n; j += i) {
            tempArr[j] = 0;
        }
    }

    // 이 시점에서는 tempArr 내에는 0과 소수만 남게된다.
    let primeArray = [];
    for (let i = 2; i <= n; i++) {
        if (tempArr[i] !== 0) { primeArray.push(tempArr[i]) }
    }
    return primeArray;
}

// 3번 문제
// 멘토링
function solution(test) {
    let ans;
    let allArr = []; // 모든 경우의 수가 있는 배열
    let cnt = 0;
    for (let i = 1; i <= 4; i++) {
        for (j = 1; j <= 4; j++) {
            // 1에서 4까지 정답이 될 수 있는 모든 경우의 수가 담긴 배열을 만든다.
            // if (i !== j){
                allArr.push([i, j]);
            // }
            // 4중 포문 

        }
    }

    // for (let i = 0; i < test.length; i++) {
    //     for (j = 0; j < test.length; j++) {
    //         // 인덱스로 비교해줘야한다.
            
    //     }
    }

    return ans;

let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));