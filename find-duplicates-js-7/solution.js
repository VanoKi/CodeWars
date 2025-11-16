
function nameFunction (params) {
  const dupl = []
  const stack = []
  for (const p of params) {
    console.log(typeof p)
    if (typeof p === "number") {
      console.log(p)
      if (stack.includes(p)) dupl.push(p)
      else stack.includes(p)
    }
  }
  return dupl
}
console.log(nameFunction([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))

