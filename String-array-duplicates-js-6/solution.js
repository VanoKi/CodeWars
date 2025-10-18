
function dup(array) {
  function reduceChars (params) {
    let ans = ''
    for (let i = 0; i < params.length; i++) {
      if (ans.at(-1) === params[i]) continue
      else ans += params[i]
    }
    return ans
  }

  return array.map(element => reduceChars(element))
}
console.log(duplicates(["kelless","keenness"]))

