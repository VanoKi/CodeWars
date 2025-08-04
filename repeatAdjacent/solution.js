export function repeatAdjacent (s) {
    s += ' '
    let ans = 0
    let chain = 0
    let word = ''
    for (const char of s) {
        if (!word || word[word.length - 1] === char) {
            word += char
            continue
        }
        if (word.length >= 2) {
            chain++
        } else {
            if (chain >=2) ans++
            chain = 0
        }
        word = char
    }
    if (word.length >= 2) chain++
    if (chain >= 2) ans++
    return ans
}
console.log(repeatAdjacent("ccccoodeffffiiighhhhhhhhhhttttttts"))
