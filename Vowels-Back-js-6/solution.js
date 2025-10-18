const vowelsBack = (str) => {


    const detectChar = (char) => {
        const abs = 'abcdefghijklmnopqrstuvwxyz'
        let index = abs.indexOf(char)
        let shift = 0
        if ('co'.includes(char)) {
            shift = -1
        } else if ('auei'.includes(char)) {
            shift = -5
        } else if ('d'.includes(char)) {
            shift = -3
        } else if ('e'.includes(char)) {
            shift = -4
        } else {
            shift = 9
        }
        return abs[Math.abs((index + shift) % 26)]
    }
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let detectCharResult = detectChar(str[i])
        result += 'code'.includes(detectCharResult) ? str[i] : detectCharResult
    }
    return result
}

console.log(vowelsBack('codewars'))