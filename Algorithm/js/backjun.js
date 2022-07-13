function com(parameter) {
    const fs = require('fs');
}

function t1() {

    // 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
    // const fs = require('fs');
    // const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
    // const input = fs.readFileSync(filePath).toString().split('\n').pop();
    let input = "baekjoon";
    let arr = Array.from({ length: 122 - 97 }).fill(-1);


    for (let i = 0; i <= input.length; i++) {
        debugger
        if (arr[input[i].charCodeAt() - 97] !== -1) {
            continue;
        }
        arr[input[i].charCodeAt() - 97] = i;
    }

    console.log(arr);
}


function 오큰수() {
    let input = [3, 5, 2, 7];
    let temp = [];
    let result = Array.from({ length: input.length }).fill(-1);
    debugger
    for (let i = 0; i < input.length; i++) {
        while (temp.length && input[temp[temp.length - 1]] < input[i]) {
            debugger
            result[temp.pop()] = input[i];
        }
        debugger
        temp.push(i);
    }
    debugger
    console.log(result.join(" "))
}
console.log(오큰수());