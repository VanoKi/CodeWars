from icecream import ic
from math import floor

arr = [[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]

def sum_average(arr):
    return floor(sum([sum(i)/len(i) for i in arr]))

ic(sum_average(arr))