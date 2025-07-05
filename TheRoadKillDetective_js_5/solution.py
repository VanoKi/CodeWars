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
    victim = ''.join(i for i in photo if i.isalpha())
    reversed_victim = victim[::-1]

    # def is_subsequence(word, sequence):
    #     it = iter(sequence)
    #     return all(char in it for char in word)


    # for animal in ANIMALS:
    #     if is_subsequence(animal, victim) or is_subsequence(animal, reversed_victim):
    #         return animal

    # return '??'
    animal = 'alligator'
    def dict_seq(seq):
        return {i:seq.count(i) for i in seq}
    dict_victim = dict_seq(victim)
    dict_animal = dict_seq(animal)

    return dict_victim, dict_animal

# ic(road_kill("=====k====r=a=vvvv==d=d=d=d=r==a=a======="))
# ic(road_kill("===       ===snake========="))
ic(road_kill("==a======a=a=a=lig===a=t====o=r=r=r=r=="))

