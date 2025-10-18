const vowelsBack = (str) => {


    const detectChar = (char) => {
        const abs = 'abcdefghijklmnopqrstuvwxyz'
        let index = abs.indexOf(char)
        let shift = 0
        if ('aeiu'.includes(char)) {
            shift = -5
        } else if ('co'.includes(char)) {
            shift = -1
        } else if ('d'.includes(char)) {
            shift = -3
        } else if ('e'.includes(char)) {
            shift = -4
        } else {
            shift = 9
        }
        return abs[Math.abs((index + shift) % 26)]
    }

    for (let i = 0; i < str.length; i++) {
        console.log(detectChar(str[i]))
    }
}

vowelsBack('codewars')