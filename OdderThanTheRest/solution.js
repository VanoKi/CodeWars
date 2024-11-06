const ic = require('node-icecream')()

function oddOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        ic(i, arr[i] % 2)
        if (arr[i] % 2 !== 0){
            return i
        }
    }
    return -1
}

ic(oddOne([-24,-68,30,-38,64,12,-50,-76,-32,86,17,36,-58,12,48,-30,86,2,-10,-76,78,46,-66,38,12,-38,18,48,-46,-60,-84,46,4,40,98,-88,-76,-18,-30]))