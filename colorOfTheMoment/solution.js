const ic = require('node-icecream')()

function hexToTime(hexCode) {
    let ans = []
    for (let i = 1; i < hexCode.length; i += 2) {
        let time = parseInt(hexCode.slice(i, i + 2), 16)
        if (time > 59) {
            throw new Error('Thats not a valid time!')
        } else {
            ans.push(time)
        }
    }
    return ans[0] >= 24 ? 'Thats not a valid time!' : ans.join(':')
}

ic(hexToTime('#2c3721'))