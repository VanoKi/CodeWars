const ic = require('node-icecream')()

function solve(arr){
    const sortedArray = arr.sort((a, b) => b - a)
    return sortedArray
};

const array = [15,11,10,7,12]
ic(solve(array))