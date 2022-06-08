// 프로그래머스 1단계 신고결과받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution2(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0);
    const report_list = {};

    // 객체에 담기
    id_list.forEach((iter) => {
        report_list[iter] = [];
    })


    // 중복제거
    const reportArr = [...new Set(report)]


    // 신고당한사람 : [ 신고한 사람 ] 배열을 만든 뒤 신고한 사람들의 인덱스를 id_list에서 찾아서 answer에 넣어준다.
    reportArr.map((user) => {
        const [userID, reportID] = user.split(" ");
        report_list[reportID].push(userID);
    })

    for (const key in report_list) {
        if (report_list[key].length >= k) {
            report_list[key].map((user) => {
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
}

console.log(solution2(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));

// 프로그래머스 1단계
// 숫자 문자열과 영단어
// 좀더 깔끔한 풀이가 많았음. 정규식을 알고있으면 간결하게 풀 수 있을 듯.
function solution(s) {
    var answer = 0;
    const numberSet = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"]
    const arr = new Array();
    let charArr = new Array();

    if (!isNaN(Number(s))) {
        return Number(s);
    } else {
        for (let x of s) {
            if (!isNaN(Number(x))) {
                arr.push(x);
            } else {
                // 문자발견
                charArr.push(x);
                if (charArr.length >= 3) {
                    numberSet.forEach((iter, idx) => {
                        if (charArr.join('') === iter) {
                            arr.push(idx);
                            charArr = [];
                        }
                    })
                }
            }
        }
    }
    return Number(arr.join(""));
}

// 숫자 문자열과 영단어 깔끔한 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

// 숫자 문자열과 영단어 
// 정규표현식 풀이
function solution(s) {

    s = s.replace(/zero/gi, 0).replace(/one/gi, 1).replace(/two/gi, 2).replace(/three/gi, 3).replace(/four/gi, 4)
        .replace(/five/gi, 5).replace(/six/gi, 6).replace(/seven/gi, 7).replace(/eight/gi, 8).replace(/nine/gi, 9)
    return parseInt(s);

}
// console.log(solution("onetwo3four56seven"));


// 크레인 인형뽑기
function solution(board, moves) {
    let score = 0;
    let value = undefined;
    let result = [];
    let cnt = 0;

    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0 && cnt === i) {
                cnt++;
                console.log(cnt)
                if (result[result.length - 1] === board[j][moves[i] - 1]) {
                    result.pop()
                    score += 2;
                } else {
                    value = board[j][moves[i] - 1];
                    result.push(value)
                }
                board[j][moves[i] - 1] = 0;
            }
        }
    }
    console.log(score)

    return score;
}


// 로또의 최고순위와 최저순위
// 내 풀이
function solution(lottos, win_nums) {
    // 정답을 넣을 배열
    const returnArr = [];
    // 높은 점수를 담을 high 변수이며 변수 값이 바뀌기 때문에 let
    let high = 0;
    // 낮은 점수를 담을 low 변수이며 변수 값이 바뀌기 때문에 let
    let low = 0;
    // 민우의 로또 번호를 순회하여 최고순위와 최저순위를 구한다.
    lottos.forEach((iter) => {
        // 단어의 위치까지 일치하지 않아도 되니 그냥 존재하는지 확인
        if (win_nums.indexOf(iter) >= 0) {
            high++;
            low++;
            // 존재하지 않고 0이라면 일치한다고 판단. (high는 최고 순위이기 때문)
        } else if (iter === 0) {
            high++;
        }
    })
    // 7-점수 하면 등수가 나오며 최저 6등이기에 점수가 0점이면 6으로 넣어주도록 한다.
    returnArr[0] = 7 - high > 6 ? 6 : 7 - high;
    returnArr[1] = 7 - low > 6 ? 6 : 7 - low;
    return returnArr;


    // answer = [ 최고순위 , 최저순위]
}

// 로또의 최고순위와 최저순위
// 깔끔한 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    // 일치하는 애들의 길이
    let minCount = lottos.filter(v => win_nums.includes(v)).length; // 2개 일치 ? > 2 return
    // 일치하지 않는 애들의 길이
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

