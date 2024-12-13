const ic = require('node-icecream')()

function getMissingElement(superImportantArray){
    // ic(superImportantArray.length)
    for (let i = 0; i < superImportantArray.sort((a, b) => a - b).length +1; i++) {
        if (i !== superImportantArray[i]) {
            return i
        }
        // ic(i, superImportantArray[i])
    }
}

ic(getMissingElement([
    2, 5, 6, 9, 1,
    3, 8, 4, 7
]))