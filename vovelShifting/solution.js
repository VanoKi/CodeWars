
function nameFunction (s) {
  const vovels = "aeiouAEIOU"
  let vovelsInString = []
  let vovelsIndex = []
  for (let i = 0; i < s.length; i++) {
    if (vovels.includes(s[i])) {
      vovelsInString.push(s[i])
      vovelsIndex.push(s[i])
    }
  }

  return [vovelsInString, vovelsIndex]
}

console.log(nameFunction("This is a string"))

