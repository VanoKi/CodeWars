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
  let duplicateCount = 0
  for (const dictKey in dict) {
    if (dict[dictKey] > 1) duplicateCount += 1
  }
  return duplicateCount
}
ic(duplicateCount("aabbcde"))

