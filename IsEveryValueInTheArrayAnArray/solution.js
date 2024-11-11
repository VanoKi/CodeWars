const ic = require('node-icecream')()

const arr = [[1],[2]]

ic(arr.forEach(item => ic(Array.isArray(item))))