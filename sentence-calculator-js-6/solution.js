
function nameFunction (params) {
  const lower = {}
  let count = 1
  for (let i = 97; i < 123; i++) {
    lower[String.fromCharCode(i)] = count
    count += 1
  }
  return lower
}
console.log(nameFunction("I Love You"))
console.log('A'.charCodeAt(0))
console.log('Z'.charCodeAt(0))
console.log('0'.charCodeAt(0))
console.log('9'.charCodeAt(0))

