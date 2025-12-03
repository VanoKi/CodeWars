function scramble(str, arr) {
  const ans = []
  for (let i = 0; i < str.length; i++) {
    ans[arr[i]] = str[i]
  }
  return ans
};

console.log(scramble("abcd", [0, 3, 1, 2]))