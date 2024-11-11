const ic = require('node-icecream')()

const arr = [[1],[2]]

ic(arr.every(item => Array.isArray(item)))