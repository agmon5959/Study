function funcA(){
    let n = 100; // 입력 값
    let sqrt = Math.sqrt(n); // 100의 제곱근은 10
    let arr = [];   // 배열 선언

    for(let i = 1; i <= sqrt; i++){ // 1부터 제곱근까지 반복문
        cnt++;
        if(n % i == 0){ // 약수 중 작은 수 저장
            arr.push(i);
                if(n / i != i){ // 약수 중 큰 수 저장
                    arr.push(n / i);
                }
            }
        }
    return arr.sort((a,b)=>a-b);
}
console.log(funcA());