// 키패드 누르기
// 거리는 행 인덱스의 차이 + 열 인덱스의 차이
// 객체 다루는 법 더욱 열심히 해야할 듯!
function solution(numbers, hand) {
    const a = [];

    const keyPad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2],
    }

    function distCalc(cur, target) {
        let dist = Math.abs(cur[0] - target[0]) + Math.abs(cur[1] - target[1]);
        return dist;
    }

    let cur_L = keyPad['*'];
    let cur_R = keyPad['#'];

    for (let x of numbers) {
        if (keyPad[x][1] === 0) {
            cur_L = keyPad[x];
            a.push("L");
        } else if (keyPad[x][1] === 2) {
            cur_R = keyPad[x];
            a.push("R");
        } else {
            // 거리가 같다면 핸드 푸시
            let leftDist = distCalc(cur_L, keyPad[x]);
            let rightDist = distCalc(cur_R, keyPad[x]);
            if (leftDist === rightDist) {
                if (hand === "right") {
                    cur_R = keyPad[x];
                    a.push("R");
                } else {
                    cur_L = keyPad[x];
                    a.push("L");
                }
            } else if (rightDist < leftDist) {
                cur_R = keyPad[x];
                a.push("R");
            } else {
                cur_L = keyPad[x];
                a.push("L");
            }
        }
    }



    return a.join('');
}
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));

// 음양 더하기

function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((iter, idx) => {
        if (signs[idx]) {
            answer += iter;
        } else {
            answer -= iter;
        }
    })
    return answer;
}

// 내적
function solution(a, b) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result += a[i] * b[i];
    }
    return result;
}

// 문자열 압축
function solution(s) {
    let min_len = s.length;

    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let prev = s.substr(0, i);
        let cnt = 1;
        let tmp_str = '';

        for (let k = i; k < s.length; k += i) {
            const cur = s.substr(k, i);

            if (prev === cur) cnt++;
            else {
                tmp_str += (cnt > 1 ? String(cnt) : '') + prev;
                cnt = 1;
                prev = cur;
            }
        }
        tmp_str += (cnt > 1 ? String(cnt) : '') + prev;

        min_len = Math.min(min_len, tmp_str.length)
    }

    return min_len;
}

// 프로그래머스 1단계
// 없는 숫자 더하기
function solution(numbers) {
    let add = 45;
    numbers.forEach((item) => {
        add -= item
    });
    return add;
}

// 완주하지못한선수
function solution(participant, completion) {
    participant.sort()
    completion.sort()

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

// 오픈채팅방

function solution(record) {
    var answer = [];
    let userObj = {}
    // 오브젝트 만들어주는 반복문
    record.forEach((iter) => {
        if (iter.split(" ")[0] !== "Leave") {
            let uid = iter.split(" ")[1];
            let nickName = iter.split(" ")[2];
            userObj[uid] = nickName;
        }
    })

    // 만들어진 오브젝트를 통해서 값을 구하는 함수
    record.forEach((iter) => {
        let uid = iter.split(" ")[1];

        if (iter.split(" ")[0] === "Enter") {
            answer.push(userObj[uid] + "님이 들어왔습니다.");
        } else if (iter.split(" ")[0] == "Leave") {
            answer.push(userObj[uid] + "님이 나갔습니다.");
        }
    })

    return answer;
}

// 124 나라
// 이건 아직도 좀 이해가 안된다 ,, 수학적 지식이 너무 부족함을 느낀다 :(
function solution(n) {
    var answer = '';
    const arr = ['4', '1', '2'];
    while (n > 0) {
        answer = arr[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }


    return answer;
}

// 최대 공약수
function getGCD(num1, num2) {
    let gcd = 1;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

// 최소 공배수
function getLCM(num1, num2) {
    let lcm = 1;
    while (true) {
        if ((lcm % num1 === 0) && (lcm % num2 === 0)) {
            break;
        }
        lcm++;
    }
    return lcm;
}

// 유클리드 호제법 (최대공약수와 최소공배수)
function solution5(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}


// console.log(solution5(60, 48))



// 거리두기
function rrr(arr) {

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
                            debugger
                            debugger
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
// console.log(rrr([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))

// BFS 기본구현
function BFS(graph, startNode) {
    const visited = [];
    let needVisit = [];
    needVisit.push(startNode);
    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
}
console.log(BFS(graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
}, "A"));

// 모의고사
function solution(answers) {
    let answer = [];
    const one = [1, 2, 3, 4, 5];
    let oneScore = 0
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    let twoScore = 0
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];


    let threeScore = 0;
    let oneIdx = 0;
    let twoIdx = 0;
    let threeIdx = 0;

    for (let i = 0; i < answers.length; i++) {

        if (oneIdx >= one.length) {
            oneIdx = 0;
        }
        if (twoIdx >= two.length) {
            twoIdx = 0;
        }
        if (threeIdx >= three.length) {
            threeIdx = 0;
        }


        if (answers[i] === one[oneIdx]) {
            oneScore++;
        }
        if (answers[i] === two[twoIdx]) {
            twoScore++;
        }
        if (answers[i] === three[threeIdx]) {
            threeScore++;
        }

        oneIdx++;
        twoIdx++;
        threeIdx++;
    }

    const scoreArr = [
        [1, oneScore],
        [2, twoScore],
        [3, threeScore],
    ]

    scoreArr.sort((a, b) => {
        if (a[0] > a[0]) {
            return -1;
        } else if (a[0] < b[0]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        }
    })

    // 동점자 구하기
    let cnt = 0;
    for (let i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i + 1] !== undefined) {
            if (scoreArr[0][1] === scoreArr[i + 1][1]) {
                cnt++;
            }
        }
    }

    for (let i = 0; i <= cnt; i++) {
        answer.push(scoreArr[i][0]);
    }

    return answer;
}

