export function repeatAdjacent (s) {
    let ans = []
    let word = ''
    for (const i of s) {
        if (word && word.at(-1) === i) {
            word += i
        }else {
            if (word.length >= 2){
                ans.push(word)
                word = ''
            }
        }
    }
    console.log(ans)
}
console.log(repeatAdjacent("soooooldieeeeeer"))
