const ic = require('node-icecream')()
function duplicateCount (text) {
  let dict = {}
  for (let i = 0; i < text.length; i++) {
    let item = text[i].toLowerCase()
    if (item in dict) {
      dict[item] += 1
    } else {
      dict[item] = 1
    }
  }
  return dict
}
ic(duplicateCount("aabbcde"))

