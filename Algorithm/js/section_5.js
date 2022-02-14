// 효율성 ( 투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

// 1번 문제
// 두 배열 합치기
function solution(arr1, arr2) {
    let newArr = [];
    let len = arr1.length < arr2.length ? arr2.length : arr1.length

    for (let i = 0; i < len; i++) {
        if (arr1[i] !== undefined) {
            newArr.push(arr1[i]);
        }
        if (arr2[i] !== undefined) {
            newArr.push(arr2[i]);
        }
    }

    return newArr.sort((a, b) => {
        return a - b;
    })
}

// 2번 문제
// 공통원소 구하기
function solution(arr1, arr2){
    let ans=[];
    arr1.forEach((iter)=>{
        if(arr2.indexOf(iter) >= 0 ){
            ans.push(iter)
        }
    })
    return ans.sort((a,b)=>{return a-b})
}

// 3번 문제
// 연속 부분 수열
function solution(m, arr){
    let ans;
    let cnt=0;
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
        for(let j=0; j<arr.length;j++){
            if(i === j) { break; }
            sum += arr[j];
        }
    }
    return ans;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
