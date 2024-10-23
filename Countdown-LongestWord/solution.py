from icecream import ic
from words import words

letters = 'GQEMAUVXY'

def check_word(letters, word):
    letters_len = len(letters)
    for char in word:
        if char in letters:
            letters = letters.replace(char, '')
    if letters_len == len(letters) +  len(word):
        return word
def longest_word(letters):
    ans = []
    for word in words:
        result_of_compare = check_word(letters, word)
        if result_of_compare:
            # ans.append(result_of_compare)
            if ans:
                if len(result_of_compare) > len(ans[0]):
                    if ans[0] < result_of_compare:
                        ans[0] = result_of_compare
                    else:
                        ans.append(result_of_compare)
            else:
                ans.append(result_of_compare)
    return ans

# longest_word(letters)
ic(longest_word(letters))
# ic(check_word(letters, "GAME"))
