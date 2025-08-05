const vovels = 'aeiouAEIOU'
function nameFunction (s) {
  const n = s.length
  let result = 0
  for (let i = 0; i < n -1; i++) {
    const char = s[i]
    if (vovels.includes(char)) {
      const startCount = i + 1
      const endCount = n - i
      const contribution = startCount * endCount
      result += contribution
    }
  }
  return result
}
console.log(nameFunction("baceb"))

