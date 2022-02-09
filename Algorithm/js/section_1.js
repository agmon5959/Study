// 1번 문제
// 세 수 중 최솟값
// answer = 최소값
function solution_1(a, b, c) {

    let returnValue;
    if (a < b) {
        returnValue = a;
    } else {
        returnValue = b;
    }

    if (c < returnValue) {
        returnValue = c;
    }
    return returnValue;
}

// 2번 문제
// 삼각형 판별하기
// answer = YES or NO
function solution_2(a, b, c) {
    // 삼각형이 되기위한 조건 : 가장 큰 값 < 그 외의 값
    let maxNum;
    let etcNum;

    if (a < b) {
        // b가 최대값인 경우
        maxNum = b;
        etcNum = a + c;
    } else {
        // a가 최대값인 경우
        maxNum = a;
        etcNum = b + c;
    }

    if (c > maxNum) {
        // c가 최대값인 경우
        maxNum = c;
        etcNum = a + b;
    }

    // etcNum이 maxNum보다 크다면 YES 작거나 같다면 NO
    return (maxNum < etcNum ? "YES" : "NO");

}

// 3번 문제
// 연필개수
function solution_3(n) {
    let answer;
    answer = Math.ceil(n / 12);
    return answer;
}

// 4번 문제
// 1부터 N까지의 합
function solution_4(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += i;
    }

    return answer;
}

// 5번 문제
// 최솟값 구하기
function solution_5(arr) {
    let answer = arr[0]; // 초기 값
    for (let i = 0; i < arr.length; i++) {
        if (answer > arr[i + 1]) { // 초기값이 다음 값보다 작을 때
            answer = arr[i + 1]; // 값을 다음 값으로 할당한다.
        }
    }
    return answer
}

// 6번 문제
// 홀수
function solution_6(arr) {
    // 홀수인 자연수들의 합을 구하고 구한 홀수들 중 최솟값을 구하는 함수
    let oddArr = [];
    let sum = 0;
    arr.forEach((iter) => {
        if (iter % 2 !== 0) {
            oddArr.push(iter);
        }
    })
    // 홀수만 들어있는 oddArr을 순회하여 각 요소들을 sum에 넣어줌
    oddArr.forEach((iter) => { sum += iter });
    let minNum = Math.min(...oddArr);
    return [sum, minNum];
}

// 7번 문제
// 10부제 : 주어진 날짜와 자동차 일의 자리를 보고 10부제를 위반하는 차량의 갯수를 리턴한다.
function solution_7(day, arr) {
    let answer = 0;
    arr.forEach((iter) => {
        if (iter.toString().substr(-1) === String(day)) {
            answer += 1;
        }
    })
    return answer;
}

// 8번 문제 [배열]
// 일곱난쟁이 : 일곱 난쟁이들의 키의 합은 100이고 가짜 난쟁이 두 명을 찾아야한다.
function solution_8(arr) {

    // 가짜 난쟁이 두 명을 찾아야하기 때문에 이중 포문을 돌면서 차례대로 2명을 뽑고 나머지의 합이 100이 되는지 찾아야함.
    let answer = [];
    let sum = 0;
    arr.forEach((iter) => { sum += iter });
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (sum - (arr[i] + arr[j]) === 100) {
                    // i 값이랑 j 값을 제외한 나머지를 리턴
                    arr.forEach((iter) => {
                        if (iter !== arr[i] && iter !== arr[j]) {
                            answer.push(iter)
                        }
                    })
                    return answer.sort((a, b) => { return a - b });
                }
            }
        }
    }


    return answer;
}

// 9번 문제 [문자열]
// A를 #으로
function solution_8(s) {

    let answer = s.replaceAll('A', '#')

    return answer;
}

// 10번 문제 [문자열]
// 문자 찾기 주어진 문자열에 특정 문자가 몇 번 포함되는지
function solution_10(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) answer += 1;
    }
    return answer;
}

// 11번 문제
// 대문자 찾기
function solution_11(s) {
    let answer = 0;
    for (iter of s) {
        if (iter === iter.toUpperCase()) {
            answer++;
        }
    }
    return answer;
}

// 12번 문제
// 대문자로 통일
function solution_12(s) {
    let answer = "";
    for (let x of s) {
        answer += x.toUpperCase();
    }
    return answer;

}

// 13번 문제
// 대소문자 변환
function solution_13(s) {
    let ans = '';
    for (iter of s) {
        if (iter === iter.toUpperCase()) {
            ans += iter.toLowerCase()
        } else {
            ans += iter.toUpperCase()
        }
    }
    return ans;
}

// 14번 문제
// 가장 긴 문자열
function solution(s) {
    let mostLongString = s[0].length;
    s.forEach((iter) => {
        if (mostLongString < iter.length) {
            mostLongString = iter
        }
    })
    return mostLongString;
}
// 15번 문제
// 가운데 문자 출력
function solution(s) {
    let answer;
    let midStr;
    if (s.length % 2 === 0) {
        midStr = Math.floor(s.length / 2);
        answer = s[midStr - 1] + s[midStr];
    } else {
        midStr = Math.floor(s.length / 2);
        answer = s[midStr];
    }
    return answer;
}

// 16번 문제
// 중복 문자 제거
function solution(s) {
    // indexOf()로 찾는 문자가 처음으로 일치하는 인덱스를 찾고
    // 해당 인덱스와 for문 내에서 index가 일치하는 경우에만 ans에 넣어준다. (일치한다면 중복되지 않는 문자임.)
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i) {
            ans += s[i];
        }
    }
    return ans;
}

// 17번 문제
// 중복단어제거
function solution(s) {
    let ans = s.filter((iter, idx) => {
        if (s.indexOf(iter) === idx) {
            return iter;
        }
    })
    return ans;
}

