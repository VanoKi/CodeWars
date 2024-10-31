const ic = require('node-icecream')()

function validCard(card){
    const arr = [...String(card).replace(' ', '')].map((item) => +item);
    ic(arr)
    const ans = [];
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (i % 2 === arr.length % 2) {
            if (arr[i] * 2 > 9) {
                ans.push([...String(arr[i] * 2)].reduce((s, c) => s + +c, 0));
            } else {
                ans.push(arr[i] * 2);
            }
        } else {
            ans.push(arr[i]);
        }
    }
    return ans.reduce((s, c) => s + c, 0) % 10 === 0;
}

ic(validCard("1234 5678 9012 3452"))