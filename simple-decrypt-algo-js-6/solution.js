function nameFunction(params) {
    const dict = {}
    for (let i = 97; i < 123; i++) {
        dict[String.fromCharCode(i)] = 0
    }
    for (let i = 0; i < params.length; i++) {
        let key = params[i]
        if (key in dict) {
            dict[key] += 1
        }
    }
    return Object.values(dict).join('')
}

console.log(nameFunction('$aaaa#bbb*cc^fff!z\''))

console.log('a'.charCodeAt(0))
console.log('z'.charCodeAt(0))