
function nameFunction (params) {
  const dict = {}
  for (const p of params) {
    if(!dict[p]) dict[p] = 1
    else dict[p] += 1
  }
  return dict
}
console.log(nameFunction([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))

