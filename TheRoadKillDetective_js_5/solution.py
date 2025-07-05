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
    # return {i for i in photo if i.isalpha()}
    def create_dict(sequence):
        result = {}
        for i in sequence:
            if i.isalpha():
                if i in result:
                    result[i] += 1
                else:
                    result[i] = 1
        return result

    victim = ''.join(create_dict(photo).keys())
    reversed_victim = ''.join(list(reversed(victim)))
    for i in ANIMALS:
        animal = ''.join(create_dict(i).keys())
        if animal == victim or animal == reversed_victim:
            return i


    return '??'

print(road_kill("==========h===yyyyyy===eeee=n==a========"))
# prepare_victim = road_kill("==========h===yyyyyy===eeee=n==a========")
animal = 'hyena'
# for i in prepare_victim:
#     ic(i*prepare_victim[i])
# ic(''.join(prepare_victim.keys()) == animal)
