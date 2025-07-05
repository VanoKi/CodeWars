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
    def create_dict(sequence):
        result = []
        for i in sequence:
            if i.isalpha() and i not in result:
                result.append(i)
        return ''.join(result)

    # victim = create_dict(photo)
    # ic(victim)
    # reversed_victim = ''.join(list(reversed(victim)))
    # ic(reversed_victim)
    # for i in ANIMALS:
    #     animal = ''.join(create_dict(i).keys())
    #     if animal == victim or animal == reversed_victim:
    #         return i

    return create_dict(photo)

# print(road_kill("=====k====r=a=vvvv==d=d=d=d=r==a=a======="))
# print(road_kill("===       ===snake========="))
print(road_kill("==a======a=a=a=lig===a=t====o=r=r=r=r=="))

