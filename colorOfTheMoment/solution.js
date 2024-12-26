const ic = require('node-icecream')()

function hexToTime(hexCode) {
    if (hexCode.length !== 7 || hexCode[0] !== '#') {
        throw new Error(`Invalid hex code format! `)
    }
    let ans = []
    for (let i = 1; i < hexCode.length; i += 2) {
        let time = parseInt(hexCode.slice(i, i + 2), 16)
        ans.push(time)
    }

    let [hours, minutes, seconds] = ans
    if (hours >= 24 || minutes > 59 || seconds > 59) {
        throw new Error('Thats not a valid time!')
    }

    return ans.map(num => num.toString()).join(':')
}

ic(hexToTime('#0d3737'))