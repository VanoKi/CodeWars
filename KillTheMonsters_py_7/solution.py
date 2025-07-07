from icecream import ic

def kill_monsters(health, monsters, damage):
    hits = 0
    while monsters > 0:
        monsters -= 3
        if monsters > 0:
            hits += 1
    get_damage = hits*damage
    rest_health = health - get_damage
    result = f"hits: {hits}, damage: {get_damage}, health: {rest_health}"
    return result if rest_health > 0 else 'hero died'

ic(kill_monsters(42, 30, 2))
ic(int(42/3))