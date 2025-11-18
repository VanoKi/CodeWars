
function nameFunction (params) {
  const dict = {}
    const sequence = []
    for (const param of params) {
        if (dict[param]) {
            dict[param].push(param)
        }
        else {
            dict[param] = [param]
            sequence.push(param)
        }
    }
    return sequence.map(e => dict[e])
}
console.log(nameFunction([3, 2, 6, 2, 1, 3]))

