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
            if(leftDist === rightDist){
                if(hand === "right"){
                    cur_R = keyPad[x];
                    a.push("R");
                }else{
                    cur_L = keyPad[x];
                    a.push("L");
                }
            }else if (rightDist < leftDist) {
                cur_R = keyPad[x];
                a.push("R");
            }else{
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
    absolutes.forEach((iter,idx)=>{
        if(signs[idx]){
            answer += iter;
        }else{
            answer -= iter;
        }
    })
    return answer;
}

// 내적
function solution(a, b) {
    let result=0;
    for(let i=0; i<a.length;i++){
        result += a[i]*b[i];
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
    
    for(let i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

// 오픈채팅방

function solution(record) {
    var answer = [];
    let userObj={}
    // 오브젝트 만들어주는 반복문
    record.forEach((iter)=>{
        if(iter.split(" ")[0] !== "Leave"){
            let uid = iter.split(" ")[1];
            let nickName = iter.split(" ")[2];
            userObj[uid] = nickName;
        }
    })

    // 만들어진 오브젝트를 통해서 값을 구하는 함수
    record.forEach((iter)=>{
        let uid = iter.split(" ")[1];
        
        if(iter.split(" ")[0] === "Enter"){
            answer.push(userObj[uid] + "님이 들어왔습니다.");
        }else if(iter.split(" ")[0] == "Leave"){
            answer.push(userObj[uid] + "님이 나갔습니다.");
        }
    })

    return answer;
}
