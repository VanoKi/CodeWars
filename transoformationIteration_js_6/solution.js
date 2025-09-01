
function nameFunction (source, target) {
  const ans = [...source]
  for (let i = 0; i < source.length; i++) {
    console.log(ans.splice(i, 1, target[i]))
  }
  return ans
}
console.log(nameFunction('car','see'))

