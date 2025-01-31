RAW_PERKS = [
  {
    "name": "Pawn To Queen",
    "description": "Therapy Result! You value knowledge and you are always actively seeking new ways to improve yourself, you gain one additional skill point per level.\n\n",
    "is_playable": false,
    "is_trait": false,
    "id": "16994145",
    "edid": "ALPawnToQueen",
    "requirements": [
      [">=", "Intelligence", 4]
    ]
  },
  {
    "name": "Infiltrator",
    "description": "With Infiltrator, if a lock is broken, and can't normally be picked again, you can attempt to pick it again one more time. This includes locks previously broken by a \"Force Lock\" attempt.",
    "is_playable": false,
    "is_trait": false,
    "id": "281776",
    "edid": "Infiltrator"
  },
  {
    "name": "Mile in Their Shoes",
    "description": "You have come to understand Nightstalkers. Consuming Nightstalker Squeezin's will now grant +1 Agiity, +25 Poison Resistance, +5 Sneak in addition to the normal benefits.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370073",
    "edid": "NVDLC03MileInTheirShoesPerk",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Survival", 25]
    ]
  },
  {
    "name": "Energy Weapons Bobblehead",
    "description": "Arrive at peaceful resolutions by using superior firepower.\n\n\n\nWhen using Energy Weapons, you ignore an additional 5 DT.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362667",
    "edid": "TTWBobbleheadPerkEnergyWeapons"
  },
  {
    "name": "Saguaro Stalker",
    "description": "Like the silent spectres of the Sonoran desert, you blend in most effectively when staying still. You gain +10 Sneak, +15% silenced weapon crit. chance, and +15% damage against targets which do not have you anywhere in their line of sight while not moving.",
    "is_playable": true,
    "is_trait": false,
    "id": "285488367",
    "edid": "sssPerkSaguaroStalker",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Sneak", 50],
      [">=", "Survival", 50]
    ]
  },
  {
    "name": "Unstoppable Force",
    "description": "Your martial might is truly legendary. You do 4x damage through enemy blocks with all Melee Weapons and Unarmed attacks while moving forward.",
    "is_playable": true,
    "is_trait": false,
    "id": "1463367",
    "edid": "UnstoppableForce",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Strength", 7],
      ["or", [">=", "Melee Weapons", 60], [">=", "Unarmed", 60]]
    ]
  },
  {
    "name": "Coiled Snake",
    "description": "You're extra dangerous when cornered or unseen. You gain +15% attack speed and + 35% throwing velocity and damage with thrown melee weapons while crouched.",
    "is_playable": true,
    "is_trait": false,
    "id": "285227422",
    "edid": "sssPerkCoiledSnake",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Agility", 8],
      [">=", "Survival", 35]
    ]
  },
  {
    "name": "The Professional",
    "description": "Up close and personal, that's how you like it. Your Sneak Attack Criticals with pistols, revolvers, and submachine guns, whether Guns or Energy Weapons, all inflict an additional 20% damage.",
    "is_playable": true,
    "is_trait": false,
    "id": "1465068",
    "edid": "TheProfessional",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Sneak", 50]
    ]
  },
  {
    "name": "Endurance Implant",
    "description": "Your nervous system has been enhanced with the Nociception Regulator, increasing your Endurance by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "1360174",
    "edid": "ImplantEndurancePerk",
    "effects": [
      ["+", "Endurance", 1]
    ]

  },
  {
    "name": "The Game Was Rigged From The Start",
    "description": "Your 18 karat run of bad luck isn't quite over. You still have that asshole in the flashy suit to contend with.\n\n\n\n-Enemies gain +50% crit chance.",
    "is_playable": false,
    "is_trait": true,
    "id": "50333710",
    "edid": "ELYPerkGameWasRigged"
  },
  {
    "name": "Fast Shot",
    "description": "While using Guns, Energy Weapons, or Big Guns, you fire 20% more quickly, but your spread is increased by 20%.",
    "is_playable": true,
    "is_trait": true,
    "id": "1269447",
    "edid": "FastShot",
    "requirements": [
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Miss Impossible",
    "description": "You're the luckiest girl in the world, though that doesn't seem to matter much. All of your hits are criticals, but you do no critical damage at all.",
    "is_playable": true,
    "is_trait": true,
    "id": "50336831",
    "edid": "ELYPerkMissImpossible"
  },
  {
    "name": "WideOpen",
    "description": "Their jaw is exposed! For each of your enemy's wounded arms, you inflict them 20% more damage with unarmed weapon.",
    "is_playable": false,
    "is_trait": false,
    "id": "16983551",
    "edid": "ALWideOpen"
  },
  {
    "name": "Lessons Learned",
    "description": "The wasteland has taught you some hard lessons, but you've remembered them all. You gain +1% to earned experience per level gained. (For example, +25% experience at level 25.)",
    "is_playable": true,
    "is_trait": false,
    "id": "16826966",
    "edid": "NVDLC04LessonsLearnedPerk",
    "requirements": [
      [">=", "Level", 26],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Cyborg Justice",
    "description": "Your cybernetically enhanced arms vibrate your blade so finely that it can't be perceived by the naked eye. You've gained +15 DT penetration and doubled limb damage when using a bladed weapon, and +15% damage when attacking a robot with your bladed weapon.",
    "is_playable": true,
    "is_trait": false,
    "id": "285294788",
    "edid": "sssPerkCyborgJustice",
    "requirements": [
      [">=", "Level", 16],
      ["has perk", "Cyborg"],
      [">=", "Agility", 8],
      [">=", "Melee Weapons", 75],
      [">=", "Science", 50]
    ]
  },
  {
    "name": "Empath",
    "description": "Your tender heart and care for others makes it difficult for you to hurt other living things. When attacking a living being, you deal 10% less damage to with ranged weapons, 20% less with Melee or Unarmed weapons, and an additional 20% less when your target is lower than 50% health. However, your compassion guides you to other ways to solve your problems. (You will gain another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50333721",
    "edid": "ELYFlawEmpath",
    "requirements": [
      [">=", "Perception", 3],
      [">=", "Charisma", 4]
    ],
    "effects": [
      ["+", "Charisma", 1]
    ]

  },
  {
    "name": "Survival Guru",
    "description": "You wrote the book on how to survive in the Wasteland, and have shared your secrets with humanity. You've gained +6% bonus to Poison Resistance and Radiation Resistance, and 6 points to both the Medicine and Science skills.",
    "is_playable": false,
    "is_trait": false,
    "id": "209372",
    "edid": "MS03Perk3B",
    "effects": [
      ["+", "Science", 6],
      ["+", "Medicine", 6]
    ]

  },
  {
    "name": "Xenotech Expert",
    "description": "Your familiarity with alien technology gives you better control over their weapons, increasing their damage output by 10%.",
    "is_playable": false,
    "is_trait": false,
    "id": "167816112",
    "edid": "DLC05Xenotech"
  },
  {
    "name": "Burning Sensation",
    "description": "Your anomalous body chemistry immediately rejects radiation, at the cost of your health. While you are irradiated, you will lose one point of health and disperse three points of radiation per second. This may be fatal!",
    "is_playable": true,
    "is_trait": false,
    "id": "50333754",
    "edid": "ELYPerkBurningSensation",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "Iron Fist 1",
    "description": "With each rank of the Iron Fist perk, you deal +1 Unarmed damage per rank of Endurance.",
    "is_playable": true,
    "is_trait": false,
    "id": "100867547",
    "edid": "IronFist",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Strength", 4],
      [">=", "Endurance", 5],
      [">=", "Unarmed", 25]
    ]
  },
  {
    "name": "Iron Fist 2",
    "description": "With each rank of the Iron Fist perk, you deal +1 Unarmed damage per rank of Endurance.",
    "is_playable": true,
    "is_trait": false,
    "id": "100867547",
    "edid": "IronFist",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Strength", 4],
      [">=", "Endurance", 5],
      [">=", "Unarmed", 25]
    ]
  },
  {
    "name": "Cranial Contusion",
    "description": "You've cauterized crazy Calvert! Your critical chance is increased by 5% when targeting the head in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "302028643",
    "edid": "PerkCranialContusion"
  },
  {
    "name": "Rad Resistance",
    "description": "Rad Resistance allows you to -- what else? -- resist radiation. This perk grants an additional 25% to Radiation Resistance.",
    "is_playable": true,
    "is_trait": false,
    "id": "204201",
    "edid": "RadResistance",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Survival", 40],
      [">=", "Endurance", 5]
    ]
  },
  {
    "name": "Realism Please",
    "description": "You are no longer an invincible superhero.",
    "is_playable": false,
    "is_trait": false,
    "id": "301996188",
    "edid": "SimpleRealism"
  },
  {
    "name": "Camarader-E 1",
    "description": "Companion version of Camarader-E.",
    "is_playable": false,
    "is_trait": false,
    "id": "67159583",
    "edid": "NVDLC04CamaraderECompanionPerk"
  },
  {
    "name": "Camarader-E 2",
    "description": "Companion version of Camarader-E.",
    "is_playable": false,
    "is_trait": false,
    "id": "67159583",
    "edid": "NVDLC04CamaraderECompanionPerk"
  },
  {
    "name": "Camarader-E 3",
    "description": "Companion version of Camarader-E.",
    "is_playable": false,
    "is_trait": false,
    "id": "67159583",
    "edid": "NVDLC04CamaraderECompanionPerk"
  },
  {
    "name": "Non Ducor, Duco",
    "description": "Though neither the NCR or the Legion is a perfect solution for the Mojave, neither is worth damaging at the cost of repeating humanity's greatest sin. You've gain +1 Intelligence, Charisma, and Luck while your karma is Good or Very Good.",
    "is_playable": false,
    "is_trait": false,
    "id": "67158620",
    "edid": "NVDLC04DivideSurvivorPerk"
  },
  {
    "name": "Headless Courier",
    "description": "Ride on through the night, chasing that perfect helmet that doesn't exist. When not wearing any headgear, your head takes half damage and you gain +2 Perception.",
    "is_playable": true,
    "is_trait": false,
    "id": "285223204",
    "edid": "sssPerkHeadlessCourier",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Survival", 50]
    ]
  },
  {
    "name": "Growth Serum",
    "description": "You've concocted a bizarre serum, which will increase your carry weight as you gain experience! However, it does severely tax your body.\n\n\n\n-Your carry weight is halved immediately.\n\n+Your carry weight is multiplied by 1.045x each time your level increases, until you hit level 30.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333764",
    "edid": "ELYPerkGrowthSerum",
    "requirements": [
      [">=", "Intelligence", 8]
    ]
  },
  {
    "name": "Small Frame",
    "description": "Due to your small size, you have +15 Sneak and enemy crit. chance is reduced by 15%, but you also suffer -1 Endurance and Strength.",
    "is_playable": true,
    "is_trait": true,
    "id": "1269446",
    "edid": "SmallFrame",
    "effects": [
      ["+", "Sneak", 15],
      ["-", "Strength", 1],
      ["-", "Endurance", 1]
    ]

  },
  {
    "name": "Avid Learner",
    "description": "The wasteland will teach you some hard lessons, but you've got enough gray matter to retain it all.  You gain +1% to earned experience per level gained. (For example, +25% experience at level 25.)",
    "is_playable": false,
    "is_trait": false,
    "id": "67158614",
    "edid": "NVDLC04LessonsLearnedPerk",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Heavyweight",
    "description": "Have you been working out? Weapons heavier than 10 lbs. now weigh half as much for you. (Modified weapons that drop below 10 lbs. will not gain this benefit.)",
    "is_playable": true,
    "is_trait": false,
    "id": "16847976",
    "edid": "NVDLC01HeavyWeight",
    "requirements": [
      [">=", "Level", 8],
      ["or", [">=", "Strength", 7], [">=", "Endurance", 7]]
    ]
  },
  {
    "name": "Congenital Heart Defect",
    "description": "You suffer from a heart condition that causes you to take constant health and chest damage during the entire duration of Buffout, Slasher, Psycho, Turbo, Rebound, Steady, Super Stimpaks, Hydra, or Party Time Mentats.\n\n\n\nHowever, suffering from this adversity has taught you a thing or two. (You will be able to select another perk immediately.)",
    "is_playable": false,
    "is_trait": true,
    "id": "50355187",
    "edid": "ELYFlawCongenitalHeartDefect"
  },
  {
    "name": "Hemophiliac",
    "description": "You have a condition that prohibits proper blood clotting; you have a chance to suffer damage anytime your health is below 90%.\n\nHowever, this difficulty has shown you one of your other latent talents. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355195",
    "edid": "ELYFlawHemophiliac",
    "requirements": [
      ["<", "Endurance", 4]
    ]
  },
  {
    "name": "Delicate",
    "description": "You've never been much good in a fight, you always seem to hit the mat before your opponent does. You've lost 50% of your base health, but you've learned about the more subtle ways of life.  (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355197",
    "edid": "ELYFlawDelicate",
    "requirements": [
      ["<", "Endurance", 3]
    ]
  },
  {
    "name": "Over-Compensation",
    "description": "Fawkes' love for heavy weapons is infectious. With Fawkes in your party, weapon strength requirements are 1 point lower for you.",
    "is_playable": false,
    "is_trait": false,
    "id": "184581787",
    "edid": "TTWFollowerPerkFawkes"
  },
  {
    "name": "This Is A Knife 1",
    "description": "Your enemy's crit chance is reduced by 20% and you gain +5 DT when you guard with a combat knife, bowie knife, or machete. The DT bonus doubles if your target is also wielding any handheld bladed weapon.\n\n\n\nThe second rank grants +10% attack speed and +15% damage with combat knives, bowie knives, and machetes.",
    "is_playable": true,
    "is_trait": false,
    "id": "285299006",
    "edid": "sssPerkThisIsAKnife",
    "requirements": [
      [">=", "Level", 12],
      ["has perk", "That's Not A Knife"],
      [">=", "Strength", 6],
      [">=", "Agility", 7],
      [">=", "Melee Weapons", 60]
    ]
  },
  {
    "name": "This Is A Knife 2",
    "description": "Your enemy's crit chance is reduced by 20% and you gain +5 DT when you guard with a combat knife, bowie knife, or machete. The DT bonus doubles if your target is also wielding any handheld bladed weapon.\n\n\n\nThe second rank grants +10% attack speed and +15% damage with combat knives, bowie knives, and machetes.",
    "is_playable": true,
    "is_trait": false,
    "id": "285299006",
    "edid": "sssPerkThisIsAKnife",
    "requirements": [
      [">=", "Level", 12],
      ["has perk", "That's Not A Knife"],
      [">=", "Strength", 6],
      [">=", "Agility", 7],
      [">=", "Melee Weapons", 60]
    ]
  },
  {
    "name": "Return To Ashes",
    "description": "Your flames burn hotter than anyone else's! You gain +50% damage when you and your enemy are both using fire-based weapons.",
    "is_playable": true,
    "is_trait": false,
    "id": "285299009",
    "edid": "sssPerkReturnToAshes",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Endurance", 7],
      ["or", [">=", "Energy Weapons", 50], [">=", "Explosives", 50]]
    ]
  },
  {
    "name": "Stonewall",
    "description": "You gain +1 Damage Threshold against all Melee Weapons and Unarmed attacks per point in Endurance, and immunity to knockdowns.",
    "is_playable": true,
    "is_trait": false,
    "id": "1463369",
    "edid": "Stonewall",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Endurance", 7],
      [">=", "Strength", 7]
    ]
  },
  {
    "name": "Thought You Died",
    "description": "Your storied past has fallen from memory 'cause everyone thought you died. Your Karma is reset, you inflict +10% damage, and for every 100 points of Karma, you gain 10 Health. You are also immune to critical hits. (Requires Good Karma.)",
    "is_playable": true,
    "is_trait": false,
    "id": "16826958",
    "edid": "NVDLC04ThoughtYouForDeadPerk",
    "requirements": [
      [">=", "Level", 50]
    ]
  },
  {
    "name": "Science Bobblehead",
    "description": "Always be prepared to explain the hows and the whys.\n\n\n\nYou now do 10% more damage to robots.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362674",
    "edid": "TTWBobbleheadPerkScience"
  },
  {
    "name": "Reinforced Spine",
    "description": "Your spine is back in your body, but some advance technologies remain: Your torso can now be crippled again, but your Strength (STR) and Damage Threshold (DT) bonuses have doubled! (+2)",
    "is_playable": false,
    "is_trait": false,
    "id": "16866236",
    "edid": "NVDLC03ReinforcedSpinePerk",
    "effects": [
      ["+", "Strength", 2]
    ]

  },
  {
    "name": "Spineless",
    "description": "Your spine has been replaced with advanced technologies: Your torso can no longer be crippled and your Strength (STR) and Damage Threshold (DT) have been increased (+1).",
    "is_playable": false,
    "is_trait": false,
    "id": "16816316",
    "edid": "NVDLC03SpinelessPerk",
    "effects": [
      ["+", "Strength", 1]
    ]

  },
  {
    "name": "Solar Powered",
    "description": "With the Solar Powered trait, you gain an additional point in Strength, Agility, and Endurance while in sunlight, but you suffer -1 to these stats while indoors or during the night.",
    "is_playable": true,
    "is_trait": true,
    "id": "204229",
    "edid": "SolarPowered",
    "requirements": [
      ["not", ["has perk", "Night Person"]]
    ]
  },
  {
    "name": "Rip N' Tear",
    "description": "Until it is done. Violence is the only way. You've gained +2 Strength and +5 Unarmed, but -2 to Charisma and -5 to Speech, Barter, Science, and Sneak.",
    "is_playable": true,
    "is_trait": true,
    "id": "100677968",
    "edid": "RipNTear",
    "requirements": [
      ["not", ["has perk", "Good Natured"]]
    ],
    "effects": [
      ["-", "Charisma", 2],
      ["-", "Speech", 5],
      ["-", "Barter", 5],
      ["-", "Sneak", 5],
      ["-", "Science", 5],
      ["+", "Unarmed", 5],
      ["+", "Strength", 2]
    ]

  },
  {
    "name": "Assassin's Step",
    "description": "Stealth and discretion come second nature to you, but due to your... suspicious demeanor, people really lock onto you as soon as you've been spotted. You gain +10 Sneak, +8% run speed, and 12.5% improved AP cost and regen while sneaking and undetected, but you suffer an inverse penalty to those stats while detected.\n\n(Requires tag skill: Sneak)",
    "is_playable": true,
    "is_trait": true,
    "id": "285328493",
    "edid": "sssPerkAssassinsStep",
    "requirements": [
      ["<", "Charisma", 5],
      [">=", "Agility", 7],
      ["tagged", "Sneak"]
    ]
  },
  {
    "name": "Auto Axpert",
    "description": "You've become an expert with the Auto Axe. You do +25% damage whenever you use it. Vroom.",
    "is_playable": false,
    "is_trait": false,
    "id": "134247400",
    "edid": "DLC01AutoAxpert"
  },
  {
    "name": "A Trained Mind",
    "description": "With your newly extensively trained mind, after reading five magazines, you gain one permanent skill point in that respective skill.",
    "is_playable": false,
    "is_trait": false,
    "id": "83911069",
    "edid": "Vault76ATrainedMindPerk"
  },
  {
    "name": "Sexy Six Shooter",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302405238",
    "edid": "TeraPerk"
  },
  {
    "name": "Light Step",
    "description": "ED-E doesn't set off mines. Text translation not needed.",
    "is_playable": false,
    "is_trait": false,
    "id": "67163363",
    "edid": "NVDLC04EDENoMines"
  },
  {
    "name": "Hoarder",
    "description": "You gain +20% carry weight, but suffer -1 to all SPECIAL stats when carrying less than 160 lbs.",
    "is_playable": true,
    "is_trait": true,
    "id": "50407277",
    "edid": "NVDLC03TraitHoarder"
  },
  {
    "name": "Gray Matters",
    "description": "Protect what's important.  With the Gray Matters perk you'll receive 25% less damage when hit in the head.",
    "is_playable": false,
    "is_trait": false,
    "id": "167825917",
    "edid": "DLC04GrayMatters"
  },
  {
    "name": "Igne Natura Renovatur Integra",
    "description": "200 years after the Great War, two lone nuclear missiles were launched. Not aimed at another country, but at their own land, targeting the last vestiges of civilization, a wicked punishment for their audacity to grow and thrive in this desolate wasteland. You deal +20% damage and +10% critical damage when attacking any members of the NCR or Legion while your karma is Bad or Very Bad.",
    "is_playable": false,
    "is_trait": false,
    "id": "67158618",
    "edid": "NVDLC04DeadMansBurdenPerk"
  },
  {
    "name": "Rigorous Self Critique",
    "description": "Your hands may not be clean, but with lots of soap and a change in behavior, you can wash away your past to start anew. (Requires Evil Karma)\n\n\n\n+1/2 Strength while Good/Very Good.\n\n-2 Endurance while Bad/Very Bad.\n\n-Your XP will be penalized whenever you lose karma, in an amount equal to the magnitude of the change multiplied by your Intelligence.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333739",
    "edid": "ELYPerkRigorousSelfCritique",
    "requirements": [
      [">=", "Level", 8]
    ]
  },
  {
    "name": "Boozer",
    "description": "When under the effects of alcohol, your addiction duration is halved, and prices are reduced by 10%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285223190",
    "edid": "sssPerkBoozer",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Endurance", 6],
      ["<", "Intelligence", 6]
    ]
  },
  {
    "name": "Native Swim Speed",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302214876",
    "edid": "PerkNativeSwimSpeed"
  },
  {
    "name": "Full Frontal",
    "description": "You've gained +5% damage when targeting swampfolk heads in VATS, and recieve -10% limb damage in combat with them!",
    "is_playable": false,
    "is_trait": false,
    "id": "302130635",
    "edid": "PerkSwampfolkHeadDamage"
  },
  {
    "name": "Cola Comrade",
    "description": "Sunset Sarsaparilla may be nice, but when you need that kick, Cola is the only thing that cuts it. When you drink Nuka-Colas, you gain +4% crit chance for two minutes. Special variants can also provide you extra permanent max health, carry weight, AP, or random skill bonuses.",
    "is_playable": true,
    "is_trait": false,
    "id": "301991937",
    "edid": "sssPerkKolaKomrade",
    "requirements": [
      [">=", "Level", 8]
    ]
  },
  {
    "name": "Paranoid",
    "description": "You're so obsessed with what's going on behind the scenes that it often hinders your critical thought about what's right in front of you. You've lost -2 Intelligence.\n\n\n\nHowever, you were on to something with your suspicions. (You will be able to select another perk immediately.)",
    "is_playable": false,
    "is_trait": false,
    "id": "50355190",
    "edid": "ELYFlawParanoid",
    "requirements": [
      [">", "Intelligence", 2]
    ],
    "effects": [
      ["-", "Intelligence", 2]
    ]

  },
  {
    "name": "RL3 IS OP",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444106",
    "edid": "PerkRL3"
  },
  {
    "name": "Virtue Through Adversity",
    "description": "Through trials and tribulations, your heart always becomes centered on the path of righteousness. While your karma is above neutral, for every 10 XP you gain, your positive karma increases by one point.",
    "is_playable": false,
    "is_trait": false,
    "id": "50405718",
    "edid": "ELYPerkVirtueThroughAdversity"
  },
  {
    "name": "Sarcopenic",
    "description": "Your muscular inadequacy results in weapons with a base or modified weight of 10 lbs. or more weighing you down 2.5x as much, but don't despair - you excel in other ways!\n\n(You will be able to take another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50419483",
    "edid": "ELYFlawSarcopenic",
    "requirements": [
      ["<", "Strength", 5]
    ]
  },
  {
    "name": "Suffer Well",
    "description": "You're so delighted by laughing in the face of death that pain has become your greatest teacher. Whenever you lose health, you gain XP equal to the magnitude of health loss, multiplied by your Intelligence/100.",
    "is_playable": true,
    "is_trait": false,
    "id": "50427133",
    "edid": "ELYPerkSufferWell",
    "requirements": [
      [">=", "Level", 10],
      ["has perk", "Last Laugh"]
    ]
  },
  {
    "name": "Nuclear Anomaly",
    "description": "With the Nuclear Anomaly perk, whenever your Health is reduced to 20 or less, you will erupt into a devastating nuclear explosion. Note that any allies in the vicinity will also suffer the effects of the blast!",
    "is_playable": true,
    "is_trait": false,
    "id": "151014508",
    "edid": "DLC03NuclearAnomaly",
    "requirements": [
      [">=", "Level", 50]
    ]
  },
  {
    "name": "Sierra Sense",
    "description": "You can hear directional audio cues from particularly valuable items in the Sierra Madre.",
    "is_playable": false,
    "is_trait": false,
    "id": "167850307",
    "edid": "sDMPerkSonar",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Karma Chameleon",
    "description": "Karma Chameleon allows you to switch to a karmic alignment of your choice once per level, at cost of the XP progress that you have made toward your next level.\n\nTo use this ability, press activate with Karma Chameleon selected in your Pip-Boy.",
    "is_playable": false,
    "is_trait": true,
    "id": "50428668",
    "edid": "ELYPerkKarmaChameleon"
  },
  {
    "name": "4DStorageMark4Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "218593607",
    "edid": "AW4DStorageMark4Perk"
  },
  {
    "name": "Strength Implant",
    "description": "Your muscle mass has been enhanced with the Hypertrophy Accelerator, increasing your Strength by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "1359977",
    "edid": "ImplantStrengthPerk",
    "effects": [
      ["+", "Strength", 1]
    ]

  },
  {
    "name": "Walker Instinct",
    "description": "Your senses have become so keen that you can feel the slightest vibration in the ground. You gain +1 Perception and Agility attributes while outside.",
    "is_playable": true,
    "is_trait": false,
    "id": "16826964",
    "edid": "NVDLC04WalkerInstinctPerk",
    "requirements": [
      [">=", "Level", 18],
      [">=", "Survival", 50]
    ]
  },
  {
    "name": "Handgun Hotshot 1",
    "description": "The Handgun Hotshot perk grants 5 DT penetration to ballistic handguns and 15% attack speed with non-automatic, ballistic handguns.\n\nThe second rank grants an additional +20% damage, at cost of increasing strength requirements by 1.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214726",
    "edid": "sssPerkHandgunHotshot",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Strength", 6],
      ["or", [">=", "Guns", 40], [">=", "Big Guns", 40]]
    ]
  },
  {
    "name": "Handgun Hotshot 2",
    "description": "The Handgun Hotshot perk grants 5 DT penetration to ballistic handguns and 15% attack speed with non-automatic, ballistic handguns.\n\nThe second rank grants an additional +20% damage, at cost of increasing strength requirements by 1.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214726",
    "edid": "sssPerkHandgunHotshot",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Strength", 6],
      ["or", [">=", "Guns", 40], [">=", "Big Guns", 40]]
    ]
  },
  {
    "name": "Nerd Rage!",
    "description": "You've been pushed around long enough! Whenever your health drops below 20%, enemy crit. chance is reduced by 10% for each point of Intelligence you have.",
    "is_playable": true,
    "is_trait": false,
    "id": "281767",
    "edid": "NerdRage",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Science", 75]
    ]
  },
  {
    "name": "Desperado",
    "description": "You're a true desperado with impeccable precision. When using a cowboy weapon, you gain a crit. chance bonus that scales with your Perception (1% per point), an additional 3% crit. chance bonus if you're alone and facing more than three enemies at once, and you deal +20% damage against targets using ranged cowboy weapons.",
    "is_playable": true,
    "is_trait": false,
    "id": "285340374",
    "edid": "sssPerkDesperado",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Perception", 7]
    ]
  },
  {
    "name": "Extracurricular Knowledge",
    "description": "Selecting Extracurricular Knowledge will allow you to save a perk point for later, but you will be forced to take a new trait. This can be done multiple times.\n\nYour perk point can be used by activating this perk in the Pip-Boy.",
    "is_playable": true,
    "is_trait": false,
    "id": "204204",
    "edid": "HereandNow",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Intelligence Implant",
    "description": "Your cerebral cortex has been enhanced with the Logic Co-Processor, increasing your Intelligence by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "1360178",
    "edid": "ImplantIntelligencePerk",
    "effects": [
      ["+", "Intelligence", 1]
    ]

  },
  {
    "name": "Speech Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332748",
    "edid": "sssPerkTaggedSpeech"
  },
  {
    "name": "Applied Ballistics",
    "description": "Your experience with conventionally sized weaponry has taught you fundamental skills that can be applied to more powerful weapons. You've gained +25 Big Guns.",
    "is_playable": true,
    "is_trait": false,
    "id": "285352994",
    "edid": "sssPerkAppliedBallistics",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Strength", 7],
      [">=", "Intelligence", 5],
      ["or", [">=", "Guns", 60], [">=", "Explosives", 60]]
    ],
    "effects": [
      ["+", "Big Guns", 25]
    ]

  },
  {
    "name": "Whack-A-Mole",
    "description": "There's something deeply irritating about those people hiding behind walls, popping their head to fire some bullets at you. When you strike people armed with ranged weapons, you get a 20 % damage bonus to your blunt weapon attacks.",
    "is_playable": false,
    "is_trait": false,
    "id": "16982815",
    "edid": "ALWhackAMole",
    "requirements": [
      [">=", "Strength", 7],
      [">=", "Melee Weapons", 90]
    ]
  },
  {
    "name": "Friend of the Night",
    "description": "You are a true friend of the night. Your eyes adapt quickly to low-light conditions indoors and when darkness falls across the wasteland.",
    "is_playable": true,
    "is_trait": false,
    "id": "1462552",
    "edid": "FriendOfTheNight",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Perception", 7],
      ["or", [">=", "Sneak", 40], [">=", "Survival", 40]]
    ]
  },
  {
    "name": "Miss Fortune",
    "description": "Just when your enemies think they have the upper hand, Miss Fortune appears to turn their world upside down. Appearing only in V.A.T.S., she has the ability to grant defeat in the face of victory - at the cost of 15% crit chance.",
    "is_playable": true,
    "is_trait": true,
    "id": "1275904",
    "edid": "MissFortunePerk",
    "requirements": [
      [">=", "Luck", 6]
    ]
  },
  {
    "name": "Elijah's Montresor",
    "description": "Elijah is now trapped in the vault, with the treasure that he coveted for so long. You, however, are free to begin again. You gain +30% XP and 2 skill points per level, so long as you're outdoors and carry less than 75% of your maximum carry weight.\n\nIn pace requiescat, Elijah.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328510",
    "edid": "sssPerkDeadMoneyTrapped",
    "requirements": [
      [">=", "Level", 20],
      ["not", ["has perk", "The Ties That Bind"]],
      ["not", ["has perk", "Survivor's Guilt"]]
    ]
  },
  {
    "name": "Pyromaniac",
    "description": "With the Pyromaniac perk, you do +50% damage with fire-based weapons, like the Flamer and Shishkebab.",
    "is_playable": true,
    "is_trait": false,
    "id": "204210",
    "edid": "Pyromaniac",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Energy Weapons", 60]
    ]
  },
  {
    "name": "Heart-full",
    "description": "Your body once again pumps with blood and passion. Your Barter and Speech skills have increased by 5. And your ability to shoot an enemy's heart has increased (+10% VATS to the torso).",
    "is_playable": false,
    "is_trait": false,
    "id": "16866226",
    "edid": "NVDLC03HeartfullPerk"
  },
  {
    "name": "Thought You Died",
    "description": "Your storied past has fallen from memory 'cause everyone thought you died. Your Karma is reset, you inflict +15% damage against Evil or Very Evil characters, as well as being 25% less susceptible to their critical hits, and you gain +50 Health. (Requires Good Karma.)",
    "is_playable": true,
    "is_trait": false,
    "id": "67158606",
    "edid": "NVDLC04ThoughtYouForDeadPerk",
    "requirements": [
      [">=", "Level", 50],
      ["not", ["has perk", "Just Lucky I'm Alive"]],
      ["not", ["has perk", "Ain't Like That Now"]]
    ]
  },
  {
    "name": "Intelligence Bobblehead",
    "description": "It takes the smartest individuals to realize there's always more to learn.\n\n\n\nYou now gain +10% XP!",
    "is_playable": false,
    "is_trait": false,
    "id": "268471527",
    "edid": "TTWBobbleheadPerkIntelligence"
  },
  {
    "name": "Over-Compensation",
    "description": "Fawkes' love for heavy weapons is infectious. With Fawkes in your party, Big Guns strength requirement is lowered by 2, and they do 10% more damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359003",
    "edid": "TTWFollowerPerkFawkes"
  },
  {
    "name": "Balanced Load",
    "description": "You're experienced with leverage and fulcrums. With a little attention to the finer details, you've gained +10% carry weight, which increases to 15% when your weapon is holstered.",
    "is_playable": true,
    "is_trait": false,
    "id": "285315834",
    "edid": "sssPerkBalancedLoad",
    "requirements": [
      [">=", "Level", 2],
      ["or", [">=", "Strength", 6], [">=", "Perception", 6], [">=", "Endurance", 6]]
    ]
  },
  {
    "name": "Strong Swimmer",
    "description": "You're practically an irradiated mako shark! While not wearing power armor, you gain bonus swim speed based on your armor class, up to a maximum of +25%. This bonus is reduced by 5% for medium and heavy armors while diving.",
    "is_playable": true,
    "is_trait": false,
    "id": "285252703",
    "edid": "sssPerkStrongSwimmer",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Strength", 4],
      [">=", "Endurance", 4],
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Prohibition",
    "description": "They're still out there. Looking for booze... Your booze. You're not sure who \"they\" are, the only way they'll take it is from your cold, dead hands!\n\n\n\n-1 Intelligence while under the effects of alcohol.\n\n+10 Barter while under the effects of alcohol.\n\n+10 Barter while holding 10 or more bottles of alcohol.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333712",
    "edid": "ELYPerkProhibition",
    "requirements": [
      [">=", "Level", 2],
      ["<", "Perception", 6],
      ["<", "Intelligence", 6]
    ]
  },
  {
    "name": "Tenacious",
    "description": "You've been bruised and scraped enough times to know how to give it your all when wounded. You gain improved movement speed with a crippled leg, improved gun spread with a crippled arm, +2 Endurance with a crippled torso, and improved chance to hit in V.A.T.S. with a crippled head.",
    "is_playable": true,
    "is_trait": false,
    "id": "285227442",
    "edid": "sssPerkTenacious",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Endurance", 7],
      [">=", "Luck", 3],
      [">=", "Survival", 50]
    ]
  },
  {
    "name": "Desert Rose",
    "description": "You're a beautiful soul, in a desolate place.\n\n\n\n-Your Endurance is reduced by 1.\n\n-Enemy crit. chance is doubled while your health is below 50%.\n\n+Your Charisma is increased by 2 while your health is above 50%.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333719",
    "edid": "ELYPerkDesertRose",
    "requirements": [
      ["<", "Endurance", 5],
      [">=", "Charisma", 6]
    ],
    "effects": [
      ["-", "Endurance", 1]
    ]

  },
  {
    "name": "Possessed",
    "description": "The spirits walk with you, guiding you in unforeseeable ways.\n\nYou randomly gain and lose small stat bonuses and penalties, but the guidance of the spirits has taught you how to persevere in the wasteland. (You will be able to select another perk immediately.)",
    "is_playable": false,
    "is_trait": true,
    "id": "50355208",
    "edid": "ELYFlawPossessed"
  },
  {
    "name": "Regular Maintenance",
    "description": "While Raul is a companion, the condition of weapons and armor decays more 12.5% slower.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426960",
    "edid": "RegularMaintenance"
  },
  {
    "name": "Terrifying Presence",
    "description": "In some conversations, you gain the ability to initiate combat while terrifying your opponents, sending them fleeing away for safety and enemy crit. chance is also reduced by 5% for each point that your Charisma is below 5, but you suffer -1 Charisma and -5 Speech.",
    "is_playable": true,
    "is_trait": true,
    "id": "1099469",
    "edid": "NVTerrifyingPresence",
    "requirements": [
      ["<", "Charisma", 5]
    ],
    "effects": [
      ["-", "Speech", 5],
      ["-", "Charisma", 1]
    ]

  },
  {
    "name": "Medical History",
    "description": "Your expertly-trained eyes detect all of your victims medical history. Including those painful decades-old badly-healed fractures. (+10 % Damage to limbs while in VATS)",
    "is_playable": false,
    "is_trait": false,
    "id": "16984292",
    "edid": "ALMedicalHistory",
    "requirements": [
      [">=", "Guns", 70]
    ]
  },
  {
    "name": "Radiation Renegade",
    "description": "Why forgo radiation protection in favor of damage protection when you could have both? While wearing a radiation suit, you gain the following benefits:\n\n\n\n+10% carry weight\n\n+10 DT/+20% DR\n\n+25 AP\n\n-20% limb damage\n\n-25% enemy crit. chance\n\n\n\nYou also don't suffer a sneaking detection penalty while running!",
    "is_playable": true,
    "is_trait": false,
    "id": "285269531",
    "edid": "sssPerkRadiationRenegade",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Science", 50]
    ]
  },
  {
    "name": "Doom Spiral",
    "description": "Oh no! This is the start of it all! As your health decreases, any hit, no matter how severe, has an increasing chance to instantly kill you. (-1% health = +1% chance)\n\nHowever, your all-or-nothing attitude grants you a particular clarity about overcoming adversity. (You will gain another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50333715",
    "edid": "ELYPerkDoomSpiral",
    "requirements": [
      ["<", "Perception", 7]
    ]
  },
  {
    "name": "Decentralized Circulation",
    "description": "Radiation has begun to provide you with some vaguely... arthropoid mutations. \n\n\n\n+Your circulation has become decentralized. You take 80% less limb damage.\n\n-When your peripheral limbs are crippled, your bleeding is catastrophic. You suffer -1 HP per second for each non-chest limb that is crippled.",
    "is_playable": true,
    "is_trait": true,
    "id": "50375119",
    "edid": "ELYPerkDecentralizedCirculation",
    "requirements": [
      [">=", "Endurance", 3]
    ]
  },
  {
    "name": "Blithe Spirit",
    "description": "While Hope is a companion, you will gain +15% damage resistance for 15 seconds after you are hit.",
    "is_playable": false,
    "is_trait": false,
    "id": "302027504",
    "edid": "aaaHopesPerk"
  },
  {
    "name": "Dance of Death",
    "description": "Through your practice of parrying melee attacks, you've learned the best defender knows how to reposition swiftly. Time has small chance to slow down after sucessfully parrying a melee attack.",
    "is_playable": false,
    "is_trait": false,
    "id": "16802744",
    "edid": "cdrParryTurbo"
  },
  {
    "name": "Rookie Cop",
    "description": "You may be 200 years late for the Sierra Madre's grand opening, but the task of cleaning up these streets has still fallen to you. While using police weapons, you have -20% spread while standing still, but +10% while moving, as well as +15% damage, but -10% attack speed. While wearing police armors or clothing, you gain +10% reload speed while not running, and +5 DT.\n\n\n\nCan only be taken before level 16.",
    "is_playable": false,
    "is_trait": false,
    "id": "167835720",
    "edid": "sDMPerkRookieCop"
  },
  {
    "name": "Sneak Bobblehead",
    "description": "The safest distance between two points is a shadowy line.\n\n\n\nYour sneak attack criticals now do 10% more damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362675",
    "edid": "TTWBobbleheadPerkSneak"
  },
  {
    "name": "Better Healing",
    "description": "While Arcade is a companion, the amount of health you recover from items is increased by 20%.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426955",
    "edid": "BetterHealing"
  },
  {
    "name": "Unarmed Bobblehead",
    "description": "When words fail, there's always fists.\n\n\n\nYour unarmed attacks now do double damage against blocking opponents.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362678",
    "edid": "TTWBobbleheadPerkUnarmed"
  },
  {
    "name": "Vain",
    "description": "You're obsessed with perfection of your appearance. You gain +1 Charisma and Luck while your health is above 90%, but suffer -2 while your health is below 90%.",
    "is_playable": true,
    "is_trait": true,
    "id": "285227445",
    "edid": "sssPerkVain"
  },
  {
    "name": "Notorious E.V.I.L.",
    "description": "While you are Evil or Very Evil, Miss Fortune and the Mysterious Stranger will appear to help you twice as often (Requires Evil Karma).",
    "is_playable": true,
    "is_trait": false,
    "id": "285235870",
    "edid": "sssPerkNotoriousEVIL",
    "requirements": [
      [">=", "Level", 16],
      ["or", ["has perk", "Miss Fortune"], ["has perk", "Mysterious Stranger"]]
    ]
  },
  {
    "name": "No Weakness",
    "description": "When you take the No Weakness perk, all S.P.E.C.I.A.L. stats that are less than 5 are instantly increased to 5.",
    "is_playable": true,
    "is_trait": false,
    "id": "150999182",
    "edid": "DLC03NoWeakness",
    "requirements": [
      [">=", "Level", 44],
      ["or", ["<", "Agility", 5], ["<", "Charisma", 5], ["<", "Endurance", 5], ["<", "Intelligence", 5], ["<", "Luck", 5], ["<", "Perception", 5], ["<", "Strength", 5]]
    ]
  },
  {
    "name": "Taste of Life",
    "description": "Aqua Pura tastes like life.",
    "is_playable": false,
    "is_trait": false,
    "id": "201426391",
    "edid": "TTWTasteofLifeChallengePerk"
  },
  {
    "name": "Thief 1",
    "description": "With each rank of the Thief perk, you gain +5 Sneak and +5% pickpocket chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "100867542",
    "edid": "Thief",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6],
      [">=", "Sneak", 25]
    ],
    "effects": [
      ["+", "Sneak", 5],
      ["+", "Sneak", 10],
      ["+", "Sneak", 15]
    ]

  },
  {
    "name": "Thief 2",
    "description": "With each rank of the Thief perk, you gain +5 Sneak and +5% pickpocket chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "100867542",
    "edid": "Thief",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6],
      [">=", "Sneak", 25]
    ],
    "effects": [
      ["+", "Sneak", 5],
      ["+", "Sneak", 10],
      ["+", "Sneak", 15]
    ]

  },
  {
    "name": "Thief 3",
    "description": "With each rank of the Thief perk, you gain +5 Sneak and +5% pickpocket chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "100867542",
    "edid": "Thief",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6],
      [">=", "Sneak", 25]
    ],
    "effects": [
      ["+", "Sneak", 5],
      ["+", "Sneak", 10],
      ["+", "Sneak", 15]
    ]

  },
  {
    "name": "Tunnel Snakes Rule",
    "description": "Butch is a gang member at heart, and he does better with a sense of belonging. While Butch is in your party, you both gain +5% Damage if he is using the same weapon as you, and you both gain +5% DR if he is using the same armor as you, with an extra +5% DR if they are Tunnel Snake outfits.",
    "is_playable": false,
    "is_trait": false,
    "id": "201363593",
    "edid": "TTWFollowerPerkButchFollower"
  },
  {
    "name": "Head Trauma",
    "description": "You've been catastrophically wounded, but you have the tenacity to push on through. Your health recovery, weapon spread, attack, reload, run and equip speed, AP recovery speed, and aiming movement speed have been reduced.\n\nThese penalties reduce as you recover from your injury.",
    "is_playable": false,
    "is_trait": false,
    "id": "302000352",
    "edid": "PerkHumbledHeadTrauma"
  },
  {
    "name": "Collective Consciousness",
    "description": "You're a master of manipulation. As you gain positive reputation with each faction, your Speech increases by +2 for each faction that likes you, and your barter purchase prices are also reduced by 2% each if your karma is Evil or Very Evil.",
    "is_playable": true,
    "is_trait": false,
    "id": "285294784",
    "edid": "sssPerkCollectiveConsciousness",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Charisma", 6]
    ]
  },
  {
    "name": "Well Rested",
    "description": "After sleeping in a safe bed, you will wake well rested. You earn 5% more experience points for several hours.",
    "is_playable": false,
    "is_trait": false,
    "id": "399394",
    "edid": "WellRestedPerk"
  },
  {
    "name": "Party Girl",
    "description": "You are such a Party Girl that you no longer suffer the withdrawal effect from alcohol addiction.",
    "is_playable": true,
    "is_trait": false,
    "id": "150999488",
    "edid": "DLC03PartyGirl",
    "requirements": [
      [">=", "Level", 28]
    ]
  },
  {
    "name": "Monocyte Breeder",
    "description": "Your regenerative ability has been enhanced by the PHOENIX Monocyte Breeder implant, causing you to slowly regenerate lost hit points.",
    "is_playable": false,
    "is_trait": false,
    "id": "1363169",
    "edid": "ImplantRegenPerk"
  },
  {
    "name": "Sniper",
    "description": "With the Sniper perk, your chance to hit an opponent's head in V.A.T.S. is increased by 25%, and your crit. chance is increased by 25% while using a scope and crouched.",
    "is_playable": true,
    "is_trait": false,
    "id": "204212",
    "edid": "Sniper",
    "requirements": [
      [">=", "Level", 28],
      [">=", "Perception", 8],
      ["or", [">=", "Guns", 75], [">=", "Energy Weapons", 75], [">=", "Big Guns", 75]]
    ]
  },
  {
    "name": "Headhunter 1",
    "description": "You take your time to ensure that your bullets will land right between your target's eyes. You gain +25% chance to hit your target's head in V.A.T.S., at cost of 50% increased AP cost. The second rank increases your crit. damage while attacking your target's head in V.A.T.S. by 15%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285261114",
    "edid": "sssPerkHeadhunter",
    "requirements": [
      [">=", "Level", 28],
      [">=", "Perception", 8],
      ["or", [">=", "Guns", 75], [">=", "Energy Weapons", 75], [">=", "Big Guns", 75]]
    ]
  },
  {
    "name": "Headhunter 2",
    "description": "You take your time to ensure that your bullets will land right between your target's eyes. You gain +25% chance to hit your target's head in V.A.T.S., at cost of 50% increased AP cost. The second rank increases your crit. damage while attacking your target's head in V.A.T.S. by 15%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285261114",
    "edid": "sssPerkHeadhunter",
    "requirements": [
      [">=", "Level", 28],
      [">=", "Perception", 8],
      ["or", [">=", "Guns", 75], [">=", "Energy Weapons", 75], [">=", "Big Guns", 75]]
    ]
  },
  {
    "name": "Power Armored",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302004724",
    "edid": "PerkPowerArmor"
  },
  {
    "name": "Jewel of the Desert",
    "description": "When you're on The Strip, all you see are smiles and glittery eyes, gleaming in the reflection of the most precious gem in the wastes. Your efforts to glorify The Strip have granted you +10% XP, -10% addiction chance, and +1 Luck while you have more than 10k in caps, as well as a few friends to help you in VATS, who will show up more often if you have more than 20k in caps.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556495",
    "edid": "PerkFacStrip",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Architect",
    "description": "Look at all those glorious buildings, left to ruin and decay, buried in the dessicated husk of humanity.\n\n\n\n-Your XP gain is halved while outdoors.\n\n+You gain +1 skill point upon level up while indoors equal to half of your Intelligence, rounded down.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333706",
    "edid": "ELYPerkArchitect"
  },
  {
    "name": "Law-Jaw",
    "description": "Every time you say I am the Law - and you say it *a lot*, it's basically *hello* for you - your jaw does this *weird thing*. It sort of shifts sideways, hanging off your face at a jaunty angle, while the word *law* sounds oddly guttural and low. It's... strange. Maybe it's a side effect of getting shot in the head by ol' Benny, but it sure helps with intimidation.\n\n\n\n-15 Speech.\n\n+5% improved prices while at Good Karma.\n\n+10% improved prices while at Very Good Karma.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333726",
    "edid": "ELYPerkLawJaw",
    "requirements": [
      ["<", "Intelligence", 5],
      [">=", "Guns", 45]
    ],
    "effects": [
      ["-", "Speech", 15]
    ]

  },
  {
    "name": "Slayer 1",
    "description": "The slayer walks the earth! Each rank of the Slayer perk increases the speed of all your Melee Weapons and Unarmed attacks by 20%.",
    "is_playable": true,
    "is_trait": false,
    "id": "1463366",
    "edid": "Slayer",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Agility", 7],
      [">=", "Strength", 7],
      ["or", [">=", "Unarmed", 70], [">=", "Melee Weapons", 70]]
    ]
  },
  {
    "name": "Slayer 2",
    "description": "The slayer walks the earth! Each rank of the Slayer perk increases the speed of all your Melee Weapons and Unarmed attacks by 20%.",
    "is_playable": true,
    "is_trait": false,
    "id": "1463366",
    "edid": "Slayer",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Agility", 7],
      [">=", "Strength", 7],
      ["or", [">=", "Unarmed", 70], [">=", "Melee Weapons", 70]]
    ]
  },
  {
    "name": "Barter Bobblehead",
    "description": "Never forget to walk away with more than you've brought.\n\n\n\nItems you buy now cost 5% less.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362666",
    "edid": "TTWBobbleheadPerkBarter"
  },
  {
    "name": "Indirect Bartering",
    "description": "You're not actually threatening any violence, but anybody with a pair of eyes can tell that you could if you chose to. You gain +1 to Barter and Speech for each point of STR while your Karma is Evil or Very Evil.",
    "is_playable": true,
    "is_trait": false,
    "id": "285223211",
    "edid": "sssPerkIndirectBartering",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Strength", 6]
    ]
  },
  {
    "name": "Kamikaze",
    "description": "You gain +25% run speed while in combat and below 50% health, but you also have -5 DT while those conditions are met.",
    "is_playable": true,
    "is_trait": true,
    "id": "1269509",
    "edid": "Kamikaze",
    "requirements": [
      ["<", "Intelligence", 5]
    ]
  },
  {
    "name": "Hit the Deck",
    "description": "Your familiarity with Explosives allows you to avoid a portion of their damage. Your Damage Threshold is increased by 15 against all Explosives.",
    "is_playable": true,
    "is_trait": false,
    "id": "1462710",
    "edid": "HitTheDeck",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Explosives", 50]
    ]
  },
  {
    "name": "Eye For An Eye",
    "description": "While your head is crippled, you gain an additional 25% crit damage and crit chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "33600244",
    "edid": "NVDLC02EyeForEye",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Luck", 5]
    ]
  },
  {
    "name": "Hermit Helper",
    "description": "Staying unseen in power armor just requires a little practice, and maybe a sandstorm or two. You gain +5 Sneak while wearing power armor, and another +5 while staying still. You also gain +10% reload speed and -10% spread when using energy weapons, and +10 Survival if traveling alone.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556490",
    "edid": "PerkFacHiddenValley",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Rad Absorption",
    "description": "With the Rad Absorption perk, your radiation level dissipates by 1 point every 10 seconds.",
    "is_playable": true,
    "is_trait": false,
    "id": "928842",
    "edid": "DLC03RadAbsorption",
    "requirements": [
      [">=", "Level", 14],
      ["or", [">=", "Endurance", 7], [">=", "Survival", 50]]
    ]
  },
  {
    "name": "Run 'n Gun",
    "description": "The Run 'n Gun perk reduces spread penalties while moving by 50%.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335453",
    "edid": "RunNGun",
    "requirements": [
      [">=", "Level", 8],
      ["or", [">=", "Guns", 45], [">=", "Energy Weapons", 45], [">=", "Big Guns", 45]]
    ]
  },
  {
    "name": "Tragic Survivor",
    "description": "One by one, those that walk by your side seem to fall. Try as you might, you have failed to save two souls who shared your stride; if more are drawn to you and take up arms in your name, surely they shall fall as well. (-2 Luck and -1 Charisma while you have any companion.)\n\nHowever, their sacrifice has shown you a new truth of life in the wastes.\n\n(You will gain a new perk immediately.)",
    "is_playable": false,
    "is_trait": false,
    "id": "50395009",
    "edid": "ELYFlawTragicSurvivor"
  },
  {
    "name": "Legion Assault",
    "description": "Caesar's elite cadre of bodyguards, the legendary praetorians, use an aggressive Legion Assault to brutalize enemies. Perform a Power Attack while running forward to execute the Legion Assault.",
    "is_playable": false,
    "is_trait": false,
    "id": "1423593",
    "edid": "LegionAssault"
  },
  {
    "name": "Chem Resistant",
    "description": "With the Chem Resistant trait, your addiction chance is reduced by 25%, but so is your chem duration.",
    "is_playable": true,
    "is_trait": true,
    "id": "628775",
    "edid": "ChemResistant",
    "requirements": [
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "Implant Y-3",
    "description": "Implant Y-3 places an internal filtration system in the digestive tract that strips any liquid consumed of all radioactive particles before being processed by the body.",
    "is_playable": false,
    "is_trait": false,
    "id": "16815637",
    "edid": "NVDLC03ImplantY3Perk"
  },
  {
    "name": "The Contract",
    "description": "Charon's tenacity and his unwavering loyalty to the holder of his contract are remarkable. You've learned something from his tenacity: For each 10% health you are below maximum, you gain 1 DT.",
    "is_playable": false,
    "is_trait": false,
    "id": "184581792",
    "edid": "TTWFollowerPerkCharon"
  },
  {
    "name": "Survival Expert",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you've not only survived - you've learned a few things. You've gained +4% bonus to Poison Resistance and Radiation Resistance, and 4 points to both the Medicine and Science skills.",
    "is_playable": false,
    "is_trait": false,
    "id": "209368",
    "edid": "MS03Perk2B",
    "effects": [
      ["+", "Science", 4],
      ["+", "Medicine", 4]
    ]

  },
  {
    "name": "Ranger Takedown",
    "description": "When caught without their weapons, NCR's rangers rely on the Ranger Takedown to quickly incapacitate opponents. Perform a Power Attack while moving backwards to execute a Ranger Takedown.",
    "is_playable": false,
    "is_trait": false,
    "id": "1423592",
    "edid": "RangerTakedown"
  },
  {
    "name": "Contents Under Pressure 1",
    "description": "You're absolutely bursting at the seams with pyrotechnic pressure! While using a ranged fire-based weapon, you gain +20% attack speed, at the cost of 15% more condition damage. The second rank reduces the condition damage by 5%, and increases the attack speed bonus by 5%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285265320",
    "edid": "sssPerkContentsUnderPressure",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Explosives", 50]
    ]
  },
  {
    "name": "Contents Under Pressure 2",
    "description": "You're absolutely bursting at the seams with pyrotechnic pressure! While using a ranged fire-based weapon, you gain +20% attack speed, at the cost of 15% more condition damage. The second rank reduces the condition damage by 5%, and increases the attack speed bonus by 5%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285265320",
    "edid": "sssPerkContentsUnderPressure",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Explosives", 50]
    ]
  },
  {
    "name": "Boiadero",
    "description": "Smoking, Courier. It will take a lot of tobacco-smoking for you to become a *boiadeiro*. In these wild, uncultured times, with a gun in one hand and two unfiltered cigarettes in the other, you make your own rules.\n\n\n\n+5 Crit Chance while holding 10+ individual cigarettes.\n\n+5 Speech while holding 8+ cigarette packs.\n\n+1 Charisma while holding 5+ cigarette cartons.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333724",
    "edid": "ELYPerkBoiadero",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Charisma", 5],
      [">=", "Survival", 35]
    ]
  },
  {
    "name": "Sierra Madre Martini",
    "description": "You've learned to mix a viscous, foggy, red cocktail at any campfire, using Cloud Residue, Scotch, and an empty Whiskey, which reduces your max health and damages your chest, but grants cloud health and rad damage protection for 75 seconds.",
    "is_playable": false,
    "is_trait": false,
    "id": "16843678",
    "edid": "NVDLC01SierraMadreMartiniPerk"
  },
  {
    "name": "Daddy's Boy 1",
    "description": "Just like dear old Dad, you've devoted your time to intellectual pursuits. With each rank, hacking gets easier and you use chems 10% more effectively.",
    "is_playable": true,
    "is_trait": false,
    "id": "100944200",
    "edid": "DaddysBoy",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Daddy's Boy 2",
    "description": "Just like dear old Dad, you've devoted your time to intellectual pursuits. With each rank, hacking gets easier and you use chems 10% more effectively.",
    "is_playable": true,
    "is_trait": false,
    "id": "100944200",
    "edid": "DaddysBoy",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Daddy's Boy 3",
    "description": "Just like dear old Dad, you've devoted your time to intellectual pursuits. With each rank, hacking gets easier and you use chems 10% more effectively.",
    "is_playable": true,
    "is_trait": false,
    "id": "100944200",
    "edid": "DaddysBoy",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Weaponlexia",
    "description": "You love your weapons and your weapons love you! With this perk, they decay 20 % slower.",
    "is_playable": false,
    "is_trait": false,
    "id": "16982074",
    "edid": "ALWeaponLexiaPerk"
  },
  {
    "name": "Party Boy",
    "description": "You are such a Party Boy that you no longer suffer the withdrawal effect from alcohol addiction.",
    "is_playable": true,
    "is_trait": false,
    "id": "150999487",
    "edid": "DLC03PartyBoy",
    "requirements": [
      [">=", "Level", 28]
    ]
  },
  {
    "name": "Size Matters 1",
    "description": "You're obsessed with really big weapons. With each rank of this perk, you gain 10% better accuracy, reload and equip speed when using Big Guns.",
    "is_playable": true,
    "is_trait": false,
    "id": "101292078",
    "edid": "SizeMatters",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Strength", 5],
      [">=", "Big Guns", 30]
    ]
  },
  {
    "name": "Size Matters 2",
    "description": "You're obsessed with really big weapons. With each rank of this perk, you gain 10% better accuracy, reload and equip speed when using Big Guns.",
    "is_playable": true,
    "is_trait": false,
    "id": "101292078",
    "edid": "SizeMatters",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Strength", 5],
      [">=", "Big Guns", 30]
    ]
  },
  {
    "name": "Size Matters 3",
    "description": "You're obsessed with really big weapons. With each rank of this perk, you gain 10% better accuracy, reload and equip speed when using Big Guns.",
    "is_playable": true,
    "is_trait": false,
    "id": "101292078",
    "edid": "SizeMatters",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Strength", 5],
      [">=", "Big Guns", 30]
    ]
  },
  {
    "name": "Dustbowl",
    "description": "It's a desolate wasteland out there, but you know how to subsist on just the bare necessities. Your Dehydration advances twice as quickly, but your Hunger advances only one-third as quickly.",
    "is_playable": true,
    "is_trait": true,
    "id": "285324290",
    "edid": "sssPerkDustbowl",
    "requirements": [
      [">=", "Endurance", 4]
    ]
  },
  {
    "name": "Focused",
    "description": "Even under duress, you don't let your fear take the best of you. Your concentration is faultless : you switch weapons 10 % faster, reload 10 % faster and have 10 % less weapon spread.",
    "is_playable": false,
    "is_trait": false,
    "id": "16994152",
    "edid": "ALFocused",
    "requirements": [
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Tunnel Runner",
    "description": "The warrens of The Divide have taught you to keep your head down. Your movement speed is greatly increased while sneaking in light armor.",
    "is_playable": true,
    "is_trait": false,
    "id": "16826968",
    "edid": "NVDLC04TunnelRunnerPerk",
    "requirements": [
      [">=", "Level", 26],
      [">=", "Agility", 8]
    ]
  },
  {
    "name": "Soda Sommelier",
    "description": "200 years of desolation hasn't drained the taste of good ol' soda pop. In fact, some say it tastes better when it's flat! You gain a bonus to max health and heal extra health when drinking any bubbly drink.",
    "is_playable": true,
    "is_trait": false,
    "id": "301991936",
    "edid": "sssPerkSodaSommelier",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Survival", 40]
    ]
  },
  {
    "name": "Stealth Girl",
    "description": "While Lily is a companion, the duration of Stealth Boys is increased by 100% and all Sneak Attack Critical Hits do an additional 10% damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426959",
    "edid": "StealthGirl"
  },
  {
    "name": "Sweet Six Shooter",
    "description": "The glint of your gun and the shine of your grin are nearly equal. You've gained access to powerful \"Blood\" revolver ammo recipes, along with 15% faster reload speed, 10% faster attack speed, +30% crit. chance and -60% weapon condition damage with revolvers while your Karma is Good or Very Good (Requires Good Karma).",
    "is_playable": true,
    "is_trait": false,
    "id": "285214722",
    "edid": "sssPerkSweet6Shooter",
    "requirements": [
      [">=", "Level", 22],
      [">=", "Charisma", 6],
      [">=", "Guns", 66]
    ]
  },
  {
    "name": "Patriot",
    "description": "Echoing through the desolate wastelands, the voice of true authority still speaks.\n\n\n\n-25% reduced damage against the Enclave.\n\n+1/2 Charisma bonus while Intelligence is below 4/2.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333701",
    "edid": "ELYPerkPatriot",
    "requirements": [
      ["<", "Intelligence", 5]
    ]
  },
  {
    "name": "Humbled",
    "description": "Your (mis)adventure may have set you back, but now you've got a convenient hole in your head for inspiration to flow into. You gain +15% xp, permanently.",
    "is_playable": false,
    "is_trait": false,
    "id": "302034068",
    "edid": "PerkHumbledXPBonus"
  },
  {
    "name": "Shunned by Legion+NCR+Strip",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285341171",
    "edid": "sssPerkShunnedByFactions"
  },
  {
    "name": "Retention",
    "description": "With the Retention perk, the bonuses granted by skill magazines last three times as long.",
    "is_playable": true,
    "is_trait": false,
    "id": "1110174",
    "edid": "Retention",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Raul's Ruminations",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444104",
    "edid": "PerkRaul"
  },
  {
    "name": "Causeless Rebel",
    "description": "COMPANION ONLY - Veronica's Unarmed attack rate goes up by 30%.",
    "is_playable": false,
    "is_trait": false,
    "id": "1536335",
    "edid": "CauselessRebel"
  },
  {
    "name": "Set Lasers to Kill 1",
    "description": "You're extra lethal with laser weapons! Minor bonus to critically hit with all laser weapons.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436381",
    "edid": "SetLasersForFunPerk"
  },
  {
    "name": "Set Lasers to Kill 2",
    "description": "You're extra lethal with laser weapons! Minor bonus to critically hit with all laser weapons.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436381",
    "edid": "SetLasersForFunPerk"
  },
  {
    "name": "Intelligence Bobblehead",
    "description": "It takes the smartest individuals to realize there's always more to learn.\n\n\n\nYou now gain 5 extra skill points when reading magazines.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362663",
    "edid": "TTWBobbleheadPerkIntelligence"
  },
  {
    "name": "Confirmed Bachelor",
    "description": "You gain +5 Speech and Barter and +1 Charisma when talking to men, but suffer -5 Speech and Barter and when talking to women.",
    "is_playable": true,
    "is_trait": true,
    "id": "1270196",
    "edid": "ConfirmedBachelor",
    "requirements": [
      [">=", "Charisma", 6]
    ]
  },
  {
    "name": "Threat Range",
    "description": "When using a heavy melee weapon, you gain 10% attack speed and damage, and your DR is increased by 15% while you are attacking.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214729",
    "edid": "sssPerkThreatRange",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Strength", 7],
      [">=", "Melee Weapons", 40]
    ]
  },
  {
    "name": "Early Bird",
    "description": "Hey early risers! Enjoy a +2 to each of your S.P.E.C.I.A.L. attributes from 6 am to 12 pm, but suffer a -1 from 6 pm to 6 am when you're not at your best.",
    "is_playable": true,
    "is_trait": true,
    "id": "16852839",
    "edid": "NVDLC03TraitEarlyBird"
  },
  {
    "name": "Burning Wasteland Sun",
    "description": "Can you feel that blazing sun, beating down on you? Then your fire based weapons have +8% crit. chance and +15% crit. damage, and they deal bonus limb and fatigue damage!",
    "is_playable": true,
    "is_trait": false,
    "id": "285235868",
    "edid": "sssPerkBurningWastelandSun",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Endurance", 6],
      [">=", "Energy Weapons", 50]
    ]
  },
  {
    "name": "Infighter",
    "description": "If you can't see the whites of their eyes, you can't put a bullet between them. While close to your target, your DT is increased by 5 and damage is improved by 10%, your enemy's crit chance is reduced by 30%, and their DT is reduced by 5.",
    "is_playable": true,
    "is_trait": false,
    "id": "285252697",
    "edid": "sssPerkInfighter",
    "requirements": [
      [">=", "Level", 12],
      ["<=", "Perception", 7]
    ]
  },
  {
    "name": "Critter Cruncher",
    "description": "The puny creatures of the wasteland can hardly scratch you. You suffer 50% less limb damage when being attacked by an insect or an animal, and you deal 50% more damage to them with your bare fists.",
    "is_playable": true,
    "is_trait": false,
    "id": "285311628",
    "edid": "sssPerkCritterCruncher",
    "requirements": [
      [">=", "Level", 2],
      ["or", [">=", "Strength", 6], [">=", "Endurance", 6]]
    ]
  },
  {
    "name": "Rust and Rivets",
    "description": "Rivet City's reputation for resilience has resonated with you. Thanks to their example, you've gained +15 rad resist, -25% limb damage, and +8% swim speed while in water. Your Survival is also increased by 5 and you intake 8% less radiation while indoors.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558037",
    "edid": "PerkFacRivetCity",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Masochist",
    "description": "When you're feeling healthy, all you can think about is when you'll get to bleed again.\n\n-You lose 2/4/6 DT and 1/2/3 INT at 25/50/75% health, and -25% AP regen speed while lower than 50% health.\n\n+You gain 3/6/9% DR and 1/2/3 END at 75/50/25% health.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333759",
    "edid": "ELYPerkMasochist",
    "requirements": [
      [">=", "Strength", 6],
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "Endurance Bobblehead",
    "description": "Always be ready to take one for the team.\n\n\n\nYour Damage Resistance has been permanently increased by 5%.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362662",
    "edid": "TTWBobbleheadPerkEndurance"
  },
  {
    "name": "4DStorageMark2Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "218593605",
    "edid": "AW4DStorageMark2Perk"
  },
  {
    "name": "Clothes Make The Courier",
    "description": "Since the time of Erasmus, people have known that dressing sharply is the key to success! While wearing clothing, you gain +10% XP, +7 to Barter, Speech, and Sneak, and suffer -50% limb damage.",
    "is_playable": true,
    "is_trait": false,
    "id": "302037209",
    "edid": "PerkClothesMakeTheCourier",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "What Are You, Stupid?",
    "description": "You're so smart. Nobody has ever been smarter than you. Literally the pinnacle of humanity right here.\n\n\n\n+Increased crit. chance against targets stupider than you.\n\n-Reduced crit. chance against targets smarter than you.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333699",
    "edid": "ELYPerkWhatAreYouStupid",
    "requirements": [
      [">=", "Intelligence", 6],
      ["<", "Charisma", 4]
    ]
  },
  {
    "name": "Gun Nut 1",
    "description": "You're obsessed with using and maintaining a wide variety of conventional firearms. With each rank of the Gun Nut perk, when using a gun, spread and item condition damage are reduced by 5%.",
    "is_playable": true,
    "is_trait": false,
    "id": "100944206",
    "edid": "GunNut",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 4],
      [">=", "Repair", 30],
      [">=", "Guns", 30]
    ]
  },
  {
    "name": "Gun Nut 2",
    "description": "You're obsessed with using and maintaining a wide variety of conventional firearms. With each rank of the Gun Nut perk, when using a gun, spread and item condition damage are reduced by 5%.",
    "is_playable": true,
    "is_trait": false,
    "id": "100944206",
    "edid": "GunNut",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 4],
      [">=", "Repair", 30],
      [">=", "Guns", 30]
    ]
  },
  {
    "name": "Gun Nut 3",
    "description": "You're obsessed with using and maintaining a wide variety of conventional firearms. With each rank of the Gun Nut perk, when using a gun, spread and item condition damage are reduced by 5%.",
    "is_playable": true,
    "is_trait": false,
    "id": "100944206",
    "edid": "GunNut",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 4],
      [">=", "Repair", 30],
      [">=", "Guns", 30]
    ]
  },
  {
    "name": "Booster Shot",
    "description": "Medical research from the Pitt has improved your life. Just try not to think of what it may have cost others. Your radiation resistance is improved by 10%.",
    "is_playable": false,
    "is_trait": false,
    "id": "134247252",
    "edid": "DLC01BoosterShot"
  },
  {
    "name": "Certified Tech",
    "description": "Your knowledge of robotic components allows you to break them more easily and salvage their mechanical corpses. You have a +25% chance to score critical hits against robots, and you'll also find more useful components on robots you destroy.",
    "is_playable": true,
    "is_trait": false,
    "id": "67151582",
    "edid": "NVDLC04CertifiedTechPerk",
    "requirements": [
      [">=", "Level", 24],
      [">=", "Intelligence", 5],
      [">=", "Science", 60],
      [">=", "Repair", 60]
    ]
  },
  {
    "name": "Careful Handling",
    "description": "Your weapons deserve respect, and you know it. Your weapon AP cost, equip, reload, and attack speed are penalized by 5%, but your spread and crit. chance are improved by 5%, and your weapon condition decays 15% slower.",
    "is_playable": true,
    "is_trait": true,
    "id": "100665344",
    "edid": "CarefulHandling",
    "requirements": [
      [">=", "Intelligence", 4],
      [">=", "Perception", 4]
    ]
  },
  {
    "name": "Duelist",
    "description": "Fight 'em on fair ground. When you kill a human or ghoul using a weapon of the same skill as you, you gain +15 XP. For every 150 kills in this manner per each weapon type, you will gain +1 to that skill.",
    "is_playable": true,
    "is_trait": false,
    "id": "285303220",
    "edid": "sssPerkDuelist",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "True Party Member",
    "description": "The proletariat majority may have passed, but your belief in the ideal stays true. You gain +30% attack speed, +25% crit. damage, and -30% spread with communist weapons, but your crit. chance is reduced by 20% when you are alone.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214724",
    "edid": "sssPerkTruePartyMember",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Agility", 4],
      [">=", "Guns", 35]
    ]
  },
  {
    "name": "That's Not A Knife",
    "description": "Your skin has been toughened by adversity and the wasteland sun. You gain +3 DT, and an additional +1 DT per point in Endurance, when facing a target with a bladed weapon.",
    "is_playable": true,
    "is_trait": false,
    "id": "285299005",
    "edid": "sssPerkThatsNotAKnife",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Endurance", 5],
      [">=", "Melee Weapons", 30],
      [">=", "Survival", 30]
    ]
  },
  {
    "name": "Xenotech Expert",
    "description": "Your familiarity with alien technology gives you better control over their weapons, increasing their damage output by 20%.",
    "is_playable": true,
    "is_trait": false,
    "id": "184593328",
    "edid": "DLC05Xenotech"
  },
  {
    "name": "Agility Bobblehead",
    "description": "Never be afraid to dodge the sensitive issues.\n\n\n\nYou now run 5% faster.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362659",
    "edid": "TTWBobbleheadPerkAgility"
  },
  {
    "name": "Full Metal Jacket",
    "description": "Full Metal Jacket grants 8 DT penetration, +10% crit. chance, +15% reload speed, and -15% enemy crit. chance when using a Grunt weapon and wearing medium armor.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214767",
    "edid": "sssPerkFullMetalJacket",
    "requirements": [
      [">=", "Level", 18],
      ["has perk", "Grunt"],
      [">=", "Perception", 7],
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Healing Addon Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "67110935",
    "edid": "PerkHealingAddon"
  },
  {
    "name": "Thirsty",
    "description": "Something about the dehydration headaches makes you much more Charismatic. When you suffer any degree of dehydration, you gain +2 Charisma and a -10% reduction in buying prices.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324292",
    "edid": "sssPerkThirsty",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Avant Apocalypse",
    "description": "Fashion clearly didn't hit its peak until *after* the war. When wearing raider armor, you gain +2 Endurance, +1 Strength, +25 AP, and your Unarmed and Melee Weapon AP cost is reduced by 15%.",
    "is_playable": true,
    "is_trait": false,
    "id": "302191206",
    "edid": "PerkAvantApocalypse",
    "requirements": [
      [">=", "Level", 4]
    ]
  },
  {
    "name": "Burden to Bear",
    "description": "With the Burden To Bear perk, you can carry 4 more pounds of equipment for each point of both Strength and Endurance, on top of your Strong Back carry weight bonus.",
    "is_playable": true,
    "is_trait": false,
    "id": "67158608",
    "edid": "NVDLC04BurdenToBearPerk",
    "requirements": [
      [">=", "Level", 16],
      ["has perk", "Strong Back"],
      [">=", "Strength", 8],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "(Inexplicable) Feminist Agenda",
    "description": "Something stirs within in you - something *interdisciplinary*. Is it a newly formed reaction to getting your head ventilated by a dashing rogue, or something you've always had? One thing is for sure: you're not a *mild* feminist. You're ready to let loose, on each and every member of the un-fairer sex!\n\n\n\n+Women appreciate your attitude. +5 Speech and Barter when speaking to women.\n\n+5% damage against men.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333729",
    "edid": "ELYPerkFeministAgenda",
    "requirements": [
      [">=", "Level", 6],
      ["not", ["has perk", "Lady Killer"]],
      ["not", ["has perk", "Confirmed Bachelor"]],
      [">=", "Charisma", 4],
      [">=", "Intelligence", 5],
      [">=", "Perception", 6]
    ]
  },
  {
    "name": "Semi-Sacred Geometry",
    "description": "The lovely air; the wind it breathes; it's all connected, and it's all perfect. Your experience with addictive chems has granted you +2 INT and PER while under the effect of any non-alcoholic chem.",
    "is_playable": false,
    "is_trait": false,
    "id": "50381240",
    "edid": "ELYPerkSemiSacredGeometry",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Science", 40],
      ["has perk", "Day Tripper"]
    ]
  },
  {
    "name": "Survivalist",
    "description": "Material comforts and the buzz of conversation just aren't for you. With the Survivalist perk, actions which sate your hunger, thirst, and sleep deprivation will be twice as effective.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324282",
    "edid": "sssPerkSurvivalist",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Endurance", 6],
      [">=", "Survival", 75]
    ]
  },
  {
    "name": "Unarmed Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332746",
    "edid": "sssPerkTaggedUnarmed"
  },
  {
    "name": "Skill Items",
    "description": "This perk controls Skill Item bonuses.",
    "is_playable": false,
    "is_trait": false,
    "id": "16792282",
    "edid": "PerkSkillItems"
  },
  {
    "name": "Obstinate",
    "description": "You're too stubborn to give any ground in a negotiation, or even try to see from the other person's perspective. Each time you fail a speech check for the first time, you lose XP equal to the sum of your permanent Barter and Speech stats, multiplied by your level, but your Barter and Speech will both be permanently increased by 1.",
    "is_playable": false,
    "is_trait": true,
    "id": "50355203",
    "edid": "ELYFlawStubborn",
    "requirements": [
      ["<", "Charisma", 5]
    ]
  },
  {
    "name": "Card Counter",
    "description": "All it takes is a keen eye and the discretion to not call attention to yourself.\n\n\n\n+Dramatically better results while gambling.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333704",
    "edid": "ELYPerkUnluckyPlus",
    "requirements": [
      [">=", "Level", 16],
      ["has perk", "I Don't Believe In Luck"],
      [">=", "Perception", 9],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "Fast Metabolism",
    "description": "With the Fast Metabolism perk, you gain a 20% Health bonus when using Stimpaks.",
    "is_playable": true,
    "is_trait": false,
    "id": "609983",
    "edid": "FastMetabolism",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Endurance", 5],
      [">=", "Survival", 25]
    ]
  },
  {
    "name": "Spicy Casserole",
    "description": "This recipe allows you to make Ruby's spicy casserole.",
    "is_playable": false,
    "is_trait": false,
    "id": "1446846",
    "edid": "SpicyCasserole"
  },
  {
    "name": "Repair Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332745",
    "edid": "sssPerkTaggedRepair"
  },
  {
    "name": "DNAvenger 1",
    "description": "Studying the abominations created at the Big MT has granted you a damage bonus (+10% per rank up to three ranks) against Cazadores. ",
    "is_playable": false,
    "is_trait": false,
    "id": "16833064",
    "edid": "NVDLC03DNAvengerPerk"
  },
  {
    "name": "DNAvenger 2",
    "description": "Studying the abominations created at the Big MT has granted you a damage bonus (+10% per rank up to three ranks) against Cazadores. ",
    "is_playable": false,
    "is_trait": false,
    "id": "16833064",
    "edid": "NVDLC03DNAvengerPerk"
  },
  {
    "name": "DNAvenger 3",
    "description": "Studying the abominations created at the Big MT has granted you a damage bonus (+10% per rank up to three ranks) against Cazadores. ",
    "is_playable": false,
    "is_trait": false,
    "id": "16833064",
    "edid": "NVDLC03DNAvengerPerk"
  },
  {
    "name": "Spotter",
    "description": "While Boone is a companion, hostile targets are highlighted while you are aiming.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426956",
    "edid": "Spotting"
  },
  {
    "name": "Overkiller",
    "description": "Big guns, big muscles, big melee. When using a heavy melee weapon, you gain 15% damage, +20% power attack damage, and any hits that cripple a limb will knock your target down.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214730",
    "edid": "sssPerkOverkiller",
    "requirements": [
      [">=", "Level", 18],
      [">=", "Strength", 8],
      [">=", "Big Guns", 80],
      [">=", "Melee Weapons", 80]
    ]
  },
  {
    "name": "Explosives Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332743",
    "edid": "sssPerkTaggedExplosives"
  },
  {
    "name": "Lucky Number",
    "description": "\"Luck is an accident that happens to the confident.\"\n\n\n\nYour resolute confidence in your Lucky Number manifests in the ability to fire a weapon with a single projectile with ideal accuracy when your ammo count matches your current Luck.",
    "is_playable": true,
    "is_trait": false,
    "id": "50443964",
    "edid": "ELYPerkLuckyNumber",
    "requirements": [
      [">=", "Level", 4]
    ]
  },
  {
    "name": "Second Skin",
    "description": "Star Paladin Cross is a seasoned veteran of power armor use and can show you a thing or two about how to use it at it's maximum potential. While Star Paladin Cross is in your party, you have +1 Endurance and +20 carry weight when you are wearing power armor.",
    "is_playable": false,
    "is_trait": false,
    "id": "184581788",
    "edid": "TTWFollowerPerkStarPaladinCross"
  },
  {
    "name": "Hidden Weapons",
    "description": "Whether your weapon jams, or it gets shot out of your hand, you'll be ready. Basic holdout weapons are granted additional 5/10/15/20/25/30/35% crit. chance and damage for 0-15/16-25/26-35/36-50/51-65/66-80/81-100 points in the Survival skill.\n\nYour equip speed with basic holdout weapons is also increased by 35%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214763",
    "edid": "sssPerkHiddenWeapons",
    "requirements": [
      [">=", "Level", 8],
      ["or", [">=", "Survival", 35], [">=", "Sneak", 40]]
    ]
  },
  {
    "name": "A Mended Divide",
    "description": "Ulysses once faced you down with malice, from across a deep divide, but you've found common ground and a mutual understanding. While wearing your Courier Duster, you have 20% increased carry weight, and 15% better accuracy in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328519",
    "edid": "sssPerkLonesomeRoadMendedDivide",
    "requirements": [
      [">=", "Level", 30],
      ["not", ["has perk", "The Final Delivery"]]
    ]
  },
  {
    "name": "Toughness",
    "description": "With the Toughness perk, you gain +1 Damage Threshold per point in Endurance.",
    "is_playable": true,
    "is_trait": false,
    "id": "204256",
    "edid": "Toughness",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Endurance", 5]
    ]
  },
  {
    "name": "Mutant Massacrer 1",
    "description": "You've gained a damage bonus against Super Mutants.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436386",
    "edid": "MutantChallengePerk"
  },
  {
    "name": "Mutant Massacrer 2",
    "description": "You've gained a damage bonus against Super Mutants.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436386",
    "edid": "MutantChallengePerk"
  },
  {
    "name": "Mutant Massacrer 3",
    "description": "You've gained a damage bonus against Super Mutants.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436386",
    "edid": "MutantChallengePerk"
  },
  {
    "name": "Quantum Chemist",
    "description": "You have unlocked the secret to creating Nuka-Cola Quantum. With this perk, ten Nuka-Colas can be crafted into a Nuka-Cola Quantum at a campfire or hotplate.",
    "is_playable": true,
    "is_trait": false,
    "id": "151014513",
    "edid": "DLC03QuantumChemist",
    "requirements": [
      [">=", "Level", 22],
      [">=", "Science", 70]
    ]
  },
  {
    "name": "Auto Axpert",
    "description": "You've become an expert with the Auto Axe. It's Strength requirement has been reduced by 1, and you deal +15% damage with all automatic melee weapons.",
    "is_playable": false,
    "is_trait": false,
    "id": "117470184",
    "edid": "DLC01AutoAxpert"
  },
  {
    "name": "Survivor's Guilt",
    "description": "You survived the hell that was the Sierra Madre, but after all of the deaths you've seen, you feel as though a piece of you has been left behind there forever. Your Luck is reduced by 1 when you have a teammate, but your AP will also regenerate 15% faster and AP costs will be reduced by 5% at all times.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328512",
    "edid": "sssPerkDeadMoneySurvivor",
    "requirements": [
      [">=", "Level", 20],
      ["not", ["has perk", "The Ties That Bind"]],
      ["not", ["has perk", "Elijah's Montresor"]]
    ]
  },
  {
    "name": "Rolling With The Punches",
    "description": "When your fists are out, you float like a bloatfly. You gain +12% speed for 5 seconds whenever you're hit by a melee attack with an unarmed weapon equipped. (This effect does not stack)",
    "is_playable": true,
    "is_trait": false,
    "id": "285218971",
    "edid": "sssPerkRollingWithThePunches",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Endurance", 5],
      [">=", "Unarmed", 25]
    ]
  },
  {
    "name": "Khan Toughness",
    "description": "The Great Khans are infamous for being some of the toughest bastards in the Mojave, and you're no exception! You permanantly gain +5 to your DT!",
    "is_playable": false,
    "is_trait": false,
    "id": "50412839",
    "edid": "InitKhanPerk"
  },
  {
    "name": "Hardy",
    "description": "The natural healing power of the human body is your greatest resource. While your Hunger and/or Dehydration are over 150, you gain +15 Survival and +15% to recovered health.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324293",
    "edid": "sssPerkHardy",
    "requirements": [
      [">=", "Level", 6]
    ]
  },
  {
    "name": "Contact Courier",
    "description": "You only know one way to solve your problems - with your fists.\n\n\n\n+50% damage with Unarmed weapons.\n\n-50% damage with Melee weapons.\n\n+50% spread when using ranged weapons.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333749",
    "edid": "ELYPerkContactCourier",
    "requirements": [
      [">=", "Strength", 8],
      [">=", "Endurance", 7],
      ["<=", "Intelligence", 7]
    ]
  },
  {
    "name": "Rad Regeneration",
    "description": "After an experimental treatment, intense radiation keeps your body operating at peak performance regardless of crippling injuries... right up until death. When you suffer from Advanced Radiation Poisoning and being actively irradiated, crippled limbs automatically regenerate.",
    "is_playable": false,
    "is_trait": false,
    "id": "198251",
    "edid": "MS03MutationPerk"
  },
  {
    "name": "Mirelurk Ecology",
    "description": "After hours of studying, you've finally learned to exploit a mirelurk's weaknesses and gain a +5 damage bonus while attacking one.",
    "is_playable": false,
    "is_trait": false,
    "id": "167836718",
    "edid": "DLC04MirelurkEcology"
  },
  {
    "name": "A Solitary Soul",
    "description": "Traveling with a crowd just isn't for you. When not accompanied by any companions, you recover 10% more health from healing sources, gain 15% more experience, and while facing more than one target at once, the adrenaline rush from any non-fatal critical hit will restore the hit's health damage by 2% per point of Endurance, if you have an equal amount of AP available.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324285",
    "edid": "sssPerkASolitarySoul",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Computer Whiz",
    "description": "Fail a hack attempt and get locked out of a computer? Not if you're a Computer Whiz! With this perk, you can attempt to re-hack any computer you were previously locked out of.",
    "is_playable": false,
    "is_trait": false,
    "id": "204228",
    "edid": "ComputerWhiz"
  },
  {
    "name": "Torque Dork",
    "description": "You just can't get enough of that leverage.\n\n\n\n+25% damage with Melee Weapons.\n\n-Your weapon condition damage is increased by 5x with all other weapon types.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333752",
    "edid": "ELYPerkTorqueDork",
    "requirements": [
      [">=", "Strength", 8]
    ]
  },
  {
    "name": "Shotgun Surgeon",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "134240831",
    "edid": "PerkShotgunSurgeonFake"
  },
  {
    "name": "Return to Sender",
    "description": "Throw enemy grenades back at them!",
    "is_playable": true,
    "is_trait": false,
    "id": "16808644",
    "edid": "xlrQTReturnToSender",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Explosives", 40]
    ]
  },
  {
    "name": "Slick Shooter",
    "description": "You know to target an enemy when they're most vulnerable. You gain a 50% boost to your crit. chance while your target is reloading.",
    "is_playable": true,
    "is_trait": false,
    "id": "285235864",
    "edid": "sssPerkSlickShooter",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "Extracurricular Knowledge",
    "description": "Selecting Extracurricular Knowledge will allow you to save a perk point for later, but you will be forced to take a new trait. This can be done multiple times.\n\nYour perk point can be used by activating this perk in the Pip-Boy.",
    "is_playable": false,
    "is_trait": false,
    "id": "100728840",
    "edid": "HereandNowDummy",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Dine and Dash",
    "description": "With the Dine and Dash perk, when you're in Sneak mode, you gain the option to take corpse parts for eating at a later time.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436385",
    "edid": "CannibalChallengePerk",
    "requirements": [
      [">=", "Level", 12]
    ]
  },
  {
    "name": "Psycho",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "426844",
    "edid": "PsychoPerk"
  },
  {
    "name": "Atomic!",
    "description": "With the Atomic! perk, you are 25% faster and stronger whenever you're basking in the warm glow of radiation. Outside irradiated areas, your Action Points (AP) regenerate faster and faster the higher your level of radiation sickness becomes.",
    "is_playable": true,
    "is_trait": false,
    "id": "50364433",
    "edid": "NVDLC03AtomicPerk",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Swing For The Fences",
    "description": "Knock em right outta the park! Your attack speed with two handed melee weapons is increased by 8%, and you do an additional 7 points of damage while using any baseball bat.",
    "is_playable": true,
    "is_trait": false,
    "id": "151048699",
    "edid": "DLC04SwingForTheFences",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Strength", 6]
    ]
  },
  {
    "name": "Bankrupt",
    "description": "People go easy on you when you're broke. Maybe it's manipulation, or maybe they just feel bad for you.\n\nYour buying prices are reduced substantially while you have low amounts of money, but once your bag of caps begins to refill, they start to expect you to pay more and more, in return for their previous generosity.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333723",
    "edid": "ELYPerkBankrupt",
    "requirements": [
      ["tagged", "Barter"],
      ["<", "Luck", 4]
    ]
  },
  {
    "name": "Native Charisma and Barter Stuff",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302223305",
    "edid": "PerkNativeCharismaAndBarterStuff"
  },
  {
    "name": "Enhanced Sensors",
    "description": "While ED-E is a companion, the player can detect enemies at an increased range. Additionally, enemies will appear on the player's compass and can be targeted in V.A.T.S. even when cloaked.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426958",
    "edid": "EnhancedSensors"
  },
  {
    "name": "Robot Compliance",
    "description": "With the Robot Compliance perk, sneaking up on a hostile robot undetected and activating it will put that robot into a permanent shutdown state.",
    "is_playable": false,
    "is_trait": false,
    "id": "16828559",
    "edid": "NVDLC03X13RobotCompliance"
  },
  {
    "name": "Repair Rascal 1",
    "description": "Repair Rascal grants +15% damage, equip and attack speed with repair-related weapons, and reduces their strength requirement by 1. The second rank grants an additional +10% damage and crit. damage, and +15% crit. chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214757",
    "edid": "sssPerkRepairRascal",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Survival", 40],
      [">=", "Repair", 40]
    ]
  },
  {
    "name": "Repair Rascal 2",
    "description": "Repair Rascal grants +15% damage, equip and attack speed with repair-related weapons, and reduces their strength requirement by 1. The second rank grants an additional +10% damage and crit. damage, and +15% crit. chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214757",
    "edid": "sssPerkRepairRascal",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Survival", 40],
      [">=", "Repair", 40]
    ]
  },
  {
    "name": "Hurt Me More!",
    "description": "It's all about pain; your DT has been reduced by 5, but your DR has increased by 5%, and 1% of your AP is restored each time you are hit.",
    "is_playable": true,
    "is_trait": true,
    "id": "285235862",
    "edid": "sssPerkHurtMeMore",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Return to Sender",
    "description": "With the Return to Sender perk, enemy grenades thrown at you will be thrown back at them.",
    "is_playable": false,
    "is_trait": false,
    "id": "1677753028",
    "edid": "xlrQTReturnToSender",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Explosives", 40]
    ]
  },
  {
    "name": "Action Boy 1",
    "description": "With the Action Boy perk, you gain an additional 15 Action Points to use in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "204218",
    "edid": "ActionBoy",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Action Boy 2",
    "description": "With the Action Boy perk, you gain an additional 15 Action Points to use in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "204218",
    "edid": "ActionBoy",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Psycho Warfare",
    "description": "You get so creative with your battle cries, insults and imprecations that they deeply disturbs your opponents and impact their general fighting efficiency : they inflict 5 % less damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "16983552",
    "edid": "ALPsychologicalWarfare",
    "requirements": [
      [">=", "Speech", 70]
    ]
  },
  {
    "name": "Sunny Sands",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117460934",
    "edid": "PerkSunny"
  },
  {
    "name": "Laser Commander",
    "description": "From the humble Laser Pistol to the mighty Gatling Laser, you do +15% damage and have +10% chance to critically hit with any laser weapon.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464201",
    "edid": "LaserCommander",
    "requirements": [
      [">=", "Level", 18],
      [">=", "Energy Weapons", 75]
    ]
  },
  {
    "name": "Valkyrie",
    "description": "You move so fast it's like you're sweating gasoline! In combat you gain +10% run speed, and gain +25% melee/unarmed attack speed while on fire.",
    "is_playable": true,
    "is_trait": false,
    "id": "285252700",
    "edid": "sssPerkValkyrie",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Agility", 7],
      ["or", [">=", "Melee Weapons", 50], [">=", "Unarmed", 50]]
    ]
  },
  {
    "name": "Integrity",
    "description": "Therapy Result! There is something as self-respect, and you know that pretty well. Your sense of self-preservation grants you a natural +3 DT.",
    "is_playable": false,
    "is_trait": false,
    "id": "16994151",
    "edid": "ALIntegrity",
    "requirements": [
      [">=", "Endurance", 5]
    ]
  },
  {
    "name": "Light Step",
    "description": "ED-E doesn't set off mines. Text translation not needed.",
    "is_playable": false,
    "is_trait": false,
    "id": "16831715",
    "edid": "NVDLC04EDENoMines",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Perception", 6],
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Four Eyes",
    "description": "While wearing any type of glasses, you gain +1 PER. Without glasses, you suffer -1 PER.",
    "is_playable": true,
    "is_trait": true,
    "id": "1269444",
    "edid": "FourEyes",
    "requirements": [
      [">", "Perception", 1],
      ["<", "Perception", 10]
    ],
    "effects": [
      ["-", "Perception", 1]
    ]

  },
  {
    "name": "Every Little Counts",
    "description": "One Handed Guns now inflicts 2 more damage. Every little counts, right?",
    "is_playable": false,
    "is_trait": false,
    "id": "16991093",
    "edid": "ALEveryLittleCounts"
  },
  {
    "name": "Power Armor Training",
    "description": "You have received the specialized training needed to move in any form of Power Armor.",
    "is_playable": false,
    "is_trait": false,
    "id": "364511",
    "edid": "PowerArmorTraining"
  },
  {
    "name": "Automatic Artistry",
    "description": "Automatic Artistry reduces your spread with automatic weapons by 15% and increases your crit. chance with them by 10%.",
    "is_playable": true,
    "is_trait": false,
    "id": "1462657",
    "edid": "SprayAndPray",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Perception", 4]
    ]
  },
  {
    "name": "Tribal Wisdom",
    "description": "Your limbs take 50% less damage from Animals, Mutated Animals, and Mutated Insects, you gain +25% resistance to Poison Damage, and can eat Mutated Insects when you're in Sneak mode.",
    "is_playable": true,
    "is_trait": false,
    "id": "16840313",
    "edid": "NVDLC02TribalWisdom",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Survival", 70]
    ]
  },
  {
    "name": "Demolition Expert 1",
    "description": "With each rank of this perk, all of your Explosives weapons do an additional 10% damage and have 10% larger area of effect.",
    "is_playable": true,
    "is_trait": false,
    "id": "204203",
    "edid": "DemolitionExpert",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Explosives", 40]
    ]
  },
  {
    "name": "Demolition Expert 2",
    "description": "With each rank of this perk, all of your Explosives weapons do an additional 10% damage and have 10% larger area of effect.",
    "is_playable": true,
    "is_trait": false,
    "id": "204203",
    "edid": "DemolitionExpert",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Explosives", 40]
    ]
  },
  {
    "name": "Overt Coercion",
    "description": "Implication and insinuation has given way to explicit threats. Each point of STR above 5 grants -5% to purchase prices while your Karma is Evil or Very Evil, up to a maximum of -25% (Requires Evil Karma).",
    "is_playable": true,
    "is_trait": false,
    "id": "285223213",
    "edid": "sssPerkOvertCoercion",
    "requirements": [
      [">=", "Level", 24],
      [">=", "Strength", 7],
      ["<", "Charisma", 5],
      ["has perk", "Indirect Bartering"]
    ]
  },
  {
    "name": "Man's Best Friend",
    "description": "Dogmeat is man's best friend, and he knows how to coordinate and run interference. While he is in your party, you will deal +25% damage to knocked down targets. In addition, you can ask Dogmeat to 'mark' his territory, setting a fast-travel marker to that spot.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359001",
    "edid": "TTWFollowerPerkDogmeat"
  },
  {
    "name": "Junior Survivor",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you're still alive to tell the tale. You've gained +2% bonus to Poison Resistance and Radiation Resistance, and +5 points to maximum Health.",
    "is_playable": false,
    "is_trait": false,
    "id": "185250",
    "edid": "MS03Perk1A"
  },
  {
    "name": "Western Standoff",
    "description": "There's one way to guarantee that you have the upper hand in a fight; make sure you're the only one holding a weapon. You gain a +25% chance to hit an enemy's weapon in V.A.T.S., which doubles if your target isn't in combat.",
    "is_playable": true,
    "is_trait": false,
    "id": "285235865",
    "edid": "sssPerkWesternStandoff",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Agility", 5],
      ["or", [">=", "Guns", 35], [">=", "Energy Weapons", 35], [">=", "Big Guns", 35]]
    ]
  },
  {
    "name": "Strong Back",
    "description": "With the Strong Back perk, you can carry 4 more pounds of equipment for each point of both Strength and Endurance, up to a maximum of +80 lbs.",
    "is_playable": true,
    "is_trait": false,
    "id": "204254",
    "edid": "StrongBack",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Strength", 6],
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Pack Rat",
    "description": "You have learned the value of careful packing. Items with a weight of 2 or less weigh half as much for you.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335451",
    "edid": "PackRat",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Intelligence", 6],
      [">=", "Survival", 80]
    ]
  },
  {
    "name": "Winning Streak",
    "description": "Once your ticket comes up, you'll be on your way to the high-roller life. After you've scored a critical hit, your crit. chance is doubled.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324286",
    "edid": "sssPerkLuckyStreak",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Luck", 10]
    ]
  },
  {
    "name": "Lucky Accident",
    "description": "You've always been lucky, so you never learned to aim properly; your crit. chance is increased by 25%, but your crit. damage is reduced by 50%.",
    "is_playable": true,
    "is_trait": true,
    "id": "285328495",
    "edid": "sssPerkLuckyAccident",
    "requirements": [
      [">=", "Luck", 6]
    ]
  },
  {
    "name": "Overpass Angel",
    "description": "You've resolved Arefu's dangerous dilemma, and brought peace to the elevated town. You gain +4 DT, +8 DR, +8% crit. chance and crit. damage, and -15% limb damage while in the air.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558049",
    "edid": "PerkFacArefu",
    "requirements": [
      [">=", "Level", 6]
    ]
  },
  {
    "name": "Icon of Salvation",
    "description": "The true hero isn't the Mechanist or the Ant-Agonizer, it's you. While you stay an icon of virtue (Good or Very Good karma), you gain +3% recovered health every five levels between 10 and 30, and +1/2 Luck at levels 15/30.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558051",
    "edid": "PerkFacCanterburyCommons",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Healing Factor",
    "description": "The radiation in your body, combined with your unique genetics, has allowed you to develop a strange treatment which has made your body slowly heal your limbs up to full any time they're damaged, at the cost of increasing all of your needs while you heal.",
    "is_playable": true,
    "is_trait": false,
    "id": "50378181",
    "edid": "ELYPerkHealingFactor",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Endurance", 8],
      [">=", "Luck", 8]
    ]
  },
  {
    "name": "Darkest Star",
    "description": "The brutality of the wasteland has imbued your heart with a dark radiation that poisons your belief in doing right by others. While your karma is below neutral, for every 10 XP you gain, your negative karma increases by one point.",
    "is_playable": false,
    "is_trait": false,
    "id": "50405720",
    "edid": "ELYPerkDarkestStar"
  },
  {
    "name": "Old World Gourmet",
    "description": "Thanks to wasteland living, you've learned the secrets of the pre-war scroungers! You've gained +25% Addiction Resistance, and a healing bonus from junk foods and pre-war liquor.",
    "is_playable": true,
    "is_trait": false,
    "id": "16841071",
    "edid": "NVDLC01OldWorldGourmet",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Endurance", 6],
      [">=", "Survival", 45]
    ]
  },
  {
    "name": "Weak Knees",
    "description": "All that crouch-walking is murder on your joints. You suffer -10% sneak speed, and take leg damage anytime you move while sneaking. Fortunately, you've learned from your disadvantage. (You will gain another perk immediately)",
    "is_playable": true,
    "is_trait": true,
    "id": "50372061",
    "edid": "ELYFlawWeakKnees",
    "requirements": [
      ["<", "Endurance", 2],
      ["<", "Agility", 5]
    ]
  },
  {
    "name": "Life Giver",
    "description": "With the Life Giver perk, you and your companions gain an additional 30 health.",
    "is_playable": true,
    "is_trait": false,
    "id": "204209",
    "edid": "LifeGiver",
    "requirements": [
      [">=", "Level", 12]
    ]
  },
  {
    "name": "Hoarder",
    "description": "You gain +25 lbs. to your carrying capacity, but suffer a -1 to all attributes any time the weight you're carrying drops below 160 lbs.",
    "is_playable": true,
    "is_trait": true,
    "id": "16852845",
    "edid": "NVDLC03TraitHoarder"
  },
  {
    "name": "Mad Bomber",
    "description": "Your intimate knowledge of gadgets and explosives have combined to make you... the Mad Bomber! Your crafting requirements for throwable explosives are reduced by 35.",
    "is_playable": true,
    "is_trait": false,
    "id": "83888430",
    "edid": "NVDLC05MadBomber",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Repair", 40],
      [">=", "Explosives", 35]
    ]
  },
  {
    "name": "Nailboard Diplomacy",
    "description": "Todd's looming, twitchy presence serves to make you seem much more reasonable by comparison, boosting your Charisma by 1 for as long as he is around.",
    "is_playable": false,
    "is_trait": false,
    "id": "118170882",
    "edid": "aaaRoadToddPerk",
    "effects": [
      ["+", "Charisma", 1]
    ]

  },
  {
    "name": "The Bear-Slayer",
    "description": "No more will the NCR continue its aggressive campaign of Eastern expansion. You can put a single point into any of your S.P.E.C.I.A.L. attributes. You also gain reputation with Caesar's Legion for annihilating the NCR's homeland, but lose reputation with the NCR.",
    "is_playable": false,
    "is_trait": false,
    "id": "16826971",
    "edid": "NVDLC04BearSlayerPerk"
  },
  {
    "name": "Get Lucky",
    "description": "Eulogy was right about her. When you've had a hard day on the road and are ready to call it a night, she will make sure you wake up *very* well rested. With Clover in your party, the Well Rested bonus will grant you an additional 15% XP and +1 Luck!",
    "is_playable": false,
    "is_trait": false,
    "id": "184581790",
    "edid": "TTWFollowerPerkClover"
  },
  {
    "name": "Well-Stacked Cairns",
    "description": "While Follows-Chalk is in your party, reaching any summit in Zion Valley (such as ranger stations) will reveal all nearby map markers and inspire a heightened state of awareness (+3 PER) for three minutes.",
    "is_playable": false,
    "is_trait": false,
    "id": "16823030",
    "edid": "NVDLC02WellStackedCairns"
  },
  {
    "name": "Magnetic Personality",
    "description": "Your presence seems to compel others to follow you! With this perk, you can have one more active companion in your party. However, you still cannot have more than five companions at once.",
    "is_playable": true,
    "is_trait": false,
    "id": "218105864",
    "edid": "CCOMagneticPersonality",
    "requirements": [
      [">=", "Level", 16],
      ["<", "Charisma", 10]
    ]
  },
  {
    "name": "No Loose Ends",
    "description": "Your time at the Sierra Madre has taught you much about dispatching targets in enclosed spaces. Your critical hit chance and damage are increased by 10% when you are indoors.",
    "is_playable": false,
    "is_trait": false,
    "id": "167776671",
    "edid": "sDMPerkNoLooseEnds"
  },
  {
    "name": "Crouching Turtle",
    "description": "You may not sneak anywhere quickly, but you'll definitely get there safe. When crouched, you gain +3 DR per point of Endurance above 5, up to a maximum of +15. However, your sneaking move speed is reduced by 20%.",
    "is_playable": true,
    "is_trait": true,
    "id": "285227420",
    "edid": "sssPerkCrouchingTurtle",
    "requirements": [
      [">=", "Endurance", 6],
      ["<", "Agility", 5]
    ]
  },
  {
    "name": "Enhanced Accuracy",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "101508234",
    "edid": "TNWPerkChanceToHit10"
  },
  {
    "name": "Scribe Assistant",
    "description": "While Veronica is a companion, the player can craft Workbench items through Veronica's dialogue.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426963",
    "edid": "ScribeAssistant"
  },
  {
    "name": "Big Brained",
    "description": "Your brain is back in your body, but some of the advanced technologies remain: Your head still cannot be crippled, but you are only 10% more resistant to addiction now. Surprisingly your damage threshold has improved by 10% (minimum +1 DT).",
    "is_playable": false,
    "is_trait": false,
    "id": "16866234",
    "edid": "NVDLC03BigBrainedPerk"
  },
  {
    "name": "Academy of the Apocalypse",
    "description": "The truth of the world has been laid bare all around you; all it takes is looking around (and a little radiation). You gain +2/5/10 Medicine while you have greater than 100/200/300 rads, +1/2 skill points per level and per skill book read at 300/500 rads, as well as +10% healing, +10% XP gain, and -15% addiction chance at all times.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556485",
    "edid": "PerkFacFollowers",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Blood Bag",
    "description": "Blood truly is the water of life in the wasteland. When you consume a blood pack, your health will be restored by a value equal to the sum of your Strength and Endurance, and your AP will be restored by a value equal to the sum of your Endurance and Agility.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333708",
    "edid": "ELYPerkBloodBag",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Endurance", 7],
      [">=", "Survival", 25]
    ]
  },
  {
    "name": "Makeshift Reloader",
    "description": "Survival is the mother of invention! Craft ammo and other makeshift ammunition types at the Reloading Bench using alternate materials.",
    "is_playable": true,
    "is_trait": false,
    "id": "16841578",
    "edid": "NVDLC01JunkRounds",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Guns", 35],
      [">=", "Repair", 45]
    ]
  },
  {
    "name": "Slaughter",
    "description": "When they're half-bled out, people tends to get sloppy with their defense. Your bladed weapons inflict lethal damage (+300%) when your opponent's health is below 15%.",
    "is_playable": false,
    "is_trait": false,
    "id": "16982814",
    "edid": "ALSlaughter",
    "requirements": [
      [">=", "Unarmed", 90],
      [">=", "Agility", 7]
    ]
  },
  {
    "name": "Daddy's Girl 1",
    "description": "Just like dear old Dad, you've devoted your time to intellectual pursuits. With each rank, hacking gets easier and chems last 10% longer.",
    "is_playable": true,
    "is_trait": false,
    "id": "101094160",
    "edid": "DaddysGirl",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 4]
    ]
  },
  {
    "name": "Daddy's Girl 2",
    "description": "Just like dear old Dad, you've devoted your time to intellectual pursuits. With each rank, hacking gets easier and chems last 10% longer.",
    "is_playable": true,
    "is_trait": false,
    "id": "101094160",
    "edid": "DaddysGirl",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 4]
    ]
  },
  {
    "name": "Daddy's Girl 3",
    "description": "Just like dear old Dad, you've devoted your time to intellectual pursuits. With each rank, hacking gets easier and chems last 10% longer.",
    "is_playable": true,
    "is_trait": false,
    "id": "101094160",
    "edid": "DaddysGirl",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 4]
    ]
  },
  {
    "name": "Roma Invicta",
    "description": "The Legion will have it's new Rome, and you will be the catalyst for it's rise. You have -20% limb damage, +15% AP regen while wearing Legion armor, and +25% equip and +10% attack speed while also using a melee weapon.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558033",
    "edid": "PerkFacLegion",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Rowdy Rex",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117456726",
    "edid": "PerkRex"
  },
  {
    "name": "Silver Tongue, Lead Pocket",
    "description": "You're excellent at convincing others to do you favors, but your words weigh little when compared to material assets. You've gained +20 Barter, but your purchase prices are also increased by 15%.",
    "is_playable": true,
    "is_trait": true,
    "id": "285315835",
    "edid": "sssPerkSilverTongueLeadPocket",
    "requirements": [
      [">=", "Charisma", 6]
    ],
    "effects": [
      ["+", "Barter", 20]
    ]

  },
  {
    "name": "Ghoul Guy",
    "description": "You can sympathize with the plight of the ghouls in Underworld - they're just trying to survive and get by in a world that often shoots at them, unprovoked.\n\nYou've gained +1 Charisma and +8/5 Speech/Barter bonuses while speaking to any ghoul, and +5 DT when attacked by a ghoul, which increases to +8 if that ghoul is feral.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558046",
    "edid": "PerkFacUnderworldGuy",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Blind Luck",
    "description": "You can't see further than a few inches beyond your face, but that won't stop you from slinging lead! Your Perception is increased by 4 whenever you're in combat.",
    "is_playable": true,
    "is_trait": true,
    "id": "302223303",
    "edid": "PerkBlindLuck",
    "requirements": [
      ["<", "Perception", 4],
      [">=", "Luck", 7]
    ]
  },
  {
    "name": "Lamplighter",
    "description": "They may be kids, but they're certainly holding out pretty well on their own. You feel a sense of kinship with the intrepid members of Little Lamplight, and the lives they have ahead of them. You've gained +1 Charisma and +8 Speech and Barter while talking to children.\n\n\n\nYou also gain increased XP, skill points when leveling up, and skill points from books while at low levels, reducing as you hit level 5/10/15/20/25.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558040",
    "edid": "PerkFacLamplight",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Survival Expert",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you've not only survived - you've learned a few things. You've gained +4% bonus to Poison Resistance & Radiation Resistance, and 4 points to both the Speech and Sneak skills.",
    "is_playable": false,
    "is_trait": false,
    "id": "209370",
    "edid": "MS03Perk2D",
    "effects": [
      ["+", "Speech", 4],
      ["+", "Sneak", 4]
    ]

  },
  {
    "name": "Thump Thump Fix",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "201362876",
    "edid": "TTWThumpThumpFixPerk"
  },
  {
    "name": "Spine-full",
    "description": "It's good to have your own spine again. You're more agile now (+1 AGL), a bit sneakier (+5 Sneak Skill) and you've gain more confidence in your posture and movement (+1 CHA).",
    "is_playable": false,
    "is_trait": false,
    "id": "16866224",
    "edid": "NVDLC03SpinefulPerk"
  },
  {
    "name": "Wrath Of The Faithful",
    "description": "\"And I will execute great vengeance upon them with furious rebukes; and they shall know that I am the LORD, when I shall lay my vengeance upon them.\" - Ezekiel 25:17\n\n\n\nYou deal 15% more damage with holy weapons, and your weapon degrades 50% slower, so long as you have your Bible with you.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328503",
    "edid": "sssPerkWrathOfTheFaithful",
    "requirements": [
      [">=", "Level", 12],
      ["not", ["has perk", "Exodus Of The Faithul"]],
      ["not", ["has perk", "Fall Of The Faithful"]]
    ]
  },
  {
    "name": "Cardiac Arrest",
    "description": "Your heart has been augmented with advanced technologies: You cannot be poisoned, and filters in your heart will also regulate bleeding and healing, allowing all healing items (chems) to function at a higher level (+25%). Robots are now confused by you and 50% less likely to score a critical hit.",
    "is_playable": false,
    "is_trait": false,
    "id": "16867402",
    "edid": "NVDLC03CardiacArrestMirrorPerk"
  },
  {
    "name": "You're Holding All The Cards",
    "description": "But now the chips have come in, and you're a winner! You retrieved the Platinum Chip and took back your own destiny.\n\n\n\n+50% crit chance.",
    "is_playable": false,
    "is_trait": false,
    "id": "50333711",
    "edid": "ELYPerkGameWasRigged2",
    "requirements": [
      [">=", "Level", 2],
      ["has perk", "The Game Was Rigged From The Start"]
    ]
  },
  {
    "name": "Shell Shock",
    "description": "You've always got a shotgun handy for close encounters, and you'll never get caught with it unloaded. You've gained +35% equip speed and +25% reload speed with shotguns.",
    "is_playable": true,
    "is_trait": false,
    "id": "285273742",
    "edid": "sssPerkShellShock",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Agility", 6],
      [">=", "Guns", 50]
    ]
  },
  {
    "name": "Nuka Chemist",
    "description": "You have unraveled some of the greatest mysteries of Pre-War masters: formulas for developing special Nuka-Colas! This perk unlocks special Nuka-Cola recipes at the Workbench.",
    "is_playable": true,
    "is_trait": false,
    "id": "1465062",
    "edid": "NukaChemist",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Science", 65]
    ]
  },
  {
    "name": "Grunt",
    "description": "Just good, honest infantry work! When using U.S. army weapons, your Explosives, Unarmed, and Melee Weapons gain +15% damage, your Unarmed and Melee Weapons gain +25% equip speed, your automatic weapon spread is reduced by 20%, your semi-automatic spread is reduced by 10%, you gain +15% reload speed, and strength requirements are reduced by 1.",
    "is_playable": true,
    "is_trait": false,
    "id": "33617527",
    "edid": "NVDLC02Grunt",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Guns", 45],
      [">=", "Explosives", 25],
      [">=", "Melee Weapons", 20]
    ]
  },
  {
    "name": "Graceful",
    "description": "Your poise is perfect; your delicacy is divine; unless you start tripping over your own feet. You gain +1 Charisma while you are not under the effect of alcohol or any addiction, but you suffer -2 when you are drunk or addicted.",
    "is_playable": true,
    "is_trait": true,
    "id": "50359824",
    "edid": "ELYPerkGraceful",
    "requirements": [
      [">=", "Agility", 7]
    ]
  },
  {
    "name": "Lethality",
    "description": "Charlie's talent for killing her targets on the first strike have rubbed off on you. Your sneak attack criticals are even deadlier as long as she is around.",
    "is_playable": false,
    "is_trait": false,
    "id": "117665367",
    "edid": "aaaCharlieCompanionPerk"
  },
  {
    "name": "Scientific Method",
    "description": "Your dedication to science and technology is admirable, if bordering on obsessive. Standing in front of monitors and taking samples from irradiated puddles has started to take its toll, but it's all in the name of progress.\n\nYou've gained +2 INT and +20 Science, but you've lost -2 PER and -10 Radiation Resistance, and you've become obsessed with using nothing but the most advanced of weapons.\n\n(Requires tag skill: Science and Energy Weapons)",
    "is_playable": true,
    "is_trait": true,
    "id": "285328498",
    "edid": "sssPerkScientificMethod",
    "requirements": [
      [">=", "Perception", 3],
      [">=", "Intelligence", 7],
      ["tagged", "Science"],
      ["tagged", "Energy Weapons"]
    ],
    "effects": [
      ["+", "Science", 20],
      ["+", "Intelligence", 2],
      ["-", "Perception", 2]
    ]

  },
  {
    "name": "4DStorageMark55Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "218593608",
    "edid": "AW4DStorageMark55Perk"
  },
  {
    "name": "Certified Tech",
    "description": "Your knowledge of robotic components allows you to break them more easily and salvage their mechanical corpses. You have a +25% chance to score critical hits against robots, and you'll also find more useful components on robots you destroy.",
    "is_playable": true,
    "is_trait": false,
    "id": "16819934",
    "edid": "NVDLC04CertifiedTechPerk",
    "requirements": [
      [">=", "Level", 40]
    ]
  },
  {
    "name": "Math Wrath",
    "description": "You are able to optimize your Pip-Boy's V.A.T.S. logic, reducing all AP costs by 5% per each 10 points in Science above 40.",
    "is_playable": true,
    "is_trait": false,
    "id": "1269443",
    "edid": "MathWrath",
    "requirements": [
      [">=", "Level", 14],
      ["or", [">=", "Science", 70], [">=", "Intelligence", 8]]
    ]
  },
  {
    "name": "Stay Frosty",
    "description": "With the Stay Frosty perk, cryogenic weapons do 50% more damage and the effects last 50% longer.",
    "is_playable": true,
    "is_trait": false,
    "id": "201362880",
    "edid": "TTWFrosty",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Energy Weapons", 60]
    ]
  },
  {
    "name": "Bittercup Blues",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117486193",
    "edid": "PerkBittercup"
  },
  {
    "name": "Swimming Fire Resist",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302202253",
    "edid": "PerkNativeBonuses"
  },
  {
    "name": "Grim Reaper's Sprint 1",
    "description": "If you kill a target in V.A.T.S., 20 Action Points are restored upon exiting V.A.T.S. The second rank increases the amount to 60.",
    "is_playable": true,
    "is_trait": false,
    "id": "628788",
    "edid": "GrimReaperSprint",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Luck", 6]
    ]
  },
  {
    "name": "Grim Reaper's Sprint 2",
    "description": "If you kill a target in V.A.T.S., 20 Action Points are restored upon exiting V.A.T.S. The second rank increases the amount to 60.",
    "is_playable": true,
    "is_trait": false,
    "id": "628788",
    "edid": "GrimReaperSprint",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Luck", 6]
    ]
  },
  {
    "name": "Free Radical",
    "description": "You gain enhanced effects from RadAway.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436378",
    "edid": "RadAwayChallengePerk"
  },
  {
    "name": "Way of the Gun",
    "description": "Eliza's enthusiasm for spray-and-pray tactics has (somehow) given you an accuracy boost when using automatic weapons.",
    "is_playable": false,
    "is_trait": false,
    "id": "134857446",
    "edid": "aaaElizaPerk"
  },
  {
    "name": "Benevolent",
    "description": "Therapy Result! You seldomly cling to negative thoughts, these just hold you down. Somehow, your optimism made you more resistant to limb damage (-15%).",
    "is_playable": false,
    "is_trait": false,
    "id": "16994148",
    "edid": "ALBenevolent",
    "requirements": [
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Steel Jacketed",
    "description": "Yours is a heavy burden, and you need the heaviest of armors to survive it. While in non-powered heavy armor, you gain +25% carry weight, +1 Endurance, +10% combat movement speed, and +15% Unarmed and Melee Weapon damage.",
    "is_playable": true,
    "is_trait": false,
    "id": "302037212",
    "edid": "PerkSteelJacket",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Strength", 7]
    ]
  },
  {
    "name": "Devil's Highway",
    "description": "When you choose the Devil's Highway perk, your Karma is instantly set to Very Evil.",
    "is_playable": true,
    "is_trait": false,
    "id": "151014509",
    "edid": "DLC03DevilsHighway",
    "requirements": [
      [">=", "Level", 44]
    ]
  },
  {
    "name": "Cass Conundrum",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444098",
    "edid": "PerkCass"
  },
  {
    "name": "Focused Fire",
    "description": "",
    "is_playable": true,
    "is_trait": false,
    "id": "117477762",
    "edid": "PerkJoshuaGraham"
  },
  {
    "name": "Fast Times",
    "description": "You've slowed things down enough to gain additional time when using Turbo.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436377",
    "edid": "TurboChallengePerk"
  },
  {
    "name": "Way of the Canaanite",
    "description": "You have learned the advanced weapon handling techniques of the New Canaanites. For you, all shots with .45 Auto Pistols have less spread and are twice as likely to score a critical hit.",
    "is_playable": false,
    "is_trait": false,
    "id": "33600245",
    "edid": "NVDLC02WayOfTheCanaanite"
  },
  {
    "name": "Camarader-E 1",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "67151362",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 2",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "67151362",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 3",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "67151362",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 4",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "67151362",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 5",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "67151362",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Implant C-13",
    "description": "Implant C-13 is a defense turret subroutine that has been modified for implantation into humans. It enhances accuracy and damage dealt against targets in the air by 10%.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370070",
    "edid": "NVDLC03ImplantC13Perk"
  },
  {
    "name": "Long, Lonesome Road",
    "description": "You left ED-E behind in Ulysses' Temple - not that you needed the help anyways. As long as you have no companions, your attacks inflict +10% damage and you have +10% accuracy in VATS.",
    "is_playable": false,
    "is_trait": false,
    "id": "67151580",
    "edid": "NVDLC04LonesomeRoadPerk"
  },
  {
    "name": "Sleepwalker",
    "description": "Left foot, right foot. Left leg, right leg. Once you get going, you can practically sleep on your feet. While walking or running at night, you recover sleep deprivation, at a rate of 1 per 2 seconds of walking.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333741",
    "edid": "ELYPerkSleepwalker",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Endurance", 4],
      [">=", "Agility", 4]
    ]
  },
  {
    "name": "Just Lucky I'm Alive",
    "description": "You've had lots of close calls. Whenever you finish a fight with less than 25% Health, your Luck increases by +4 for 3 minutes. You are also immune to critical hits, and your own critical hits inflict +50% damage. (Requires Neutral Karma.)",
    "is_playable": true,
    "is_trait": false,
    "id": "16826959",
    "edid": "NVDLC04JustLuckyImAlivePerk",
    "requirements": [
      [">=", "Level", 50]
    ]
  },
  {
    "name": "Last Laugh",
    "description": "If you lose more than 50% health damage during a single combat session, you will be 3x as likely to be critically hit, but you will gain twice the XP once combat ends.\n\n(This effect will stay active if you heal the health lost during that combat session.)",
    "is_playable": false,
    "is_trait": true,
    "id": "50417954",
    "edid": "ELYPerkLastLaugh"
  },
  {
    "name": "Reinforced Spine",
    "description": "Your spine is back in your body, but some advanced technologies remain: Your torso can be crippled again, but you've gained +1 Endurance and +2 DT.",
    "is_playable": false,
    "is_trait": false,
    "id": "50420668",
    "edid": "NVDLC03ReinforcedSpinePerk",
    "effects": [
      ["+", "Endurance", 1]
    ]

  },
  {
    "name": "DNAgent",
    "description": "Studying schematics on the abominations created at the Big MT has granted you a damage bonus (+10%) against Abominations.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370071",
    "edid": "NVDLC03DNAgentPerk"
  },
  {
    "name": "Why Do They Hunger?",
    "description": "Ever since you've heard about ghouls, one question has been wracking your brain: Why do they hunger?\n\n\n\n-They're definitely zombies. Ghouls suffer much less damage to all locations except the head, and they regain health equal to the damage they do to you on each hit.\n\n+They're definitely zombies. Ghouls instantly die when their head is crippled, and you gain bonus XP when you kill them.",
    "is_playable": false,
    "is_trait": false,
    "id": "50336824",
    "edid": "ELYPerkWhyDoTheyHunger"
  },
  {
    "name": "Hack N' Slash 1",
    "description": "You hack just a little faster.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436382",
    "edid": "MeleeWeaponsChallengePerk"
  },
  {
    "name": "Hack N' Slash 2",
    "description": "You hack just a little faster.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436382",
    "edid": "MeleeWeaponsChallengePerk"
  },
  {
    "name": "Big Guns Bobblehead",
    "description": "The best way to win an argument is to be the loudest.\n\n\n\nYou now do 5% more damage with any Big Gun.",
    "is_playable": false,
    "is_trait": false,
    "id": "201364049",
    "edid": "TTWBobbleheadPerkBigGuns"
  },
  {
    "name": "Unclean Living",
    "description": "When Dean is a companion, he grants you a brief period of immunity when you enter a cloud pocket, and reduces cloud pocket health damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "16812591",
    "edid": "NVDLC01UncleanLiving"
  },
  {
    "name": "Shhh!",
    "description": "You're more the sneakin' type, than the speakin' type. You suffer -7 to Speech and Barter, but gain +10 Sneak.",
    "is_playable": true,
    "is_trait": true,
    "id": "285227426",
    "edid": "sssPerkShhh",
    "requirements": [
      ["<", "Charisma", 5],
      [">=", "Agility", 4]
    ],
    "effects": [
      ["+", "Sneak", 10],
      ["-", "Barter", 7],
      ["-", "Speech", 7]
    ]

  },
  {
    "name": "Burden to Bear",
    "description": "The wastelander with the most gear wins! (... or at least survives.) You can now carry an additional 50 pounds of gear (stacks with Strong Back perk).",
    "is_playable": true,
    "is_trait": false,
    "id": "16826960",
    "edid": "NVDLC04BurdenToBearPerk",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Strength", 6],
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Hobbler",
    "description": "With the Hobbler perk, your attacks to legs deal double limb damage, your run speed is increased by 10% with each crippled leg, and you gain +5 DT penetration and 25% better chance to hit an opponent's legs in V.A.T.S.",
    "is_playable": true,
    "is_trait": false,
    "id": "16847977",
    "edid": "NVDLC01Hobbler",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Perception", 7]
    ]
  },
  {
    "name": "Bonds of Steel",
    "description": "COMPANION ONLY - Veronica gains +4 DT.",
    "is_playable": false,
    "is_trait": false,
    "id": "1536334",
    "edid": "BondsOfSteel",
    "requirements": [
      [">=", "Endurance", 5]
    ]
  },
  {
    "name": "Veronica's Values",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444107",
    "edid": "PerkVeronica"
  },
  {
    "name": "Weapon Requirements",
    "description": "0 - STR gun spread\n\n1 - SKL gun spread\n\n2 - SKL gun reload\n\n3 - STR normal melee speed\n\n4 - STR auto melee damage\n\n5 - SKL melee damage",
    "is_playable": false,
    "is_trait": false,
    "id": "2781",
    "edid": "migReqsPerk"
  },
  {
    "name": "Road Rage",
    "description": "Redden the road, release the rage! With the Road Rage perk, you gain +25% attack speed, +10% damage, and -10% spread when using knuckle weapons, Chinese/.32 pistols, tire irons, throwing spears, single and double barrel shotguns, lead pipes, and other wasteland weapons.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214720",
    "edid": "sssPerkRoadRage",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Endurance", 6],
      [">=", "Guns", 35],
      [">=", "Unarmed", 25],
      [">=", "Survival", 50]
    ]
  },
  {
    "name": "Escalator to Heaven",
    "description": "When you choose the Escalator to Heaven perk, your Karma is instantly set to Very Good.",
    "is_playable": false,
    "is_trait": false,
    "id": "134237295",
    "edid": "DLC03EscalatorToHeaven",
    "requirements": [
      [">=", "Level", 24]
    ]
  },
  {
    "name": "Guns Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332741",
    "edid": "sssPerkTaggedGuns"
  },
  {
    "name": "Mirelurk Massacre",
    "description": "You may not have slipped surreptitiously in and out of the Anchorage War memorial, but you did learn how to deal with Mirelurks a little better. You've gained a 5% damage bonus against targets in water.",
    "is_playable": false,
    "is_trait": false,
    "id": "302011722",
    "edid": "PerkMirelurkMurder",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Lady Killer",
    "description": "You gain +5 Speech and Barter and +1 Charisma when talking to women, but suffer -5 Speech and Barter when talking to men.",
    "is_playable": true,
    "is_trait": true,
    "id": "609977",
    "edid": "LadyKiller",
    "requirements": [
      [">=", "Charisma", 6]
    ]
  },
  {
    "name": "Logan's Loophole",
    "description": "No one's going to put you out to pasture 'cause you're going to stay young (and level 30) forever! You'll never again become addicted to chems, and they'll last twice as long... but after 30 you can kiss experience, perks, and skill points goodbye!",
    "is_playable": true,
    "is_trait": true,
    "id": "16852846",
    "edid": "NVDLC03TraitLogansLoophole"
  },
  {
    "name": "Ain't Like That Now",
    "description": "Maybe you were bad once, but you ain't like that now. Your Karma has been reset, you regenerate AP 20% faster, and your attack speed is increased by 20%. You are also 25% less susceptible to critical hits from Evil or Very Evil characters. (Requires Bad Karma.)",
    "is_playable": true,
    "is_trait": false,
    "id": "67151689",
    "edid": "NVDLC04AintLikeThatNowPerk",
    "requirements": [
      [">=", "Level", 50],
      ["not", ["has perk", "Thought You Died"]],
      ["not", ["has perk", "Just Lucky I'm Alive"]]
    ]
  },
  {
    "name": "Perception Bobblehead",
    "description": "Only through observation will you perceive weakness.\n\n\n\nYou are now 10% more accurate with all ballistic and energy weapons.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362661",
    "edid": "TTWBobbleheadPerkPerception"
  },
  {
    "name": "World In My Eyes",
    "description": "When you're sighting with a weapon, the only thing that matters is the world in front of you. You gain +3 Perception while aiming.",
    "is_playable": true,
    "is_trait": false,
    "id": "302223301",
    "edid": "PerkWorldInMyEyes",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Perception", 4],
      ["or", [">=", "Guns", 45], [">=", "Energy Weapons", 45], [">=", "Big Guns", 45]]
    ]
  },
  {
    "name": "Luck Bonus",
    "description": "Based on your luck, there is a small chance that a mine will prove to be a dud.",
    "is_playable": false,
    "is_trait": false,
    "id": "302138251",
    "edid": "SRLuckBonus"
  },
  {
    "name": "Search and Mark",
    "description": "While Rex is a companion, chems and unequipped firearms and ammunition within a short distance are highlighted while you aim.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426961",
    "edid": "SearchAndMark"
  },
  {
    "name": "Trader's Touch",
    "description": "Your understanding of the markets is second-to-none, and you intend to prove it to the entire Mojave, though your pack brahmin is long dead. You suffer -30 carry weight, but you gain +15 Barter after each transaction, which lasts until you barter with a merchant twice in a row.\n\n(Requires tag skill: Barter and Speech)",
    "is_playable": true,
    "is_trait": true,
    "id": "285328501",
    "edid": "sssPerkTradersTouch",
    "requirements": [
      [">=", "Charisma", 7],
      [">=", "Intelligence", 5],
      [">=", "Luck", 3],
      ["tagged", "Speech"],
      ["tagged", "Barter"]
    ]
  },
  {
    "name": "Puppies!",
    "description": "With the Puppies! perk, if Dogmeat dies, you'll be able to get a new canine companion from his litter of puppies. Just wait a bit, and you'll find your new furry friend waiting outside Vault 101.",
    "is_playable": true,
    "is_trait": false,
    "id": "151007761",
    "edid": "DLC03Puppies",
    "requirements": [
      [">=", "Level", 22]
    ]
  },
  {
    "name": "Chemist",
    "description": "With the Chemist perk, any chems you take last twice as long.",
    "is_playable": true,
    "is_trait": false,
    "id": "628781",
    "edid": "Chemist",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Medicine", 60]
    ]
  },
  {
    "name": "Typing Tutor",
    "description": "You're not concerned with formulas and numbers and the scientific method. You just gotta get your fingers tapping on a keyboard, and you feel right at home. You gain +15 Science while hacking, but suffer -10 at all other times.\n\n(Exclusive from Theories and Hypotheses)",
    "is_playable": true,
    "is_trait": true,
    "id": "285265321",
    "edid": "sssPerkTypingTutor",
    "requirements": [
      ["<", "Intelligence", 8],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Calm Heart",
    "description": "Cass has +50 hit points.",
    "is_playable": false,
    "is_trait": false,
    "id": "1454923",
    "edid": "CalmHeart"
  },
  {
    "name": "Gray Matters",
    "description": "Protect what's important.  With the Gray Matters perk you'll receive 25% less damage when hit in the head.",
    "is_playable": false,
    "is_trait": false,
    "id": "151048701",
    "edid": "DLC04GrayMatters"
  },
  {
    "name": "Survival Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332751",
    "edid": "sssPerkTaggedSurvival"
  },
  {
    "name": "Gallows Humor",
    "description": "You know just the right time to \"lighten\" the mood with a dark joke. (Requires Evil Karma)\n\n\n\n+10 Speech and Barter for 30 seconds after killing something.\n\n+25% increased XP and +1 Charisma for 30 seconds after killing something if you have an Evil or Very Evil companion.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333760",
    "edid": "ELYPerkGallowsHumor",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Perception", 5],
      [">=", "Charisma", 5]
    ]
  },
  {
    "name": "Hot Blooded",
    "description": "When your health drops below 50%, your attack speed is increased by 25%, but your weapon condition damage is doubled.",
    "is_playable": true,
    "is_trait": true,
    "id": "50407275",
    "edid": "NVDLC03TraitHotBlooded",
    "requirements": [
      [">=", "Agility", 4]
    ]
  },
  {
    "name": "Aggressor",
    "description": "You've hardened your heart and chosen the path of violence. You permanently gain +5 to your combat stats.",
    "is_playable": false,
    "is_trait": true,
    "id": "50336836",
    "edid": "ELYPerkAggressor",
    "effects": [
      ["+", "Melee Weapons", 5],
      ["+", "Unarmed", 5],
      ["+", "Guns", 5],
      ["+", "Energy Weapons", 5],
      ["+", "Explosives", 5]
    ]

  },
  {
    "name": "Reinforced Spine",
    "description": "Your spine has been augmented with advanced technologies: Your torso can no longer be crippled and your Strength (STR) and Damage Threshold (DT) have been increased (+1).",
    "is_playable": false,
    "is_trait": false,
    "id": "16867403",
    "edid": "NVDLC03ReinforcedSpineMirrorPerk",
    "effects": [
      ["+", "Strength", 1]
    ]

  },
  {
    "name": "Voracious Reader",
    "description": "You don't just read books, you tear into them. Damaged books you pick up become blank magazines, which you can use to copy your existing skill magazines at a workbench (or convert blank magazines back to books).",
    "is_playable": false,
    "is_trait": false,
    "id": "67158611",
    "edid": "NVDLC04VoraciousReaderPerk",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "Camarader-E 1",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "16819714",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 2",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "16819714",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 3",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "16819714",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 4",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "16819714",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Camarader-E 5",
    "description": "Traveling with ED-E has given you a chance to bond with him, unlocking five ranks of potential bonuses. While ED-E is in your party, you both gain:\n\n\n\nRank 1 - Weapon Condition Bonus (daily 25% weapon condition repair dialogue option)\n\nRank 2 - Energy Cell Manufacture (daily Energy or Microfusion Cell creation dialogue option)\n\nRank 3 - Increased DT (+2 DT)\n\nRank 4 - Damage Bonus (+5 beam weapon damage)\n\nRank 5 - V.A.T.S. Attack Bonus (+5% V.A.T.S. targeting)",
    "is_playable": false,
    "is_trait": false,
    "id": "16819714",
    "edid": "NVDLC04CamaraderEPerk"
  },
  {
    "name": "Atomic!",
    "description": "With the Atomic! perk, you are 25% faster and stronger whenever you're basking in the warm glow of radiation. Outside irradiated areas, your Action Points (AP) regenerate faster and faster the higher your level of radiation sickness becomes.",
    "is_playable": true,
    "is_trait": false,
    "id": "16810001",
    "edid": "NVDLC03AtomicPerk",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Punga Power!",
    "description": "Behold the power of the Punga! When harvesting Punga plants, you will receive more fruit.",
    "is_playable": false,
    "is_trait": false,
    "id": "167841943",
    "edid": "DLC04PungaPoweralt02"
  },
  {
    "name": "Discus Champ",
    "description": "There's nobody quite as good at throwing heavy, flat objects as you are! Your thrown mines travel with 2x/1.75x/1.5x speed while moving forward/backward/sideways, respectively.\n\nYou also gain +50% attack speed with mines, which increases to +75% while moving!",
    "is_playable": false,
    "is_trait": false,
    "id": "285218972",
    "edid": "sssPerkDiscusChamp",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Strength", 5],
      [">=", "Explosives", 25]
    ]
  },
  {
    "name": "Impact Play",
    "description": "At first it was just bleeding that got your heart racing, but you've developed a taste for more percussive punishment. Each time you are hit with an Unarmed or Melee Weapon, you gain +10% Damage Resistance for 15 seconds, up to a maximum of +50%.",
    "is_playable": true,
    "is_trait": false,
    "id": "50378178",
    "edid": "ELYPerkImpactPlay",
    "requirements": [
      [">=", "Level", 10],
      ["has perk", "Masochist"],
      [">=", "Strength", 3],
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "Blithe Spirit",
    "description": "While Hope is a companion, your chances of chem addiction is decreased by 50% and your health recovery increases by 10%.",
    "is_playable": false,
    "is_trait": false,
    "id": "201364208",
    "edid": "aaaHopesPerk"
  },
  {
    "name": "Signal Interference",
    "description": "Christine's technical assistance grants you a brief delay to bomb collar activation near speakers, and increases the time before the collar explodes.",
    "is_playable": false,
    "is_trait": false,
    "id": "16812590",
    "edid": "NVDLC01SignalInterference"
  },
  {
    "name": "Bug Stomper 1",
    "description": "Pulling the legs off of ants suits you well. You've gained a damage bonus against insects.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436375",
    "edid": "InsectChallengePerk"
  },
  {
    "name": "Bug Stomper 2",
    "description": "Pulling the legs off of ants suits you well. You've gained a damage bonus against insects.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436375",
    "edid": "InsectChallengePerk"
  },
  {
    "name": "Bug Stomper 3",
    "description": "Pulling the legs off of ants suits you well. You've gained a damage bonus against insects.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436375",
    "edid": "InsectChallengePerk"
  },
  {
    "name": "Comprehension",
    "description": "With the Comprehension perk, you gain double the bonus from reading magazines and one additional point from skill books.",
    "is_playable": false,
    "is_trait": false,
    "id": "204257",
    "edid": "Comprehension",
    "requirements": [
      [">=", "Intelligence", 8]
    ]
  },
  {
    "name": "Scrounger",
    "description": "With the Scrounger perk, you'll find considerably more ammunition in containers than you normally would.  ",
    "is_playable": true,
    "is_trait": false,
    "id": "204202",
    "edid": "Scrounger",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Survival", 50],
      [">=", "Luck", 3]
    ]
  },
  {
    "name": "Staunch Defender",
    "description": "With the Staunch Defender Perk, you gain +5 DT while standing still in combat.",
    "is_playable": false,
    "is_trait": false,
    "id": "151048698",
    "edid": "DLC04SuperiorDefender"
  },
  {
    "name": "Trigger Discipline",
    "description": "While using Guns, Energy Weapons, or Big Guns, you fire 20% more slowly, but your spread is reduced by 20%.",
    "is_playable": true,
    "is_trait": true,
    "id": "1269448",
    "edid": "TriggerDiscipline",
    "requirements": [
      [">=", "Intelligence", 4]
    ]
  },
  {
    "name": "Medicine Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332752",
    "edid": "sssPerkTaggedMedicine"
  },
  {
    "name": "The Contract",
    "description": "Charon is absolutely loyal to the holder of his contract, putting himself in harm's way to keep them safe. Unfortunately for him, his contract holder lives a dangerous, adventurous life... For each 10% health you are below maximum, you gain 1 DT.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359008",
    "edid": "TTWFollowerPerkCharon"
  },
  {
    "name": "Night Person",
    "description": "When the sun is down, you gain +1 to Intelligence and Perception, but you suffer an equal reduction to those stats during the day.",
    "is_playable": true,
    "is_trait": true,
    "id": "609981",
    "edid": "NightPerson",
    "requirements": [
      [">=", "Perception", 4],
      ["not", ["has perk", "Solar Powered"]]
    ]
  },
  {
    "name": "Contract Killer",
    "description": "Once you have the Contract Killer perk, any good character you kill will have an ear on their corpse. This ear can then be sold to a certain person (whose identity is disclosed when you take the perk) for caps and negative Karma  (Requires Evil Karma).",
    "is_playable": false,
    "is_trait": false,
    "id": "100945064",
    "edid": "ContractKiller",
    "requirements": [
      [">=", "Level", 14]
    ]
  },
  {
    "name": "Pyromaniac - Ammo",
    "description": "Pyromaniac companion perk for ammo",
    "is_playable": false,
    "is_trait": false,
    "id": "33652346",
    "edid": "migAmmoPyroPerk"
  },
  {
    "name": "Perception Bonus",
    "description": "Increases your VATS hit chance based on your perception (or decreases it, if your perception is < 5).",
    "is_playable": false,
    "is_trait": false,
    "id": "100714386",
    "edid": "SRPerkPerceptionBonus"
  },
  {
    "name": "Servant Of Chaos",
    "description": "You swear loyalty to no creed, no culture, and no crown. As a Servant Of Chaos, you will gain XP anytime your karma changes, equal to the degree of the change.",
    "is_playable": true,
    "is_trait": false,
    "id": "50382772",
    "edid": "ELYPerkServantOfChaos",
    "requirements": [
      [">=", "Level", 8]
    ]
  },
  {
    "name": "Marked",
    "description": "You've faced torture at the hands of the Marked Men... now it's payback time. (+10% Damage Resistance and +10% Damage against the Marked Men)",
    "is_playable": false,
    "is_trait": false,
    "id": "16819933",
    "edid": "NVDLC04MarkedPerk"
  },
  {
    "name": "Insolent",
    "description": "You're just absolutely intolerable. At every opportunity, you insult and demean people. Your permanent Speech and Barter skills will never increase past 15, but your selfish attitude has shown you a new way to approach life in the wasteland. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355196",
    "edid": "ELYFlawRude",
    "requirements": [
      ["<", "Charisma", 3]
    ]
  },
  {
    "name": "Human Sieve",
    "description": "Water runs through you like a river into the sea. Increases to your dehydration level will have their magnitude doubled, but your thirst has led you to a new conclusion. (You will be able to select another perk immediately.)",
    "is_playable": false,
    "is_trait": true,
    "id": "50355192",
    "edid": "ELYFlawSieve"
  },
  {
    "name": "And Stay Back",
    "description": "You've discovered a Shotgun technique that has a chance to knock an enemy back on any hits that penetrate the target's DT. Slugs have a much greater chance to cause knockdown.",
    "is_playable": true,
    "is_trait": false,
    "id": "16839192",
    "edid": "NVDLC01AndStayBack",
    "requirements": [
      [">=", "Level", 50],
      [">=", "Guns", 70],
      ["has perk", "Shotgun Surgeon"]
    ]
  },
  {
    "name": "Ninja",
    "description": "The Ninja perk grants you the power of the fabled shadow warriors. When attacking with either Melee or Unarmed, you gain a +15% critical chance on every strike. Sneak attack criticals do 25% more damage than normal.",
    "is_playable": true,
    "is_trait": false,
    "id": "204236",
    "edid": "Ninja",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Sneak", 80],
      ["or", [">=", "Melee Weapons", 80], [">=", "Unarmed", 80]]
    ]
  },
  {
    "name": "Buck Wild",
    "description": "It may not be mating season, but when you've got four walls around you and a shotgun in your hand, you're the most aggressive stag in the pack! Your shotgun spread, attack speed, and damage are all increased by 25% while in an interior.",
    "is_playable": true,
    "is_trait": false,
    "id": "50433253",
    "edid": "ELYPerkBuckWild",
    "requirements": [
      [">=", "Level", 25],
      [">=", "Agility", 8],
      [">=", "Guns", 75]
    ]
  },
  {
    "name": "Immersive Minigames",
    "description": "Alternate Entry skill perk for bypassing broken locks.",
    "is_playable": false,
    "is_trait": false,
    "id": "16807212",
    "edid": "RTLHperk"
  },
  {
    "name": "Root Of All Evil",
    "description": "\"Money has never made man happy, nor will it, for there is nothing in its nature to produce happiness\"\n\nYou lose karma every time you gain caps, but your impecunious nature has shown you more judicious practices for survival in the wasteland that don't involve money. (You will gain another perk immediately.) (Requires Good Karma)",
    "is_playable": true,
    "is_trait": true,
    "id": "50433254",
    "edid": "ELYFlawRootOfAllEvil"
  },
  {
    "name": "Master Trader",
    "description": "When you take the Master Trader perk, you gain a 3% discount per 10 points in Speech.",
    "is_playable": true,
    "is_trait": false,
    "id": "100867512",
    "edid": "MasterTrader",
    "requirements": [
      [">=", "Level", 26],
      [">=", "Charisma", 7],
      [">=", "Barter", 50],
      [">=", "Speech", 50]
    ]
  },
  {
    "name": "Warmonger",
    "description": "You've figured out on your own how to build all the custom weapons! With the Warmonger perk, all custom weapon types become available to you without the schematics.",
    "is_playable": false,
    "is_trait": false,
    "id": "150999486",
    "edid": "DLC03Warmonger",
    "requirements": [
      [">=", "Level", 26],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "Beautiful Beatdown",
    "description": "Your Unarmed weapon AP Cost is reduced by 20%.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436383",
    "edid": "UnarmedChallengePerk"
  },
  {
    "name": "Arcade's Antagonism",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444102",
    "edid": "PerkArcade"
  },
  {
    "name": "Robotics Expert",
    "description": "With the Robotics Expert perk, you do an additional 7% damage per 10 points in Science above 50 to robots. In addition, activating a hostile robot while undetected will allow you to put that robot into a permanent shutdown state.",
    "is_playable": true,
    "is_trait": false,
    "id": "204226",
    "edid": "RoboticsExpert",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Science", 50],
      [">=", "Intelligence", 5]
    ]
  },
  {
    "name": "Lawbringer",
    "description": "Once you have the Lawbringer perk, any evil character you kill will have a finger on their corpse. This finger can then be sold to a certain person (whose identity is disclosed when you take the perk) for caps and positive Karma (Requires Good Karma).  ",
    "is_playable": true,
    "is_trait": false,
    "id": "100945068",
    "edid": "Lawbringer",
    "requirements": [
      [">=", "Level", 14]
    ]
  },
  {
    "name": "Agility Speed Bonus",
    "description": "Makes agility actually affect your run speed.",
    "is_playable": false,
    "is_trait": false,
    "id": "100811657",
    "edid": "SRAgilityBonus"
  },
  {
    "name": "Khan Trick",
    "description": "By relying on the dirty unarmed fighting tricks of the Great Khans, you can throw dust into the eyes of your enemies, temporarily stunning them. Perform a Power Attack while moving left or right to execute the Khan Trick.",
    "is_playable": false,
    "is_trait": false,
    "id": "1423591",
    "edid": "KhanTrick"
  },
  {
    "name": "Backpack AP Regen Reduction",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "301991956",
    "edid": "PerkSTARBackpackAPRegenReduction"
  },
  {
    "name": "Karmic Rebalance",
    "description": "When you choose the Karmic Rebalance perk, your Karma is instantly set to Neutral.",
    "is_playable": true,
    "is_trait": false,
    "id": "151014510",
    "edid": "DLC03KarmicRebalance",
    "requirements": [
      [">=", "Level", 44]
    ]
  },
  {
    "name": "Kinetic Shot",
    "description": "You've tinkered enough with Plasma Weapons to be able to make them explode on impact 5% of the time, sending your opponent prone in the process.",
    "is_playable": false,
    "is_trait": false,
    "id": "16983557",
    "edid": "ALKineticShot",
    "requirements": [
      [">=", "Energy Weapons", 70]
    ]
  },
  {
    "name": "Dog Days",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117511430",
    "edid": "PerkDogmeat",
    "effects": [
      ["+", "Sneak", 50]
    ]

  },
  {
    "name": "Burden to Bear",
    "description": "The wastelander with the most gear wins! (... or at least survives.) Medium and heavy armor no longer impair movement speed.",
    "is_playable": false,
    "is_trait": false,
    "id": "100726546",
    "edid": "PWBVxBurdenToBearPerk",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Strength", 8],
      [">=", "Endurance", 6]
    ]
  },
  {
    "name": "Sarah's Skills",
    "description": "",
    "is_playable": true,
    "is_trait": false,
    "id": "117490402",
    "edid": "PerkSarah"
  },
  {
    "name": "Alt Overencumbrance",
    "description": "Handles modifiers.",
    "is_playable": false,
    "is_trait": false,
    "id": "16782326",
    "edid": "a0PxAltOverencumbrancePERK"
  },
  {
    "name": "Heart-full",
    "description": "Your body once again pumps with blood and passion. Your poison resistance has increased by 50%.",
    "is_playable": false,
    "is_trait": false,
    "id": "50420658",
    "edid": "NVDLC03HeartfullPerk"
  },
  {
    "name": "Big Iron",
    "description": "Like the legendary ranger of old, your handgun handling is extraordinary - only when you face your opponent in a fair fight. During combat, while not sneaking and using a handgun, you gain +20% draw speed, as well as +35% attack speed for three seconds after unholstering your weapon.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214725",
    "edid": "sssPerkBigIron",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Agility", 8],
      [">=", "Guns", 60]
    ]
  },
  {
    "name": "Blade In The Shadow",
    "description": "You're most devastating when unnoticed. Your bladed weapon attacks gain +10 damage while outside of your target's line of sight, and another +10 and +50% crit. damage if they are also outside of combat.",
    "is_playable": true,
    "is_trait": false,
    "id": "285235869",
    "edid": "sssPerkBladeInTheShadow",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Melee Weapons", 30],
      [">=", "Sneak", 30]
    ]
  },
  {
    "name": "Implant GRX 1",
    "description": "You gain a non-addictive subdermal Turbo (chem) injector. This perk may be taken twice, with the second rank increasing the effect from 2 to 3 seconds and the uses per day from 5 to 10. [Activated in the Pip-Boy inventory.]",
    "is_playable": true,
    "is_trait": false,
    "id": "16817480",
    "edid": "NVDLC03ImplantGRXPerk",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "Implant GRX 2",
    "description": "You gain a non-addictive subdermal Turbo (chem) injector. This perk may be taken twice, with the second rank increasing the effect from 2 to 3 seconds and the uses per day from 5 to 10. [Activated in the Pip-Boy inventory.]",
    "is_playable": true,
    "is_trait": false,
    "id": "16817480",
    "edid": "NVDLC03ImplantGRXPerk",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "Metacarpal Mayhem",
    "description": "Your fists are practically weapons of mass destruction! Your unarmed power attack speed is increased by 15%, your unarmed crit chance increases with your Strength, and your unarmed crit damage increases with Endurance, both applying a multiplicative x1.01 per point, up to a maximum of +21%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285294773",
    "edid": "sssPerkMetacarpalMayhem",
    "requirements": [
      [">=", "Level", 50],
      [">=", "Strength", 8],
      [">=", "Endurance", 8],
      [">=", "Unarmed", 100]
    ]
  },
  {
    "name": "Maze Runner",
    "description": "You're most agile when cornered; you gain +10% movement speed while indoors and not sneaking. You also gain an additional +2 Agility while in combat in an interior.",
    "is_playable": true,
    "is_trait": false,
    "id": "285235876",
    "edid": "sssPerkMazeRunner",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Agility", 6],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Melee Weapons Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332747",
    "edid": "sssPerkTaggedMeleeWeapons"
  },
  {
    "name": "Collaborator",
    "description": "Your time at the Sierra Madre has taught you much about working with others. Your Charisma is increased by 1 when you are indoors.",
    "is_playable": false,
    "is_trait": false,
    "id": "167776672",
    "edid": "sDMPerkCollaborator"
  },
  {
    "name": "No Rhyme Or Reason",
    "description": "Therapy Result! You don't give much credit to that Causality B.S. : things happen or they don't. You mainly rely on Luck, and it shows. You gain 2% more chance to do critical hits.",
    "is_playable": false,
    "is_trait": false,
    "id": "16994150",
    "edid": "ALNoRhymeOrReason",
    "requirements": [
      [">=", "Perception", 6],
      [">=", "Luck", 6]
    ]
  },
  {
    "name": "Ghoul Gal",
    "description": "You can sympathize with the plight of the ghouls in Underworld - they're just trying to survive and get by in a world that often shoots at them, unprovoked.\n\nYou've gained +1 Charisma and +8/5 Speech/Barter bonuses while speaking to any ghoul, and +5 DT when attacked by a ghoul, which increases to +8 if that ghoul is feral.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558045",
    "edid": "PerkFacUnderworldGirl",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Rules of Nature",
    "description": "You're fiercer when you're on the brink of death; but so is everyone else. When your health is below 25%, you gain +8% crit chance, which increases to +13% when using a melee or unarmed weapon, but your enemies also gain the same bonus while they're below 25% health.",
    "is_playable": true,
    "is_trait": true,
    "id": "285294774",
    "edid": "sssPerkRulesOfNature",
    "requirements": [
      [">=", "Level", 14]
    ]
  },
  {
    "name": "Polar Personality",
    "description": "You seem to bounce between acting aggressive and kind.\n\n\n\n+At odd numbered levels, you gain +4 to Melee Weapons, Unarmed, Guns, Explosives, and Energy Weapons, but your social stats are reduced by -3.\n\n\n\n+At even numbered levels, you gain +4 to Speech, Barter, and Medicine, but your combat stats are reduced by -2.",
    "is_playable": true,
    "is_trait": true,
    "id": "50336833",
    "edid": "ELYPerkPolarPersonality"
  },
  {
    "name": "Ferocious Loyalty",
    "description": "The power of your personality inspires die-hard loyalty from your followers. When you drop below 50% Health, your companions temporarily gain much greater resistance to damage.",
    "is_playable": true,
    "is_trait": false,
    "id": "1462656",
    "edid": "FerociousLoyalty",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Charisma", 6]
    ]
  },
  {
    "name": "People Pleaser",
    "description": "You've excised your taste for violence and sworn yourself to peaceful solutions. You permanently gain +6 to your social stats.",
    "is_playable": false,
    "is_trait": true,
    "id": "50336839",
    "edid": "ELYPerkPeoplePleaser",
    "effects": [
      ["+", "Barter", 6],
      ["+", "Speech", 6],
      ["+", "Medicine", 6]
    ]

  },
  {
    "name": "Wolf In Sheep's Clothing",
    "description": "You're a master of disguise; while you wear the faction armor of a faction that you have a negative reputation with, you will gain +2 Charisma, +10 Sneak, and +5 Critical Chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "50382771",
    "edid": "ELYPerkWolfInSheepsClothing",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Junior Survivor",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you're still alive to tell the tale. You've gained +2% bonus to Poison Resistance, Radiation Resistance and Damage Resistance.",
    "is_playable": false,
    "is_trait": false,
    "id": "209365",
    "edid": "MS03Perk1C"
  },
  {
    "name": "Gun Strength Fail",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "692246",
    "edid": "NVWeaponSpreadPenalty1"
  },
  {
    "name": "Commando 1",
    "description": "While using a rifle (or similar two-handed weapon), your accuracy is increased by 15% with each rank of the Commando perk.",
    "is_playable": true,
    "is_trait": false,
    "id": "628776",
    "edid": "Commando",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Perception", 6],
      ["or", [">=", "Guns", 40], [">=", "Energy Weapons", 40], [">=", "Big Guns", 40]]
    ]
  },
  {
    "name": "Commando 2",
    "description": "While using a rifle (or similar two-handed weapon), your accuracy is increased by 15% with each rank of the Commando perk.",
    "is_playable": true,
    "is_trait": false,
    "id": "628776",
    "edid": "Commando",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Perception", 6],
      ["or", [">=", "Guns", 40], [">=", "Energy Weapons", 40], [">=", "Big Guns", 40]]
    ]
  },
  {
    "name": "Beast Of Burden",
    "description": "While Coco is a companion, you can carry an extra 25 lbs, and your \"trader of the Mojave\" aesthetic also provides you +10 Barter.",
    "is_playable": false,
    "is_trait": false,
    "id": "83903744",
    "edid": "Vault76BeastofBurdenPerk",
    "effects": [
      ["+", "Barter", 10]
    ]

  },
  {
    "name": "Sprint Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "67143685",
    "edid": "JVSPerk"
  },
  {
    "name": "Karmic Rebalance",
    "description": "When you choose the Karmic Rebalance perk, your Karma is instantly set to Neutral.",
    "is_playable": false,
    "is_trait": false,
    "id": "134237294",
    "edid": "DLC03KarmicRebalance",
    "requirements": [
      [">=", "Level", 24]
    ]
  },
  {
    "name": "Charisma Bobblehead",
    "description": "Nothing says pizzazz like a winning smile.\n\n\n\nCompanions now deal an additional 10% damage and have an additional 10% damage resistance.",
    "is_playable": false,
    "is_trait": false,
    "id": "201822343",
    "edid": "TTWBobbleheadPerkCharisma"
  },
  {
    "name": "Lonesome Road",
    "description": "You left ED-E behind in Ulysses' Temple - not that you needed the help anyways. As long as you have no companions, your attacks inflict +10% damage and you have +10% accuracy in VATS.",
    "is_playable": false,
    "is_trait": false,
    "id": "16819932",
    "edid": "NVDLC04LonesomeRoadPerk"
  },
  {
    "name": "Explosives Bobblehead",
    "description": "The best way to solve a problem is to make it go away.\n\n\n\nExplosives now have 10% less spread.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362668",
    "edid": "TTWBobbleheadPerkExplosives"
  },
  {
    "name": "Bullet Time Perk",
    "description": "Perks effecting VATS will also give bonuses during Bullet Time.\n\n12) Camarader-E - DLC04\n\n11) Lonesome Road - DLC04\n\n10) Sneering Imperialist - DLC02\n\n8) Plasma Spaz\n\n7) Mysterious Stranger\n\n6) Miss Fortune\n\n4) Wired Reflexes\n\n3) Gunslinger\n\n1) Commando",
    "is_playable": false,
    "is_trait": false,
    "id": "67151879",
    "edid": "JBTPerk"
  },
  {
    "name": "Blue Moon",
    "description": "Under the calming gaze of the moon, from 9 p.m. to 5 a.m., you gain +5% crit. chance, and +50% crit. damage while also using a scope.",
    "is_playable": true,
    "is_trait": false,
    "id": "285223206",
    "edid": "sssPerkBlueMoon",
    "requirements": [
      [">=", "Level", 24],
      [">=", "Perception", 7],
      [">=", "Luck", 7]
    ]
  },
  {
    "name": "Devil's Advocate",
    "description": "You're most convincing when you lie; people immediately mistrust you when you're being truthful. You've gained +25 Speech, but only while your karma is Very Evil. (Requires Evil Karma.)",
    "is_playable": true,
    "is_trait": false,
    "id": "285324284",
    "edid": "sssPerkDevilsAdvocate",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Charisma", 8]
    ]
  },
  {
    "name": "New Eden",
    "description": "The beauty and tranquility of Oasis has touched your soul. You've gained a 4% increase to recovered health, +6% carry weight, and -10% radiation intake.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558034",
    "edid": "PerkFacOasis",
    "requirements": [
      [">=", "Level", 6]
    ]
  },
  {
    "name": "Junior Survivor",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you're still alive to tell the tale. You've gained +2% bonus to Poison Resistance and Radiation Resistance, and a +1% bonus to Critical Chance.",
    "is_playable": false,
    "is_trait": false,
    "id": "209367",
    "edid": "MS03Perk1E"
  },
  {
    "name": "Home on the Range",
    "description": "Whenever you interact with a campfire, you have the option of sleeping, with all the benefits that sleep brings.",
    "is_playable": true,
    "is_trait": false,
    "id": "16823027",
    "edid": "NVDLC02HomeOnTheRange",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Survival", 70]
    ]
  },
  {
    "name": "Freeze!",
    "description": "Hands in the air! Keep 'em there! Don't move a muscle! One wrong move, and I'll blow you away, punk!\n\n\n\n+25% accuracy in V.A.T.S. while not moving.\n\n-15% accuracy outside of V.A.T.S.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333738",
    "edid": "ELYPerkFreeze",
    "requirements": [
      [">=", "Level", 2],
      ["or", [">=", "Perception", 5], ["has perk", "Trigger Discipline"]]
    ]
  },
  {
    "name": "Tunnel Snakes Rule",
    "description": "Butch is a gang member at heart, and he does better with a sense of belonging. While Butch is in your party, you both gain +5% Damage if he is using the same weapon as you, and you both gain +5% DR if he is using the same armor as you, with an extra +5% DR if they are Tunnel Snake outfits.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359005",
    "edid": "TTWFollowerPerkButch"
  },
  {
    "name": "Sunglasses At Night",
    "description": "As you peer through the darkened lenses of your shades, you're beginning to see a reflection of the visions in your own eyes. While those squares might think your specs are bogus, you know your cheaters are choice.\n\nYou've gained +2 Charisma while wearing sunglasses indoors and at night!",
    "is_playable": false,
    "is_trait": false,
    "id": "50459253",
    "edid": "ELYPerkSunglassesAtNightComplete"
  },
  {
    "name": "Animal Friend",
    "description": "With the Animal Friend trait, animals come to your aid in combat, but never against another animal, and your weapon damage is reduced by 50% against animals, mutated animals, and mutated insects.",
    "is_playable": true,
    "is_trait": true,
    "id": "204213",
    "edid": "AnimalFriend",
    "requirements": [
      [">=", "Charisma", 6],
      ["or", [">=", "Charisma", 8], [">=", "Intelligence", 9]]
    ]
  },
  {
    "name": "Pitt Fighter",
    "description": "The vicious fights in the Hole have left you stronger. Both your damage and radiation resistance have been increased by +3%.",
    "is_playable": false,
    "is_trait": false,
    "id": "134247402",
    "edid": "DLC01PittFighter"
  },
  {
    "name": "Crusader",
    "description": "Therapy Result! You'll have none of that moral grey area B.S. You inflict 10 % more damage to evil people and creatures.",
    "is_playable": false,
    "is_trait": false,
    "id": "16994154",
    "edid": "ALCrusader"
  },
  {
    "name": "Pain Lord",
    "description": "After undergoing The Warden's ritual you feel indestructable (+250HP) and you now regain health in combat.",
    "is_playable": false,
    "is_trait": false,
    "id": "218362862",
    "edid": "PainLord"
  },
  {
    "name": "Heavy Gunner",
    "description": "While using Big Guns, Heavy Gunner grants +15% improved equip speed and V.A.T.S. chance to hit, -20% movement spread penalty, and your automatic weapon spread is reduced by 5% per second while continuously firing, to a max of -25%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214764",
    "edid": "sssPerkHeavyGunner",
    "requirements": [
      [">=", "Level", 12],
      ["or", [">=", "Strength", 8], [">=", "Agility", 6], [">=", "Big Guns", 55], [">=", "Guns", 30]]
    ]
  },
  {
    "name": "Violent Vendetta",
    "description": "You are the true apex of evolution. Those disgusting blue and green Super Mutants are nothing but an abomination. You've gained a 25% accuracy bonus when attacking Super Mutants in V.A.T.S., as well as +25% damage against them.",
    "is_playable": true,
    "is_trait": false,
    "id": "285235866",
    "edid": "sssPerkViolentVendetta",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Perception", 6]
    ]
  },
  {
    "name": "Legally Blind",
    "description": "If a driving test were part of the GOAT, they'd have kicked you out of the vault! Selecting Legally Blind will ensure that your Perception never increases past 2, but your other finely honed senses have allowed you to excel in another area. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355194",
    "edid": "ELYFlawLegallyBlind",
    "requirements": [
      ["<", "Perception", 3]
    ]
  },
  {
    "name": "Kingly Charisma",
    "description": "You could charm the skin off a snake! You've gained +1 Charisma while Good or Very Good, +3/5 Speech, and +5%/7% better prices while your karma is Good/Very Good.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556487",
    "edid": "PerkFacKings",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Lubberly",
    "description": "It's shocking that you don't break all the bottles you pick up; you seem to break everything else. Sneaking is very ineffective for you, but you've learned other ways to handle your problems than subtlety. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355198",
    "edid": "ELYFlawLubberly",
    "requirements": [
      ["<", "Agility", 3]
    ],
    "effects": [
      ["-", "Sneak", 25]
    ]

  },
  {
    "name": "Lead Belly 1",
    "description": "With each rank of the Lead Belly perk, you take 25% less radiation when consuming irradiated food and drink.",
    "is_playable": true,
    "is_trait": false,
    "id": "281769",
    "edid": "LeadBelly",
    "requirements": [
      [">=", "Level", 2],
      ["or", [">=", "Survival", 40], [">=", "Endurance", 7]]
    ]
  },
  {
    "name": "Lead Belly 2",
    "description": "With each rank of the Lead Belly perk, you take 25% less radiation when consuming irradiated food and drink.",
    "is_playable": true,
    "is_trait": false,
    "id": "281769",
    "edid": "LeadBelly",
    "requirements": [
      [">=", "Level", 2],
      ["or", [">=", "Survival", 40], [">=", "Endurance", 7]]
    ]
  },
  {
    "name": "Voyeur",
    "description": "If your targets could see your face in the moments before their grisly fate, they would die of fright before you even made a move. While within 30 yards of a target, for each second you look directly at a person who is unaware of you, your crit. damage will increase by 1%, up to a maximum of 25%.\n\n(Ranged weapons only gain half of this bonus.)",
    "is_playable": true,
    "is_trait": false,
    "id": "50427139",
    "edid": "ELYPerkVoyeur",
    "requirements": [
      [">=", "Level", 10],
      [">", "Perception", 7],
      [">=", "Sneak", 50]
    ]
  },
  {
    "name": "Endurance HP Regen",
    "description": "At Endurance 1: Grants 1 HP/sec per 60 seconds.\n\nAt Endurance 5: Grants 1 HP/sec per 24 seconds.\n\nAt Endurance 10: Grants 1 HP/sec per 15 seconds.",
    "is_playable": false,
    "is_trait": false,
    "id": "302094079",
    "edid": "PerkEnduranceHealthRegen"
  },
  {
    "name": "Enhanced Accuracy",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "101508235",
    "edid": "TNWPerkChanceToHit5"
  },
  {
    "name": "Hematophage",
    "description": "You've gained a taste... for human blood! When you're in Sneak mode, you gain the option to drink blood from a corpse to regain Health and restore dehydration and sleep deprivation equal to the sum of your Endurance and Agility. But every time you drink blood, you will you lose a small amount of Karma and suffer radiation damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "12593",
    "edid": "MS09Hematophage"
  },
  {
    "name": "Weapon Handling",
    "description": "You've become more accustomed to handling heavy weaponry. The Weapon Handling perk reduces weapon Strength requirements by 1, or by 2 instead if your weapon skill is at least twice your weapon's requirement or greater than 95.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335447",
    "edid": "WeaponHandling",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Endurance", 5]
    ]
  },
  {
    "name": "Asimov's Avenger",
    "description": "Robots with glass screens are no longer a match for you! In combat, you do +10% damage against Securitrons. ",
    "is_playable": false,
    "is_trait": false,
    "id": "83909262",
    "edid": "Vault76SecuritronPerk"
  },
  {
    "name": "Agility Speed Bonus",
    "description": "Makes agility actually affect your run speed.",
    "is_playable": false,
    "is_trait": false,
    "id": "302138249",
    "edid": "SRAgilityBonus"
  },
  {
    "name": "Klein Bottle",
    "description": "While the Think Tank may be unreliable and chaotic, they're at least well intentioned. Mobius was clearly the aggressor, so you've taken him out of the equation. When using mad science weapons, you attack 15% faster, and their strength requirements are lowered by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328515",
    "edid": "sssPerkKleinBottle",
    "requirements": [
      [">=", "Level", 25],
      ["not", ["has perk", "Mobius Strip"]]
    ]
  },
  {
    "name": "Hand of Vengeance",
    "description": "Cass does 15% more damage with all Guns.",
    "is_playable": false,
    "is_trait": false,
    "id": "1454921",
    "edid": "HandOfVengeance"
  },
  {
    "name": "Educated",
    "description": "With the Educated trait, your book-smarts grant you a random free skill point every , but your Survival skill is reduced by 30, since you're not street-smart.",
    "is_playable": true,
    "is_trait": true,
    "id": "204248",
    "edid": "Educated",
    "effects": [
      ["-", "Survival", 25]
    ]

  },
  {
    "name": "Tunnel Snakes Rule",
    "description": "Butch is a gang member at heart, and gangs have to have multiple members wearing the same colors. While Butch is in your party, you both gain +5% damage if you are both using the same weapon, and +5% DR if he is using the same armor as you, with an extra +5% if they are Tunnel Snake outfits.",
    "is_playable": false,
    "is_trait": false,
    "id": "184581789",
    "edid": "TTWFollowerPerkButch"
  },
  {
    "name": "Lily's Lilting",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444103",
    "edid": "PerkLily"
  },
  {
    "name": "Deep Sleep",
    "description": "You sleep deeply no matter where you are. You get the Well Rested benefit no matter what bed you sleep in.",
    "is_playable": true,
    "is_trait": false,
    "id": "134230547",
    "edid": "DLC03DeepSleep",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Survival", 30]
    ]
  },
  {
    "name": "Heartless",
    "description": "Your heart has been replaced with advanced technologies: You cannot be poisoned, and your AP regen speed has increased by 25%, but your recovered health is reduced by 25%, your max health has been reduced by 50, and your radiation resistance has been reduced by 25%.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370754",
    "edid": "NVDLC03HeartlessPerk"
  },
  {
    "name": "Xenophobe",
    "description": "All that experience killing aliens has shown you the best way to do it. You do 20% more damage to aliens.",
    "is_playable": false,
    "is_trait": false,
    "id": "201426393",
    "edid": "TTWXenophobeChallengePerk"
  },
  {
    "name": "Fatal Counter",
    "description": "You're excellent at capitalizing on your enemy's vulnerabilities. When using unarmed or melee, you deal double damage and have doubled critical chance when attacking an enemy that has been staggered by a block.",
    "is_playable": true,
    "is_trait": false,
    "id": "285352996",
    "edid": "sssPerkFatalCounter",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Perception", 5],
      [">=", "Strength", 5],
      ["or", [">=", "Unarmed", 75], [">=", "Melee Weapons", 75]]
    ]
  },
  {
    "name": "Mister Sandman",
    "description": "With the Mister Sandman perk, when you're in Sneak mode, you gain the option to silently kill any human or Ghoul while they're sleeping, and you gain bonus XP when doing so.",
    "is_playable": true,
    "is_trait": false,
    "id": "204205",
    "edid": "MisterSandman",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Sneak", 50],
      [">=", "Agility", 8]
    ]
  },
  {
    "name": "Butcher",
    "description": "Chop that meat! Thanks to your sadistic tendencies, you now gain bonus XP and restore action points when you cripple or dismember a limb, regardless of whether the target is living or dead.\n\nYou also gain +20% non-power attack speed with one-handed melee weapons! (Requires Evil Karma)",
    "is_playable": true,
    "is_trait": false,
    "id": "50388895",
    "edid": "ELYPerkButcher",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Melee Weapons", 35]
    ]
  },
  {
    "name": "Home on the Range",
    "description": "Whenever you interact with a campfire, you have the option of sleeping, with all the benefits that sleep brings.",
    "is_playable": true,
    "is_trait": false,
    "id": "33600243",
    "edid": "NVDLC02HomeOnTheRange",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Survival", 35]
    ]
  },
  {
    "name": "Hip Shooter",
    "description": "Like a true gunslinger, you can fire your weapon from any angle; only you can't seem to aim down the sights worth a damn.\n\n\n\n-25% accuracy while aiming down the sights.\n\n+25% accuracy while firing from the hip.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333753",
    "edid": "ELYPerkHipShooter",
    "requirements": [
      [">=", "Agility", 6],
      ["or", ["<", "Perception", 5], ["has perk", "Fast Shot"]]
    ]
  },
  {
    "name": "Survival Guru",
    "description": "You wrote the book on how to survive in the Wasteland, and have shared your secrets with humanity. You've gained +6% bonus to Poison Resistance & Radiation Resistance, and 6 points to both the Speech and Sneak skills.",
    "is_playable": false,
    "is_trait": false,
    "id": "209374",
    "edid": "MS03Perk3D",
    "effects": [
      ["+", "Speech", 6],
      ["+", "Sneak", 6]
    ]

  },
  {
    "name": "Holding Breath",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "67147780",
    "edid": "JHBPerk"
  },
  {
    "name": "The Ties That Bind",
    "description": "Elijah's collars may have brought you together initially, but it's the bonds you made that will keep them in your heart. As long as you have at least one teammate, you ignore 4 points of enemy DT, gain an additional 4 points yourself, and have a 4% increased crit. chance and crit. damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328513",
    "edid": "sssPerkDeadMoneySavior",
    "requirements": [
      [">=", "Level", 20],
      ["not", ["has perk", "Survivor's Guilt"]],
      ["not", ["has perk", "Elijah's Montresor"]]
    ]
  },
  {
    "name": "Lockpick Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332750",
    "edid": "sssPerkTaggedLockpick"
  },
  {
    "name": "Nightkinship",
    "description": "As the stealth field runs along each nook and cranny of your body, a strange tumbling sensation starts in the back of your psyche. You're not going to lose your mind, but it feels as though something might be... different. Something may be in a place it doesn't belong.\n\nLetting this sensation of invisibility run rampant in your mind may unlock something powerful in your mind - the first time you use a Stealth Boy each level, one of your SPECIAL stats will be reduced by 1, and one increased by 1, but you will gain a perk that will retain until your next level, at which point your stats will be reverted and you will lose that perk.",
    "is_playable": false,
    "is_trait": true,
    "id": "50399601",
    "edid": "ELYFlawNightkinship"
  },
  {
    "name": "Power Armor Bonus",
    "description": "You are no longer an invincible superhero.",
    "is_playable": false,
    "is_trait": false,
    "id": "302156115",
    "edid": "SRPowerArmor"
  },
  {
    "name": "Jericho the Judas",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444097",
    "edid": "PerkJericho"
  },
  {
    "name": "Vigilant Recycler",
    "description": "Waste not, want not. When you use Energy Weapons, you are more likely to recover drained ammunition. You also have more efficient recycling recipes available at the Workbench.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464342",
    "edid": "VigilantRecycler",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Science", 70],
      [">=", "Energy Weapons", 50]
    ]
  },
  {
    "name": "Quantum Chemist",
    "description": "You have unlocked the secret to creating Nuka-Cola Quantum. With this perk, every ten Nuka-Colas in your inventory can be crafted into a Nuka-Cola Quantum.",
    "is_playable": false,
    "is_trait": false,
    "id": "134237297",
    "edid": "DLC03QuantumChemist",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Science", 50]
    ]
  },
  {
    "name": "Gunshots N' Drop Shots",
    "description": "Your acuity while under the effects of alcohol is nothing short of legendary. You no longer suffer a spread penalty while drunk.",
    "is_playable": true,
    "is_trait": false,
    "id": "302223300",
    "edid": "PerkGunshotsNDropShots",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Agility", 5],
      [">=", "Perception", 5]
    ]
  },
  {
    "name": "Swing For The Fences",
    "description": "With Swing For The Fences you'll do an additional 20% damage while any one or two handed melee weapon is equipped.",
    "is_playable": true,
    "is_trait": false,
    "id": "167825915",
    "edid": "DLC04SwingForTheFences",
    "requirements": [
      [">=", "Level", 8]
    ]
  },
  {
    "name": "Throwing Range Bonus",
    "description": "Modifies your throwing range based on your strength.",
    "is_playable": false,
    "is_trait": false,
    "id": "302073482",
    "edid": "SRThrowingRangeBonus"
  },
  {
    "name": "Calm Heart",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "1472291",
    "edid": "CalmHeartPerk"
  },
  {
    "name": "Steel Skeleton",
    "description": "With the Steel Skeleton trait, your limbs only receive 75% of the damage they normally would, but your carry weight is reduced by 20%.",
    "is_playable": true,
    "is_trait": true,
    "id": "609988",
    "edid": "AdamantiumSkeleton",
    "requirements": [
      [">=", "Strength", 4]
    ]
  },
  {
    "name": "Implant M-5",
    "description": "You can be made... better... faster... stronger... Actually, just faster. The M-5 implant increases your crouched movement speed by 20% for greater efficiency as a test subject.",
    "is_playable": false,
    "is_trait": false,
    "id": "16815636",
    "edid": "NVDLC03ImplantM5Perk"
  },
  {
    "name": "Little Leaguer 1",
    "description": "Years as the Vault little league MVP have honed your hitting and throwing. With each rank, you gain 10% damage when using bats and nail boards, and you throw grenades 10% harder and farther.",
    "is_playable": true,
    "is_trait": false,
    "id": "100748183",
    "edid": "LittleLeaguer",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Strength", 4],
      [">=", "Melee Weapons", 25]
    ]
  },
  {
    "name": "Little Leaguer 2",
    "description": "Years as the Vault little league MVP have honed your hitting and throwing. With each rank, you gain 10% damage when using bats and nail boards, and you throw grenades 10% harder and farther.",
    "is_playable": true,
    "is_trait": false,
    "id": "100748183",
    "edid": "LittleLeaguer",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Strength", 4],
      [">=", "Melee Weapons", 25]
    ]
  },
  {
    "name": "Little Leaguer 3",
    "description": "Years as the Vault little league MVP have honed your hitting and throwing. With each rank, you gain 10% damage when using bats and nail boards, and you throw grenades 10% harder and farther.",
    "is_playable": true,
    "is_trait": false,
    "id": "100748183",
    "edid": "LittleLeaguer",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Strength", 4],
      [">=", "Melee Weapons", 25]
    ]
  },
  {
    "name": "Stealth Suit Mk II",
    "description": "The latest software patch for the Stealth Suit Mk II.\n\nV1.1: Damping Sensors (+10 Sneak)\n\nV1.2: Aural Subnet (+1 PER)\n\nV1.3: Synced Fitment (+1 AGL)\n\nV1.4: Impulse Accelerator (Increased sneak speed)",
    "is_playable": false,
    "is_trait": false,
    "id": "50391109",
    "edid": "NVDLC03AuralStealthSuitPerk"
  },
  {
    "name": "Long Haul",
    "description": "You have learned how to pack mountains of gear for the Long Haul. Being over-encumbered no longer prevents you from using Fast Travel.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335448",
    "edid": "LongHaul",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "Roughin' It",
    "description": "You're more at home under the open stars than under a roof. Any time you sleep outside, you gain the benefits of being Well Rested, even if you don't own the bed.",
    "is_playable": true,
    "is_trait": false,
    "id": "16826961",
    "edid": "NVDLC04RoughinItPerk",
    "requirements": [
      [">=", "Level", 28],
      [">=", "Survival", 100]
    ]
  },
  {
    "name": "Survival Bobblehead",
    "description": "Sometimes, the best way to win is to outlast your opponent.\n\n\n\nAny chems you take or ingestibles you eat now last 10% longer.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362677",
    "edid": "TTWBobbleheadPerkSurvival"
  },
  {
    "name": "Barter Town 1",
    "description": "Your business prowess gives you discounts wherever you shop.",
    "is_playable": false,
    "is_trait": false,
    "id": "184580962",
    "edid": "TTWBarterTownChallengePerk"
  },
  {
    "name": "Barter Town 2",
    "description": "Your business prowess gives you discounts wherever you shop.",
    "is_playable": false,
    "is_trait": false,
    "id": "184580962",
    "edid": "TTWBarterTownChallengePerk"
  },
  {
    "name": "Barter Town 3",
    "description": "Your business prowess gives you discounts wherever you shop.",
    "is_playable": false,
    "is_trait": false,
    "id": "184580962",
    "edid": "TTWBarterTownChallengePerk"
  },
  {
    "name": "Bolt-Action Hero 1",
    "description": "Rack em up! Bolt-action weapons gain 10% attack speed and +5 DT penetration. The second rank grants a 15% damage bonus and 5% faster attack speed.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214727",
    "edid": "sssPerkBoltActionHero",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Perception", 7],
      [">=", "Agility", 5],
      [">=", "Guns", 65]
    ]
  },
  {
    "name": "Bolt-Action Hero 2",
    "description": "Rack em up! Bolt-action weapons gain 10% attack speed and +5 DT penetration. The second rank grants a 15% damage bonus and 5% faster attack speed.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214727",
    "edid": "sssPerkBoltActionHero",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Perception", 7],
      [">=", "Agility", 5],
      [">=", "Guns", 65]
    ]
  },
  {
    "name": "Mobius Strip",
    "description": "After experiencing the delirium of the Think Tank first-\"hand\", it seemed only natural to side with Mobius, and you ended their deranged experiments once and for all. Mad science weapons will deal 15% more damage, and cost 25% less AP in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328514",
    "edid": "sssPerkMobiusStrip",
    "requirements": [
      [">=", "Level", 25],
      ["not", ["has perk", "Klein Bottle"]]
    ]
  },
  {
    "name": "Black Widow",
    "description": "You gain +5 Speech and Barter and +1 Charisma when talking to men, but suffer -5 Speech and Barter when talking to women.",
    "is_playable": true,
    "is_trait": true,
    "id": "609976",
    "edid": "BlackWidow",
    "requirements": [
      [">=", "Charisma", 6]
    ]
  },
  {
    "name": "Charisma Implant",
    "description": "Your prefrontal cortex has been enhanced with the Empathy Synthesizer, increasing your Charisma by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "1360176",
    "edid": "ImplantCharismaPerk",
    "effects": [
      ["+", "Charisma", 1]
    ]

  },
  {
    "name": "Coin Operator",
    "description": "You've learned the recipe to make slugs for the Vending Machines out of Scrap Metal and the acid from Fission Batteries. Craft them at the Workbench and spend them just like Chips!",
    "is_playable": false,
    "is_trait": false,
    "id": "16843675",
    "edid": "NVDLC01CoinOperator"
  },
  {
    "name": "Callous",
    "description": "You don't care what the person you're bartering with thinks of you, you just gotta get them to agree to the lowest price possible. Your Charisma is reduced by 1, but your purchase prices are multiplied by 0.98x for every 10 points of Survival.",
    "is_playable": true,
    "is_trait": true,
    "id": "285227435",
    "edid": "sssPerkCallous",
    "requirements": [
      ["<", "Charisma", 5],
      [">", "Charisma", 1]
    ],
    "effects": [
      ["-", "Charisma", 1]
    ]

  },
  {
    "name": "Junior Survivor",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you're still alive to tell the tale. You've gained +2% bonus to Poison Resistance and Radiation Resistance, and 2 points to both the Medicine and Science skills.",
    "is_playable": false,
    "is_trait": false,
    "id": "209364",
    "edid": "MS03Perk1B",
    "effects": [
      ["+", "Science", 2],
      ["+", "Medicine", 2]
    ]

  },
  {
    "name": "Paralyzing Palm",
    "description": "With Paralyzing Palm, you will sometimes perform a special V.A.T.S. palm strike that paralyzes your opponent for 30 seconds. Note that in order to perform the Paralyzing Palm, you must be completely unarmed.",
    "is_playable": false,
    "is_trait": false,
    "id": "281770",
    "edid": "ParalyzingPalm"
  },
  {
    "name": "Rocket Girl",
    "description": "It's T minus 1! Rocket Girl grants you +15 Explosives, and 25% more damage with rocket weapons. However, you are 3x more likely to be critically hit by energy weapons.",
    "is_playable": true,
    "is_trait": true,
    "id": "285214721",
    "edid": "sssPerkRocketGirl",
    "requirements": [
      [">=", "Level", 12]
    ],
    "effects": [
      ["+", "Explosives", 15]
    ]

  },
  {
    "name": "Iron Focus",
    "description": "Iron Focus grants 10% DR while aiming with any ranged weapon, as well as -20% spread and +25% crit. chance while aiming with Big Guns.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214768",
    "edid": "sssPerkIronFocus",
    "requirements": [
      [">=", "Level", 24],
      [">=", "Endurance", 8],
      [">=", "Big Guns", 75]
    ]
  },
  {
    "name": "Wired Reflexes",
    "description": "Advanced technology from the Commonwealth has increased your reaction speed, giving you a higher chance to hit in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "150876",
    "edid": "MS08RewardPerk"
  },
  {
    "name": "Grunt",
    "description": "Just good, honest infantry work! You do 25% more damage with 9mm and .45 Auto Pistols and SMGs, Service Rifles, Assault and Marksman Carbines, Light Machine Guns, Frag Grenades, Grenade Rifles and Launchers, and Combat Knives.",
    "is_playable": true,
    "is_trait": false,
    "id": "16840311",
    "edid": "NVDLC02Grunt",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Guns", 45],
      [">=", "Explosives", 20]
    ]
  },
  {
    "name": "High Roller",
    "description": "All those chips have got you feeling lucky! You gain +2% critical chance per when holding 2500+ Tops, Ultra-Luxe, Sierra Madre, Atomic Wrangler, or Gomorrah chips, up to a maximum of +10%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285227448",
    "edid": "sssPerkHighRoller",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Luck", 7]
    ]
  },
  {
    "name": "Them's Good Eatin'",
    "description": "You've gained a chance to find a Thin Red Paste or Blood Sausage when looting any animal.",
    "is_playable": true,
    "is_trait": false,
    "id": "50370761",
    "edid": "NVDLC03ThemsGoodEatingPerk",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Survival", 75]
    ]
  },
  {
    "name": "Enhanced Sensors",
    "description": "While ED-E is a companion, the player can detect enemies at an increased range. Additionally, enemies will appear on the player's compass and can be targeted in V.A.T.S. even when cloaked.",
    "is_playable": false,
    "is_trait": false,
    "id": "16834405",
    "edid": "NVDLC04EnhancedSensors"
  },
  {
    "name": "Devil's Highway",
    "description": "When you choose the Devil's Highway perk, your Karma is instantly set to Very Evil.",
    "is_playable": false,
    "is_trait": false,
    "id": "134237293",
    "edid": "DLC03DevilsHighway",
    "requirements": [
      [">=", "Level", 24]
    ]
  },
  {
    "name": "Realism Please",
    "description": "You are no longer an invincible superhero.",
    "is_playable": false,
    "is_trait": false,
    "id": "100669596",
    "edid": "SimpleRealism"
  },
  {
    "name": "Piercing Strike",
    "description": "Piercing Strike makes all of your Unarmed and Melee Weapons (including thrown) negate 2 points of Damage Threshold on the target per point in Strength.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335455",
    "edid": "PiercingStrike",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Strength", 7],
      ["or", [">=", "Unarmed", 50], [">=", "Melee Weapons", 50]]
    ]
  },
  {
    "name": "Holo-Razzle Dazzle",
    "description": "While Rex is a companion, unequipped chems, firearms, and ammunition within a short distance are highlighted when you zoom the camera.",
    "is_playable": false,
    "is_trait": false,
    "id": "302012506",
    "edid": "B4RKCompPERK"
  },
  {
    "name": "Madre Master",
    "description": "You've learned a thing or two about putting down abominations. You've gained +5% bonus damage against abominations.",
    "is_playable": true,
    "is_trait": false,
    "id": "167840559",
    "edid": "sDMPerkBossesBonusVsAbominations"
  },
  {
    "name": "Machine Head 1",
    "description": "You've gained a damage bonus against robots.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436380",
    "edid": "RobotChallengePerk"
  },
  {
    "name": "Machine Head 2",
    "description": "You've gained a damage bonus against robots.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436380",
    "edid": "RobotChallengePerk"
  },
  {
    "name": "Machine Head 3",
    "description": "You've gained a damage bonus against robots.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436380",
    "edid": "RobotChallengePerk"
  },
  {
    "name": "Brain-full",
    "description": "Your brain is back in your body! And it's smarter now! You now gain experience at an increased rate (+10%) You gain one additional skill per level. Your Intelligence is higher (+1 INT) and your Science skill has been raised by 10.",
    "is_playable": false,
    "is_trait": false,
    "id": "16866225",
    "edid": "NVDLC03BrainfullPerk"
  },
  {
    "name": "Staunch Defender",
    "description": "With the Staunch Defender Perk, you gain +5 DT while standing still in combat.",
    "is_playable": false,
    "is_trait": false,
    "id": "167825914",
    "edid": "DLC04SuperiorDefender"
  },
  {
    "name": "Rowdy Roxie",
    "description": "",
    "is_playable": true,
    "is_trait": false,
    "id": "117490400",
    "edid": "PerkRoxie"
  },
  {
    "name": "Breakin' A Sweat",
    "description": "Gotta keep that heart rate up! You gain +1 AGI and +15% AP regen. while moving, but suffer -1 and -15% while not moving.",
    "is_playable": true,
    "is_trait": true,
    "id": "285223199",
    "edid": "sssPerkBreakinASweat",
    "requirements": [
      [">=", "Endurance", 4]
    ]
  },
  {
    "name": "Plasma Spaz",
    "description": "You're just so excited about plasma that you can't (magnetically) contain yourself! Your attack speed and AP cost with plasma weapons are improved by 20%.",
    "is_playable": true,
    "is_trait": false,
    "id": "1465071",
    "edid": "PlasmaSpaz",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Energy Weapons", 70],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Hardened Survivalist",
    "description": "When Vonda is a companion you gain a +10 bonus to Damage Resistance and a +5 bonus to Damage Threshold.",
    "is_playable": false,
    "is_trait": false,
    "id": "218470357",
    "edid": "HardenedSurvivalist"
  },
  {
    "name": "Fight Hungry",
    "description": "Desperation is your strongest motivator. In combat, when you have any level of starvation, you gain +20% damage and +3 Endurance.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324291",
    "edid": "sssPerkFightHungry",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Theories and Hypotheses",
    "description": "You're more comfortable in front of a chalkboard than a set of keys. You gain +15 Science, but suffer -15 Science when hacking.\n\n(Exclusive from Typing Tutor)",
    "is_playable": true,
    "is_trait": true,
    "id": "285265324",
    "edid": "sssPerkTheoriesandHypotheses",
    "requirements": [
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "Fall Of The Faithful",
    "description": "\"And I looked, and behold a pale horse: and his name that sat on him was Death, and Hell followed with him. And power was given unto them over the fourth part of the earth, to kill with sword, and with hunger, and with death, and with the beasts of the earth.\"  - Revelation 6:8\n\nSo long as you have your Bible, you are 5% more likely to critically hit, and deal +10% critical damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328504",
    "edid": "sssPerkFallOfTheFalthful",
    "requirements": [
      [">=", "Level", 12],
      ["not", ["has perk", "Exodus Of The Faithul"]],
      ["not", ["has perk", "Wrath Of The Faithful"]]
    ]
  },
  {
    "name": "Red Rock N' Roll",
    "description": "The blazing wasteland sun has toughened your skin and your resolve. You gain +2 DR per 10 points in Survival, starting at 60, as well as +1/2 Endurance at 50%/25% of your max health while in combat. Fiends also have -25% crit chance when targeting you.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556483",
    "edid": "PerkFacKhans",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Goody Two Shoes",
    "description": "You helped a small town when they needed it most; now to reap the small benefits! You gain +5% XP, have 4% reduced buying prices, and -4/7% addiction chance with Good or Very Good karma. You also gain +1 skill points per level while your karma is Very Good.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556493",
    "edid": "PerkFacGoodsprings",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Way of the Canaanite",
    "description": "You have learned the advanced weapon handling techniques of the New Canaanites. For you, all shots with.45 Auto Pistols have less spread and are twice as likely to score a critical hit.",
    "is_playable": false,
    "is_trait": false,
    "id": "16823029",
    "edid": "NVDLC02WayOfTheCanaanite"
  },
  {
    "name": "Ain't Like That Now",
    "description": "Maybe you were bad once, but you ain't like that now. Your Karma has been reset to 0, you regenerate AP 25% faster, and your attack speed is increased by 20%. You are also immune to critical hits. (Requires Bad Karma.)",
    "is_playable": true,
    "is_trait": false,
    "id": "16820041",
    "edid": "NVDLC04AintLikeThatNowPerk",
    "requirements": [
      [">=", "Level", 50]
    ]
  },
  {
    "name": "Ghoul Ecology",
    "description": "You have learned to exploit the specific weaknesses of Ghouls, and gain a +5 damage bonus when attacking one.",
    "is_playable": false,
    "is_trait": false,
    "id": "167825918",
    "edid": "DLC04FF06GhoulEcology"
  },
  {
    "name": "Police Sharpshooter",
    "description": "You've specialized in precision sharpshooting. You've gained +15% damage while using a scoped weapon and aiming, as well as -20% spread, +10% critical chance, and +20% attack speed while not moving when using police sharpshooter weapons, and +5 DT while wearing light armor or clothing.",
    "is_playable": false,
    "is_trait": false,
    "id": "167840572",
    "edid": "sDMPerkSniperCop"
  },
  {
    "name": "Deathclaw Omelet",
    "description": "This recipe allows you to make Rose's famous deathclaw omelet!",
    "is_playable": false,
    "is_trait": false,
    "id": "1273364",
    "edid": "DeathclawOmelet"
  },
  {
    "name": "Nerves of Steel 1",
    "description": "With the Nerves of Steel perk, you regenerate Action Points 20% faster per rank.",
    "is_playable": true,
    "is_trait": false,
    "id": "928841",
    "edid": "DLC03NervesOfSteel",
    "requirements": [
      [">=", "Level", 26],
      [">=", "Agility", 6],
      [">=", "Endurance", 4]
    ]
  },
  {
    "name": "Nerves of Steel 2",
    "description": "With the Nerves of Steel perk, you regenerate Action Points 20% faster per rank.",
    "is_playable": true,
    "is_trait": false,
    "id": "928841",
    "edid": "DLC03NervesOfSteel",
    "requirements": [
      [">=", "Level", 26],
      [">=", "Agility", 6],
      [">=", "Endurance", 4]
    ]
  },
  {
    "name": "Point Breacher",
    "description": "Right at the front lines, you're the first to break down the door and start firing. When using breaching weapons, you gain +10% damage, +20% attack speed and 10 DT penetration. When wearing police clothing or riot armor, you gain +10 DT. Your attack speed and explosion radius for flashbangs are also increased by 20%.",
    "is_playable": false,
    "is_trait": false,
    "id": "167840574",
    "edid": "sDMPerkBreacherCop"
  },
  {
    "name": "Lock Breaker 1",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302055440",
    "edid": "sssPERKBreakLocksBorrowed"
  },
  {
    "name": "Lock Breaker 2",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302055440",
    "edid": "sssPERKBreakLocksBorrowed"
  },
  {
    "name": "Lock Breaker 3",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302055440",
    "edid": "sssPERKBreakLocksBorrowed"
  },
  {
    "name": "Lock Breaker 4",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302055440",
    "edid": "sssPERKBreakLocksBorrowed"
  },
  {
    "name": "Scourge of the East",
    "description": "Sic semper tyrannis! You can put a single point into any of your S.P.E.C.I.A.L. attributes. You also gain reputation with the NCR for breaking the back of Caesar's Legion, but you lose reputation with Caesar's Legion.",
    "is_playable": false,
    "is_trait": false,
    "id": "16826969",
    "edid": "NVDLC04ScourgeOfTheEastPerk"
  },
  {
    "name": "Mile in Their Shoes",
    "description": "You have come to understand Nightstalkers. Consuming Nightstalker Squeezin's now grants bonuses to Perception (+1 PER), Poison Resistance (+5), and stealth (+5 Sneak) in addition to the normal benefits.",
    "is_playable": true,
    "is_trait": false,
    "id": "16815641",
    "edid": "NVDLC03MileInTheirShoesPerk",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Survival", 25]
    ]
  },
  {
    "name": "Rocket Guy",
    "description": "It's T minus 1! Rocket Guy grants you +15 Explosives, and 25% more damage with rocket weapons. However, you are 3x as likely to be critically hit by energy weapons.",
    "is_playable": true,
    "is_trait": true,
    "id": "285214752",
    "edid": "sssPerkRocketGuy",
    "requirements": [
      [">=", "Level", 12]
    ],
    "effects": [
      ["+", "Explosives", 15]
    ]

  },
  {
    "name": "Anodized Arsenal",
    "description": "You've devised a way to focus the anodized charge of your armor into your energy weapons. While carrying your scrap electronics and an additional 3+ fission batteries, your energy weapon projectile speed is increased by 25%, and you gain 25% DT penetration with energy weapons.",
    "is_playable": true,
    "is_trait": false,
    "id": "285218977",
    "edid": "sssPerkAnodizedArsenal",
    "requirements": [
      [">=", "Level", 16],
      ["has perk", "Anodized Armor"],
      [">=", "Energy Weapons", 65],
      [">=", "Science", 50]
    ]
  },
  {
    "name": "Gun Juggler",
    "description": "Who needs to reload when you've got so many loaded guns? You've gained +50% equip speed with ranged weapons, but suffer 30% reduced reload speed.",
    "is_playable": true,
    "is_trait": true,
    "id": "285252699",
    "edid": "sssPerkGunJuggler",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Agility", 7]
    ]
  },
  {
    "name": "Big Guns Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332742",
    "edid": "sssPerkTaggedBigGuns"
  },
  {
    "name": "Raider's Paradise",
    "description": "You've been blastin' and laughin' for so long, that everyone in the wastes thinks you're too far gone. Except for Paradise Falls, baby! That's your true home.\n\nYou've -20% addiction duration, as well as +10/15% damage against Neutral or Good/Very Good targets.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558039",
    "edid": "PerkFacParadiseFalls",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Alertness",
    "description": "You've learned to keep your senses alert to any danger. When crouched and not moving you gain a +2 to your Perception attribute to help you find enemies before they find you.",
    "is_playable": true,
    "is_trait": false,
    "id": "16826962",
    "edid": "NVDLC04AlertnessPerk",
    "requirements": [
      [">=", "Level", 12],
      ["<", "Perception", 10],
      [">=", "Perception", 6]
    ]
  },
  {
    "name": "Heartless",
    "description": "Your heart has been replaced with advanced technologies: You cannot be poisoned, and filters in your heart will also regulate bleeding and healing, allowing all healing items (chems) to function at a higher level. Robots are now confused by you and 50% less likely to score a critical hit.",
    "is_playable": false,
    "is_trait": false,
    "id": "16816322",
    "edid": "NVDLC03HeartlessPerk"
  },
  {
    "name": "Direct Modes of Taxation",
    "description": "You're the tax collector; the cold, icy grip of death won't part you from the money left on the bodies of NCR and Legion members.\n\n\n\n+Chance to find more NCR and Legion money on the bodies of members of their respective factions.\n\n+Perception-based chance to add NCR and Legion money to targets you hit with unarmed strikes.",
    "is_playable": true,
    "is_trait": false,
    "id": "50335294",
    "edid": "ELYPerkDirectModesOfTaxation",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Perception", 6],
      [">=", "Luck", 3],
      [">=", "Barter", 65]
    ]
  },
  {
    "name": "Gun-Fu",
    "description": "You've mastered the ancient ways of firearm martial arts. While in the air and using a one handed weapon, you gain +50% crit. damage. While sneaking and in combat, you gain +35% attack speed. While running, you gain a 10% knockdown chance. While walking, you gain +3 DT, +8% damage resistance, and +1 Strength. While moving left or right in combat, you gain +15% reload speed.",
    "is_playable": false,
    "is_trait": false,
    "id": "285223207",
    "edid": "sssPerkGunFu",
    "requirements": [
      [">=", "Level", 22],
      [">=", "Agility", 9],
      [">=", "Strength", 4],
      [">=", "Guns", 55],
      [">=", "Melee Weapons", 40]
    ]
  },
  {
    "name": "Danger Close",
    "description": "Quit hitting yourself! All those lesions and lacerations lacing your body leave you lamenting your lack of valetudinarianism.\n\nAll future damage you deal to yourself that penetrates your DT will result in knocking yourself over, but your carelessness allows you to excel in another area. (You will gain another perk immediately.)",
    "is_playable": false,
    "is_trait": false,
    "id": "50424069",
    "edid": "ELYFlawDangerClose"
  },
  {
    "name": "Sub-Dermal Armor",
    "description": "Your skin has been toughened by the NEMEAN Sub-Dermal Armor, increasing your total Damage Threshold by 4.",
    "is_playable": false,
    "is_trait": false,
    "id": "1363167",
    "edid": "ImplantDTPerk"
  },
  {
    "name": "Enhanced Accuracy",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "101491421",
    "edid": "TNWPerkChanceToHit15"
  },
  {
    "name": "Rapid Reload 1",
    "description": "Rapid Reload makes all of your weapon reloads 15% faster.",
    "is_playable": true,
    "is_trait": false,
    "id": "1275901",
    "edid": "RapidReload",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Agility", 5],
      ["or", [">=", "Guns", 40], [">=", "Energy Weapons", 40], [">=", "Big Guns", 40]]
    ]
  },
  {
    "name": "Rapid Reload 2",
    "description": "Rapid Reload makes all of your weapon reloads 15% faster.",
    "is_playable": true,
    "is_trait": false,
    "id": "1275901",
    "edid": "RapidReload",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Agility", 5],
      ["or", [">=", "Guns", 40], [">=", "Energy Weapons", 40], [">=", "Big Guns", 40]]
    ]
  },
  {
    "name": "Meat of Champions",
    "description": "The essence of champions flows through your veins. When you cannibalize corpses, you temporarily gain Caesar's intelligence, Mr. House's luck, The King's charisma, and President Kimball's strength.",
    "is_playable": false,
    "is_trait": false,
    "id": "1460987",
    "edid": "MeatOfChampionsPerk"
  },
  {
    "name": "Guns Bobblehead",
    "description": "Because it's easier to have courage from a safe distance away.\n\n\n\nYou now do 5% more damage with Guns.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362669",
    "edid": "TTWBobbleheadPerkGuns"
  },
  {
    "name": "Cash On Delivery",
    "description": "While Vincent is your companion, both of you temporarily gain 20 extra Action Points and much greater Damage Threshold when you drop below 50% Health.",
    "is_playable": true,
    "is_trait": false,
    "id": "201431997",
    "edid": "vvVincentPerk"
  },
  {
    "name": "Super Slam",
    "description": "All Melee Weapons and Unarmed attacks have a chance to knock your target down when they penetrate the target's DT. This chance increases based on weapon weight and power attacking, and is proportionally reduced when a weapon's strength requirement is not met.\n\n",
    "is_playable": true,
    "is_trait": false,
    "id": "1335454",
    "edid": "SuperSlam",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Strength", 6],
      ["or", [">=", "Melee Weapons", 55], [">=", "Unarmed", 55]]
    ]
  },
  {
    "name": "Drill Sergeant",
    "description": "Hooah! The gung-ho Sergeant RL-3 egging you on prompts you to excel at killing, whether they're Communists or not. While RL-3 is with you, you'll have -5% gun spread, and +5% Crit chance.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359002",
    "edid": "TTWFollowerPerkRL3"
  },
  {
    "name": "Velius' Victory",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "335551559",
    "edid": "PerkVelius"
  },
  {
    "name": "Get Lucky",
    "description": "Eulogy was right about her. When you have had a hard day on the road and are ready to call it a night, she will make sure you wake up with a grin. With Clover in your party, the Well Rested bonus will grant you an additional 15% experience boost and +1 Luck.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359006",
    "edid": "TTWFollowerPerkClover"
  },
  {
    "name": "Perception Implant",
    "description": "Your optic nerve has been enhanced with the Optics Enhancer, increasing your Perception by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "1360173",
    "edid": "ImplantPerceptionPerk",
    "effects": [
      ["+", "Perception", 1]
    ]

  },
  {
    "name": "Eye For Eye",
    "description": "For each crippled limb you have, you do an additional 10% damage.",
    "is_playable": true,
    "is_trait": false,
    "id": "16823028",
    "edid": "NVDLC02EyeForEye",
    "requirements": [
      [">=", "Level", 20]
    ]
  },
  {
    "name": "Nuclear Anomaly",
    "description": "With the Nuclear Anomaly perk, whenever your Health is reduced to 20 or less, you will erupt into a devastating nuclear explosion. Note that any allies in the vicinity will also suffer the effects of the blast!",
    "is_playable": true,
    "is_trait": false,
    "id": "134237292",
    "edid": "DLC03NuclearAnomaly",
    "requirements": [
      [">=", "Level", 50],
      [">=", "Endurance", 10]
    ]
  },
  {
    "name": "Cherchez La Femme",
    "description": "You gain +5 Speech and Barter and +1 Charisma when talking to women, but suffer -5 Speech and Barter when talking to men.",
    "is_playable": true,
    "is_trait": true,
    "id": "1270195",
    "edid": "CherchezLaFemme",
    "requirements": [
      [">=", "Charisma", 6]
    ]
  },
  {
    "name": "Fawkes' Failures",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444089",
    "edid": "PerkFawkes"
  },
  {
    "name": "Play With Fire",
    "description": "You've got a habit of playing with fire; your burns have increased your fire resistance. You've gained +15% fire resistance and +10% attack speed while using a fire-based weapon.",
    "is_playable": true,
    "is_trait": false,
    "id": "285235875",
    "edid": "sssPerkPlayWithFire",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Endurance", 5],
      [">=", "Explosives", 25]
    ]
  },
  {
    "name": "The Wastelander in the Tower",
    "description": "Tenpenny had it right; ghouls are a blight on the wasteland. Since you're out there, might as well clean up a bit, eh? You've gained +15% damage and +5 DT when attacking ghouls.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558042",
    "edid": "PerkFacTenpenny",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "In Shining Armor",
    "description": "Beams reflect off the mirror-like finish of your gleaming armor! You gain an additional +5 Damage Threshold against energy weapons while wearing any metal armor, and +2 while wearing reflective eyewear.",
    "is_playable": true,
    "is_trait": false,
    "id": "16839190",
    "edid": "NVDLC01InShiningArmor",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Repair", 40],
      [">=", "Science", 30]
    ]
  },
  {
    "name": "Immaculate Coiffure",
    "description": "All of your time spent styling your bespoke bob has left you clinging to your precious few remaining bobby pins. You gain +3 Lockpick and +50% bobby pin durability as your total diminishes below 9. (+24 Lockpick/5x durability max.)",
    "is_playable": true,
    "is_trait": false,
    "id": "50427135",
    "edid": "ELYPerkImmaculateCoiffure",
    "requirements": [
      [">=", "Level", 6],
      [">", "Charisma", 7]
    ]
  },
  {
    "name": "Soviet Roulette",
    "description": "Every shot you fire is a roll of the dice - or rather, a spin of the chamber. Once per reload, your weapon will immediately jam when you land a critical hit, but the pure adrenaline rush of taking that chance overloads your dopamine receptors and triggers your unique survival instinct. (You will gain another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50437844",
    "edid": "ELYFlawSovietRoulette",
    "requirements": [
      ["=", "Luck", 1]
    ]
  },
  {
    "name": "I Dismember You 1",
    "description": "All that practice shooting limbs off has perfected your aim. Against limbs.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358179",
    "edid": "NVDismemberChallengePerk"
  },
  {
    "name": "I Dismember You 2",
    "description": "All that practice shooting limbs off has perfected your aim. Against limbs.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358179",
    "edid": "NVDismemberChallengePerk"
  },
  {
    "name": "I Dismember You 3",
    "description": "All that practice shooting limbs off has perfected your aim. Against limbs.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358179",
    "edid": "NVDismemberChallengePerk"
  },
  {
    "name": "Sucker Punch",
    "description": "Get 'em while they're not looking! You gain +15 unarmed damage if your target is not in combat, or you are out of their line of sight. This bonus increases by +10 if your karma is Evil or Very Evil.",
    "is_playable": true,
    "is_trait": false,
    "id": "285223201",
    "edid": "sssPerkSuckerPunch",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6],
      [">=", "Sneak", 40],
      [">=", "Unarmed", 40]
    ]
  },
  {
    "name": "Bloody Mess",
    "description": "With the Bloody Mess trait, characters and creatures you kill will often explode into a red, gut-ridden, eyeball-strewn paste. Fun! Oh, and you gain +2% weapon damage per type of mutilated body part that you carry (Head, Arm, Leg, Organs, Torso).\n\n\n\nHowever, your chance to set off mines, and enemy crit chance have been increased by 8%.",
    "is_playable": true,
    "is_trait": true,
    "id": "609978",
    "edid": "BloodyMess"
  },
  {
    "name": "Vicious Hunger",
    "description": "You learned to capitalize on your hunger, it now makes you vicious, ruthless and - let's admit it - rather cranky. You inflict 25% more damage when you're struck with Advanced Starvation.",
    "is_playable": false,
    "is_trait": false,
    "id": "16983555",
    "edid": "ALViciousHunger",
    "requirements": [
      [">=", "Speech", 70]
    ]
  },
  {
    "name": "Concentrated Fire",
    "description": "With Concentrated Fire, your accuracy when targeting any body part in V.A.T.S. increases slightly with each subsequent attack on that body part, and your spread is decreased by 20% when using an automatic weapon.",
    "is_playable": true,
    "is_trait": false,
    "id": "281775",
    "edid": "ConcentratedFire",
    "requirements": [
      [">=", "Level", 18],
      ["or", [">=", "Energy Weapons", 60], [">=", "Guns", 60], [">=", "Big Guns", 60]]
    ]
  },
  {
    "name": "Mad Bomber",
    "description": "Your intimate knowledge of gadgets and explosives have combined to make you... the Mad Bomber! At Workbenches, you have special Explosives recipes unlocked for use.",
    "is_playable": true,
    "is_trait": false,
    "id": "16779566",
    "edid": "NVDLC05MadBomber",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Repair", 45],
      [">=", "Explosives", 45]
    ]
  },
  {
    "name": "Deep Sleep",
    "description": "You sleep deeply no matter where you are. You get the Well Rested benefit for eight hours no matter what bed you sleep in.",
    "is_playable": true,
    "is_trait": false,
    "id": "151007763",
    "edid": "DLC03DeepSleep",
    "requirements": [
      [">=", "Level", 22]
    ]
  },
  {
    "name": "Big Brained",
    "description": "Your brain is back in your body, but some of the advanced technologies remain: Your head can be crippled again, but you are still 35% more resistant to addiction, and you gain +1 Intelligence and +10% XP.",
    "is_playable": false,
    "is_trait": false,
    "id": "50420666",
    "edid": "NVDLC03BigBrainedPerk",
    "effects": [
      ["+", "Intelligence", 1]
    ]

  },
  {
    "name": "Sneaking Tiger",
    "description": "Lithe and nimble, you move so quickly that you only take glancing hits. While crouched and moving, you gain +1 DT per point of Agility up to 5, and +2 DT for each point of Agility above 5.",
    "is_playable": true,
    "is_trait": false,
    "id": "285227424",
    "edid": "sssPerkSneakingTiger",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Endurance", 4],
      [">=", "Agility", 8],
      [">=", "Sneak", 50]
    ]
  },
  {
    "name": "Truly Happy Medium",
    "description": "Not too heavy, not too light, you find that medium armors fit you just right! While wearing medium armor, your Health and AP are increased by 40, your enemies have -25% crit. chance, and your AP cost with ranged weapons is reduced by 20%.",
    "is_playable": true,
    "is_trait": false,
    "id": "302037211",
    "edid": "PerkHappyMedium",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "A Stranger I Remain",
    "description": "You don't belong here; the fewer factions that know of you, the higher your sneak bonus. (+26 Sneak, reduced by 2 for each faction that knows you)",
    "is_playable": true,
    "is_trait": false,
    "id": "285294775",
    "edid": "sssPerkAStrangerIRemain",
    "requirements": [
      [">=", "Level", 2],
      ["<", "Charisma", 6]
    ]
  },
  {
    "name": "Jury Rigging",
    "description": "You possess the amazing ability to repair any item using a roughly similar item. Fix a Trail Carbine with a Hunting Rifle, a Plasma Defender with a Laser Pistol, or even Power Armor with Metal Armor. How does it work? Nobody knows... except you.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464341",
    "edid": "JuryRigging",
    "requirements": [
      [">=", "Level", 24],
      [">=", "Repair", 90],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "l337 H@cK3r",
    "description": "All that hacking has improved your knowledge of the RobCo OS, all terminals are now easier to hack.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358181",
    "edid": "TTWHackerChallengePerk"
  },
  {
    "name": "Monkey Wrench",
    "description": "You're familiar enough with robots that taking them apart is a snap - doubly so if you don't care about putting them back together again. You deal 50% more damage against robots when using melee weapons.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324287",
    "edid": "sssPerkMonkeyWrench",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Repair", 60]
    ]
  },
  {
    "name": "Lazy",
    "description": "You just don't wanna move your muscles. Just make everyone else pick up the slack, they do it anyway! You have -10% carry weight and your run speed is reduced in proportion to your encumbrance (max -35%), but your free time and unspent calories have allowed you to excel somewhere more suited to you. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355222",
    "edid": "ELYFlawLazy",
    "requirements": [
      ["<", "Strength", 3]
    ]
  },
  {
    "name": "Loose Cannon",
    "description": "From Frag Grenades to Throwing Spears, you can throw weapons 30% faster at the cost of 25% less velocity.",
    "is_playable": true,
    "is_trait": true,
    "id": "1461969",
    "edid": "LooseCannon",
    "requirements": [
      ["or", [">=", "Agility", 6], [">=", "Strength", 5]]
    ]
  },
  {
    "name": "Agility Implant",
    "description": "Your central nervous node has been enhanced with the Reflex Booster, increasing your Agility by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "1360170",
    "edid": "ImplantAgilityPerk",
    "effects": [
      ["+", "Agility", 1]
    ]

  },
  {
    "name": "True Discretion",
    "description": "You know when to smile, and when to bare your teeth. You gain +3 to your combat skills while in combat, and +3 to your socials skills while outside of combat.",
    "is_playable": false,
    "is_trait": true,
    "id": "50336840",
    "edid": "ELYPerkTrueDiscretion"
  },
  {
    "name": "Hope's Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "335548621",
    "edid": "PerkHope"
  },
  {
    "name": "Hunter's Toughness",
    "description": "You've distinguished yourself as the premiere bounty hunter in the region, and as a result you've acquired a boost to your damage threshold. ",
    "is_playable": false,
    "is_trait": false,
    "id": "67189316",
    "edid": "BountyToughness"
  },
  {
    "name": "Charon's Cancer",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444091",
    "edid": "PerkCharon"
  },
  {
    "name": "Big-Brained",
    "description": "Your brain has been augmented with advanced technologies: Your head can no longer be crippled and is resistant to chem addiction (25% resistance) and shock from bodily damage (5% Damage Resistance).",
    "is_playable": false,
    "is_trait": false,
    "id": "16867401",
    "edid": "NVDLC03BigBrainMirrorPerk"
  },
  {
    "name": "Roughin' It",
    "description": "You're more at home under the open stars than under a roof. Any time you sleep outside, you gain the benefits of being Well Rested, even if you don't own the bed.",
    "is_playable": false,
    "is_trait": false,
    "id": "67158609",
    "edid": "NVDLC04RoughinItPerk",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Survival", 25]
    ]
  },
  {
    "name": "Party Girl",
    "description": "You are such a Party Girl that you no longer suffer the withdrawal effect from alcohol addiction.",
    "is_playable": false,
    "is_trait": false,
    "id": "134222272",
    "edid": "DLC03PartyGirl",
    "requirements": [
      [">=", "Level", 28]
    ]
  },
  {
    "name": "Mad Science",
    "description": "Harness the power of your intellect with the Mad Science perk! You've gained 15% damage, reload speed, and attack speed with mad science weapons, and your luck is increased by 1 for the duration of combat for each critical kill you deal in a battle, up to a max of +10.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214762",
    "edid": "sssPerkMadScience",
    "requirements": [
      [">=", "Level", 40],
      [">=", "Intelligence", 8],
      [">=", "Science", 80],
      [">=", "Energy Weapons", 75]
    ]
  },
  {
    "name": "Draw & Reload",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "29940",
    "edid": "migSpeed"
  },
  {
    "name": "Icarus",
    "description": "Your ostentatious nature may help you learn quicker, but it also inspires a greater degree of violence from your foes.\n\n\n\n+50% XP gain until level 30.\n\n-Enemy crit chance is doubled.\n\n+25% stacking limb damage received at levels 10, 20, and 30.",
    "is_playable": true,
    "is_trait": true,
    "id": "50378180",
    "edid": "ELYPerkIcarus"
  },
  {
    "name": "Survival Expert",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you've not only survived - you've learned a few things. You've gained +4% bonus to Poison Resistance and Radiation Resistance, and a +2% bonus to Critical Chance.",
    "is_playable": false,
    "is_trait": false,
    "id": "209371",
    "edid": "MS03Perk2E"
  },
  {
    "name": "Almost Perfect",
    "description": "Take the Almost Perfect perk, and all S.P.E.C.I.A.L. stats are instantly raised to 9.",
    "is_playable": false,
    "is_trait": false,
    "id": "134237291",
    "edid": "DLC03AlmostPerfect",
    "requirements": [
      [">=", "Level", 30],
      ["or", ["<", "Agility", 9], ["<", "Charisma", 9], ["<", "Endurance", 9], ["<", "Intelligence", 9], ["<", "Luck", 9], ["<", "Perception", 9], ["<", "Strength", 9]]
    ]
  },
  {
    "name": "Risky Business",
    "description": "Bring the roof down! You've gained +15% to your explosives' radius while indoors.",
    "is_playable": true,
    "is_trait": true,
    "id": "285223196",
    "edid": "sssPerkRiskyBusiness",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Implant Y-7",
    "description": "Implant Y-7 is an enzyme booster that increases the Health (HP) gained from foods and recovers additional Action Points (AP) per food item consumed.",
    "is_playable": false,
    "is_trait": false,
    "id": "16815642",
    "edid": "NVDLC03ImplantY7Perk"
  },
  {
    "name": "Built to Destroy",
    "description": "The Flamer that burns twice as bright burns half as long. Your throwing velocity, crit. chance, and attack speed are improved by 10%, but your spread is increased by 10%, and your weapon condition decays 20% faster.",
    "is_playable": true,
    "is_trait": true,
    "id": "1276674",
    "edid": "BuiltToDestroy",
    "requirements": [
      [">=", "Agility", 4]
    ]
  },
  {
    "name": "Fight the Power!",
    "description": "You've had enough of the so-called \"authorities\" pushing poor folks around! You gain +2 Damage Threshold and +5% Critical Chance against anyone wearing the faction armor of the NCR, Legion, or Brotherhood.",
    "is_playable": true,
    "is_trait": false,
    "id": "16840316",
    "edid": "NVDLC02FightThePower",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "No Weakness",
    "description": "When you take the No Weakness perk, all S.P.E.C.I.A.L. stats that are less than 5 are instantly increased to 5.",
    "is_playable": false,
    "is_trait": false,
    "id": "134221966",
    "edid": "DLC03NoWeakness",
    "requirements": [
      [">=", "Level", 44]
    ]
  },
  {
    "name": "Perception Affects Accuracy",
    "description": "Perception now moderately affects accuracy. Players will be 4% less accurate with all weapons for every point of PER below 5, and 2% more accurate with all weapons for every point of PER above 5.",
    "is_playable": false,
    "is_trait": false,
    "id": "302193840",
    "edid": "PerkNativePerceptionAccuracy"
  },
  {
    "name": "Philistine",
    "description": "You figured out your best tool for interacting with the world early, (you will be able to pick another perk immediately), but now learning new things makes you uncomfortable, and you find yourself always relying on familiar ideas.\n\n\n\n-10 Energy Weapons and Science.\n\n-x2 Energy Weapon AP cost.\n\n-10 Medicine.\n\n-20% reduced XP.",
    "is_playable": true,
    "is_trait": true,
    "id": "50369002",
    "edid": "ELYFlawPhilistine",
    "requirements": [
      ["<", "Perception", 6],
      ["<", "Intelligence", 5]
    ],
    "effects": [
      ["-", "Science", 10],
      ["-", "Energy Weapons", 10],
      ["-", "Medicine", 10]
    ]

  },
  {
    "name": "Tryptophobe",
    "description": "\"Birdshot\" is practically a profanity to you. When using shotguns, your spread is reduced by 20% and your crit. damage is increased by 10%, but your attack speed is reduced by 20% and your crit. chance is reduced by 10%.",
    "is_playable": true,
    "is_trait": true,
    "id": "285294787",
    "edid": "sssPerkTryptophobe"
  },
  {
    "name": "Hitsto",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "1795173213",
    "edid": "PerkHitStop"
  },
  {
    "name": "4DStorageMark3Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "218593606",
    "edid": "AW4DStorageMark3Perk"
  },
  {
    "name": "Center of Mass",
    "description": "You don't fool around with fancy trick shots. Straight to the midsection and down they go. In VATS, you do an additional 15% damage with attacks targeting the torso, and torso limb damage that you deal will be doubled.",
    "is_playable": true,
    "is_trait": false,
    "id": "1462658",
    "edid": "CenterOfMass",
    "requirements": [
      [">=", "Level", 14],
      ["or", [">=", "Energy Weapons", 70], [">=", "Guns", 70], [">=", "Big Guns", 70]]
    ]
  },
  {
    "name": "Punga Power!",
    "description": "Behold the power of the Punga! The restorative effects of Punga fruit now have a greater effect on you.",
    "is_playable": false,
    "is_trait": false,
    "id": "167841942",
    "edid": "DLC04PungaPoweralt01"
  },
  {
    "name": "Barkskin",
    "description": "You've been exposed to Harold's mutation and your skin is now as hard as tree bark. As a result, you've gained a permanent +5% to Damage Resistance.",
    "is_playable": false,
    "is_trait": false,
    "id": "220676",
    "edid": "MS10Barkskin"
  },
  {
    "name": "Survival Guru",
    "description": "You wrote the book on how to survive in the Wasteland, and have shared your secrets with humanity. You've gained +6% bonus to Poison Resistance & Radiation Resistance, and +3% bonus to Critical Chance.",
    "is_playable": false,
    "is_trait": false,
    "id": "209375",
    "edid": "MS03Perk3E"
  },
  {
    "name": "Friction Addiction",
    "description": "The best offense is a good defense, and you're at your toughest when taking punishment. You gain +1 DT and your enemy crit. chance is reduced by 3% per each point in Strength while you're blocking, and a percentage of your action points are restored each time you are hit. ((Luck / 20) * Max AP)",
    "is_playable": true,
    "is_trait": false,
    "id": "285218973",
    "edid": "sssPerkFrictionAddiction",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "Fickle",
    "description": "Fortune favors the bold; you favor timidity. You suffer -1 Luck and -50% crit. chance after any non-critical hit until your next critical hit, but your lack of candor has allowed you to cultivate a characteristic that suits you better. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355199",
    "edid": "ELYFlawFickle",
    "requirements": [
      [">", "Luck", 2]
    ],
    "effects": [
      ["-", "Luck", 1]
    ]

  },
  {
    "name": "Rocketeer",
    "description": "After your time dealing with the ghouls of REPCONN, you've gained +15 rad resistance, and an additional +10 while in the air, as well as +15% AP regen, and +20% movement speed!",
    "is_playable": false,
    "is_trait": false,
    "id": "33556500",
    "edid": "PerkFacNovac",
    "requirements": [
      [">=", "Level", 6]
    ]
  },
  {
    "name": "Adrenaline Adjunct",
    "description": "Hours of radiation accrual and dispersal have overstimulated your adrenal glands, resulting in constant health and AP regeneration while you are poisoned!",
    "is_playable": false,
    "is_trait": false,
    "id": "50424071",
    "edid": "ELYPerkAdrenalineAdjunct"
  },
  {
    "name": "Titanium Tortoise",
    "description": "Just look at those glorious, gleaming metal shells covering those dashing Power Armored soldiers! Just thinking about being enclosed in that tight titanium, close around your whole body makes you feel vulnerable while wearing anything else.\n\n\n\nYou've become obsessed with finding and wearing Power Armor, and wearing it grants you +20% movement speed while in deep water and +15 Energy, EMP and Electric Resistance while crouched.\n\n\n\nHowever, while wearing Power Armor, you suffer -20% sneak speed when you have a weapon out, and while you aren't encased in tough titanium, your DT is halved and your carry weight is reduced by 20%.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333731",
    "edid": "ELYPerkTitaniumTortoise",
    "requirements": [
      ["not", ["has perk", "Power Armor Training"]],
      ["<=", "Endurance", 5]
    ]
  },
  {
    "name": "Bad Ass",
    "description": "You have journeyed long and far during this quest and have shown your bravery, tenacity and skill in exploration and combat. As a result, your body is in much better physical condition. Your Damage Resistance has increased +5%, your Critical Chance has increased +5%, and you can now carry 50 more pounds.",
    "is_playable": false,
    "is_trait": false,
    "id": "218140125",
    "edid": "CrumbsBadAssPerk"
  },
  {
    "name": "Early Bird",
    "description": "You gain +1 to each of your S.P.E.C.I.A.L. attributes from 5 a.m. to 12 p.m., but suffer -1 from 6 p.m. to 5 a.m. when you're not at your best.",
    "is_playable": true,
    "is_trait": true,
    "id": "50407271",
    "edid": "NVDLC03TraitEarlyBird"
  },
  {
    "name": "Exodus Of The Faithul",
    "description": "\"Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.\" - Psalm 23:4\n\nYour run speed is increased by 10%, and enemies are 10% less likely to critically hit you, so long as you have your Bible.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328502",
    "edid": "sssPerkExodusOfTheFailthful",
    "requirements": [
      [">=", "Level", 12],
      ["not", ["has perk", "Wrath Of The Faithful"]],
      ["not", ["has perk", "Fall Of The Faithful"]]
    ]
  },
  {
    "name": "Nuke it From Orbit 1",
    "description": "Your skill at using launchers is impressive. All that practice has improved your aim. Your shots hit closer to their target and do more damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358180",
    "edid": "TTWOrbitChallengePerk"
  },
  {
    "name": "Nuke it From Orbit 2",
    "description": "Your skill at using launchers is impressive. All that practice has improved your aim. Your shots hit closer to their target and do more damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358180",
    "edid": "TTWOrbitChallengePerk"
  },
  {
    "name": "Nuke it From Orbit 3",
    "description": "Your skill at using launchers is impressive. All that practice has improved your aim. Your shots hit closer to their target and do more damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358180",
    "edid": "TTWOrbitChallengePerk"
  },
  {
    "name": "Implant Y-3",
    "description": "Implant Y-3 places an internal filtration system in the digestive tract that strips any liquid consumed of all* radioactive particles.\n\n*Within standard tolerance levels",
    "is_playable": false,
    "is_trait": false,
    "id": "50370069",
    "edid": "NVDLC03ImplantY3Perk"
  },
  {
    "name": "Quiet as the Waters",
    "description": "While Waking Cloud is in your party, it is much easier to sneak by the White Legs (their PER is decreased).",
    "is_playable": false,
    "is_trait": false,
    "id": "16823031",
    "edid": "NVDLC02QuietAsTheWaters"
  },
  {
    "name": "Sixgun Samurai",
    "description": "Your first hit on a weapon after drawing a revolver will cause the target to drop a one-handed weapon or jam a two-handed weapon. If you hit their right arm, it will cripple it instead.\n\nYour first sword hit after switching off a revolver will have 2x crit. chance and crit. damage. If it's a power attack it will instead deal +50% damage.\n\nYour first revolver hit after switching off a sword will penetrate 10 DT and guarantee a crit.",
    "is_playable": true,
    "is_trait": false,
    "id": "50437847",
    "edid": "ELYPerkSixgunSamurai",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Agility", 9],
      [">=", "Guns", 80],
      [">=", "Melee Weapons", 80]
    ]
  },
  {
    "name": "4DStorageMark1Perk",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "218590200",
    "edid": "AW4DStorageMark1Perk"
  },
  {
    "name": "Mister Impossible",
    "description": "You're the luckiest guy in the world, though that doesn't seem to matter much. All of your hits are criticals, but you do no critical damage at all.",
    "is_playable": true,
    "is_trait": true,
    "id": "50336832",
    "edid": "ELYPerkMisterImpossible"
  },
  {
    "name": "Luck Bobblehead",
    "description": "There's only one way to give 101%.\n\n\n\nYou now have a 2.5% boost to critical hit chance.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362665",
    "edid": "TTWBobbleheadPerkLuck"
  },
  {
    "name": "Explorer",
    "description": "When you have the Explorer perk, every location in the world is revealed on your map.",
    "is_playable": false,
    "is_trait": false,
    "id": "204261",
    "edid": "Explorer"
  },
  {
    "name": "Lockpick Bobblehead",
    "description": "Always strive for the unobtainable.\n\n\n\nYour bobby pins are now less likely to break.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362670",
    "edid": "TTWBobbleheadPerkLockpick"
  },
  {
    "name": "Ghastly Scavenger",
    "description": "With Ghastly Scavenger, when you're in Sneak mode, you gain the option to eat a Super Mutant or Feral Ghoul corpse to regain Health equal to your Survival skill. If this act is witnessed, it is considered a crime against nature.",
    "is_playable": true,
    "is_trait": false,
    "id": "1269449",
    "edid": "GhastlyScavenger",
    "requirements": [
      [">=", "Level", 12],
      ["has perk", "Cannibal"],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "Butch Is A Bitch(?)",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444099",
    "edid": "PerkButch"
  },
  {
    "name": "Hot Blooded",
    "description": "When your health drops below 50% you gain +10% more damage, but you also suffer -2 to your Agility and Perception attributes.",
    "is_playable": true,
    "is_trait": true,
    "id": "16852843",
    "edid": "NVDLC03TraitHotBlooded"
  },
  {
    "name": "Sneering Imperialist",
    "description": "You don't take kindly to raiders, junkies, or tribals trying to \"settle\" or \"stay alive\" in civilized lands. Against dirty raider, slaver and junkie types, as well as tribals, you do +15% damage and have a bonus to hit in V.A.T.S. (Requires Evil Karma).",
    "is_playable": true,
    "is_trait": false,
    "id": "33617531",
    "edid": "NVDLC02SneeringImperialist",
    "requirements": [
      [">=", "Level", 8]
    ]
  },
  {
    "name": "Second Skin",
    "description": "Star Paladin Cross is a seasoned veteran of power armor use and can show you how to deal with its idiosyncrasies. While Star Paladin Cross is in your party, you have +1 Agility and +50 carry weight when you are wearing power armor.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359004",
    "edid": "TTWFollowerPerkStarPaladinCross"
  },
  {
    "name": "Combustion Kid",
    "description": "Wait, where did you get that grenade from? You gain +25% equip speed and +15% attack speed with throwable explosives and the detonator.",
    "is_playable": true,
    "is_trait": false,
    "id": "285265328",
    "edid": "sssPerkCombustionKid",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Agility", 6],
      [">=", "Explosives", 30]
    ]
  },
  {
    "name": "Child at Heart",
    "description": "The Child at Heart trait greatly improves your interactions with children, usually in the form of unique dialogue choices, at the cost of -5 Speech when not speaking with a child.",
    "is_playable": true,
    "is_trait": true,
    "id": "12610",
    "edid": "ChildAtHeart",
    "requirements": [
      [">=", "Charisma", 5]
    ]
  },
  {
    "name": "Good Natured",
    "description": "You're Good Natured at heart, more prone to solving problems with your mind than violence. Your karma is immediately increased to Good if it is below that threshold, and you gain +1 to Charisma and +5 to Barter and Speech, but have -5 to Energy Weapons, Explosives, Guns, Melee Weapons, and Unarmed.",
    "is_playable": true,
    "is_trait": true,
    "id": "1276670",
    "edid": "GoodNatured",
    "effects": [
      ["+", "Charisma", 1],
      ["-", "Guns", 5],
      ["-", "Energy Weapons", 5],
      ["-", "Explosives", 5],
      ["-", "Melee Weapons", 5],
      ["-", "Unarmed", 5],
      ["+", "Speech", 5],
      ["+", "Barter", 5],
      ["-", "Big Guns", 5]
    ]

  },
  {
    "name": "Charisma Bobblehead",
    "description": "Nothing says pizzazz like a winning smile.\n\n\n\nCompanions now deal an additional 10% damage and have an additional 10% damage resistance.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362664",
    "edid": "TTWBobbleheadPerkCharismaCompanion"
  },
  {
    "name": "Mercy Killing",
    "description": "One handed-guns in VATS only : by some kind of karmic backfire, you now inflict three times more damage to the head of badly wounded foes. (With less than 25% health left.) \n\nDid you get all that? I sure didn't.",
    "is_playable": false,
    "is_trait": false,
    "id": "16991092",
    "edid": "ALMercyKilling",
    "requirements": [
      [">=", "Perception", 6],
      [">=", "Luck", 6]
    ]
  },
  {
    "name": "Addiction Resistance",
    "description": "Native endurance based addiction resistance.",
    "is_playable": false,
    "is_trait": false,
    "id": "302185429",
    "edid": "PerkNativeAddictionResistance"
  },
  {
    "name": "Hunter",
    "description": "In combat, you do +50% critical damage against animals and mutated animals, and +50% damage against them while using Guns and sneaking. You're also able to collect their meat more often.",
    "is_playable": true,
    "is_trait": false,
    "id": "1269528",
    "edid": "Hunter",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Perception", 4],
      [">=", "Survival", 30]
    ]
  },
  {
    "name": "Special Agent",
    "description": "You've trained hard, and gained a great deal of field experience. When using special agent weapons, you gain +15% damage, -20% spread, and +8 DT penetration, as well as +20% attack speed while not moving, but your aiming spread penalty is doubled while moving. While wearing clothes or light armor, you gain an additional +10% run speed.",
    "is_playable": false,
    "is_trait": false,
    "id": "167840573",
    "edid": "sDMPerkSpecialAgent"
  },
  {
    "name": "Mysterious Stranger",
    "description": "You've gained your own personal guardian angel... armed with a fully loaded .44 Magnum. For a cost of -1 Luck, the Mysterious Stranger will appear occasionally during V.A.T.S. to lend a hand, with deadly efficiency.",
    "is_playable": true,
    "is_trait": true,
    "id": "204220",
    "edid": "MysteriousStranger",
    "requirements": [
      [">=", "Luck", 6]
    ],
    "effects": [
      ["-", "Luck", 1]
    ]

  },
  {
    "name": "Marked",
    "description": "You've faced violence at the hands of the Marked Men... now it's payback time. (+10% Damage Threshold and +10% Damage against the Marked Men)",
    "is_playable": false,
    "is_trait": false,
    "id": "67151581",
    "edid": "NVDLC04MarkedPerk"
  },
  {
    "name": "Second Skin",
    "description": "A little guilty pleasure of yours is collecting small armor pieces of your fallen enemies and patch it to yours. After a while, it amounts to + 5 DT if you're wearing medium or heavy armor.",
    "is_playable": false,
    "is_trait": false,
    "id": "16982812",
    "edid": "ALSecondSkin",
    "requirements": [
      [">=", "Endurance", 5]
    ]
  },
  {
    "name": "They Shoot Horses",
    "description": "With rifles only : you inflict 15% more damage to your enemies for each crippled leg they're wobbling on.",
    "is_playable": false,
    "is_trait": false,
    "id": "16991095",
    "edid": "ALTheyShootHorses"
  },
  {
    "name": "Ghoul Grinder 1",
    "description": "It's like living in a horror movie. You now do extra damage to Feral Ghouls.",
    "is_playable": false,
    "is_trait": false,
    "id": "201426390",
    "edid": "TTWGhoulChallengePerk"
  },
  {
    "name": "Ghoul Grinder 2",
    "description": "It's like living in a horror movie. You now do extra damage to Feral Ghouls.",
    "is_playable": false,
    "is_trait": false,
    "id": "201426390",
    "edid": "TTWGhoulChallengePerk"
  },
  {
    "name": "Ghoul Grinder 3",
    "description": "It's like living in a horror movie. You now do extra damage to Feral Ghouls.",
    "is_playable": false,
    "is_trait": false,
    "id": "201426390",
    "edid": "TTWGhoulChallengePerk"
  },
  {
    "name": "Robot Compliance",
    "description": "With the Robot Compliance perk, sneaking up on a hostile robot undetected and activating it will put that robot into a permanent shutdown state.",
    "is_playable": false,
    "is_trait": false,
    "id": "50382991",
    "edid": "NVDLC03X13RobotCompliance"
  },
  {
    "name": "Right Handed",
    "description": "Your right hand could shoot the wings off a fly, but your left hand ruins your stability. When using one-handed weapons, you gain +20% accuracy, but you suffer -40% accuracy when using two-handed weapons.",
    "is_playable": true,
    "is_trait": true,
    "id": "285324283",
    "edid": "sssPerkOneHander"
  },
  {
    "name": "Logan's Loophole",
    "description": "No one's going to put you out to pasture 'cause you're going to stay young (and level 30) forever! You'll never again become addicted to chems, and they'll last twice as long... but after 30 you can kiss experience, perks, and skill points goodbye!",
    "is_playable": true,
    "is_trait": true,
    "id": "50407278",
    "edid": "NVDLC03TraitLogansLoophole"
  },
  {
    "name": "Duck And Cover",
    "description": "When danger threatens you, you never get hurt, you know just what to do! Duck.. and cover!\n\nYou've gained 15% damage resistance against explosions.",
    "is_playable": true,
    "is_trait": false,
    "id": "285610322",
    "edid": "sssPerkDuckAndCover",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 5]
    ]
  },
  {
    "name": "In My Footsteps",
    "description": "When God is a companion, he grants you a sneak bonus, as well as the ability to step lightly around most placed traps.",
    "is_playable": false,
    "is_trait": false,
    "id": "16857894",
    "edid": "NVDLC01InMyFootsteps",
    "effects": [
      ["+", "Sneak", 10]
    ]

  },
  {
    "name": "Melee Bobblehead",
    "description": "It's important to do business up close and personal.\n\n\n\nYou now swing Melee Weapons 10% faster.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362672",
    "edid": "TTWBobbleheadPerkMeleeWeapons"
  },
  {
    "name": "Physical Instrument",
    "description": "You solve your problems with the most reliable tool; your own flesh. Things will be easier to straighten out once everyone else is unconscious or dead.\n\nYou gain an unarmed damage bonus equal to your current AP %, but every unarmed attack strike you land will drain your AP by an amount equal to the hit's damage.\n\n(Requires tag skill: Unarmed)",
    "is_playable": true,
    "is_trait": true,
    "id": "50333717",
    "edid": "ELYPerkPhysicalInstrument",
    "requirements": [
      [">=", "Endurance", 9],
      ["tagged", "Unarmed"]
    ]
  },
  {
    "name": "Delicate Tastes",
    "description": "The Ultra-Luxe's seedy past has taught you how to hide behind a mask. You've gained +5 Sneak and Speech and +1 Intelligence while wearing a White Glove mask and light armor or clothing. Cannibals additionally gain a chance to find more meat on human corpses, while non-Cannibals gain improved item detection while aiming, to help them find the finer things in life.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556497",
    "edid": "PerkFacUltraLuxe",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Brainless",
    "description": "Your brain has been replaced with advanced technologies: Your head can no longer be crippled and is resistant to chem addiction (+25% resistance) and shock from bodily damage (+5% Damage Threshold, minimum +1).",
    "is_playable": false,
    "is_trait": false,
    "id": "16816318",
    "edid": "NVDLC03BrainlessPerk"
  },
  {
    "name": "Walker Instinct",
    "description": "Your senses have become so keen that you can feel the slightest vibration in the ground. You gain +1 Perception and Agility attributes while outside and crouched.",
    "is_playable": true,
    "is_trait": false,
    "id": "67158612",
    "edid": "NVDLC04WalkerInstinctPerk",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Survival", 35],
      [">=", "Perception", 3]
    ]
  },
  {
    "name": "Ambitious",
    "description": "You just can't wait to be at the top of the wasteland food chain. You suffer a reduction to skill points, which decreases as your level increases.\n\n\n\nOn the upside, you know exactly how you'll get to that position that you so deserve. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355201",
    "edid": "ELYFlawAmbitious"
  },
  {
    "name": "QuickDraw For Caleb",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302315868",
    "edid": "PerkCalebQuickdraw"
  },
  {
    "name": "Oderint Dum Metuant",
    "description": "You've set the toothless NCR ablaze with that most unholy of powers, nuclear fusion. While facing members of the NCR, you penetrate 8 DT, and deal 15% more damage with guns and flame-based weapons while your karma is Bad or Very Bad.",
    "is_playable": false,
    "is_trait": false,
    "id": "67158619",
    "edid": "NVDLC04BearSlayerPerk"
  },
  {
    "name": "Whiskey Rose",
    "description": "While Cass is a companion, she and the player gain Damage Threshold when they drink Whiskey. Additionally, the player does not suffer intelligence loss from consuming alcohol and ignores the negative effects of alcohol addiction.",
    "is_playable": false,
    "is_trait": false,
    "id": "1426957",
    "edid": "WhiskeyRose"
  },
  {
    "name": "Tribal Ways",
    "description": "Your limbs take 50% less damage from Animals, Mutated Animals, and Mutated Insects, and you gain +20% damage and attack speed with tribal weapons, as well as +8 DT, +25% DR, and +10% run speed while wearing a tribal outfit.",
    "is_playable": true,
    "is_trait": false,
    "id": "33617529",
    "edid": "NVDLC02TribalWisdom",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Endurance", 6],
      [">=", "Survival", 50]
    ]
  },
  {
    "name": "Pepsinae Purge",
    "description": "Thanks to the research compiled in the Greenblood Cave, you've gained +25% crit. damage and crit. chance against cazadores!",
    "is_playable": false,
    "is_trait": false,
    "id": "117703675",
    "edid": "PerkCazadorBodyDamageBonus"
  },
  {
    "name": "Implant C-13",
    "description": "Implant C-13 was originally designed as a defense turret subroutine to help eliminate Cazadores should they escape from their containment, but it's been repurposed for testing on human subjects. (+10% damage to Cazadores)",
    "is_playable": false,
    "is_trait": false,
    "id": "16815638",
    "edid": "NVDLC03ImplantC13Perk"
  },
  {
    "name": "Voracious Reader",
    "description": "You don't just read books, you tear into them. Damaged books you pick up become blank magazines, which you can use to copy your existing skill magazines at a workbench (or convert blank magazines back to books).",
    "is_playable": true,
    "is_trait": false,
    "id": "16826963",
    "edid": "NVDLC04VoraciousReaderPerk",
    "requirements": [
      [">=", "Level", 22],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "Head Trauma",
    "description": "You've been catastrophically wounded. Your max health, health recovery, spread, attack, reload, run and equip speed, AP, and AP recovery speed have been reduced.\n\n\n\nFour SPECIAL stats have also been reduced by 1, and all non-tagged skills have been reduced by 5.",
    "is_playable": false,
    "is_trait": false,
    "id": "302087662",
    "edid": "PerkHumbledHeadTraumaPermanent"
  },
  {
    "name": "Survival Expert",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you've not only survived - you've learned a few things. You've gained +4% bonus to Poison Resistance and Radiation Resistance, and +10 points to maximum Health.",
    "is_playable": false,
    "is_trait": false,
    "id": "185249",
    "edid": "MS03Perk2A"
  },
  {
    "name": "Irradiated Beauty",
    "description": "When doused in radiation, your natural aura is enhanced. You gain +1 Charisma at 250/450/650 rads.",
    "is_playable": true,
    "is_trait": false,
    "id": "67158613",
    "edid": "NVDLC04IrradiatedBeautyPerk",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Endurance", 6],
      [">=", "Charisma", 4]
    ]
  },
  {
    "name": "Boxer",
    "description": "You gotta roll with the punches. You've gained +10% attack speed with unarmed weapons, and +1 unarmed damage per point of Agility.",
    "is_playable": true,
    "is_trait": false,
    "id": "285227434",
    "edid": "sssPerkBoxer",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Agility", 5],
      [">=", "Endurance", 5],
      [">=", "Unarmed", 35]
    ]
  },
  {
    "name": "Enhanced Sensors",
    "description": "While ED-E is a companion, you can detect enemies at an increased range. Additionally, enemies will appear on your compass and can be targeted in V.A.T.S. even when cloaked.",
    "is_playable": false,
    "is_trait": false,
    "id": "67166053",
    "edid": "NVDLC04EnhancedSensors"
  },
  {
    "name": "Animal Control 1",
    "description": "You've gained a damage bonus against animals.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436384",
    "edid": "AnimalChallengePerk"
  },
  {
    "name": "Animal Control 2",
    "description": "You've gained a damage bonus against animals.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436384",
    "edid": "AnimalChallengePerk"
  },
  {
    "name": "Animal Control 3",
    "description": "You've gained a damage bonus against animals.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436384",
    "edid": "AnimalChallengePerk"
  },
  {
    "name": "Old Vaquero",
    "description": "Raul's rate of fire with revolvers and lever action firearms is 33% faster than normal.",
    "is_playable": false,
    "is_trait": false,
    "id": "1430206",
    "edid": "OldVaquero"
  },
  {
    "name": "Survival Guru",
    "description": "You wrote the book on how to survive in the Wasteland, and have shared your secrets with humanity. You've gained +6% bonus to Poison Resistance, Radiation Resistance and Damage Resistance.",
    "is_playable": false,
    "is_trait": false,
    "id": "209373",
    "edid": "MS03Perk3C"
  },
  {
    "name": "Cannibal",
    "description": "With the Cannibal trait, when you're in Sneak mode, you gain the option to eat a corpse to regain Health equal to your Survival skill when your Hunger meets or exceeds your Survival skill. But every time you feed, you lose Karma, and if the act is witnessed, it is considered a crime against nature.",
    "is_playable": true,
    "is_trait": true,
    "id": "609980",
    "edid": "Cannibal",
    "requirements": [
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "Resentful",
    "description": "Therapy Result! Blood loss makes you quite grumpy. When your health goes below 50% you inflict 10% more damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "16994146",
    "edid": "ALResentful"
  },
  {
    "name": "Just Lucky I'm Alive",
    "description": "You've had lots of close calls. Whenever you finish a fight with less than 25% Health, your Luck increases by +4 for 3 minutes. You're also -25% as likely to be critically hit, and your own critical hits inflict +25% damage. (Requires Neutral Karma.)",
    "is_playable": true,
    "is_trait": false,
    "id": "67158607",
    "edid": "NVDLC04JustLuckyImAlivePerk",
    "requirements": [
      [">=", "Level", 50],
      ["not", ["has perk", "Thought You Died"]],
      ["not", ["has perk", "Ain't Like That Now"]]
    ]
  },
  {
    "name": "Wild Wasteland",
    "description": "Wild Wasteland unleashes the most bizarre and silly elements of post-apocalyptic America. Not for the faint of heart or the serious of temperament.",
    "is_playable": true,
    "is_trait": true,
    "id": "972136",
    "edid": "WildWasteland"
  },
  {
    "name": "Cats Paw",
    "description": "Cats Eyes were intended to be much deadlier. There's a trick when ingesting them that gives you better hand-eye coordination, as well as 4 % more critical chance.",
    "is_playable": false,
    "is_trait": false,
    "id": "16990357",
    "edid": "ALCatsPaw",
    "requirements": [
      [">=", "Medicine", 60]
    ]
  },
  {
    "name": "Sneering Imperialist",
    "description": "You don't take kindly to raiders, junkies, or tribals trying to \"settle\" or \"stay alive\" in civilized lands. Against dirty raider and junkie types as well as Zion's tribals you do +15% Damage and have a bonus to hit in V.A.T.S.",
    "is_playable": true,
    "is_trait": false,
    "id": "16840315",
    "edid": "NVDLC02SneeringImperialist",
    "requirements": [
      [">=", "Level", 8]
    ]
  },
  {
    "name": "Impartial Mediation",
    "description": "With the Impartial Mediation trait, you gain +10 points to Speech while you maintain a neutral karma level, but you suffer -1 Charisma and -5 Speech while Good, Very Good, Evil, or Very Evil.",
    "is_playable": true,
    "is_trait": true,
    "id": "100945069",
    "edid": "ImpartialMediation",
    "requirements": [
      [">=", "Charisma", 5]
    ]
  },
  {
    "name": "Hand Loader 1",
    "description": "You know your way around a reloading bench and don't let good brass and hulls go to waste. When you use Guns, you are 50% more likely to recover cases and hulls. You also have access to advanced ammo types at the Reloading Bench. The second rank increases your chance to recover hulls by another 2x.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464347",
    "edid": "HandLoader",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Repair", 60],
      ["or", [">=", "Guns", 50], [">=", "Big Guns", 50]]
    ]
  },
  {
    "name": "Hand Loader 2",
    "description": "You know your way around a reloading bench and don't let good brass and hulls go to waste. When you use Guns, you are 50% more likely to recover cases and hulls. You also have access to advanced ammo types at the Reloading Bench. The second rank increases your chance to recover hulls by another 2x.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464347",
    "edid": "HandLoader",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Repair", 60],
      ["or", [">=", "Guns", 50], [">=", "Big Guns", 50]]
    ]
  },
  {
    "name": "Inflation",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302214875",
    "edid": "PerkCapPressInflation"
  },
  {
    "name": "Clover's Catharsis",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117442560",
    "edid": "PerkClover"
  },
  {
    "name": "Tunnel Snakes Rule",
    "description": "Butch is a gang member at heart, and gangs have to have multiple members wearing the same colors. While Butch is in your party, you both gain +5% damage if you are both using the same weapon, and +5% DR if he is using the same armor as you, with an extra +5% if they are Tunnel Snake outfits.",
    "is_playable": false,
    "is_trait": false,
    "id": "184586377",
    "edid": "TTWFollowerPerkButchFollower"
  },
  {
    "name": "Non-Combatant",
    "description": "It's not your fight, you're just trying to stay alive. You gain +8 DT and +15% damage resistance while your weapon is holstered in combat.",
    "is_playable": true,
    "is_trait": false,
    "id": "285223209",
    "edid": "sssPerkNonCombatant",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Martyr",
    "description": "When struck, you're inclined to simply turn the other cheek, rather than strike back. Your divine Luck grants you a small chance for each wound's health loss to be partially restored.",
    "is_playable": true,
    "is_trait": false,
    "id": "285227440",
    "edid": "sssPerkMartyr",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Charisma", 8]
    ]
  },
  {
    "name": "Rad Tolerance",
    "description": "Although you are still notified when you get Minor Radiation Poisoning, you do not suffer any ill effects from it.",
    "is_playable": true,
    "is_trait": false,
    "id": "150999489",
    "edid": "DLC03RadTolerance",
    "requirements": [
      [">=", "Level", 46],
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "Patient",
    "description": "You are capable of great patience and insight. You pick up details and life lessons that other normally would not, which translates into a gain of 3 % more experience points.",
    "is_playable": false,
    "is_trait": false,
    "id": "16994156",
    "edid": "ALPatient"
  },
  {
    "name": "Skilled",
    "description": "You're skilled, but not experienced. You gain +5 points to every skill, but you suffer -10% from experience gained from now on.",
    "is_playable": true,
    "is_trait": true,
    "id": "16853894",
    "edid": "NVDLC03TraitSkilled"
  },
  {
    "name": "Perception Bonus",
    "description": "Increases your VATS hit chance based on your perception (or decreases it, if your perception is < 5).",
    "is_playable": false,
    "is_trait": false,
    "id": "302040978",
    "edid": "SRPerkPerceptionBonus"
  },
  {
    "name": "Energy Weapons Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332744",
    "edid": "sssPerkTaggedEnergyWeapons"
  },
  {
    "name": "Camel of the Wastes",
    "description": "You're a true water connoisseur. You gain increased benefits when drinking water.",
    "is_playable": false,
    "is_trait": false,
    "id": "1474086",
    "edid": "WaterChallengePerk"
  },
  {
    "name": "Companion Suite",
    "description": "COMPANIONS ONLY\n\n* Mult Weap DAM 0.75\n\n* Mult Target DT 0.75\n\n* Decrease Carry Weight 75\n\n* Increase DR 33%",
    "is_playable": false,
    "is_trait": false,
    "id": "1426801",
    "edid": "CompanionSuite"
  },
  {
    "name": "Ant Sight",
    "description": "Your body has been genetically enhanced with the perception and flame resistance of the Grayditch Fire Ants! Your Perception has increased by 1 while sneaking, and you are gain 3% resistance to fire for each point in Endurance.",
    "is_playable": false,
    "is_trait": false,
    "id": "793196",
    "edid": "MS04PerceptionPerk"
  },
  {
    "name": "Cowboy",
    "description": "When using any cowboy weapon, your attack speed, accuracy and damage are increased by 15%.",
    "is_playable": true,
    "is_trait": false,
    "id": "1279330",
    "edid": "Cowboy",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Guns", 45],
      [">=", "Melee Weapons", 25]
    ]
  },
  {
    "name": "Throwing Range Bonus",
    "description": "Modifies your throwing range based on your strength.",
    "is_playable": false,
    "is_trait": false,
    "id": "100746890",
    "edid": "SRThrowingRangeBonus"
  },
  {
    "name": "The Waking World",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117469348",
    "edid": "PerkWakingCloud"
  },
  {
    "name": "Talented",
    "description": "You're talented, but a slow learner. You gain +5 points to every skill, but you suffer -1 gained skill points per level.",
    "is_playable": true,
    "is_trait": true,
    "id": "50408326",
    "edid": "NVDLC03TraitSkilled"
  },
  {
    "name": "Big Town, Little Wasteland",
    "description": "It's a harsh world, and the residents of Big Town are barely handling things. Time for you to step in and help! You gain -20% enemy crit chance and +5 DT and +10 DR while facing five or more opponents.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558047",
    "edid": "PerkFacBigTown",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Puppies!",
    "description": "With the Puppies! perk, if Dogmeat dies, you'll be able to get a new canine companion from his litter of puppies. Just wait a bit, and you'll find your new furry friend waiting outside Vault 101.",
    "is_playable": true,
    "is_trait": false,
    "id": "134230545",
    "edid": "DLC03Puppies",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Luck", 8]
    ]
  },
  {
    "name": "Elijah's Last Words",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "16831656",
    "edid": "NVDLC01ElijahLastWords"
  },
  {
    "name": "Gunslinger 1",
    "description": "While using a one-handed weapon, your accuracy is increased by 15% per rank.",
    "is_playable": true,
    "is_trait": false,
    "id": "609979",
    "edid": "Gunslinger",
    "requirements": [
      [">=", "Level", 6],
      ["or", [">=", "Guns", 40], [">=", "Energy Weapons", 40]]
    ]
  },
  {
    "name": "Gunslinger 2",
    "description": "While using a one-handed weapon, your accuracy is increased by 15% per rank.",
    "is_playable": true,
    "is_trait": false,
    "id": "609979",
    "edid": "Gunslinger",
    "requirements": [
      [">=", "Level", 6],
      ["or", [">=", "Guns", 40], [">=", "Energy Weapons", 40]]
    ]
  },
  {
    "name": "DNAgent",
    "description": "Studying schematics on the abominations created at the Big MT has granted you a damage bonus (+10%) against Nightstalkers.",
    "is_playable": false,
    "is_trait": false,
    "id": "16815639",
    "edid": "NVDLC03DNAgentPerk",
    "requirements": [
      [">=", "Level", 30]
    ]
  },
  {
    "name": "Ideologue",
    "description": "It's not about the methods, it's about the ideals. Your addiction chance is doubled, and you always lose health equal to any karma loss, but you gain 4% more experience, +1 skill point from skill books and per level, 6% lower buying prices, and +1 Luck while your Karma is Good or Very Good. However, while your Karma is Evil or Very Evil, you suffer a harsher penalty to the same factors.",
    "is_playable": true,
    "is_trait": true,
    "id": "285227437",
    "edid": "sssPerkIdealogue",
    "requirements": [
      ["not", ["has perk", "Twisted"]]
    ]
  },
  {
    "name": "Twisted",
    "description": "You're sick and twisted, seeing suffering delights you. Your addiction duration is doubled, and while Evil or Very Evil, you gain +5/10% XP and AP regeneration, +6/15% positive chem duration, +5/10% healing, and +1 Luck, though you suffer an extra harsh penalty to those stats while Good or Very Good.",
    "is_playable": true,
    "is_trait": true,
    "id": "285348787",
    "edid": "sssPerkTwisted",
    "requirements": [
      ["not", ["has perk", "Ideologue"]]
    ]
  },
  {
    "name": "Dead Man's Burden",
    "description": "It is the burden of the dead to remind the living of what they have lost... You can put a single point into any of your S.P.E.C.I.A.L. attributes, and you also gain reputation with the Boomers and the Powder Gangers for your... destructive tendencies, but you lose reputation with the NCR and Caesar's Legion.",
    "is_playable": false,
    "is_trait": false,
    "id": "16826970",
    "edid": "NVDLC04DeadMansBurdenPerk"
  },
  {
    "name": "Swimming Tires You Out",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302214881",
    "edid": "PerkSwimPenalties"
  },
  {
    "name": "Ordinance Obsession",
    "description": "Bombs away! You've gained +10% accuracy with explosive weapons, and a bonus +15% chance to hit in V.A.T.S. Your chance to set off mines is also reduced by 15%, and your explosions are 15% larger while outdoors.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556482",
    "edid": "PerkFacBoomer",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Implant Y-7",
    "description": "Implant Y-7 is an enzyme booster that increases the Health (HP) gained from foods and recovers additional Action Points (AP) per food item consumed.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370074",
    "edid": "NVDLC03ImplantY7Perk"
  },
  {
    "name": "Death Wish",
    "description": "The elation of feeling yourself at the precipice of death gives you a rush unlike any other. When an enemy lands a critical hit on you, you have a Luck based chance to receive an XP bonus equal to the damage dealt by that hit.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333734",
    "edid": "ELYPerkDeathWish",
    "requirements": [
      [">=", "Level", 2]
    ]
  },
  {
    "name": "Addictive Personality",
    "description": "You just can't get enough of the hard stuff, that grimy stuff, that junk that hits your veins and makes your heart scream! You have 3x the normal addiction chance.\n\n\n\nHowever, your extended consumption of chemicals has shown you something new about life in the wasteland. (You will be able to select another perk immediately.)",
    "is_playable": false,
    "is_trait": false,
    "id": "50355189",
    "edid": "ELYFlawAddictivePersonality"
  },
  {
    "name": "Sluggish",
    "description": "You're moving as fast as you can, but everyone else just seems to be able to do more than you. You suffer -20% AP regen and equip speed, but your sloth-like persistence has shown you a new strength within yourself. (You will be able to select a new perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50369004",
    "edid": "ELYFlawSluggish",
    "requirements": [
      ["<", "Agility", 5]
    ]
  },
  {
    "name": "Science Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332749",
    "edid": "sssPerkTaggedScience"
  },
  {
    "name": "California Dreamin'",
    "description": "You're invigorated by the idea of returning law and order to the chaotic wasteland. You gain +25% equip speed, +15% AP regen, and -15% limb damage while wearing NCR faction armor and clothing.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556481",
    "edid": "PerkFacNCR",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Weak Spot",
    "description": "When armed with any kind of good old fashioned non-automatic bladed weapon, you know where to hack to ignore 25 % of your enemy's Damage Treshold.",
    "is_playable": false,
    "is_trait": false,
    "id": "16982813",
    "edid": "ALWeakSpot",
    "requirements": [
      [">=", "Unarmed", 90],
      [">=", "Agility", 7]
    ]
  },
  {
    "name": "Sunglasses At Night",
    "description": "As you peer through the darkened lenses of your shades, you're beginning to see a reflection of the visions in your own eyes. While those squares might think your specs are bogus, you know your cheaters are choice. If you continue to wear your sunglasses in the dark, you'll be made in the shade.",
    "is_playable": false,
    "is_trait": false,
    "id": "50457721",
    "edid": "ELYPerkSunglassesAtNight"
  },
  {
    "name": "Strength Bobblehead",
    "description": "It's essential you can bear any weight placed upon your shoulders.\n\n\n\nYou can now carry 25 lbs. more gear.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362660",
    "edid": "TTWBobbleheadPerkStrength"
  },
  {
    "name": "Bad Influence",
    "description": "You really bring out people's vulnerabilities when you're intoxicated. When you're drunk and rolling with at least one companion, your chems and meds last 20% longer, but you deal double damage to any teammates that wander into your line of fire (Requires Evil Karma).",
    "is_playable": true,
    "is_trait": true,
    "id": "50333700",
    "edid": "ELYPerkBadInfluence",
    "requirements": [
      ["<", "Charisma", 5],
      ["<", "Intelligence", 7]
    ]
  },
  {
    "name": "Fight the Power!",
    "description": "You've had enough of the so-called \"authorities\" pushing poor folks around! You gain +2 Damage Threshold and +5% Critical Chance against anyone wearing the faction armor of the NCR, Legion, Enclave or Brotherhood.",
    "is_playable": true,
    "is_trait": false,
    "id": "33617532",
    "edid": "NVDLC02FightThePower",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Honorary Deputy",
    "description": "You're the law of the land, and you bring your targets in fair and square. While not sneaking, you gain +6% reload and equip speed (+12% if you also aren't moving), but only while you have Good or Very Good karma.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556492",
    "edid": "PerkFacPrimm",
    "requirements": [
      [">=", "Level", 6]
    ]
  },
  {
    "name": "Claustrophobia",
    "description": "You have a fear of enclosed spaces (probably because of the mutants that live there). You gain +1 to S.P.E.C.I.A.L. attributes when outside, but suffer -1 when indoors.",
    "is_playable": true,
    "is_trait": true,
    "id": "16855982",
    "edid": "NVDLC03TraitClaustrophobia"
  },
  {
    "name": "Better Criticals",
    "description": "With the Better Criticals perk, you gain a 3% critical damage bonus per point of Perception.",
    "is_playable": true,
    "is_trait": false,
    "id": "204219",
    "edid": "BetterCriticals",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Perception", 6],
      [">=", "Luck", 6]
    ]
  },
  {
    "name": "Party Hard",
    "description": "Your ruthless party momentum allows you to ignore the negative effects of alcohol.",
    "is_playable": true,
    "is_trait": false,
    "id": "302004556",
    "edid": "sssPerkPartyHard",
    "requirements": [
      [">=", "Level", 8],
      ["or", [">=", "Survival", 30], [">=", "Endurance", 6]]
    ]
  },
  {
    "name": "Abominable 1",
    "description": "You've gained a damage bonus against abominations.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436379",
    "edid": "AbominationChallengePerk"
  },
  {
    "name": "Abominable 2",
    "description": "You've gained a damage bonus against abominations.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436379",
    "edid": "AbominationChallengePerk"
  },
  {
    "name": "Abominable 3",
    "description": "You've gained a damage bonus against abominations.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436379",
    "edid": "AbominationChallengePerk"
  },
  {
    "name": "Light Step",
    "description": "With the Light Step perk, your chance to set off mines and floor-based traps while sneaking is reduced by 10% per point of Agility. This effect is multiplicative, with a minimum chance to set off traps of 35%.",
    "is_playable": true,
    "is_trait": false,
    "id": "204215",
    "edid": "LightStep",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Sneak", 40]
    ]
  },
  {
    "name": "My Own Master Now",
    "description": "You've worked under the shackles of the wasteland factions long enough! You're your own master! You gain +1 Endurance, and for each faction that dislikes you you gain +1% damage, and -1% limb damage.",
    "is_playable": true,
    "is_trait": false,
    "id": "285294780",
    "edid": "sssPerkMyOwnMasterNow",
    "requirements": [
      [">=", "Level", 10],
      ["has perk", "Shunned by Legion+NCR+Strip"]
    ],
    "effects": [
      ["+", "Endurance", 1]
    ]

  },
  {
    "name": "Bomb Jack",
    "description": "Every time you use an explosive weapon, it has 10% chance of knocking your opponent down.",
    "is_playable": false,
    "is_trait": false,
    "id": "16991094",
    "edid": "ALBombJack",
    "requirements": [
      [">=", "Explosives", 50]
    ]
  },
  {
    "name": "Union Buster",
    "description": "Your time at the Sierra Madre has taught you much about initiating violence to those unsuspecting of it. Your weapon damage is increased by 10% if your target is not in combat, and you also gain 15% critical chance against those targets if you are not sneaking.",
    "is_playable": false,
    "is_trait": false,
    "id": "167776675",
    "edid": "sDMPerkUnionBuster"
  },
  {
    "name": "Vigilante Vendetta",
    "description": "You're gonna bring justice back to the wastes, whether they like it or not. You've gained +6 DT and DR, as well as +25 AP when facing Evil or Very Evil targets. You additionally gain a stacking +3% bonus damage against such targets at levels 10, 15, 20, 25, and 30.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558053",
    "edid": "PerkFacRegulators",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Chainsaw Carnage",
    "description": "A hefty cleaver may hew bone, but you're starting to need high-volume viscera to fulfill your violent delights. You deal +20% damage with automatic melee weapons like the Chainsaw, and when you kill a target using such a weapon, you will gain +10 DT for four seconds and time will slow for a short duration.\n\n(The Thermic Lance does not qualify.)",
    "is_playable": true,
    "is_trait": false,
    "id": "50424070",
    "edid": "ELYPerkChainsawCarnage",
    "requirements": [
      [">=", "Level", 24],
      ["has perk", "Butcher"]
    ]
  },
  {
    "name": "Almost Perfect",
    "description": "Take the Almost Perfect perk, and all S.P.E.C.I.A.L. stats are instantly raised to 9.",
    "is_playable": true,
    "is_trait": false,
    "id": "151014507",
    "edid": "DLC03AlmostPerfect",
    "requirements": [
      [">=", "Level", 50],
      ["or", ["<", "Agility", 9], ["<", "Charisma", 9], ["<", "Endurance", 9], ["<", "Intelligence", 9], ["<", "Luck", 9], ["<", "Perception", 9], ["<", "Strength", 9]]
    ]
  },
  {
    "name": "Junior Survivor",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you're still alive to tell the tale. You've gained +2% bonus to Poison Resistance & Radiation Resistance, and 2 points to both the Speech and Sneak skills.",
    "is_playable": false,
    "is_trait": false,
    "id": "209366",
    "edid": "MS03Perk1D",
    "effects": [
      ["+", "Speech", 2],
      ["+", "Sneak", 2]
    ]

  },
  {
    "name": "War Child",
    "description": "If your adrenaline isn't pumping, you're not performing your best. You gain +1 to all SPECIAL stats while in combat, but suffer -1 while outside combat.",
    "is_playable": true,
    "is_trait": true,
    "id": "285227443",
    "edid": "sssPerkWarChild"
  },
  {
    "name": "Elijah's Ramblings",
    "description": "Elijah obviously intended this to go to Veronica, but you earned it, right?\n\n\n\nYou've learned Elijah's secret Melee Weapon technique and your Critical Hits now do 50% more damage.",
    "is_playable": false,
    "is_trait": false,
    "id": "16831657",
    "edid": "NVDLC01ElijahRamblings"
  },
  {
    "name": "Forward Power Attack",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "1795173921",
    "edid": "migPowerAttackVATSPerk"
  },
  {
    "name": "Scrappy Survivor",
    "description": "Jericho's many years of roughing it in the wasteland taught him to get by with nothing but scraps and ruins. You can talk to him at any time to make a campfire.",
    "is_playable": false,
    "is_trait": false,
    "id": "201359007",
    "edid": "TTWFollowerPerkJericho"
  },
  {
    "name": "Nowhere To Hide",
    "description": "Where do you think you're going? Nobody gets away. You deal double damage to fleeing targets, and +50% damage to cloaked targets.",
    "is_playable": true,
    "is_trait": false,
    "id": "285235867",
    "edid": "sssPerkNowhereToHide",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Perception", 6]
    ]
  },
  {
    "name": "Swift Learner",
    "description": "The Swift Learner perk grants an additional 2% gained XP per point in Intelligence.",
    "is_playable": true,
    "is_trait": false,
    "id": "204243",
    "edid": "SwiftLearner",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 4],
      [">=", "Perception", 4]
    ]
  },
  {
    "name": "Realism Please",
    "description": "You are no longer an invincible superhero.",
    "is_playable": false,
    "is_trait": false,
    "id": "302166719",
    "edid": "SimpleRealismDUPLICATE000"
  },
  {
    "name": "Scientific Consensus",
    "description": "Against all odds, you've managed to balance the Big Mountain equation. The Big Empty isn't so empty with all these scientists floating around! Your Energy Weapons deal 10% more damage, and you deal double crit. damage with mad science weapons.",
    "is_playable": false,
    "is_trait": false,
    "id": "285324272",
    "edid": "sssPerkScientificConsensus",
    "requirements": [
      [">=", "Level", 25]
    ]
  },
  {
    "name": "Sharpshooter",
    "description": "Your visual acuity borders on clairvoyance. With this perk, the spread of all ranged weapons is decreased by 25%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324288",
    "edid": "sssPerkSharpshooter",
    "requirements": [
      [">=", "Level", 30],
      [">=", "Perception", 10]
    ]
  },
  {
    "name": "Overwhelming Odds",
    "description": "You've learned how to tilt the odds in your favor when outnumbered. Your weapon damage and V.A.T.S. accuracy are increased by 15% and you gain +5 DT penetration while fighting a group of five or more enemies.",
    "is_playable": true,
    "is_trait": false,
    "id": "285324289",
    "edid": "sssPerkOverwhelmingOdds",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Intelligence", 8]
    ]
  },
  {
    "name": "Reforged Steel",
    "description": "COMPANION ONLY - Veronica gains +2 DT and her unarmed attack rate goes up by 15%.",
    "is_playable": false,
    "is_trait": false,
    "id": "218334434",
    "edid": "TTTReforgedSteel"
  },
  {
    "name": "Covert Ops",
    "description": "You've learned the art of espionage from recovered intel, your pickpocket chance is increased by 15%",
    "is_playable": false,
    "is_trait": false,
    "id": "117489520",
    "edid": "DLC02CovertOps"
  },
  {
    "name": "Rad Tolerance",
    "description": "Although you are still notified when you get Minor Radiation Poisoning, you do not suffer any ill effects from it.",
    "is_playable": false,
    "is_trait": false,
    "id": "134222273",
    "edid": "DLC03RadTolerance",
    "requirements": [
      [">=", "Level", 46],
      [">=", "Endurance", 7]
    ]
  },
  {
    "name": "Spotlight",
    "description": "Your eyes pierce through people's lies. Each time you fail or succeed a particular dialog skill check for the first time, your Perception is increased by 1 and your Charisma is reduced by 1 for three minutes. Additionally, for every 2 successful checks per 1 failed check, you will gain a permanent +1 to Speech.",
    "is_playable": true,
    "is_trait": false,
    "id": "50333750",
    "edid": "ELYPerkSpotlight",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Perception", 8],
      ["<", "Charisma", 6],
      [">=", "Intelligence", 7]
    ]
  },
  {
    "name": "Camarader-E 1",
    "description": "Companion version of Camarader-E.",
    "is_playable": false,
    "is_trait": false,
    "id": "16827935",
    "edid": "NVDLC04CamaraderECompanionPerk"
  },
  {
    "name": "Camarader-E 2",
    "description": "Companion version of Camarader-E.",
    "is_playable": false,
    "is_trait": false,
    "id": "16827935",
    "edid": "NVDLC04CamaraderECompanionPerk"
  },
  {
    "name": "Camarader-E 3",
    "description": "Companion version of Camarader-E.",
    "is_playable": false,
    "is_trait": false,
    "id": "16827935",
    "edid": "NVDLC04CamaraderECompanionPerk"
  },
  {
    "name": "Food Sanitizer",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302008768",
    "edid": "PerkFoodSanitizer"
  },
  {
    "name": "Quick Draw",
    "description": "Quick Draw makes all of your weapon equipping and holstering 10% faster per each 10 points in the appropriate weapon skill above 30.",
    "is_playable": true,
    "is_trait": false,
    "id": "1275902",
    "edid": "QuickDraw",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Luck Bonus",
    "description": "Based on your luck, there is a small chance that a mine will prove to be a dud.",
    "is_playable": false,
    "is_trait": false,
    "id": "100811659",
    "edid": "SRLuckBonus"
  },
  {
    "name": "Divide Survivor",
    "description": "The Divide broke cities, flayed skin from bone and threatened to destroy the world, but you survived it - and stopped it. You can put a single point into any of your S.P.E.C.I.A.L. attributes, and you also gain reputation with the Followers of the Apocalypse and the Brotherhood of Steel for stopping another Armageddon.",
    "is_playable": false,
    "is_trait": false,
    "id": "16826972",
    "edid": "NVDLC04DivideSurvivorPerk"
  },
  {
    "name": "Action Star 1",
    "description": "The life of an action star is an exciting one! As your career develops, you'll be able to choose to improve your total AP, your AP regeneration rate, or your weapon AP cost. If you take all three ranks, your AP is restored by an amount equal to your luck on each headshot outside of V.A.T.S. as well!",
    "is_playable": true,
    "is_trait": false,
    "id": "100681048",
    "edid": "ActionStar",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Action Star 2",
    "description": "The life of an action star is an exciting one! As your career develops, you'll be able to choose to improve your total AP, your AP regeneration rate, or your weapon AP cost. If you take all three ranks, your AP is restored by an amount equal to your luck on each headshot outside of V.A.T.S. as well!",
    "is_playable": true,
    "is_trait": false,
    "id": "100681048",
    "edid": "ActionStar",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Action Star 3",
    "description": "The life of an action star is an exciting one! As your career develops, you'll be able to choose to improve your total AP, your AP regeneration rate, or your weapon AP cost. If you take all three ranks, your AP is restored by an amount equal to your luck on each headshot outside of V.A.T.S. as well!",
    "is_playable": true,
    "is_trait": false,
    "id": "100681048",
    "edid": "ActionStar",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Power Armor Bonus",
    "description": "You are no longer an invincible superhero.",
    "is_playable": false,
    "is_trait": false,
    "id": "100829523",
    "edid": "SRPowerArmor"
  },
  {
    "name": "Steady Chem",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "847241",
    "edid": "NVSteadyChemPerk"
  },
  {
    "name": "Party Boy",
    "description": "You are such a Party Boy that you no longer suffer the withdrawal effect from alcohol addiction.",
    "is_playable": false,
    "is_trait": false,
    "id": "134222271",
    "edid": "DLC03PartyBoy",
    "requirements": [
      [">=", "Level", 28]
    ]
  },
  {
    "name": "Carpet Bomber",
    "description": "Carpet Bomber increases Big Guns' explosion radius, attack speed, and spread by 25%.\n\n(Requires tag skill: Big Guns or Explosives)",
    "is_playable": true,
    "is_trait": true,
    "id": "285214766",
    "edid": "sssPerkCarpetBomber",
    "requirements": [
      [">=", "Agility", 6],
      ["or", ["tagged", "Explosives"], ["tagged", "Big Guns"]]
    ]
  },
  {
    "name": "Gunpowder Season",
    "description": "Salvation comes from the end of a smoking barrel.\n\n\n\n-50% reduced spread when using Guns.\n\n+4x chance to gain cases/hulls when firing Guns.\n\n+50% spread when using Energy Weapons and Big Guns.\n\n-50% attack speed when using Melee or Unarmed weapons.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333763",
    "edid": "ELYPerkGunpowderSeason"
  },
  {
    "name": "Silent Running 1",
    "description": "With the Silent Running perk, running no longer factors into a successful sneak attempt. The second rank grants an additional +2% sneaking speed per each 10 points in Sneak.",
    "is_playable": true,
    "is_trait": false,
    "id": "204211",
    "edid": "SilentRunning",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Agility", 6],
      [">=", "Sneak", 50]
    ]
  },
  {
    "name": "Silent Running 2",
    "description": "With the Silent Running perk, running no longer factors into a successful sneak attempt. The second rank grants an additional +2% sneaking speed per each 10 points in Sneak.",
    "is_playable": true,
    "is_trait": false,
    "id": "204211",
    "edid": "SilentRunning",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Agility", 6],
      [">=", "Sneak", 50]
    ]
  },
  {
    "name": "Tunnel Runner",
    "description": "It's invaluable to keep your head down. Your movement speed is increased by 25% while sneaking in light armor with your weapon holstered.",
    "is_playable": true,
    "is_trait": false,
    "id": "67158616",
    "edid": "NVDLC04TunnelRunnerPerk",
    "requirements": [
      [">=", "Level", 8],
      [">=", "Agility", 8]
    ]
  },
  {
    "name": "Bullet Time Perk",
    "description": "Perks effecting VATS will also give bonuses during Bullet Time.\n\n12) Camarader-E - DLC04\n\n11) Lonesome Road - DLC04\n\n10) Sneering Imperialist - DLC02\n\n8) Plasma Spaz\n\n7) Mysterious Stranger\n\n6) Miss Fortune\n\n4) Wired Reflexes\n\n3) Gunslinger\n\n1) Commando",
    "is_playable": false,
    "is_trait": false,
    "id": "1560324103",
    "edid": "JBTPerk"
  },
  {
    "name": "Retributor",
    "description": "Your time at the Sierra Madre has taught you much about getting even with those who've wronged you. Your weapon damage and spread are improved by 10% when you are not sneaking.",
    "is_playable": false,
    "is_trait": false,
    "id": "167776676",
    "edid": "sDMPerkRetributor"
  },
  {
    "name": "Barter Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332739",
    "edid": "sssPerkTaggedBarter"
  },
  {
    "name": "Heave, Ho!",
    "description": "Quite an arm you've got there. All of your thrown weapons gain 25% velocity and damage while holding the aim key.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335452",
    "edid": "HeaveHo",
    "requirements": [
      [">=", "Level", 2],
      ["or", [">=", "Strength", 5], [">=", "Agility", 6], [">=", "Explosives", 25], [">=", "Melee Weapons", 25]]
    ]
  },
  {
    "name": "Shotgun Surgeon 1",
    "description": "Your precision with a scattergun is something to behold. When using shotguns, each rank of Shotgun Surgeon grants you 6 points of Damage Threshold penetration and -8% spread.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464203",
    "edid": "ShotgunSurgeon",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Guns", 45],
      [">=", "Perception", 6]
    ]
  },
  {
    "name": "Shotgun Surgeon 2",
    "description": "Your precision with a scattergun is something to behold. When using shotguns, each rank of Shotgun Surgeon grants you 6 points of Damage Threshold penetration and -8% spread.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464203",
    "edid": "ShotgunSurgeon",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Guns", 45],
      [">=", "Perception", 6]
    ]
  },
  {
    "name": "Purifier",
    "description": "As a purifier of the wasteland, you do +50% damage with Melee and Unarmed weapons against Centaurs, Nightstalkers, Spore Plants, Spore Carriers, Deathclaws, Super Mutants, and Feral Ghouls.",
    "is_playable": true,
    "is_trait": false,
    "id": "1269621",
    "edid": "Purifier",
    "requirements": [
      [">=", "Level", 14]
    ]
  },
  {
    "name": "Action Girl 1",
    "description": "With the Action Girl perk, you gain an additional 15 Action Points to use in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "504322",
    "edid": "ActionGirl",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Action Girl 2",
    "description": "With the Action Girl perk, you gain an additional 15 Action Points to use in V.A.T.S.",
    "is_playable": false,
    "is_trait": false,
    "id": "504322",
    "edid": "ActionGirl",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Featherweight",
    "description": "You don't feel the need to gorge yourself with food anymore. You're faster (+10% Running Speed/ Attacks cost 15% less AP) when you're struck with minor starvation.",
    "is_playable": false,
    "is_trait": false,
    "id": "16983554",
    "edid": "ALFeatherweight",
    "requirements": [
      [">=", "Survival", 45]
    ]
  },
  {
    "name": "Rad Child",
    "description": "You truly are a rad child. As you go through the increasingly devastating stages of radiation sickness, you will regenerate more and more health while actively being irradiated by higher intensities of radiation.",
    "is_playable": true,
    "is_trait": false,
    "id": "1464061",
    "edid": "RadChild",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Survival", 75]
    ]
  },
  {
    "name": "Anodized Armor",
    "description": "Holding onto all those scrap electronics has begun to magnetize your armor. When wearing any metal armor and carrying 10+ scrap electronics, your item condition damage is reduced by 35%, and you gain +8% DR.",
    "is_playable": true,
    "is_trait": false,
    "id": "285218979",
    "edid": "sssPerkAnodizedArmor",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Science", 40]
    ]
  },
  {
    "name": "Ascetic",
    "description": "Through meditation, you've touched the fibers which connect all life, and you've sworn not to sever them; preservation of the beauty of life is the highest moral imperative.\n\nYou gain +2 Endurance, and +2 Strength while in combat, but your carry weight is reduced by 50 at all times, and you may only fight using non-lethal unarmed techniques.\n\n(Requires tag skill: Unarmed)",
    "is_playable": true,
    "is_trait": true,
    "id": "285328488",
    "edid": "sssPerkAscetic",
    "requirements": [
      [">=", "Perception", 6],
      ["tagged", "Unarmed"]
    ]
  },
  {
    "name": "Ant Might",
    "description": "Your body has been genetically enhanced with the strength and flame resistance of the Grayditch Fire Ants! Your Strength has increased by 1 while sneaking, and you gain 3% resistance to fire per point in Endurance.",
    "is_playable": false,
    "is_trait": false,
    "id": "793195",
    "edid": "MS04StrengthPerk"
  },
  {
    "name": "Living Anatomy",
    "description": "Living Anatomy allows you to see the Health and Damage Threshold of any target. It also gives you a +5% bonus to damage against Humans and non-feral Ghouls, and allows you to collect resources from abominations.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335449",
    "edid": "LivingAnatomy",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Medicine", 70]
    ]
  },
  {
    "name": "Throwing Strength",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "29943",
    "edid": "migThrowing"
  },
  {
    "name": "Heavy Handed",
    "description": "Your melee and unarmed attacks do 20% more damage, but you attack 35% slower with them.",
    "is_playable": true,
    "is_trait": true,
    "id": "1269445",
    "edid": "HeavyHanded",
    "requirements": [
      ["<", "Agility", 5]
    ]
  },
  {
    "name": "Them's Good Eatin'",
    "description": "Any living creature you kill has a 50% chance to have the potent healing items Thin Red Paste or Blood Sausage when looted.",
    "is_playable": true,
    "is_trait": false,
    "id": "16816329",
    "edid": "NVDLC03ThemsGoodEatingPerk",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Survival", 55]
    ]
  },
  {
    "name": "Meltdown",
    "description": "Meltdown grants you +25% crit. damage with plasma weapons, and critical hits on targets wearing metallic armor will heavily damage their armor and reduce their resistances.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335450",
    "edid": "Meltdown",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Energy Weapons", 90]
    ]
  },
  {
    "name": "Ghost Hunter",
    "description": "You've figured out the secret to taking down Ghost People. Your damage to Ghosts has been increased by 15%.",
    "is_playable": false,
    "is_trait": false,
    "id": "16843674",
    "edid": "NVDLC01GhostHunter"
  },
  {
    "name": "Implant M-5",
    "description": "You can be made... better... faster... stronger... Actually, just faster. The M-5 implant increases your crouched movement speed by 10% for greater efficiency as a test subject.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370068",
    "edid": "NVDLC03ImplantM5Perk"
  },
  {
    "name": "Brainless",
    "description": "Your brain has been replaced with advanced technologies: Your head can no longer be crippled, and your addiction chance is removed, but your radiation intake while drinking is doubled, and you have -1 Perception.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370750",
    "edid": "NVDLC03BrainlessPerk",
    "effects": [
      ["-", "Perception", 1]
    ]

  },
  {
    "name": "Firewalker",
    "description": "While moving, you gain +10 fire resistance. While walking, not running, you gain an additional +15.",
    "is_playable": false,
    "is_trait": false,
    "id": "285265326",
    "edid": "sssPerkFirewalker",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Endurance", 7],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Spineless",
    "description": "Your spine has been replaced with advanced technologies: Your torso can no longer be crippled, and your carry weight has increased by 25%, but your attack speed with Unarmed, and Melee Weapons has been reduced by 25%, and your equip speed has been reduced by 25%.",
    "is_playable": false,
    "is_trait": false,
    "id": "50370748",
    "edid": "NVDLC03SpinelessPerk",
    "effects": [
      ["-", "Endurance", 2]
    ]

  },
  {
    "name": "Cell Dweller",
    "description": "Explosives make for excellent leverage. You gain +6% equip and attack speed with throwable explosives and mines, +3% XP while Evil or Very Evil, +3% XP while indoors, and your explosive weapons gain +3/7% explosion radius while indoors/outdoors.",
    "is_playable": false,
    "is_trait": false,
    "id": "33556494",
    "edid": "PerkFacPowderGangers",
    "requirements": [
      [">=", "Level", 4]
    ]
  },
  {
    "name": "Homesick",
    "description": "You've come a long way, and experienced some serious head trauma. Your heart longs for the familar comforts and dangers of the Capital Wasteland.\n\n\n\nYour addiction chance and limb damage are increased by 25% anytime you're not in the Capital Wasteland or its surrounding territories.",
    "is_playable": false,
    "is_trait": false,
    "id": "50367471",
    "edid": "ELYFlawHomesick"
  },
  {
    "name": "I Don't Believe In Luck",
    "description": "You've always been beset by \"misfortune\"; good thing you don't believe in Luck. Your crit. damage has been reduced to 0, and your enemies' crit. chance has been reduced to 0.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333703",
    "edid": "ELYPerkUnlucky",
    "requirements": [
      ["=", "Luck", 1],
      ["not", ["has perk", "Miss Impossible"]],
      ["not", ["has perk", "Mister Impossible"]]
    ]
  },
  {
    "name": "Survival Guru",
    "description": "You wrote the book on how to survive in the Wasteland, and have shared your secrets with humanity. You've gained +6% bonus to Poison Resistance and Radiation Resistance, and +15 points to maximum Health.",
    "is_playable": false,
    "is_trait": false,
    "id": "185248",
    "edid": "MS03Perk3A"
  },
  {
    "name": "Medicine Bobblehead",
    "description": "The smart man knows a bandage only hides his wounds.\n\n\n\nYou are now 10% less likely to become addicted to chems.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362671",
    "edid": "TTWBobbleheadPerkMedicine"
  },
  {
    "name": "Boiling Shot",
    "description": "You discovered a way to boil your enemies into their armor. You inflict 30 % more damage with energy weapons if your opponent's DT exceeds 10.",
    "is_playable": false,
    "is_trait": false,
    "id": "16983558",
    "edid": "ALBoilingShot",
    "requirements": [
      [">=", "Energy Weapons", 90]
    ]
  },
  {
    "name": "Light Touch",
    "description": "Heavy armor just isn't your thing, so you've learned to customize light armor for maximum benefit. While wearing light armor or clothing, you gain +3 DT and DR, and your enemies suffer a -25% Critical Hit Chance.",
    "is_playable": true,
    "is_trait": false,
    "id": "16836731",
    "edid": "NVDLC01LightTouch",
    "requirements": [
      [">=", "Level", 6],
      ["<", "Strength", 6],
      [">=", "Agility", 6]
    ]
  },
  {
    "name": "Narcoleptic",
    "description": "You have trouble staying awake for even moderate periods of time. You will randomly pass out for a moment or two. Hope it's not at a bad time!\n\n\n\nFortunately, your unique trait has helped you understand more about yourself. (You will be able to select another perk immediately.)",
    "is_playable": true,
    "is_trait": true,
    "id": "50355188",
    "edid": "ELYFlawNarcoleptic"
  },
  {
    "name": "Barter Town 1",
    "description": "Your business prowess gives you discounts wherever you shop. With each rank of this perk, items you buy now cost 10% less.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358178",
    "edid": "TTWBarterTownChallengePerk"
  },
  {
    "name": "Barter Town 2",
    "description": "Your business prowess gives you discounts wherever you shop. With each rank of this perk, items you buy now cost 10% less.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358178",
    "edid": "TTWBarterTownChallengePerk"
  },
  {
    "name": "Barter Town 3",
    "description": "Your business prowess gives you discounts wherever you shop. With each rank of this perk, items you buy now cost 10% less.",
    "is_playable": false,
    "is_trait": false,
    "id": "201358178",
    "edid": "TTWBarterTownChallengePerk"
  },
  {
    "name": "Finesse",
    "description": "With the Finesse perk, you have a higher chance to score a critical hit on an opponent in combat, equivalent to 5 extra points of Luck.",
    "is_playable": true,
    "is_trait": false,
    "id": "609985",
    "edid": "Finesse",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Agility", 5]
    ]
  },
  {
    "name": "Magnate",
    "description": "You know how to make your money worth its weight. For each 1000 caps you hold above 3000, you have increasingly reduced purchase prices, up to a maximum of -17%. However, while you have less than 3000 caps, your buying prices are increased.",
    "is_playable": true,
    "is_trait": true,
    "id": "50333698",
    "edid": "ELYPerkMagnate",
    "requirements": [
      [">=", "Luck", 6],
      ["tagged", "Barter"]
    ]
  },
  {
    "name": "Luck Implant",
    "description": "Your frontal lobe has been enhanced with the Probability Calculator, increasing your Luck by 1.",
    "is_playable": false,
    "is_trait": false,
    "id": "1360180",
    "edid": "ImplantLuckPerk",
    "effects": [
      ["+", "Luck", 1]
    ]

  },
  {
    "name": "Club Diplomacy",
    "description": "You got a way with silencing vocal people. You inflict 25% more damage with blunt weapon to people with 5 Intelligence or more.",
    "is_playable": false,
    "is_trait": false,
    "id": "16982816",
    "edid": "ALClubDiplomacy",
    "requirements": [
      [">=", "Strength", 7],
      [">=", "Melee Weapons", 90]
    ]
  },
  {
    "name": "Bottomless Stomach",
    "description": "Where does the food go? Nobody knows, not even you! Your hunger rate is doubled, but your increased metabolism has allowed you to develop other strengths. (You will be able to select another perk immediately.)",
    "is_playable": false,
    "is_trait": true,
    "id": "50355191",
    "edid": "ELYFlawBottomlessStomach"
  },
  {
    "name": "Irradiated Beauty",
    "description": "Any time you sleep, you remove all of your Rads in addition to regaining all of your Health. (In Hardcore Mode, you still don't regain Health, but you lose 100 Rads.)",
    "is_playable": true,
    "is_trait": false,
    "id": "16826965",
    "edid": "NVDLC04IrradiatedBeautyPerk",
    "requirements": [
      [">=", "Level", 22],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "Sic Semper Tyrannis",
    "description": "You've set the tyrannical Legion ablaze with that most unholy of powers, nuclear fusion. While facing members of the Legion, you penetrate 8 DT, and deal 15% more damage with melee and flame-based weapons while your karma is Evil or Very Evil.",
    "is_playable": false,
    "is_trait": false,
    "id": "67158617",
    "edid": "NVDLC04ScourgeOfTheEastPerk"
  },
  {
    "name": "Tough Guy",
    "description": "Repeatedly breaking your bones has led them to becoming tougher.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436374",
    "edid": "SelfLimbDamageChallengePerk"
  },
  {
    "name": "Claustrophobia",
    "description": "You have a fear of enclosed spaces. You gain +1 to S.P.E.C.I.A.L. attributes when outside, but suffer -1 when indoors.",
    "is_playable": true,
    "is_trait": true,
    "id": "50410414",
    "edid": "NVDLC03TraitClaustrophobia"
  },
  {
    "name": "No Deserters",
    "description": "No one gets away! You inflict three times more damage with throwing weapons to fleeing enemies.",
    "is_playable": false,
    "is_trait": false,
    "id": "16982817",
    "edid": "ALNoDeserters",
    "requirements": [
      [">=", "Explosives", 30],
      ["or", [">=", "Strength", 5]]
    ]
  },
  {
    "name": "Day Tripper",
    "description": "You've done enough chems to know how to hang on to the effects just a while longer. Each point in Endurance grants you +3% chem duration.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436376",
    "edid": "ChemChallengePerk"
  },
  {
    "name": "Survival Expert",
    "description": "You've been tested in some of the most dangerous parts of the wastes, and you've not only survived - you've learned a few things. You've gained +4% bonus to Poison Resistance, Radiation Resistance and Damage Resistance.",
    "is_playable": false,
    "is_trait": false,
    "id": "209369",
    "edid": "MS03Perk2C"
  },
  {
    "name": "Cardiac Arrest",
    "description": "Your heart is back in your body, but some advanced technologies remain: You are less resistant to poison (50%) and robots are only somewhat confused by you (25% less likely to score a critical hit) now. But on the bright side, healing items (chems) are even more effective! ",
    "is_playable": false,
    "is_trait": false,
    "id": "16866235",
    "edid": "NVDLC03CardiacArrestPerk"
  },
  {
    "name": "Uncompromising",
    "description": "Therapy Result! You're impervious to other people's shenanigans, Ennemies have 50 % less chance at inflicting you critical hits.",
    "is_playable": false,
    "is_trait": false,
    "id": "16994153",
    "edid": "ALUncompromising",
    "requirements": [
      [">=", "Endurance", 5]
    ]
  },
  {
    "name": "Inertial Dampening",
    "description": "You've learned to avoid damage by diving away from it at just the right time. Whenever you're in the air, you gain +7 DT and +20% damage resistance.",
    "is_playable": true,
    "is_trait": false,
    "id": "285218980",
    "edid": "sssPerkInertialDampening",
    "requirements": [
      [">=", "Level", 20],
      [">=", "Agility", 8],
      [">=", "Endurance", 8]
    ]
  },
  {
    "name": "Fortune Finder",
    "description": "With the Fortune Finder perk, you'll find considerably more bottle caps in containers than you normally would. ",
    "is_playable": true,
    "is_trait": false,
    "id": "204259",
    "edid": "FortuneFinder",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Luck", 5],
      [">=", "Survival", 35]
    ]
  },
  {
    "name": "Scoundrel 1",
    "description": "Take the Scoundrel perk, and you can use your wily charms to influence people. With each rank, vendors give an 8% discount, and you gain and extra XP for passing speech checks.",
    "is_playable": true,
    "is_trait": false,
    "id": "100945062",
    "edid": "Scoundrel",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Charisma", 7]
    ]
  },
  {
    "name": "Scoundrel 2",
    "description": "Take the Scoundrel perk, and you can use your wily charms to influence people. With each rank, vendors give an 8% discount, and you gain and extra XP for passing speech checks.",
    "is_playable": true,
    "is_trait": false,
    "id": "100945062",
    "edid": "Scoundrel",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Charisma", 7]
    ]
  },
  {
    "name": "Scoundrel 3",
    "description": "Take the Scoundrel perk, and you can use your wily charms to influence people. With each rank, vendors give an 8% discount, and you gain and extra XP for passing speech checks.",
    "is_playable": true,
    "is_trait": false,
    "id": "100945062",
    "edid": "Scoundrel",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Charisma", 7]
    ]
  },
  {
    "name": "Pegleg Industry",
    "description": "You like to teach people not to run onto your lawn. You inflict 15 % more leg damage to your targets in VATS.",
    "is_playable": false,
    "is_trait": false,
    "id": "16984293",
    "edid": "ALPeglegIndustry",
    "requirements": [
      [">=", "Energy Weapons", 60],
      [">=", "Guns", 60]
    ]
  },
  {
    "name": "Wasteland Masquerade",
    "description": "The irony of life is that those who wear masks often show more truth than those without them. You gain +1 Charisma and Intelligence and gain +15% XP outside of combat while wearing headwear.\n\n(Exclusive from Headless Courier)",
    "is_playable": true,
    "is_trait": false,
    "id": "285227430",
    "edid": "sssPerkMasquerade",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Perception", 4],
      [">=", "Charisma", 6],
      [">=", "Speech", 35]
    ]
  },
  {
    "name": "Full Maintenance",
    "description": "While Raul is a companion, the condition of weapons and armor decays 25% slower.",
    "is_playable": false,
    "is_trait": false,
    "id": "1430204",
    "edid": "FullMaintenance"
  },
  {
    "name": "Lord Death 1",
    "description": "You gain a damage bonus against everything, because you like killing everything.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436388",
    "edid": "LordDeathChallengePerk"
  },
  {
    "name": "Lord Death 2",
    "description": "You gain a damage bonus against everything, because you like killing everything.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436388",
    "edid": "LordDeathChallengePerk"
  },
  {
    "name": "Lord Death 3",
    "description": "You gain a damage bonus against everything, because you like killing everything.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436388",
    "edid": "LordDeathChallengePerk"
  },
  {
    "name": "Marathon Runner",
    "description": "Your run speed is increased by 20% while wearing nothing, 15% while wearing light armor, 10% while wearing medium armor, and 5% while wearing heavy armor.",
    "is_playable": true,
    "is_trait": false,
    "id": "1335446",
    "edid": "TravelLight",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Survival", 45]
    ]
  },
  {
    "name": "Entomologist",
    "description": "With the Entomologist perk, you do an additional +50% damage every time you attack a mutated insect, like the Radroach, Giant Mantis, or Radscorpion, and you are able to find more of their parts in loot.",
    "is_playable": true,
    "is_trait": false,
    "id": "204249",
    "edid": "Entomologist",
    "requirements": [
      [">=", "Level", 4],
      [">=", "Survival", 45],
      [">=", "Intelligence", 4]
    ]
  },
  {
    "name": "Electronic Ectoptics",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444094",
    "edid": "PerkEDE"
  },
  {
    "name": "Alertness",
    "description": "You've learned to keep your senses alert to any danger. When crouched and not moving you gain a +2 to your Perception attribute to help you find enemies before they find you.",
    "is_playable": true,
    "is_trait": false,
    "id": "67158610",
    "edid": "NVDLC04AlertnessPerk",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Intelligence", 5],
      [">=", "Perception", 5]
    ]
  },
  {
    "name": "Intense Training 1",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 2",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 3",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 4",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 5",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 6",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 7",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 8",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 9",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Intense Training 10",
    "description": "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L. attributes.",
    "is_playable": true,
    "is_trait": false,
    "id": "281777",
    "edid": "IntenseTraining",
    "requirements": [
      [">=", "Level", 2],
      ["or", ["<", "Agility", 10], ["<", "Charisma", 10], ["<", "Endurance", 10], ["<", "Luck", 10], ["<", "Perception", 10], ["<", "Intelligence", 10], ["<", "Strength", 10]]
    ]
  },
  {
    "name": "Escalator to Heaven",
    "description": "When you choose the Escalator to Heaven perk, your Karma is instantly set to Very Good.",
    "is_playable": true,
    "is_trait": false,
    "id": "151014511",
    "edid": "DLC03EscalatorToHeaven",
    "requirements": [
      [">=", "Level", 44]
    ]
  },
  {
    "name": "Scribe Counter",
    "description": "Scribes in the Brotherhood of Steel are often not well-trained in the combat use of the high-tech gear employed by Paladins. They rely on unarmed defensive moves like the Scribe Counter to keep enemies at bay. Perform a standard attack out of a block hit reaction to execute a Scribe Counter.",
    "is_playable": false,
    "is_trait": false,
    "id": "1423594",
    "edid": "ScribeCounter"
  },
  {
    "name": "Taste of Death",
    "description": "Aqua Pura tastes like death.",
    "is_playable": false,
    "is_trait": false,
    "id": "201426392",
    "edid": "TTWTasteofDeathChallengePerk"
  },
  {
    "name": "Stealth Suit Mk II 1",
    "description": "The latest software patch for the Stealth Suit Mk II.\n\nV1.1: Damping Sensors (+10 Sneak)\n\nV1.2: Aural Subnet (+1 PER)\n\nV1.3: Synced Fitment (+1 AGL)\n\nV1.4: Impulse Accelerator (Increased sneak speed)",
    "is_playable": false,
    "is_trait": false,
    "id": "16836677",
    "edid": "NVDLC03AuralStealthSuitPerk"
  },
  {
    "name": "Stealth Suit Mk II 2",
    "description": "The latest software patch for the Stealth Suit Mk II.\n\nV1.1: Damping Sensors (+10 Sneak)\n\nV1.2: Aural Subnet (+1 PER)\n\nV1.3: Synced Fitment (+1 AGL)\n\nV1.4: Impulse Accelerator (Increased sneak speed)",
    "is_playable": false,
    "is_trait": false,
    "id": "16836677",
    "edid": "NVDLC03AuralStealthSuitPerk"
  },
  {
    "name": "Stealth Suit Mk II 3",
    "description": "The latest software patch for the Stealth Suit Mk II.\n\nV1.1: Damping Sensors (+10 Sneak)\n\nV1.2: Aural Subnet (+1 PER)\n\nV1.3: Synced Fitment (+1 AGL)\n\nV1.4: Impulse Accelerator (Increased sneak speed)",
    "is_playable": false,
    "is_trait": false,
    "id": "16836677",
    "edid": "NVDLC03AuralStealthSuitPerk"
  },
  {
    "name": "Stealth Suit Mk II 4",
    "description": "The latest software patch for the Stealth Suit Mk II.\n\nV1.1: Damping Sensors (+10 Sneak)\n\nV1.2: Aural Subnet (+1 PER)\n\nV1.3: Synced Fitment (+1 AGL)\n\nV1.4: Impulse Accelerator (Increased sneak speed)",
    "is_playable": false,
    "is_trait": false,
    "id": "16836677",
    "edid": "NVDLC03AuralStealthSuitPerk"
  },
  {
    "name": "Flashbanged!",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "302038255",
    "edid": "PerkFlashbang"
  },
  {
    "name": "Boone's Boondoggles",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444096",
    "edid": "PerkBoone"
  },
  {
    "name": "Careful Cairns",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117465140",
    "edid": "PerkFollowsChalk"
  },
  {
    "name": "Broad Daylight",
    "description": "You're so sneaky that you can sneak even with your Pip-Boy light on! Any time the Pip-Boy light is on, you gain a sneak bonus to offset the light's sneak penalty.",
    "is_playable": true,
    "is_trait": false,
    "id": "67151583",
    "edid": "NVDLC04BroadDaylightPerk",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Sneak", 50]
    ]
  },
  {
    "name": "Targeted Demolition",
    "description": "Targeted Demolition reduces explosive Big Guns' explosion radius by 20%, increases their attack speed by 20%, and increases their explosive projectile damage by 10%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285214765",
    "edid": "sssPerkTargetedDemolition",
    "requirements": [
      [">=", "Level", 16],
      [">=", "Perception", 9],
      [">=", "Big Guns", 60],
      [">=", "Explosives", 60]
    ]
  },
  {
    "name": "Cardiac Arrest",
    "description": "Your heart is back in your body, but some advanced technologies remain: You still suffer -15 radiation resistance, but your health and AP have increased by 25, and your damage resistance has increased by 5%.",
    "is_playable": false,
    "is_trait": false,
    "id": "50420667",
    "edid": "NVDLC03CardiacArrestPerk"
  },
  {
    "name": "The Final Delivery",
    "description": "Ulysses was right about something: One person's decisions can irrevocably change history. While you wear your Courier Duster, you gain +50% rocket damage and projectile velocity.",
    "is_playable": false,
    "is_trait": false,
    "id": "285328518",
    "edid": "sssPerkLonesomeRoadFinalDelivery",
    "requirements": [
      [">=", "Level", 30],
      ["not", ["has perk", "A Mended Divide"]]
    ]
  },
  {
    "name": "Sneak Tagged",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "285332740",
    "edid": "sssPerkTaggedSneak"
  },
  {
    "name": "Sex Appeal",
    "description": "You've always been able to rely on your looks to get your way, not your words. You have +2 Charisma, but -10 Barter and Speech.",
    "is_playable": true,
    "is_trait": true,
    "id": "285348785",
    "edid": "sssPerkSexAppeal",
    "requirements": [
      [">=", "Charisma", 3]
    ],
    "effects": [
      ["+", "Charisma", 2],
      ["-", "Speech", 10],
      ["-", "Barter", 10]
    ]

  },
  {
    "name": "Tag!",
    "description": "The Tag! perk allows you to select a fourth Skill to be a Tag skill, which instantly raises it by 10 points.",
    "is_playable": true,
    "is_trait": false,
    "id": "204221",
    "edid": "Tag",
    "requirements": [
      [">=", "Level", 10]
    ]
  },
  {
    "name": "Speech Bobblehead",
    "description": "Let your words be your weapon.\n\n\n\nYou can now hire any companion regardless of your Karma.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362676",
    "edid": "TTWBobbleheadPerkSpeech"
  },
  {
    "name": "View To A Kill",
    "description": "You're an avid learner on the battlefield. When your weapon is holstered, you gain +50% XP during combat.",
    "is_playable": true,
    "is_trait": false,
    "id": "285277948",
    "edid": "sssPerkViewToAKill",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Perception", 6],
      [">=", "Intelligence", 6]
    ]
  },
  {
    "name": "Blunt Force Trauma 1",
    "description": "Blunt Force Trauma increases your crit. chance and attack speed with blunt weapons by 10%, and the second rank increases your crit. damage by 15% and your damage by an additional 15%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285299008",
    "edid": "sssPerkBluntForceTrauma",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Strength", 7],
      ["or", [">=", "Melee Weapons", 35], [">=", "Unarmed", 35]]
    ]
  },
  {
    "name": "Blunt Force Trauma 2",
    "description": "Blunt Force Trauma increases your crit. chance and attack speed with blunt weapons by 10%, and the second rank increases your crit. damage by 15% and your damage by an additional 15%.",
    "is_playable": true,
    "is_trait": false,
    "id": "285299008",
    "edid": "sssPerkBluntForceTrauma",
    "requirements": [
      [">=", "Level", 6],
      [">=", "Strength", 7],
      ["or", [">=", "Melee Weapons", 35], [">=", "Unarmed", 35]]
    ]
  },
  {
    "name": "Cyborg",
    "description": "You've made permanent enhancements to your body! The Cyborg perk instantly adds +10% to your Poison, Radiation, Energy and Fire Resistances.",
    "is_playable": true,
    "is_trait": false,
    "id": "100945067",
    "edid": "Cyborg",
    "requirements": [
      [">=", "Level", 14],
      [">=", "Medicine", 60],
      [">=", "Science", 60]
    ]
  },
  {
    "name": "Repair Bobblehead",
    "description": "Why go down with the ship when you can try to fix it?\n\n\n\nYour weapons and armor now degrade 10% slower.",
    "is_playable": false,
    "is_trait": false,
    "id": "201362673",
    "edid": "TTWBobbleheadPerkRepair"
  },
  {
    "name": "Plasma Spaz - Ammo",
    "description": "Plasma Spaz companion perk for ammo",
    "is_playable": false,
    "is_trait": false,
    "id": "33584458",
    "edid": "migAmmoPAFperk"
  },
  {
    "name": "Splash Damage",
    "description": "When you're deep in enemy territory, you just start chucking grenades and hope for the best. All Explosives have a 25% larger area of effect.",
    "is_playable": true,
    "is_trait": false,
    "id": "1465072",
    "edid": "SplashDamage",
    "requirements": [
      [">=", "Level", 12],
      [">=", "Explosives", 60]
    ]
  },
  {
    "name": "Broad Daylight",
    "description": "You're so sneaky that you can sneak even with your Pip-Boy light on! Any time the Pip-Boy light is on, you gain a sneak bonus to offset the light's sneak penalty.",
    "is_playable": true,
    "is_trait": false,
    "id": "16819935",
    "edid": "NVDLC04BroadDaylightPerk",
    "requirements": [
      [">=", "Level", 36]
    ]
  },
  {
    "name": "Cross Cancel",
    "description": "",
    "is_playable": false,
    "is_trait": false,
    "id": "117444105",
    "edid": "PerkCross"
  },
  {
    "name": "Gun Guru",
    "description": "You're so good with brass and powders that they'd hire you at the Gun Runners as a reloader. You gain +30 Repair while using a physical Reloading Bench.",
    "is_playable": true,
    "is_trait": false,
    "id": "285227412",
    "edid": "sssPerkGunGuru",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Intelligence", 6],
      [">=", "Guns", 60]
    ]
  },
  {
    "name": "Red Sun",
    "description": "Can you feel the rays of the glorious sunshine? When you're charged by the rays of the sun (outside, between 7 a.m. and 7 p.m.) your laser weapons will penetrate 5 DT and gain a moderate damage bonus which increases the further away your target is. (+3-7 damage)",
    "is_playable": true,
    "is_trait": false,
    "id": "285299003",
    "edid": "sssPerkRedSun",
    "requirements": [
      [">=", "Level", 10],
      [">=", "Energy Weapons", 40]
    ]
  },
  {
    "name": "Dream Crusher",
    "description": "Something about your presence dampens others' desires to exceed. Your enemy's chance of getting critical hits on you is multiplied by .1 for each point your Charisma is below 10based on how low your Charisma is below 10.",
    "is_playable": false,
    "is_trait": false,
    "id": "200683",
    "edid": "MS03DreamCrusherPerk"
  },
  {
    "name": "Atom Bomb Baby",
    "description": "It's hard to operate heavy weaponry while also wearing heavy armor! You gain increased equip and reload speed (30/20/10%), as well as increased Big Guns (+15/10/5), while wearing clothes/light, medium, or heavy (non-power) armors.",
    "is_playable": true,
    "is_trait": false,
    "id": "285223197",
    "edid": "sssPerkAtomBombBaby",
    "requirements": [
      [">=", "Level", 8],
      ["<", "Strength", 9],
      ["or", [">=", "Endurance", 8], [">=", "Agility", 8], [">=", "Big Guns", 50], ["tagged", "Big Guns"]]
    ]
  },
  {
    "name": "Social Drinker",
    "description": "You're not drinking to get drunk, you're drinking to have a good time with your friends. You have -20% addiction chance when traveling with at least one companion.",
    "is_playable": true,
    "is_trait": false,
    "id": "285269536",
    "edid": "sssPerkSocialDrinker",
    "requirements": [
      [">=", "Level", 2],
      [">=", "Charisma", 8]
    ]
  },
  {
    "name": "Friendly Help",
    "description": "Your V.A.T.S. protectors will help you more often as your Luck increases.",
    "is_playable": false,
    "is_trait": false,
    "id": "1436387",
    "edid": "VATSHelperChallengePerk"
  },
  {
    "name": "Scrap City",
    "description": "You've taken inspiration from Megaton's scrap-based architecture. You've gained +5 Repair. While you carry 10 or more Scrap Metal, you gain an additional +5 Repair, -10% limb damage, -8% item degradation, and +4% carry weight.",
    "is_playable": false,
    "is_trait": false,
    "id": "33558035",
    "edid": "PerkFacMegaton",
    "requirements": [
      [">=", "Level", 2]
    ],
    "effects": [
      ["+", "Repair", 5]
    ]

  },
  {
    "name": "Who Killed The World?",
    "description": "It wasn't the animals; it wasn't the robots; You know who killed the world.\n\n\n\n+10% damage against humans\n\n-15% damage to non-humans",
    "is_playable": true,
    "is_trait": true,
    "id": "50333697",
    "edid": "ELYPerkWhoKilledTheWorld"
  },
  {
    "name": "Riot Disperser",
    "description": "You've specialized in dispersal of crowds and unruly masses. When using riot weapons, you gain +20% non-automatic attack speed and +20% reload speed, but your spread is increased by 20% as well, and hitting any crippled limb on an enemy will knock them down. When wearing riot armor, enemy crit. chance is reduced by 50%, and you gain +10 DR.",
    "is_playable": false,
    "is_trait": false,
    "id": "167840571",
    "edid": "sDMPerkRiotCop"
  }]
