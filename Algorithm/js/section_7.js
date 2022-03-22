// 1번 문제
// 선택 정렬
function solution(arr) {
    let ans;

    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) {
                idx = j;
            }

        }
        // 두개를 바꿔야함
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        console.log('i > ', i, 'idx > ', idx)
    }
    return arr;
}

// 2번 문제
// 버블 정렬
function solution(arr) {
    let answer = arr;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}

// 3번 문제
// Special Sort
function solution(arr) {

    let nagativeArr = [];
    let positiveArr = [];
    let returnArr = [];
    for (let x of arr) {
        if (x < 0) {
            nagativeArr.push(x);
        } else {
            positiveArr.push(x);
        }
    }

    let correctAnswer = returnArr = nagativeArr.concat(positiveArr).join();

    // 버블정렬 이용 ( 앞, 뒤 비교 )
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j]>0 && arr[j+1] < 0){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;

}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));