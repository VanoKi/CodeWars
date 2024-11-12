def odd_one(arr):
    odd = [i for i in arr if i % 2 != 0]
    return arr.index(odd[0]) if odd else -1
arr = [2,4,6,8]
print(odd_one(arr))