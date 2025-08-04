// const ic = require('node-icecream')()
export function repeatAdjacent (s) {
    const ans = []
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== s[i+1] && s[i+1] !== s[i+2]) {
            // ic(s[i], s[i+1], s[i +2])
            ans.push(s.slice(0, i + 2))
            // ic(ans)
            s = s.slice(i + 2)
            // ic(s)
        }
    }
    // ic(ans)
    ans.push(s)
    return ans
}
// ic(repeatAdjacent("wwwwaaaarrioooorrrrr"))

