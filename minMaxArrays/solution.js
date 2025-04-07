const ic = require('node-icecream')()

function solve(arr){
    const sortedArray = arr.sort((a, b) => b - a)
    let ans = []
    ic(sortedArray)
    for (let i = 0; i < arr.length / 2; i++) {
        // ic(arr[i], arr[arr.length - i + 1])
        // ic(i, arr.length - i - 1)
        // ic(arr[arr.length - i - 1])
    }
};

const array = [15,11,10,7,12]
ic(solve(array))