from icecream import ic
from words import words

letters = 'IIIWUGEZI'

def check_word(letters, word):
    letters_len = len(letters)
    for char in word:
        if char in letters:
            letters = letters.replace(char, '', 1)
    if letters_len == len(letters) +  len(word):
        return word
def longest_word(letters):
    ans = []
    for word in words:
        result_of_compare = check_word(letters, word)
        if result_of_compare:
            if not ans:
                ans.append(result_of_compare)
            elif len(result_of_compare) > len(ans[0]):
                ans = [result_of_compare]
            elif len(result_of_compare) == len(ans[0]):
                ans.append(result_of_compare)
    return ans if ans else None

ic(longest_word(letters))
# ic(check_word(letters, 'LOOK'))