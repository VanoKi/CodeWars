const ic = require('node-icecream')()

function minesweeper(mine) {
    const ans = JSON.parse(JSON.stringify(mine))
    const sum = (array) => array.map(i => i === undefined ? 0 : i).reduce((acc, i) => acc + i)
    const check = (item) => item !== undefined ? item : false
    for (let i = 0; i < mine.length; i++) {
        let row = check(mine[i])
        let previousRow = check(mine[i - 1])
        let nextRow = check(mine[i + 1])
        for (let j = 0; j < row.length; j++) {
            let previousRowSum = sum([previousRow[j - 1], previousRow[j], previousRow[j + 1]])
            let currentRowSum = sum([row[j - 1], row[j + 1]])
            let nextRowSum = sum([nextRow[j - 1], nextRow[j], nextRow[j + 1]])
            ans[i][j] = sum([previousRowSum, currentRowSum, nextRowSum])
        }
    }
    return ans
}

ic(minesweeper([
    [true,false,false],
    [false,true,false],
    [false,false,false]]))