// 모의고사 다른사람 풀이
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 모듈러 연산을 통해서 반복되는 인덱스를 구한다.
    // a1의 경우 0~4 % a1.length를 하게되면 모듈러 연산이라 a1.length 전 값까지는 기존 값이 들어오고
    // 그 이후 a1.length를 넘어가는 나머지가 return 되기때문에 반복적인 인덱스를 구할 수 있다.
    // 또한 filter의 length를 통해서 일치하는 항목들의 길이를 구해서 해당 길이를 통해 얼마나 일치하는지 판단한다.
    var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
    var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
    var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
    // a1c , a2c , a3c 중 가장 큰 값을 구하고
    var max = Math.max(a1c, a2c, a3c);

    // 가장 큰 값을 answer에 push하도록 한다.
    if (a1c === max) { answer.push(1) };
    if (a2c === max) { answer.push(2) };
    if (a3c === max) { answer.push(3) };


    return answer;
}

console.log(solution([1, 3, 2, 4, 2]));

// 체육복
// 해당 문제는 다시 풀어보기.. !
// 테스트 케이스에서 오류가 잡혔음.
function solution(n, lost, reserve) {

    var answer = 0;

    // 학생 수 만큼 배열의 가지고 있는 유니폼 수를 1로 초기화
    let hasUniform = new Array(n).fill(1);

    // 잃어버린 학생은 -1 을 해줌
    for (let i = 0; i < lost.length; i++) {
        hasUniform[lost[i] - 1]--;
    }

    // 여벌이 있으면 +1 을 해줌
    for (let i = 0; i < reserve.length; i++) {
        hasUniform[reserve[i] - 1]++;
    }

    for (let i = 0; i < hasUniform.length; i++) {
        // 유니폼이 없을 때 좌우 학생이 유니폼이 있을경우 빌려줌
        if (hasUniform[i] === 0) {
            if (hasUniform[i - 1] === 2) {
                hasUniform[i]++;
                hasUniform[i - 1]--;
            } else if (hasUniform[i + 1] === 2) {
                hasUniform[i]++;
                hasUniform[i + 1]--;
            }
        }

        // 유니폼이 1개이상 있으면 통과
        if (hasUniform[i] >= 1) {
            answer++;
        }
    }

    return answer;
}

// 실패율
function solution(N, stages) {
    let answer = [];
    //실패한 사람은 제외해야되기 떄문에 임시 변수 people생성
    let people = stages.length
    for (let i = 1; i <= N + 1; i++) {
        //Array.filter() : 조건을 만족하는 원소만 추출
        let tmp = stages.filter(n => n === i).length
        //answer = [[스테이지, 실패율]]
        answer.push([i, tmp / people])
        //실패한 사람 제외
        people -= tmp
    }
    //마지막은 모두 깬사람들이므로 실패율이 없어서 pop()
    answer.pop()
    //answer의 2번째 원소기준으로 내림차순으로 정렬
    answer = answer.sort((a, b) => b[1] - a[1])
    //Array.map() : 배열을 조건에 맞게 변환
    return answer.map(a => a[0]);
}

