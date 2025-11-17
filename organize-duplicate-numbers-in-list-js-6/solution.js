
function nameFunction (params) {
  const ans = []
  for (const param of params) {
    if (ans.includes(ans[param])){
      console.log(ans.includes(ans[param]))
      console.log(ans.indexOf(ans[param]))
      ans[param].push(param)
    }
    else ans.push([param])
  }
  return ans
}
console.log(nameFunction([3, 2, 6, 2, 1, 3]))

