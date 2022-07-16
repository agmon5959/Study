const input = require('fs').readFileSync('input.txt').toString().split('\n')

const t = input.filter(str => str.length < 1)

if (t.length) {
    input.splice(input.indexOf(t[0]), 1)
}

input.forEach(str => {
    const lower = str.length - str.replace(/[a-z]/g, '').length
    const upper = str.length - str.replace(/[A-Z]/g, '').length
    const num = str.length - str.replace(/[0-9]/g, '').length
    const blank = str.length - str.replace(/\ /g, '').length

    console.log(lower, upper, num, blank)
})