// 약수의 개수와 덧셈
// 나의 풀이
function solution(left, right) {
    // left ~ right
    const numberArr = []; // left에서 right 사이의 숫자들이 담길 배열
    let answer = 0; // 솔루션 리턴 값

    // 약수를 구하는 함수
    // 이건 외워야할 것 같은데 .. ? 최소공배수 , 최대공약수 , 유클리드 호제법 , 소수구하기 , 순열과 조합 ,등 이런건 하루에 하나씩 손으로 쓰면서 외우도록 하자.
    function findNum(value) {
        const target = Math.sqrt(value);
        const returnArr = [];
        for (let i = 1; i <= target; i++) {
            // 작은 수 구하기
            if (value % i === 0) {
                returnArr.push(i);
                // 대칭되는 큰 수 구하기
                if (value / i !== i) {
                    returnArr.push(value / i);
                }
            }
        }
        return returnArr;
    }


    for (let i = left; i <= right; i++) {
        numberArr.push(i);
    }

    const tempArr = []; // 약수들이 조건에 따라서 리턴된 값들을 담아두는 배열

    for (let x of numberArr) {
        let sumArr = findNum(x);

        if (sumArr.length % 2 === 0) {
            tempArr.push(x);
        } else {
            tempArr.push(-x);
        }
    }

    answer = tempArr.reduce((a, b) => a + b);
    return answer;
}

// 약수의 개수와 덧셈 zi존 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        // 제곱근의 약수는 무조건 홀수이다..... 몰랐네 ... 
        // Number.isInteger() -> 해당 값이 정수인지 판단
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}


// 3진법 뒤집기
function solution(n) {
    let answer = 0;
    const numToThree = n.toString(3);
    let str = "";

    for (let i = numToThree.length; i > 0; i--) {
        str += numToThree[i - 1];
    }

    answer = parseInt(str, 3);

    return answer;
}

// 두개뽑아서 더하기
function solution(numbers) {

    let numArr = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) continue;
            else {
                numArr.push(numbers[i] + numbers[j]);
            }
        }
    }

    return [...new Set(numArr)].sort((a, b) => a - b);

}

// 예산
function solution(d, budget) {

    d.sort((a, b) => a - b);
    let cnt = 0;

    for (let x of d) {
        if (budget >= x) {
            budget -= x;
            cnt++;
        } else {
            break;
        }
    }

    return cnt;

}
// 나머지가 1이 되는 수  찾기
function solution(n) {

    let answer = 0;
    const x = parseInt(Math.sqrt(n))
    for (let i = 1; i <= n; i++) {
        if (n % i === 1) {
            answer = i;
            break;
        }
    }

    return answer;
}

// 비밀지도
function solution(n, arr1, arr2) {

    function convertBinary(arr) {
        const returnArr = [];
        for (let i = 0; i < arr.length; i++) {
            let pushedItem = arr[i].toString(2);
            if (pushedItem.length !== n) {
                while (true) {
                    pushedItem = "0" + pushedItem;
                    if (pushedItem.length === n) {
                        break;
                    }
                }
            }
            returnArr.push(pushedItem);
        }
        return returnArr;
    }

    let newArr1 = convertBinary(arr1);
    let newArr2 = convertBinary(arr2);

    const answer = [];

    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            if (newArr1[i][j] === '1' || newArr2[i][j] === '1') {
                str += '#';
            } else {
                str += " ";
            }

        }
        answer.push(str);

    }


    return answer;

}

// 가운데 글자 가져오기
function solution(s) {
    let a = parseInt(s.length / 2);
    if (s.length % 2 === 0) {
        return s.substr(a - 1, 2)
    } else {
        return s.substr(a, 1)
    }
}
// 가운데 글자 가져오기 다른 사람의 풀이
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// 최소 직사각형
function solution(sizes) {
    let horizon = []
    let vertical = []
    for (let i = 0; i < sizes.length; i++) {

        if (sizes[i][0] < sizes[i][1]) {
            horizon.push(sizes[i][1]);
            vertical.push(sizes[i][0]);
        } else {
            horizon.push(sizes[i][0]);
            vertical.push(sizes[i][1]);
        }
    }
    return Math.max(...horizon) * Math.max(...vertical);
}

