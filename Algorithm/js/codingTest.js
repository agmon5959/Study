// 프로그래머스 1단계 신고결과받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
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

// console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));

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

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
console.log(solution("onetwo3four56seven"));

// 숫자 문자열과 영단어 
// 정규표현식 풀이
function solution(s) {

    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
    
}