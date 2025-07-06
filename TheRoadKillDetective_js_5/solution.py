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
ANIMALS = ['alligator']

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
            animal_dict, animal_zipped = create_dict(i)
            victim_dict, victim_zipped = create_dict(photo)
            if animal_zipped == victim_zipped or victim_zipped[::-1] == animal_zipped:
                ic(victim_zipped, animal_zipped, victim_zipped[::-1])
                for j in animal_dict:
                    if victim_dict[j] - animal_dict[j] == -1:
                        break
                    else:
                        return i

    return '??'
# change check !!!!!!!
# ic(road_kill("=====k====r=a=vvvv==d=d=d=d=r==a=a======="))
# ic(road_kill("===       ===snake========="))
ic(road_kill("==a======a=a=a=lig===a=t====o=r=r=r=r=="))
# ic(road_kill("=====r=rrr=rra=====eee======bb====b======="))

# def is_subsequence(word, sequence):
#     it = iter(sequence)
#     for char in word:
#         if char not in it:
#             return False
#     return True
#

