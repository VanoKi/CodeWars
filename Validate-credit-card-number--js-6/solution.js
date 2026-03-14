function nameFunction(params) {
  const arr = Array.from('' + params);
  const sum = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  return sum;
}
console.log(nameFunction(12345));
