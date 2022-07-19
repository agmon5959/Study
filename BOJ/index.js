const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
console.log();

const isPrime = (n) => {
    if (n == 1) {
        return false;
    }

    for (let i = 2; i <= (Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    console.log(n);
}

// 추후 풀기
// 골드바흐의 추측
input.forEach((iter) => {
    isPrime(iter)
})