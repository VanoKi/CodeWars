def odd_one(arr):
    return arr.index([i for i in arr if i % 2 != 0][0])
arr = [2,4,6,7,10]
print(odd_one(arr))