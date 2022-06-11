// 짝지어 제거하기

function solution(s) {
    let str = s;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (str[i] === str[i + 1]) {
            str = str.substring(0, i) + str.substring(i + 2);
            if (str.length === 2) {
                if (str[0] === str[1]) {
                    ans = 1;
                }
                break;
            }
            i = -1;
        }


    }
    return ans;
}

function solution(s) {
    let ans = 0;
    let arr = [...s];

    for (let i = 0; i < s.length; i++) {

        if (arr[i] === arr[i + 1]) {
            arr = arr.slice(0, i).concat(arr.slice(i + 2));
            i = i - 2;
        }

        if (arr.length === 2) {
            if (arr[0] === arr[1]) {
                return 1;
            }
        }

    }
    return ans;
}

function solution(s) {
    let compArr = [];
    let p = -1;
    let ans = 0;


    for (let i = 0; i < s.length; i++) {
        // 두 개가 다른 경우
        if (s[i] !== compArr[p]) {
            compArr.push(s[i]);
            p++;
            // 두 개가 같은 경우
        } else {
            compArr.pop();
            p--;
        }
    }

    if (compArr.length == 0) {
        ans = 1;
    }
    return ans;

}

// 최종 성공한 풀이
function solution(s) {
    const compArr = [];
    let p = -1;
    let ans = 0;


    for (let i = 0; i < s.length; i++) {
        // 두 개가 다른 경우
        if (s[i] !== compArr[p]) {
            compArr.push(s[i]);
            p++;
            // 두 개가 같은 경우
        } else {
            compArr.pop();
            p--;
        }
    }

    if (compArr.length == 0) {
        return 1;
    }

    return ans;
}