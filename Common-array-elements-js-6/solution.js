function common(a, b, c) {
  const dictForElem = (elem) => {
    const dict = {}
    for (const elemElement of elem) {
      if (dict[elemElement]) dict[elemElement] += 1
      else dict[elemElement] = 1
    }
    return dict
  }

  const dictionaries = Array.from(arguments).map(dictForElem)
  const bigDic = {}
  for (const dictionary of dictionaries) {
    for (const key in dictionary) {
      if (bigDic[key]) bigDic[key] += 1
      else bigDic[key] = 1
    }
  }

  const commonKeys = Object.entries(bigDic).filter(e => e[1] >= dictionaries.length).map(e => e[0])

  return commonKeys.reduce( (sum, elem) => {
    return sum + (dictionaries[0][elem] * Number(elem))
  }, 0)
}

console.log(common( [2,2,3],[3,2,2],[3,2,3]))
