from icecream import ic
from words import words

letters = 'GQEMAUVXY'
def longest_word(letters):
    word2 = ''
    ans = []
    for word in words:
        for char in word:
            if char in letters:
                letters.replace(char, '')
            ic(letters)
    # ans.append(word)
    return ans

def check_word(letters):
    word = 'GAME'
    for char in word:
        if char in letters:
            ic(char)
    return word
ic(longest_word(letters))
# ic(check_word(letters))