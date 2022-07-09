let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const len = (input.shift());
const value = (input);
const answer = '';
for (let i = 0; i < len; i++) {
    let word = value[i].split(' ')
    단어뒤집기(word);
}

function 단어뒤집기(pWord) {
    console.log(pWord);
    let ans = [];
    for (let i = 0; i < pWord.length; i++) {
        ans.push(pWord.pop());
    }
    console.log(ans);
}