# from preloaded import ANIMALS
from icecream import ic
# ANIMALS = ['aardvark', 'alligator', 'armadillo', 'antelope', 'baboon', 'bear', 'bobcat', 'butterfly', 'cat', 'camel',
#            'cow', 'chameleon', 'dog', 'dolphin', 'duck', 'dragonfly', 'eagle', 'elephant', 'emu', 'echidna', 'fish',
#            'frog', 'flamingo', 'fox', 'goat', 'giraffe', 'gibbon', 'gecko', 'hyena', 'hippopotamus', 'horse', 'hamster',
#            'insect', 'impala', 'iguana', 'ibis', 'jackal', 'jaguar', 'jellyfish', 'kangaroo', 'kiwi', 'koala',
#            'killerwhale', 'lemur', 'leopard', 'llama', 'lion', 'monkey', 'mouse', 'moose', 'meercat', 'numbat', 'newt',
#            'ostrich', 'otter', 'octopus', 'orangutan', 'penguin', 'panther', 'parrot', 'pig', 'quail', 'quokka',
#            'quoll', 'rat', 'rhinoceros', 'racoon', 'reindeer', 'rabbit', 'snake', 'squirrel', 'sheep', 'seal', 'turtle',
#            'tiger', 'turkey', 'tapir', 'unicorn', 'vampirebat', 'vulture', 'wombat', 'walrus', 'wildebeast', 'wallaby',
#            'yak', 'zebra']
ANIMALS = ['bear']


def road_kill(photo):
    if ' ' in photo:
        return '??'
    else:
        def create_dict(sequence):
            result = {}
            zipped = ''
            for i in sequence:
                if i in result:
                    result[i] += 1
                else:
                    if i.isalpha():
                        result[i] = 1
                        zipped += i
            return result, zipped
        result = []
        for i in ANIMALS:
            animal = create_dict(i)[0]
            victim = create_dict(photo)[0]
            ic(animal, victim)
            for j in animal:
                if victim[j] - animal[j] == -1:
                    break
                else:



    return create_dict(photo)

# ic(road_kill("=====k====r=a=vvvv==d=d=d=d=r==a=a======="))
# ic(road_kill("===       ===snake========="))
# ic(road_kill("==a======a=a=a=lig===a=t====o=r=r=r=r=="))
ic(road_kill("=====r=rrr=rra=====eee======bb====b======="))

# def is_subsequence(word, sequence):
#     it = iter(sequence)
#     for char in word:
#         if char not in it:
#             return False
#     return True
#

