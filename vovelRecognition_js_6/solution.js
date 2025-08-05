
function vowelRecognition (s) {
  const vovels = 'aeiouAEIOU'
  const n = s.length
  let result = 0
  for (let i = 0; i < n; i++) {
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
console.log(vowelRecognition("aeiouAEIOU"))

