const ic = require('node-icecream')()

function nameFunction(params) {
    let array = str.split(' ')
    const ans = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Michael') {
            let lastName = array[i + 1]
            ans.push(lastName.replace(/[.,!?;:]+$/, ''))
        }
    }
    return ans
}

const str = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
ic(nameFunction(str))

