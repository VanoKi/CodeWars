function common(a, b, c) {
  const dictForElem = (elem) => {
    const dict = {}
    for (const elemElement of elem) {
      if (dict[elemElement]) dict[elemElement] += 1
      else dict[elemElement] = 1
    }
    // return Object.entries(dict)
    return dict
  }

  const dictionaries = Array.from(arguments).map(elem => dictForElem(elem))
  console.log(dictionaries)
  const bigDic = {}
  for (const dictionary of dictionaries) {
    // console.log(dictionary)
    for (const dictionaryKey in dictionary) {
      // console.log(dictionaryKey)
      // console.log(dictionary[dictionaryKey])
    }
  }

}

console.log(common( [1,2,2,3],[5,3,2,2],[7,3,2,2]))