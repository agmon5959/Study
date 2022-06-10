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