from icecream import ic

arr = [[1], [2], [3]]

def arr_check(arr):

    return all(map(lambda x: isinstance(x, list), arr))

ic(arr_check(arr))