const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
input.shift();

function 유클리드호제법(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    // const lcm = (a, b) => a * b / gcd(a, b);
    return gcd(num1, num2);
}

for (let i = 0; i < input.length; i++){
    let ans = 0;
    let numArr = input[i].split(' ');
    numArr.shift();
    for (let j = 0; j < numArr.length; j++) {
        for (let k = j + 1; k < numArr.length; k++) {
            ans += 유클리드호제법(Number(numArr[j]), Number(numArr[k]));
        }
    }
    console.log(ans);
}

