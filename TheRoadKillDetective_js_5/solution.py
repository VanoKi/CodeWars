# from preloaded import ANIMALS
from icecream import ic
ANIMALS = ['aardvark', 'alligator', 'armadillo', 'antelope', 'baboon', 'bear', 'bobcat', 'butterfly', 'cat', 'camel',
           'cow', 'chameleon', 'dog', 'dolphin', 'duck', 'dragonfly', 'eagle', 'elephant', 'emu', 'echidna', 'fish',
           'frog', 'flamingo', 'fox', 'goat', 'giraffe', 'gibbon', 'gecko', 'hyena', 'hippopotamus', 'horse', 'hamster',
           'insect', 'impala', 'iguana', 'ibis', 'jackal', 'jaguar', 'jellyfish', 'kangaroo', 'kiwi', 'koala',
           'killerwhale', 'lemur', 'leopard', 'llama', 'lion', 'monkey', 'mouse', 'moose', 'meercat', 'numbat', 'newt',
           'ostrich', 'otter', 'octopus', 'orangutan', 'penguin', 'panther', 'parrot', 'pig', 'quail', 'quokka',
           'quoll', 'rat', 'rhinoceros', 'racoon', 'reindeer', 'rabbit', 'snake', 'squirrel', 'sheep', 'seal', 'turtle',
           'tiger', 'turkey', 'tapir', 'unicorn', 'vampirebat', 'vulture', 'wombat', 'walrus', 'wildebeast', 'wallaby',
           'yak', 'zebra']


def road_kill(photo):

    clean_photo  = ''
    for i in photo:
        if i.isalpha():
            clean_photo += i
        else:
            if i == ' ':
                return '??'
    reversed_photo = clean_photo[::-1]

    def compare(cleaned_photo):
        for animal in ANIMALS:
            temp_photo = clean_photo
            matched = True

            for letter in animal:
                index = temp_photo.find(letter)
                if index == -1:
                    matched = False
                    break
                temp_photo = temp_photo[index + 1:]

            if matched:
                return animal

    return compare(clean_photo) or compare(reversed_photo) or '??'

ic(road_kill("=====k====r=a=vvvv==d=d=d=d=r==a=a======="))
ic(road_kill("===       ===snake========="))
ic(road_kill("==a======a=a=a=lig===a=t====o=r=r=r=r=="))

# def is_subsequence(word, sequence):
#     it = iter(sequence)
#     for char in word:
#         if char not in it:
#             return False
#     return True
#

