
function nameFunction (source, target) {
  const ans = []
  for (let i = 0; i < source.length; i++) {
    console.log([...source].splice(i, 1, target[i]))
  }
  return ans
}
console.log(nameFunction('car','see'))