// 다트 게임
function solution(data) {
    // 각 회차별 점수
    let chasu = -1;
    const chasuArr = [0, 0, 0];
    const optionArr = [0, 0, 0];
    let score = 0;
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
        // 숫자가 아닌 경우
        if (isNaN(data[i])) {
            // * , #
            if (["S", "D", "T"].indexOf(data[i]) === -1) {
                if (data[i] === "*") {
                    optionArr[chasu] = "*";
                } else if (data[i] === "#") {
                    optionArr[chasu] = "#";
                }
                // S D T
            } else {
                if (data[i] === "S") {
                    chasuArr[chasu] = score;
                } else if (data[i] === "D") {
                    chasuArr[chasu] = Math.pow(score, 2);
                } else if (data[i] === "T") {
                    chasuArr[chasu] = Math.pow(score, 3);
                }
            }

            // 숫자인 경우
        } else {
            // 1의 자리 점수 , 10이 들어오는 경우 score를 0으로 바꿔주지 않기 위해 조건처리
            if (isNaN(data[i + 1]) && isNaN(data[i - 1])) {
                score = Number(data[i]);
                chasu++;
            }
            // 2의 자리 점수
            else {
                // score가 NaN으로 바뀌는 경우 조건처리
                if (!isNaN(data[i + 1])) {
                    score = Number(String(data[i]) + String(data[i + 1]));
                    chasu++;
                }
            }
        }
    }


    optionArr.forEach((iter, idx) => {

        if (iter === '*') {
            // 바로 이전것 까지 모두 돌아야함

            chasuArr[idx] = chasuArr[idx] * 2;
            chasuArr[idx - 1] = chasuArr[idx - 1] * 2;


        } else if (iter === "#") {
            chasuArr[idx] = chasuArr[idx] * -1
        }
    })

    return chasuArr.reduce((a, b) => a += b, 0);
}

// 같은 숫자는 싫어
// 내 풀이
function solution(arr) {
    const returnArr = [arr[0]];
    let tmp = arr[0];
    arr.forEach((iter, idx) => {
        if (tmp !== arr[idx]) {
            returnArr.push(iter);
            tmp = iter;
        }

    })
    return returnArr;
}
// 남의 풀이
function solution(arr) {
    var answer = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}
// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let returnArr = arr.filter(v => v % divisor === 0).sort((a, b) => a - b);
    return returnArr.length === 0 ? [-1] : returnArr;
}

// 두 정수 사이의 합
function solution(a, b) {
    let ans = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        ans += i;
    }
    return ans;
}

// 두 정수의 사이의 합 ( 가우스 덧셈 )
// ((A+B) * ( B-A +1 )) /2
function solution(a, b) {
    return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        } else if (a[n] < b[n]) {
            return -1;
        } else {
            if (a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            }
        }
    })

    return strings;
}

// 문자열 내 p와 y의 개수
// 내 풀이
function solution(s) {
    let Pcnt = 0;
    let Ycnt = 0;
    for (let x of s) {
        if (x.toUpperCase() === "P") {
            Pcnt++;
        } else if (x.toUpperCase() === "Y") {
            Ycnt++;
        }
    }


    return Pcnt === Ycnt ? true : false;
}

// 다른 사람의 풀이
function numPY(s) {
    //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}


// 문자열 내림차순으로 배치하기
// 나의 풀이
function solution(s) {
    return [...s].sort().reverse().join('');
}

// 문자열 다루기 기본
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        let bool = true;
        for (let x of s) {
            if (isNaN(x)) {
                bool = false;
            }
        }
        return bool;
    } else {
        return false;
    }
}

// 다른 사람의 풀이
// / regex /
// 정규표현식의 시작과 끝을 나타내는 /
// ^ \d{ 6 } $ |^\d{ 4 } $
//     ^ 는 문장의 처음 글자를 의미한다.
// \d 는 숫자(digit)를 의미한다.
//  { n }은 n번 반복을 의미하며 여기서는 6이 중괄호 안에 들어갔기 때문에 6번 반복을 의미한다.
//  $는 문장의 끝을 의미한다.
//  | 는 또는 을 의미한다.
//     따라서 6회 혹은 4회만큼 문자열의 첫 글자가 숫자인지 판단하는 정규식인 셈이다.
// (문자열이 1234라면 차례대로 1, 2, 3, 4 이런식으로 판단한다는 의미)
// 파라미터로 들어온 문자열 s를 regex.test함수에 파라미터로 넣고 함수를 실행하여 결과값을 반환하여 해결한다.
function alpha_string46(s) {
    var regex = /^\d{6}$|^\d{4}$/;

    return regex.test(s);
}

