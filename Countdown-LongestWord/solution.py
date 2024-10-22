from icecream import ic
from words import words

letters = 'GQEMAUVXY'
def longest_word(letters):
    word2 = ''
    ans = []
    for word in words:
        for char in word:
            if char in letters:
                word2 += char
        ans.append(word2)
    return ans

ic(longest_word(letters))