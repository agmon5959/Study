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


// 번외
function solution(arr) {
    // 카카오 2021 인턴
    // 거리두기


    let ansArr = [];

    for (let i = 0; i < arr.length; i++) {
        ansArr.push(findDist(i));
    }

    return ansArr;


    function findDist(i) {
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        let flag = true;
        let cnt = 0;

        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i][j][k] === "X") { // X인 경우
                    continue;
                } else if (arr[i][j][k] === "P") {
                    // P인 경우 주위 P가 하나라도 있으면 flag = false
                    for (let l = 0; l < arr.length; l++) {
                        let moveX = j + dx[l];
                        let moveY = k + dy[l];
                        // 접근불가 인덱스가 아닌 경우에만 아래 조건문을 타도록 한다.
                        if (arr[i][moveX] !== undefined && arr[i][moveX][moveY] !== undefined) {
                            // debugger
                            // P를 발견한 경우 flag는 false
                            if (arr[i][moveX][moveY] === "P") {
                                flag = false;
                            }
                            if (flag === false) {
                                return 0
                            }
                        }

                    }
                } else {    // O인 경우
                    // 내 주위 P가 2 이상이라면 return 0
                    cnt = 0;
                    for (let l = 0; l < arr.length; l++) {

                        let moveX = j + dx[l];
                        let moveY = k + dy[l];
                        // 접근불가 인덱스가 아닌 경우에만 아래 조건문을 타도록 한다.
                        if (arr[i][moveX] !== undefined && arr[i][moveX][moveY] !== undefined) {
                            debugger
                            // P를 발견한 경우 flag는 false
                            if (arr[i][moveX][moveY] === "P") {
                                cnt++;
                            }
                            if (cnt >= 2) {
                                return 0
                            }
                        }

                    }
                }
            }
        }

        return 1
    }
}

// 3번 문제
// 멘토링
function solution(test) {
    // 해당 문제를 풀 때 인덱스의 값과 해당 인덱스가 가진 배열의 실제 값의 혼동,
    // 등수는 낮을수록 높다는 점 , 4중 포문의 헷갈림 등등
    // 문제를 풀기까지 오랜시간이 걸렸음.
    let ans = 0;
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            if (i === j) { continue; } // 1,1 2,2 ... n,n 인 경우는 무시한다.
            // 모든 경우의 수를 만들어놓고 재탐색
            let cnt = 0;
            for (let k = 0; k < test.length; k++) {
                let pi = pj = 0;
                for (let s = 0; s < test[0].length; s++) {
                    // i랑 j의 등수찾기
                    if (test[k][s] === i) {
                        pi = s; // 인덱스
                    } else if (test[k][s] === j) {
                        pj = s;
                    }
                }
                if (pi < pj) {
                    cnt++;
                } else {
                    continue;
                }
            }
            if (cnt === test.length) {
                ans++;
            }

        }
    }
    return ans;
}

// 4번 문제
// 졸업선물
function solution(m, product) {
    // m = 가지고있는 돈
    // product는 상품의 가격표 [ 가격(반값할인가능) , 배송비 ]
    let ans = [];
    // 현재 예산으로 선물할 수 있는 최대 학생수를 출력
    // 1) 제일 큰 가격을 반값 ( 제일 큰 가격을 반값으로 해도 배송비를 포함했을 떄 다른 애들보다 크다면 포함하지 않는다.)
    // 2) 가격 + 배송비 

    // 오름차순 정렬
    // product.sort((a, b) => {
    //     return (a[0] + a[1]) - (b[0] + a[1]);
    // })


    // 할인이 적용된 상품
    // let nodisCntProduct = product[i][0] + product[i][1];

    for (let i = 0; i < product.length; i++) {
        let money = 0;
        let cnt = 0;
        let discntProduct = (product[i][0] / 2) + product[i][1];
        product.forEach((iter, idx) => {
                if (i === idx) {
                    money += discntProduct;
                } else {
                    money += iter[0] + iter[1]
                }
        })
        ans.push(money)
        // 가장 작은 숫자가 담겨있는 idx를 for문 돌려서 28이 될때까지 돌린다 .. ?
        
    }
    debugger
}

let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));