// 시저 암호
// 아스키코드 변환 charCodeAt() <> String.fromCharCode()
function solution(s, n) {
    return [...s].map((iter) => {
        if (iter == " ") {
            return iter;
        }
        const temp = iter.charCodeAt()
        return iter.toUpperCase().charCodeAt() + n > 90
            ? String.fromCharCode(temp + n - 26)
            : String.fromCharCode(temp + n)
    }).join('')
}

// 핸드폰 번호 가리기
function solution(phone_number) {
    return ''.padStart(phone_number.length - 4, '*') + phone_number.substr(-4);
}
// 남의 풀이
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

// 약수의 합
// 나의 풀이
function solution(n) {
    let sqrt = Math.sqrt(n); // 100의 제곱근은 10
    let arr = [];   // 배열 선언

    for (let i = 1; i <= sqrt; i++) { // 1부터 제곱근까지 반복문
        if (n % i === 0) { // 약수 중 작은 수 저장
            arr.push(i);
            if (n / i !== i) { // 약수 중 큰 수 저장
                arr.push(n / i);
            }
        }
    }
    return arr.reduce((a, b) => a += b, 0);
    // return arr.map((iter)=>console.log(iter));

}
// 남의 풀이
function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}

// 이상한 문자 만들기
// 나의 풀이
function solution(s) {
    function change(arr) {
        let returnStr = '';
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                returnStr += arr[i].toUpperCase();
            } else {
                returnStr += arr[i].toLowerCase();
            }
        }
        return returnStr;
    }

    let flag = false;
    let str = s.split(" ")
    let returnValue = '';
    for (let i = 0; i < str.length; i++) {
        returnValue += change(str[i]);
        if (i !== str.length - 1) {
            returnValue += " ";
        }
    }

    return returnValue
}

// 남의 풀이
function toWeirdCase(s) {
    var result = "";
    var num = 0;

    console.log(s.length);

    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == " ") {
            num = 0;
            result += " ";
            continue;
        }
        else if (num % 2 == 0) {
            result += (s.charAt(i)).toUpperCase();
            num++;
        }
        else {
            result += (s.charAt(i)).toLowerCase();
            num++;
        }
    }
}
// 자릿수 더하기
// 나의 풀이
function solution(num) {

    let ans = 0;
    for (let x of String(num)) {
        ans += Number(x);
    }
    return ans;
}

// 자연수 뒤집어 배열로 만들기
// 나의 풀이
function solution(n) {
    var answer = [];
    for (let x of String(n)) {
        answer.push(Number(x))
    }
    return answer.reverse();
}

// 남의 풀이
// 쩐다
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
}

// 정수 제곱근 판별
// 나의 풀이
function solution(n) {
    if (String(Math.sqrt(n)).split('.').length === 1) {
        return Math.pow(Math.sqrt(n) + 1, 2);
    } else {
        return -1;
    }
}

// 남의 풀이
function solution(n) {
    // 내장함수
    // let sqr = Math.sqrt(n);
    // return sqr%1 ? -1 : (sqr+1)**2;

    // 외장(?)함수 - 직접 sqrt 찾기
    let upper = n;
    let lower = 1;
    let answer, x;
    let tol = 0; //혹시라도 infinite loop안걸리게....
    while (tol < 100000) {
        x = (upper + lower) / 2;
        x = x - (x % 1);
        if (x ** 2 === n) {
            answer = x;
            break;
        } else if (x ** 2 > n) {
            upper = x;
        } else if (x ** 2 < n) {
            if (lower === x) {
                answer = 0;
                break;
            }
            lower = x;
        }
        tol++;
    }
    return answer ? (answer + 1) ** 2 : -1;
}
// 제일 작은 수 제거하기
// 나의 풀이
function solution(arr) {
    let ans = [];
    // 배열에 숫자가 하나밖에 없는 경우
    if (arr.length === 1) { return [-1] };
    let temp = Number.MAX_SAFE_INTEGER;
    // 제일 작은 수 구하기
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < temp) {
            temp = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== temp) ans.push(arr[i]);
    }
    return ans;
}

