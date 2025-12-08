
function nameFunction (params) {
  const lower = {}
  let count = 1
  const upper = {}
  let upperCount = 2
  for (let i = 97; i < 123; i++) {
    lower[String.fromCharCode(i)] = count
    count += 1
    upper[String.fromCharCode(i).toUpperCase()] = upperCount
    upperCount += 2
  }
  const digit = {}
  for (let i = 0; i < 10; i++) {
    digit[String(i)] = i
  }
  const dict = {...lower, ...upper, ...digit}
  let ans = 0
  for (let i = 0; i < params.length; i++) {
    let elem = params[i]
    if (elem in dict) ans += dict[elem]
    else continue
  }
  return ans
}
console.log(nameFunction("ARE YOU HUNGRY?"))

