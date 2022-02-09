// 문제 1 / 문제 2 
// 회문문자열 / 유효한 팰린드롬
function solution(s) {
    // 문자열 뒤집기
    let str = s.split('').filter((iter) => {
        if (iter.charCodeAt() >= 65) {
            return iter;
        }
    })
    // reverse는 오리지널 배열도 변화가 있기때문에 깊은 복사를 통해서 비교를 해주었음.
    if ([...str].reverse().join('').toUpperCase() === str.join('').toUpperCase()) {
        return "YES"
    } else {
        return "NO"
    }
}

// 문제 3
// 숫자만 추출
function solution(str) {
    let answer = "";
    for (let x of str) {
        // Number로 감싸주지않아도 isNaN에 숫자인 문자열이 들어가면 판단이 가능하다.
        // 해당 부분 공부됐음.
        if (!isNaN(Number(x))) {
            answer += x;
        }
    }
    return Number(answer);
}

// 문제 4
// 가장 짧은 문자거리
function solution(str, t) {
    let arr = [];
    let tempNum = str.length;
    for (x of str) {
        if (x === t) {
            tempNum = 0;
            arr.push(tempNum);
        } else {
            tempNum++;
            arr.push(tempNum);
        }
    }

    tempNum = str.length;
    // for문 거꾸로 돌리기
    // i는 배열의 길이 - 1
    // i는 >= 
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "e") {
            tempNum = 0;
        } else {
            tempNum++;
        }

        if (arr[i] > tempNum) {
            arr[i] = tempNum;
        }
    }
    return ans;
}

// 5번 문제
// 문자열 압축
function solution(str) {
    let ans = "";
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if( str[i] === str[i+1]){
            cnt ++;
        }else{
            if(cnt === 0){
                ans += str[i];
            }else{
                ans += str[i]+ (Number(cnt)+1);
            }
            
            cnt = 0;
        }

    }
    
    return ans;
}