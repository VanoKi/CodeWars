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
  // console.log(dictionaries)
  const bigDic = {}
  for (const dictionary of dictionaries) {
    // console.log(dictionary)
    for (const key in dictionary) {
      console.log(key)
      // console.log(dictionary[dictionaryKey])
      if (bigDic[key]) bigDic[key] += 1
      else bigDic[key] = 1
    }
  }

  console.log(Object.entries(bigDic).filter(e => e[1] >= dictionaries.length))

}

console.log(common( [1,2,2,3],[5,3,2,2],[7,3,2,2]))
