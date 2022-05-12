// 알아야 할 것들

// 1) 소수 판별 최적화 알고리즘
function 소수판별최적화알고리즘(){
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

// 약수의 개수와 덧셈 zi존 풀이
function 소수판별알고리즘_2(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        // 제곱근의 약수는 무조건 홀수이다.
        // Number.isInteger() -> 해당 값이 정수인지 판단
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

// 2) 최대공약수 최소공배수 유클리드호제법
// 2-1 ) 최대공약수
function 최대공약수(num1, num2) {
    let gcd = 1;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

// 2-2) 최소공배수
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

// 2-3) 유클리드 호제법 (최대공약수와 최소공배수)
function 유클리드호제법(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}