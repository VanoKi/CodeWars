
function nameFunction (params) {

  const createDict = () => {
    const dict = {}
    for (let i = 97; i < 123; i++) {
      console.log(String.fromCharCode(i))
    }
    return dict
  }
  return createDict()
}
console.log(nameFunction('$aaaa#bbb*cc^fff!z\''))

console.log('a'.charCodeAt(0))
console.log('z'.charCodeAt(0))