// 남의 풀이
function solution(arr) {
    // 전개연산자와 indexOf 함수를 사용하여 제일 작은 수의 인덱스를 구한 뒤
    // splice함수를 통해서 해당 숫자만 잘라내서 값을 구했음.
    arr.splice(arr.indexOf(Math.min(...arr)), 1);

    if (arr.length < 1) return [-1];

    return arr;
}
// 콜라츠 추측
// 나의 풀이
function solution(num) {
    let cnt = 0;
    let number = num;
    while (num !== 1) {
        cnt++;

        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = (num * 3) + 1
        }

        if (num === 1) break;
        if (cnt === 500) return -1;
    }
    return cnt;
}

// 남의 풀이
function collatz(num) {
    var answer = 0;
    while (num != 1 && answer != 500) {
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        answer++;
    }
    return num == 1 ? answer : -1;
}

// 하샤드 수
// 나의 풀이
function solution(x) {
    let num = 0;
    [...String(x)].forEach((iter, idx) => {
        num += Number(iter);
    })


    return x % num === 0 ? true : false;
}

// 남의 풀이
function Harshad(n) {
    return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}

// x만큼 간격이 있는 n개의 숫자
// 나의 풀이
function solution(x, n) {
    let ans = [];
    for (let i = 1; i <= n; i++) {
        ans.push(x * i);
    }
    return ans;
}

// 남의 풀이
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

// 행렬의 덧셈
// 나의 풀이
function solution(arr1, arr2) {
    let ans = [];

    for (let i = 0; i < arr1.length; i++) {
        ans.push(arr1[i]);
    }

    return ans;
}

// 최소공배수와 최대공약수 ( 유클리드 호제법 풀이)
// 나의 풀이
function solution(num1, num2) {
    // 최대공약수(gcd)
    const gcd = (num1, num2) => num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
    // 작은수 
    // 최소공배수(lcm)
    const lcm = (num1, num2) => num1 * num2 / gcd(num1, num2);

    return [gcd(num1, num2), lcm(num1, num2)];
}
// 남의 풀이
function gcdlcm(a, b) {
    var r;
    for (var ab = a * b; r = a % b; a = b, b = r) { }
    return [b, ab / b];
}

// 타겟 넘버
// 나의 풀이
function solution(numbers, target) {
    let ans = 0;

    function dfs(depth, sum) {
        if (depth === numbers.length) {
            if (sum === target) {
                ans++;
            }
            return;
        }
        // index로 +1 , -1
        dfs(depth + 1, sum + numbers[depth]);
        dfs(depth + 1, sum - numbers[depth]);
    }

    dfs(0, 0);
    return ans;
}
// 남의 풀이
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0, 0);
    function getAnswer(x, value) {
        if (x < numbers.length) {
            getAnswer(x + 1, value + numbers[x]);
            getAnswer(x + 1, value - numbers[x]);
        } else {
            if (value === target) {
                answer++
            }
        }
    }
    return answer;
}
// 멀쩡한 사각형
// 나의 풀이
function solution(w, h) {
    // 가로 + 세로 - 최대공약수
    let getGCD = (a, b) => {
        if (b === 0) {
            return a;
        } else {
            return getGCD(b, (a % b));
        }
    }

    let gcd = getGCD(w, h);
    const ans = w + h - gcd;
    return w * h - ans;
}

// 남의 풀이
function solution(w, h) {
    const slope = h / w;
    let result = 0;

    for (let i = 1; i <= w; i++) {
        result += Math.ceil(slope * i);
    }

    return ((h * w) - result) * 2;
}

// 기능개발
// 나의 풀이
function solution(progresses, speeds) {
    var answer = [];
    let cnt = 0;
    let len = speeds.length;

    while (progresses[0]) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }

        if (progresses[0] >= 100) {
            for (let j = 0; j < len; j++) {
                if (progresses[0] >= 100) {
                    cnt++;
                    progresses.shift();
                    speeds.shift();
                } else {
                    break;
                }
            }
        }
        if (cnt > 0) {
            answer.push(cnt);
            cnt = 0;
            len = progresses.length;
        }
    }

    return answer;
}

// 남의 풀이
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}