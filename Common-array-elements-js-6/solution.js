function common(a, b, c) {
  // console.log([a, b, c])
  const dictForElem = (elem) => {
    const dict = {}
    for (const elemElement of elem) {
      if (dict[elemElement]) dict[elemElement] += 1
      else dict[elemElement] = 1
    }
    return dict
  }

  const dictionaries = Array.from(arguments).map(elem => dictForElem(elem))
  // console.log(dictionaries)
  const firstDict = dictionaries[0]
  const commonElem = {}
  for (let i = 1; i < dictionaries.length; i++) {
    // console.log(dictionaries[i])
    for (const dictKey in dictionaries[i]) {
      if(dictKey in firstDict) commonElem[dictKey] = firstDict[dictKey]
    }
  }
  return Object.entries(commonElem).reduce((acc, elem) => {
    acc + (Number(elem[0]) * elem[1])
  }, 0)
}

console.log(common( [1,2,2,3],[5,3,2,2],[7,3,2,2]))