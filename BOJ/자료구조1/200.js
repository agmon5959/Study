// !
// *
// todo && TODO
// ?
function _1406() {
    
    let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

    const targetArr = [...input.shift()];
    const len = Number(input.shift());
    const param = input;
    let tempArr = [];

    for (let i = 0; i < len; i++) {
        const command = param[i].split(' ')[0];

        switch (command) {
            case "L":   // target -> temp
                if (targetArr.length !== 0) {
                    tempArr.push(targetArr.pop());
                }

                break;
            case "D": // temp -> target
                if (tempArr.length !== 0) {
                    targetArr.push(tempArr.pop())
                }
                break;
            case "B":
                targetArr.pop()
                break;
            case "P":
                let value = param[i].split(' ')[1];
                targetArr.push(value);
                break;
        }
    }


    console.log(
        targetArr.concat(tempArr.reverse()).join('')
    );
}