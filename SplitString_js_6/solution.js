const ic = require('node-icecream')()

function solution(str){
    let ans = []
    for (let i = 0; i < str.length; i += 2) {
        ic(str[i], str[i+1])
        // ans.push(str[i], str[i+1])
    }
    return ans
}

ic(solution('abcde'))