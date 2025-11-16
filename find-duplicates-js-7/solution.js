
function nameFunction (params) {
  const dupl = []
  const stack = []
  for (const p of params) {
    if (typeof p == "number") {
      if (stack.includes(p) && !dupl.includes(p)) dupl.push(p)
      else stack.push(p)
    }
  }
  return dupl
}
console.log(nameFunction([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))

