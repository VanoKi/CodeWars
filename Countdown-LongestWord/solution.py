from icecream import ic
from words import words

letters = 'TDWAYZROE'

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
            if not ans:
                ans.append(result_of_compare)
            elif len(result_of_compare) > len(ans[0]):
                ans = [result_of_compare]
            elif len(result_of_compare) == len(ans[0]):
                ans.append(result_of_compare)
    return ans

# longest_word(letters)
ic(longest_word(letters))
# ic(check_word(letters, "GAME"))

def check_result():
    words = ['ART',
                            'DARE',
                            'DART',
                            'DATE',
                            'DAY',
                            'DEW',
                            'DOT',
                            'DYE',
                            'EAR',
                            'OAR',
                            'ORE',
                            'RATE',
                            'RAY',
                            'ROAD',
                            'ROD',
                            'TAR',
                            'TEAR',
                            'TODAY',
                            'TOE',
                            'TOWER',
                            'TRADE',
                            'TRAY',
                            'TRY',
                            'WAR',
                            'WATER',
                            'WAY',
                            'WEAR',
                            'WORD',
                            'YARD',
                            'YAW',
                            'YEAR',
                            'ZERO']
    ans = []
    for word in words:
        if not ans:
            ans.append(word)
        elif len(word) > len(ans[0]):
            ans = [word]
        elif len(word) == len(ans[0]):
            ans.append(word)
    return ans

# ic(check_result())