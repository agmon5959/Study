// 효율성 ( 투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

// 1번 문제
// 두 배열 합치기
function solution(arr1, arr2){
    let newArr = [];
    let len = arr1.length < arr2.length ? arr2.length : arr1.length

    for (let i = 0; i < len; i++) {
        if(arr1[i] !== undefined){
            newArr.push(arr1[i]);
        }
        if(arr2[i] !== undefined){
            newArr.push(arr2[i]);
        }
    }
    
    return newArr.sort((a,b)=>{
        return a-b;
    })
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));