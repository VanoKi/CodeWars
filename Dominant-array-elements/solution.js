
function nameFunction (params) {
  const ans = [params.at(-1)]
  let maxElem = params.at(-1)
  for (let i = params.length - 2; i >= 0 ; i--) {
    if (params[i] > maxElem) {
      ans.unshift(maxElem)
      maxElem = params[i]

    }
  }
  return ans
}
console.log(nameFunction([16,17,14,3,14,5,2]))
    // [17,14,5,2]
// console.log(nameFunction([5,4,3,2,1]))

