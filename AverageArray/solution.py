from icecream import ic

def func(arr):
    ans = []
    for i in range(len(arr) - 1):
        # ic(ans)
        # ans = [sum(i) for i in list(zip(ans, arr[i]))]
        ic(arr[i], arr[i + 1])
    # return [i / len(arr) for i in ans]

ic(func([ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]))
# a = [2, 3, 9, 10, 7]
# b = [12, 6, 89, 45, 3]
# ic([sum(i) for i in list(zip(a, b))])