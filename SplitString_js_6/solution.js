const ic = require('node-icecream')()

function solution(str){
    for (let i = 0; i < str.length - 1; i += 2) {
        ic(str[i] + str[i+1])
    }
}

ic(solution('abcdef'))