function nameFunction(num) {
  const arr = Array.from(String(num), Number);
  let sum = arr[arr.length - 1];
  let count = 1;
  for (let i = arr.length - 2; i >= 0; i--) {
    // console.log(typeof arr[i]);
    if (count % 2 !== 0) {
      arr[i] = arr[i] * 2;
      if (arr[i] > 9) {
        arr[i] = arr[i] - 9;
      }
    }
    count++;
    sum += arr[i];
  }

  return sum % 10 === 0;
}
console.log(nameFunction(79927398713));
