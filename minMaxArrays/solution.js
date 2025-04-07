const ic = require('node-icecream')()

function solve(arr){
    const sortedArray = arr.sort((a, b) => b - a)
    let ans = []
    ic(sortedArray)
    for (let i = 0; i < arr.length / 2; i++) {
        let Max = arr[i]
        let Min = arr[arr.length - i - 1]
        if (Min !== Max) {
            ans.push(Max)
            ans.push(Min)
        } else {
            ans.push(Max)
        }
    }
    return ans
};

const array = [15,11,10,7,12]
ic(solve(array))