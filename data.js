const LEVEL = 'Level';

const STRENGTH = 'Strength';
const PERCEPTION = 'Perception';
const ENDURANCE = 'Endurance';
const CHARISMA = 'Charisma';
const INTELLIGENCE = 'Intelligence';
const AGILITY = 'Agility';
const LUCK = 'Luck';
const STATS = [
    STRENGTH,
    PERCEPTION,
    ENDURANCE,
    CHARISMA,
    INTELLIGENCE,
    AGILITY,
    LUCK
];
const STATS_SET = new Set(STATS)
const BARTER =         'Barter';
const BIG_GUNS =       'Big Guns';
const ENERGY_WEAPONS = 'Energy Weapons';
const EXPLOSIVES =     'Explosives';
const GUNS =           'Guns';
const LOCKPICK =       'Lockpick';
const MEDICINE =       'Medicine';
const MELEE_WEAPONS =  'Melee Weapons';
const REPAIR =         'Repair';
const SCIENCE =        'Science';
const SNEAK =          'Sneak';
const SPEECH =         'Speech';
const SURVIVAL =       'Survival';
const UNARMED =        'Unarmed';
const SKILLS_STAT = {
    [BARTER]: CHARISMA,
    [BIG_GUNS]: ENDURANCE,
    [ENERGY_WEAPONS]: PERCEPTION,
    [EXPLOSIVES]: PERCEPTION,
    [GUNS]: AGILITY,
    [LOCKPICK]: PERCEPTION,
    [MEDICINE]: INTELLIGENCE,
    [MELEE_WEAPONS]: STRENGTH,
    [REPAIR]: INTELLIGENCE,
    [SCIENCE]: INTELLIGENCE,
    [SNEAK]: AGILITY,
    [SPEECH]: CHARISMA,
    [SURVIVAL]: ENDURANCE,
    [UNARMED]: ENDURANCE,
};
const SKILLS = Object.keys(SKILLS_STAT);
const USED_SKILL_POINTS = 'Used Skill Points';
const MAX_SKILL_POINTS = 'Max Skill Points';

const pred = (name, value, apply) => { return { 'pred': name, 'value': value, 'apply': apply } };
const statskillpred = (name, statskill, value, apply) => {
    var p = pred(name, value, apply);
    p['statskill'] = statskill;
    return p;
};
const gt = (statskill, value) => statskillpred('more_than', statskill, value, (n) => n > value);
const lt = (statskill, value) => statskillpred('less_than', statskill, value, (n) => n < value);
const eq = (statskill, value) => statskillpred('equals_to', statskill, value, (n) => n == value);
const and = (values) => pred('and', values, (n) => values.every((value) => value.apply(n)));
const or = (values) => pred('or', values, (n) => values.every((value) => value.apply(n)));
const ge = (statskill, value) => and([gt(statskill, value), eq(statskill, value)]);
const le = (statskill, value) => and([lt(statskill, value), eq(statskill, value)]);
const op = (name, statskill, value, apply, unapply) => {
    return { 'op': name, 'statskill': statskill, 'value': value, 'apply': apply, 'unapply': unapply }
};
const add = (statskill, value) => op('add', statskill, value, (n) => n + value, (n) => n - value);
const sub = (statskill, value) => op('sub', statskill, value, (n) => n - value, (n) => n + value);

const ACTION_STAR_1 = 'Action Star 1'
const ACTION_STAR_2 = 'Action Star 2'
const ACTION_STAR_3 = 'Action Star 3'
const APPLIED_BALLISTIC = 'Applied Ballistics';
const BALANCED_LOAD = 'Balanced Load';
const BETTER_CRITICALS = 'Better Criticals';
const BLOODY_MESS = 'Bloody Mess';
const BUILT_TO_DESTROY = 'Built to Destroy';
const CAREFUL_HANDLING = 'Careful Handling';
const COWBOY = 'Cowboy';
const DESPERADO = 'Desperado';
const FINESSE = 'Finesse';
const FIGHT_HUNGRY = 'Fight Hungry';
const GOOD_NATURED = 'Good Natured';
const GRACEFUL = 'Graceful';
const GUNSLINGER_1 = 'Gunslinger 1';
const GUNSLINGER_2 = 'Gunslinger 2';
const HANDGUN_HOTSHOT_1 = 'Handgun Hotshot 1';
const HANDGUN_HOTSHOT_2 = 'Handgun Hotshot 2';
const HAND_LOADER_1 = 'Hand Loader 1';
const HAND_LOADER_2 = 'Hand Loader 2';
const HEADLESS_COURIER = 'Headless Courier';
const HOARDER = 'Hoarder';
const IRON_FOCUS = 'Iron Focus';
const LIVING_ANATOMY = 'Living Anatomy';
const IDEALOGUE = 'Idealogiue';
const NERVES_OF_STEEL_1 = 'Nerves of Steel 1';
const NERVES_OF_STEEL_2 = 'Nerves of Steel 2';
const OVERWHELMING_ODDS = 'Overwhelming Odds';
const RAPID_RELOAD = 'Rapid Reload';
const RIPNTEAR = 'Rip N\' Tear';
const SEX_APPEAL = 'Sex Appeal';
const SHHH = 'Shhh!'
const SWEET_SIX_SHOOTER = 'Sweet Six Shooter';
const STRONG_BACK = 'Strong Back';
const SWIFT_LEARNER = 'Swift Learner';
const TALENTED = 'Talented';
const TOUGHNESS = 'Toughness';
const TWISTED = 'Twisted';
const WEAPON_HANDLING = 'Weapon Handling';

