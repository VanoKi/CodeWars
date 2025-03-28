const ic = require('node-icecream')()

function solution(str){
    if (str.length % 2 == 0) str += '_'
    ic(str)
    let ans = []
    for (let i = 0; i < str.length - 1; i += 2) {
        ans.push(str[i] + str[i+1])
    }
    return ans
}

ic(solution('abcde'))