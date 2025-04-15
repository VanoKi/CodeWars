const ic = require('node-icecream')()

function isBalanced(str) {
    const left = '({['
    const right = ')}]'
    let stack = []
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (left.includes(str[i])) stack.push(str[i])
        if (right.includes(str[i])) {
            if(right.indexOf(str[i]) === left.indexOf(stack.at(-1))) {
                count += 1
                stack.pop()
            } else {
                stack.push(str[i])
            }
        }
    }
    return [stack.length == 0, count, stack.length]
}

ic(isBalanced("({)}"))

