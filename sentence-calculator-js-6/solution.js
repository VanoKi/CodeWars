
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
  return upper
}
console.log(nameFunction("I Love You"))
console.log('A'.charCodeAt(0))
console.log('Z'.charCodeAt(0))
console.log('0'.charCodeAt(0))
console.log('9'.charCodeAt(0))