// "requirements": [],
// "effects": []
const TRAITS = {
    [ACTION_STAR_1]: {
        "requirements": [
            ge(CHARISMA, 3),
            ge(AGILITY, 5)
        ],
        "effects": []
    },
    [ACTION_STAR_2]: {
        "requirements": [
            ge(CHARISMA, 3),
            ge(AGILITY, 5)
        ],
        "effects": []
    },
    [ACTION_STAR_3]: {
        "requirements": [
            ge(CHARISMA, 3),
            ge(AGILITY, 5)
        ],
        "effects": []
    },
    [APPLIED_BALLISTIC]: {
        "requirements": [
            ge(STRENGTH, 7),
            ge(INTELLIGENCE, 5),
            or([ge(GUNS, 60), ge(BIG_GUNS, 60)])
        ],
        "effects": [
            add(BIG_GUNS, 25)
        ]
    },
    [BALANCED_LOAD]: {
        "requirements": [
            ge(STRENGTH, 6),
            or([ge(ENDURANCE, 6), ge(PERCEPTION, 6)]),
        ],
        "effects": []
    },
    [BETTER_CRITICALS]: {
        "requirements": [
            ge(PERCEPTION, 6),
            ge(LUCK, 6)
        ],
        "effects": []
    },
    [BLOODY_MESS]: {
        "requirements": [],
        "effects": []
    },
    [BUILT_TO_DESTROY]: {
        "requirements": [
            ge(AGILITY, 4)
        ],
        "effects": []
    },
    [CAREFUL_HANDLING]: {
        "requirements": [
            ge(INTELLIGENCE, 4),
            ge(PERCEPTION, 4)
        ]
    },
    [COWBOY]: {
        "requirements": [
            ge(MELEE_WEAPONS, 4)
        ]
    },
    [DESPERADO]: {
        "requirements": [
            ge(PERCEPTION, 7)
        ]
    },
    [FINESSE]: {
        "requirements": [
            ge(AGILITY, 5)
        ]
    },
    [GOOD_NATURED]: {
        "effects": [
            add(CHARISMA, 1),
            add(SPEECH, 5),
            add(BARTER, 5),
            sub(ENERGY_WEAPONS, 5),
            sub(EXPLOSIVES, 5),
            sub(GUNS, 5),
            sub(MELEE_WEAPONS, 5),
            sub(UNARMED, 5)
        ]
    },
    [GRACEFUL]: {
        "requirements": [
            ge(AGILITY, 7)
        ]
    },
    [GUNSLINGER_1]: {},
    [GUNSLINGER_2]: {},
    [FIGHT_HUNGRY]: {},
    [HANDGUN_HOTSHOT_1]: {
        "requirements": [
            ge(STRENGTH, 6),
            or([ge(GUNS, 40), ge(BIG_GUNS, 40)])
        ]
    },
    [HANDGUN_HOTSHOT_2]: {
        "requirements": [
            ge(STRENGTH, 6),
            or([ge(GUNS, 40), ge(BIG_GUNS, 40)])
        ]
    },
    [HAND_LOADER_1]: {
        "requirements": [
            or([ge(GUNS, 50), ge(BIG_GUNS, 50)]),
        ]
    },
    [HAND_LOADER_2]: {
        "requirements": [
            or([ge(GUNS, 50), ge(BIG_GUNS, 50)]),
        ]
    },
    [HEADLESS_COURIER]: {},
    [HOARDER]: {},
    [IDEALOGUE]: {},
    [IRON_FOCUS]: {
        "requirements": [
            ge(ENDURANCE, 8),
            ge(BIG_GUNS, 75)
        ]
    },
    [NERVES_OF_STEEL_1]: {
        "requirements": [
            ge(AGILITY, 6),
            ge(ENDURANCE, 4)
        ]
    },
    [NERVES_OF_STEEL_2]: {
        "requirements": [
            ge(AGILITY, 6),
            ge(ENDURANCE, 4)
        ]
    },
    [LIVING_ANATOMY]: {},
    [OVERWHELMING_ODDS]: {
        "requirements": [ge(INTELLIGENCE, 8)],
        "effects": []
    },
    [RAPID_RELOAD]: {
        "requirements": [
            ge(AGILITY, 5),
            or([ge(GUNS, 40), ge(ENERGY_WEAPONS, 40), ge(BIG_GUNS, 40)])
        ],
    },
    [RIPNTEAR]: {
        "effects": [
            add(STRENGTH, 2),
            add(UNARMED, 5),
            sub(CHARISMA, 2),
            sub(SPEECH, 5),
            sub(BARTER, 5),
            sub(SCIENCE, 5),
            sub(SNEAK, 5),
        ]
    },
    [SEX_APPEAL]: {
        "requirements": [
            ge(CHARISMA, 3)
        ],
        "effects": [
            add(CHARISMA, 2),
            sub(BARTER, 10),
            sub(SPEECH, 10)
        ]
    },
    [SHHH]: {
        "requirements": [
            lt(CHARISMA, 5),
            ge(AGILITY, 4)
        ],
        "effects": [
            sub(BARTER, 7),
            sub(SPEECH, 7),
            add(SNEAK, 10)
        ]
    },
    [SWEET_SIX_SHOOTER]: {
        "requirements": [
            ge(CHARISMA, 6),
            ge(GUNS, 66),
        ]
    },
    [STRONG_BACK]: {
        "requirements": [
            ge(STRENGTH, 6),
            ge(ENDURANCE, 6)
        ]
    },
    [SWIFT_LEARNER]: {
        "requirements": [
            ge(INTELLIGENCE, 4),
            ge(PERCEPTION, 4)
        ]
    },
    [TALENTED]: {},
    [TOUGHNESS]: {},
    [TWISTED]: {},
    [WEAPON_HANDLING]: {
        "requirements": [
            ge(LEVEL, 12),
            ge(ENDURANCE, 5)
        ],
    },
};