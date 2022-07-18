const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')
let param = input.pop();
let pNum1 = param.split(" ")[0];
let pNum2 = param.split(" ")[1];


function 유클리드호제법(num1, num2) {
    
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}

console.log(유클리드호제법(Number(pNum1), Number(pNum2)).join('\n') );