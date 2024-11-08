from icecream import ic

arr = [ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]

def avg_array(arr):
    ans = arr[0]
    for i in arr[1:]:
        for j in range(len(i)):
            ans[j] += i[j]
        ic(ans)
    return [i/len(arr) for i in ans]

ic(avg_array(arr))