const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
//? 소수는 변하지않기 때문에 파라미터로 들어온 숫자 중 가장 큰 숫자를 기준으로 소수 배열을 만들어주기 위해서 최대 값을 구한다.
//? 반복문을 돌 때 마다 소수를 구해주면 효율성이 떨어지기 때문.
const maxNum = Math.max(...input);
//? 위에서 구한 최대값보다 1만큼 크게 배열을 만든 뒤 false로 기본값 초기화를 해준다.
//? 0번 인덱스는 사용하지 않는다. ( 인덱스가 곧 숫자로 인지하기 편하도록 )
const check = Array.from({ length: maxNum + 1 }).fill(false);

//? 에라토스테네스의 체를 통하여 check 배열에서 소수부분을 true로 바꿔주기위한 반복문.
//? 1은 소수가 아니기 떄문에 2부터 동작하도록 한다.
for (let i = 2; i <= maxNum; i++){ 
    //? 체크배열에서 false가 아니라면 해당 조건문을 통과하지 못한다. 
    //? 즉 처음엔 무조건 타며 이미 체크가 된 인덱스에는 적용하지 않도록 하기 위함.
    if (!check[i]) {
        
        //? j=i*i        :  j가 i*i가 되어야 i의 제곱근만 체크해줄 수 있기 때문 (에라토스테네스의 체)
        //? i<maxNum     :  i가 최대값보다 커지면 무한루프가 돌며 의미 없는 루프를 돌게 됨.
        //? j +=i        :  j++ 을 하지 않은 이유
        //?                 >> 효율성과 ++하지 않아도 모든 경우를 탐색할 수 있기 때문
        for (let j = i * i; j <= maxNum; j += i){
            //? 제곱근을 체크 ( --> 제곱근을 체크하는 것이 소수를 찾는 방법 )
            check[j] = true;
        }
    }
}

//! 만들어진 소수 배열을 통해 골드바흐의 추측을 풀어내는 부분
input.forEach((iter) => {
    for (let i = 3; i < iter; i += 2){
        if (!check[i] && !check[iter - i]) {
            console.log(`${iter} = ${i} + ${iter - i}`);
            break;
        }
    }
})
