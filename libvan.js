const { a, br, button, div, input, form, label, pre, span, table, thead, tbody, td, th, tr } = van.tags

const ASSERT_ON = true

/**
 * @template T
 * @typedef {Object} Van
 * @property {T} val
 * @property {T} oldVal
 * @property {T} rawVal
 */

/**
 * @template T
 * @param {T} t
 * @returns {Van<T>}
 */
const vstate = (t) => van.state(t)

/**
 * @template T
 * @param {() => T} f
 * @returns {Van<T>}
 */
const vderive = (f) => van.derive(f)

function assert(condition, message) {
    if (ASSERT_ON && !condition) throw new Error(message || "Assertion failed")
}

function assert_eq(fst, snd) {
    assert(fst.toString() === snd.toString(), `"${fst}" != "${snd}"`)
}

/**
 * @template T
 * @param {function(string): T} f
 * @returns {Object.<string, T>}
 */
const stats_map = f => Object.fromEntries(STATS.map(stat => [stat, f(stat)]));

/**
 * @template T
 * @param {function(string): T} f
 * @returns {Object.<string, T>}
 */
const skills_map = (f) => Object.fromEntries(SKILLS.map(skill => [skill, f(skill)]));

/**
 * @param {number} stat
 * @returns {number}
 */
const compute_skill_from_stat = (stat) => Math.max(0, stat) * 2;

/**
 * @param {number} stat
 * @param {number} luck
 * @returns {number}
 */
const compute_skill_from_stat_and_luck = (stat, luck) => Math.ceil(compute_skill_from_stat(stat) + luck / 2 - 1);

class LevelUp {
    /**
     * @param {?Set<String>} tagged_skills
     * @param {?Object.<string, number>} skills_increases
     * @param {?Set<Perk>} perks
     */
    constructor(tagged_skills, skills_increases, perks) {
        this.tagged_skills = tagged_skills ?? new Set();
        this.skills_increases = skills_increases ?? {};
        this.perks = perks ?? new Set();
    }

    toJSON() {
        return {
            tagged_skills: Array.from(this.tagged_skills),
            skills_increases: this.skills_increases,
            perk_names: Array.from(this.perks).map(p => p.name)
        };
    }

    /** @returns {LevelUp} */
    static fromJSON(s) {
        return new LevelUp(
            new Set(s.tagged_skills),
            s.skills_increases,
            new Set(s.perk_names.map(n => PERKS[n]))
        );
    }
}

class Level {
    /**
     * @param {number} level
     * @param {Object.<string, number>} stats
     * @param {Object.<string, number>} skills
     * @param {Set<string>} tagged_skills
     * @param {Set<Perk>} perks
     * @param {number} additional_skill_rate_point
     */
    constructor(level, stats, skills, tagged_skills, perks, additional_skill_rate_point) {
        this.level = level
        this.stats = stats
        this.skills = skills
        this.tagged_skills = tagged_skills
        this.perks = perks
        this.perks_names = new Set(Array.from(perks).map(p => p.name))
        this.additional_skill_rate_point = additional_skill_rate_point
    }

    skill_rate = () => Math.floor(this.stats[INTELLIGENCE] / 2 + 6) + this.additional_skill_rate_point;

    /** @returns {Array<Perk>} */
    available_perks() {
        return Object.values(PERKS).filter(p => !this.perks.has(p)).map(perk => {
            perk["why_not_available"] = perk.test(this).get_err_or("");
            return perk;
        });
    }
}

const VERSION = 1;

class Build {
    /**
     * @param {Object.<string, number>} starting_stats
     * @param {Array<LevelUp>} level_ups
     */
    constructor(starting_stats, level_ups) {
        this.starting_stats = starting_stats;
        this.level_ups = level_ups;
    }

    toJSON() {
        return {
            version: VERSION,
            starting_stats: this.starting_stats,
            level_ups: this.level_ups.map(l => l.toJSON())
        }
    }

    /** @returns {Build} */
    static fromJSON(s) {
        if (s.version !== VERSION) {
            console.warn(`Wrong document version. Expecting ${VERSION} but loaded document has version ${s.version}. I will try to load the Build regardless but it can fail.`);
        }
        return new Build(
            s.starting_stats,
            Array.from(s.level_ups.map(l => LevelUp.fromJSON(l)))
        );
    }

    /**
     * @param {number} n Number of the level to be returned
     * @returns {Level}
     */
    level(n) {
        assert(this.level_ups.length >= n, `Unable to compute level ${n} because this builds only has ${this.level_ups.length} level ups`)
        var stats = structuredClone(this.starting_stats);
        var skills = Object.fromEntries(SKILLS.map(s => [s, 0]));
        var tagged_skills = new Set();
        var perks = new Set();
        var additional_skill_rate_point = 0;
        for (const [level, level_up] of this.level_ups.slice(0, n).entries()) {
            for (const perk of Array.from(level_up.perks)) {
                for (const [stat, change] of Object.entries(perk.stats_changes)) {
                    stats[stat] += change;
                }
                for (const [skill, change] of Object.entries(perk.skills_changes)) {
                    skills[skill] += change;
                }
                perks.add(perk);
            }
            for (const [skill, change] of Object.entries(level_up.skills_increases)) {
                skills[skill] += change;
            }
            Array.from(level_up.tagged_skills).forEach(ts => tagged_skills.add(ts));
            if (level > 1) {
                additional_skill_rate_point ^= stats[INTELLIGENCE] % 2 == 1;
            }
        }
        for (const stat of STATS) {
            stats[stat] = Math.min(10, Math.max(1, stats[stat]));
        }
        for (const skill of SKILLS) {
            skills[skill] += compute_skill_from_stat_and_luck(stats[SKILLS_STAT[skill]], stats[LUCK]);
        }
        return new Level(n, stats, skills, tagged_skills, perks, additional_skill_rate_point);
    }

    /** @returns {Level} */
    last_level = () => this.level(this.level_ups.length);

    /**
     * @param {LevelUp} level_up
     */
    level_up = (level_up) => this.level_ups.push(level_up)
    level_down = () => this.level_ups.pop()
}

/**
 * @param {Van<Object.<string, number>>} stats_points
 * @param {Van<number>} spent_points
 */
const SpecialSelection = (stats_points, spent_points) => {
    /**
     * @param {string} name
     * @param {Van<number>} stat
     */
    function stat_selection(name, stat) {
        return tr(
            td(name),
            td(button({ class: "add-sub-button", invisible: vderive(() => spent_points.val <= 0 || stat.val <= 1), onclick: () => --stat.val }, "-")),
            td({ class: "stat-value" }, stat),
            td(button({ class: "add-sub-button", invisible: vderive(() => spent_points.val >= 33 || stat.val >= 10), onclick: () => ++stat.val }, "+"))
        );
    }

    const special_table = table(
        tr({ class: vderive(() => spent_points.val >= 33 ? "ready" : "not-ready") }, td(span('Points: '), span(spent_points), span("/33"))),
        Object.entries(stats_points).map(([stat, stat_state]) => stat_selection(stat, stat_state))
    );

    return div({ class: 'special-selection' }, special_table);
}

/**
 * @param {Van<Set<string>>} selected
 */
const TaggedSkillsSelection = (selected) => {
    const hidden = skills_map(skill => vderive(() => selected.val.size == 3 && !selected.val.has(skill)));
    const checked = skills_map(skill => vderive(() => selected.val.has(skill)));
    const toggle_trait = (that, skill) => {
        if (that.target.checked) {
            if (selected.val.size < 3) {
                selected.val = selected.val.union(new Set([skill]));
            } else {
                that.target.checked = false;
            }
        } else {
            selected.val = selected.val.difference(new Set([skill]));
        }
    }
    const checkboxes = div({ class: "skill-checkboxes" }, SKILLS.map(skill => {
        const checkbox = input({ type: "checkbox", checked: checked[skill], onclick: (e) => toggle_trait(e, skill) });
        return div({ class: "skill-checkbox", hidden: hidden[skill] }, div(checkbox), div(skill));
    }));
    return div({ class: "tagged-skills" }, div({ class: vderive(() => selected.val.size == 3 ? "ready" : "not-ready") }, "Tagged Skills:"), checkboxes);
}

/**
 * @template T
 * @template E
 */
class Result {
    /** @type {T} */
    #ok
    /** @type {E} */
    #err
    /**
     * @param {T} ok 
     * @param {E} err
     */
    constructor(ok, err) {
        if ((ok == null && err == null) || (ok != null && err != null)) {
            throw new Error('Result should be either ok or error')
        }
        this.#ok = ok
        this.#err = err
    }

    toString = () => this.map_or_else(e => `Err(${e})`, o => `Ok(${o})`);

    /**
     * @template T
     * @param {T} ok
     * @return {Result<T, null>}
     */
    static ok(ok) { return new Result(ok, null) }

    /**
     * @template E
     * @param {E} err
     * @return {Result<null, E>}
     */
    static err = err => new Result(null, err)

    /** @return {boolean} */
    is_ok = () => this.#ok != null

    /** @return {boolean} */
    is_err = () => this.#err != null

    /**
     * @param {T} def
     * @returns {T}
     */
    get_or = def => this.is_ok() ? this.#ok : def;

    /**
     * @param {E} def
     * @returns {E}
     */
    get_err_or = def => this.is_err() ? this.#err : def;

    /**
     * @returns {T}
     */
    get_or_throw() {
        if (this.is_err()) throw new Error(this.#err)
        return this.#ok
    }

    /**
     * @return {E}
     */
    get_err_or_throw() {
        if (this.is_ok()) throw new Error('This Result is an ok and not an error!')
        return this.#err
    }

    /**
     * @template U
     * @param {function(E): U} fe
     * @param {function(T): U} ft
     * @return {U}
     */
    map_or_else(fe, ft) {
        return this.#ok == null ? fe(this.#err) : ft(this.#ok);
    }
}

{
    assert(Result.ok(1).is_ok())
    assert(!Result.ok(1).is_err())
    assert(Result.err('e').is_err())
    assert(!Result.err('e').is_ok())
    assert(Result.ok(1).get_or(2) == 1)
    assert(Result.ok(1).get_or_throw('e') == 1)
    assert(Result.err(1).get_or(2) == 2)
}

class Requirement {
    /**
     * @param {Level} level
     * @returns {Result<string, string>} ok if test passed, err otherwise
     */
    test(level) { throw new Error("Requirement doesn't define test") }

    /**
     * @param {Level} level
     * @returns {Result<string, string>} ok if test didn't pass, err otherwise
     */
    test_not = level => this.test(level).map_or_else(Result.ok, Result.err);

    /**
     * @param {Array.<string|number>} r
     * @returns {Result<Requirement, String>}
     */
    static parse(r) {
        if (r.constructor !== Array) {
            return Result.err('Requirements must be Arrays')
        }
        if (r.length == 0) {
            return Result.err('Requirements must not be empty')
        }

        // Level/Skill/Stat comparison
        if (r[0] == '>' || r[0] == '>=' || r[0] == '=' || r[0] == '!=' || r[0] == '<=' || r[0] == '<') {
            if (r.length != 3) {
                return Result.err('Comparison requirements must have 3 elements')
            }
            const IS_LEVEL = r[1] === 'Level'
            const IS_STAT = STATS_SET.has(r[1])
            if (!IS_LEVEL && !IS_STAT && !(r[1] in SKILLS_STAT)) {
                return Result.err('Unknown skill or statistic ' + r[1])
            }
            if (typeof r[2] != 'number') {
                return Result.err('The third element of a comparison requirement must be a number')
            }
            return Result.ok(new ComparisonRequirement(r[0], r[1], r[2]))
        }

        // has skill tagged
        if (r[0] == 'tagged') {
            if (r.length != 2) return Result.err('Tagged requirements must have 2 elements')
            if (!(r[1] in SKILLS_STAT)) return Result.err(`Tagged skill ${r[1]} doesn't exist`)
            return Result.ok(new TaggedRequirement(r[1]))
        }

        // has perk
        if (r[0] == 'has perk') {
            if (r.length != 2) return Result.err('Has Perk must have 2 element')
            return Result.ok(new PerkRequirement(r[1]))
        }

        // not
        if (r[0] == 'not') {
            if (r.length != 2) return Result.err('Not requirement must have 2 elements')
            const inner = Requirement.parse(r[1]).get_or_throw()
            return Result.ok(new NotRequirement(inner))
        }

        // or
        if (r[0] == 'or') {
            var requirements = []
            for (let i = 1; i < r.length; i++) {
                if (r[i].constructor != Array) return Result.err('Or predicates must be arrays')
                const parsed = Requirement.parse(r[i]).get_or_throw()
                if (typeof parsed === 'string' || parsed instanceof String) {
                    return Result.err('Or predicate error: ' + parsed)
                }
                requirements.push(parsed)
            }
            return Result.ok(new OrRequirement(requirements))
        }

        return Result.err(`Unknown predicate ${r[0]}`)
    }
}

class NotRequirement extends Requirement {
    /**
     * @param {Requirement} inner
     */
    constructor(inner) {
        super()
        this.inner = inner
    }

    /**
     * @param {Level} level
     * @returns {Result<string, string>}
     */
    test = level => this.inner.test_not(level);

    /**
     * @param {Level} level
     * @returns {Result<string, string>}
     */
    test_not = level => this.inner.test(level);
}

class PerkRequirement extends Requirement {
    /**
     * @param {string} perk
     */
    constructor(perk) {
        super()
        this.perk = perk
    }

    /**
     * @param {Level} level
     * @returns {Result<string, string>}
     */
    test = level =>
        level.perks_names.has(this.perk) ? Result.ok(`has the perk ${this.perk}`)
            : Result.err(`doesn't have the perk ${this.perk}`);
}

class TaggedRequirement extends Requirement {
    /**
     * @param {string} skill
     */
    constructor(skill) {
        super()
        this.skill = skill
    }

    /**
     * @param {Level} level
     * @returns {Result<string, string>}
     */
    test = level =>
        level.tagged_skills.has(this.skill) ? Result.ok(`has ${this.skill} tagged`)
            : Result.err(`doesn't have ${this.skill} tagged`);
}

class ComparisonRequirement extends Requirement {
    /**
     * @param {string} comparator
     * @param {string} prop "Level" or stat or skill
     * @param {number} value
     */
    constructor(comparator, prop, value) {
        super()
        this.comparator = comparator
        this.prop = prop
        this.value = value
    }

    get opposite_comparator() {
        if (this.comparator == '>') return '<=';
        if (this.comparator == '>=') return '<';
        if (this.comparator == '=') return '!=';
        if (this.comparator == '!=') return '=';
        if (this.comparator == '<=') return '>';
        if (this.comparator == '<') return '>=';
        throw new Error('Unknown comparator ' + this.comparator);
    }

    /**
     * @param {Level} level
     * @returns {Result<string, string>}
     */
    test = level =>
        this.test_bool(level) ? Result.ok(`${this.prop} ${this.comparator} ${this.value}`)
            : Result.err(`${this.prop} ${this.opposite_comparator} ${this.value}`);

    test_bool(level) {
        const level_value = this.prop == 'Level' ? level.level : SKILLS.includes(this.prop) ? level.skills[this.prop] : level.stats[this.prop]
        if (this.comparator == '>') return level_value > this.value;
        if (this.comparator == '>=') return level_value >= this.value;
        if (this.comparator == '=') return level_value == this.value;
        if (this.comparator == '!=') return level_value != this.value;
        if (this.comparator == '<=') return level_value <= this.value;
        if (this.comparator == '<') return level_value < this.value;
        throw new Error('Unknown comparator ' + this.comparator);
    }
}

class OrRequirement extends Requirement {
    /**
     * @param {Array<Requirement>} requirements
     */
    constructor(requirements) {
        super()
        this.requirements = requirements
    }

    /**
     * @param {Level} level
     * @returns {Result<string, string>}
     */
    test(level) {
        const failures = [];
        for (const requirement of this.requirements) {
            const result = requirement.test(level);
            if (result.is_ok()) { return result }
            failures.push(result.get_err_or_throw());
        }
        return Result.err(failures.join(" AND "));
    }
}

{
    assert(Requirement.parse([]).is_err())
    assert(Requirement.parse(['a']).is_err())
    assert(Requirement.parse(['>']).is_err())
    assert(Requirement.parse(['=', 'Charisma']).is_err())
    assert(Requirement.parse(['=', 'Charisma', 'wront type']).is_err())
    Requirement.parse(['<', 'Strength', 10]).get_or_throw()
    Requirement.parse(['<=', 'Perception', 2]).get_or_throw()
    Requirement.parse(['=', 'Endurance', 5]).get_or_throw()
    Requirement.parse(['!=', 'Charisma', 6]).get_or_throw()
    Requirement.parse(['>=', 'Intelligence', 1]).get_or_throw()
    Requirement.parse(['>', 'Agility', 8]).get_or_throw()
    Requirement.parse(['>', 'Luck', 9]).get_or_throw()
    Requirement.parse(['or']).get_or_throw()
    assert(Requirement.parse(['or', 1]).is_err())
    assert(Requirement.parse(['or', ['>', 'Luck', 9], 2]).is_err())
    Requirement.parse(['or', ['>', 'Luck', 9]]).get_or_throw()
    Requirement.parse(['or', ['=', 'Strength', 9], ['=', 'Endurance', 9]]).get_or_throw()
    assert(Requirement.parse(['tagged']).is_err())
    Requirement.parse(['tagged', 'Big Guns']).get_or_throw()
    Requirement.parse(['>', 'Level', 10]).get_or_throw()
    Requirement.parse(['has perk', 'Cowbow']).get_or_throw()
    Requirement.parse(['not', ['has perk', 'Cowbow']]).get_or_throw()
}

class Perk {
    // We don't care about the full effect of a perk. Instead we care
    // about its permanent effects on stats, tagged_skills and skills
    // because they are requirements to get new perks
    /**
     * @param {string} name
     * @param {bool} is_playable
     * @param {string} id
     * @param {string} edid
     * @param {Array<Requirement>} requirements
     * @param {Object.<string, number>} stats_changes
     * @param {Object.<string, number>} skills_changes
     * @param {Set<string>} new_tagged_skills
     */
    constructor(name, is_playable, id, edid, requirements, stats_changes, skills_changes, new_tagged_skills) {
        this.name = name
        this.is_playable = is_playable
        this.id = id
        this.edid = edid
        this.requirements = requirements
        this.stats_changes = stats_changes
        this.new_tagged_skills = new_tagged_skills
        this.skills_changes = skills_changes
    }

    /**
     * @param {Object} o
     * @returns {Result<Perk, String>}
     */
    static parse(o) {
        if (!('name' in o)) return Result.err('Perk name is missing')
        const name = o.name
        if (!('is_playable' in o)) return Result.err('Perk is_playable is missing')
        const is_playable = o.is_playable
        if (!('id' in o)) return Result.err('Perk id is missing')
        const id = o.id
        if (!('edid' in o)) return Result.err('Perk edid is missing')
        const edid = o.edid

        var requirements = []
        for (const raw of o.requirements ?? []) {
            const requirement_or_error = Requirement.parse(raw)
            if (requirement_or_error.is_err())
                return Result.err(`Error while parsing requirements of perk ${name}: ${requirement_or_error.get_err_or_throw()}`)
            requirements.push(requirement_or_error.get_or_throw())
        }
        var stats_changes = {}
        var skills_changes = {}
        var new_tagged_skills = new Set()
        for (const raw of o.effects ?? []) {
            if (raw[0] == '+' || raw[0] == '-') {
                if (raw.length != 3) return Result.err('A statistic or skill effect must have three elements')
                const IS_STAT = STATS_SET.has(raw[1])
                if (!IS_STAT && !(raw[1] in SKILLS_STAT)) {
                    return Result.err('Unknown skill or statistic ' + raw[1])
                }
                if (typeof raw[2] != 'number' || raw[2] === NaN) {
                    return Result.err('The third element of a statistic or skill effect must be a number')
                }
                if (IS_STAT) {
                    if (raw[0] == '+') stats_changes[raw[1]] = stats_changes[raw[1]] ?? 0 + raw[2]
                    if (raw[0] == '-') stats_changes[raw[1]] = stats_changes[raw[1]] ?? 0 - raw[2]
                } else {
                    if (raw[0] == '+') skills_changes[raw[1]] = skills_changes[raw[1]] ?? 0 + raw[2]
                    if (raw[0] == '-') skills_changes[raw[1]] = skills_changes[raw[1]] ?? 0 - raw[2]
                }
            } else if (raw[0] = 'tag') {
                if (raw.length != 2) return Result.err('A tagged effect must have two elements')
                new_tagged_skills.push(raw[1])
            } else return Result.err(`Unknown effect ${raw[0]}`)
        }
        return Result.ok(new Perk(name, is_playable, id, edid, requirements, stats_changes, skills_changes, new_tagged_skills))
    }

    /**
     * @param {Level} level
     * @returns {Result<string, string>}
     */
    test(level) {
        const successes = [];
        const failures = [];
        for (const requirement of this.requirements) {
            const result = requirement.test(level);
            if (result.is_err()) {
                failures.push(result.get_err_or_throw());
            } else {
                successes.push(result.get_or_throw());
            }
        }
        return failures.length > 0 ? Result.err(failures.join(", ")) : Result.ok(successes.join(", "));
    }
}

/** @returns {Object.<string, Perk>} */
function load_perks() {
    const perks = Object.fromEntries(RAW_PERKS.map(p => Perk.parse(p).get_or_throw()).map(p => [p.name, p]));

    // Intense training
    for (let i = 1; i <= 10; i++) {
        delete perks[`Intense Training ${i}`];
    }

    for (const stat of STATS) {
        const stats_changes = { [stat]: 1 };
        for (let i = 1; i <= 10; i++) {
            const requirements = [
                new ComparisonRequirement(">=", "Level", 2),
                new ComparisonRequirement("<", stat, 10)];
            if (i > 1) {
                requirements.push(new PerkRequirement(`Intense Training ${i - 1}: ${stat}`));
            }
            const name = `Intense Training ${i}: ${stat}`;
            perks[name] = new Perk(
                name,
                true,
                "281777", // id
                "IntenseTraining", // edid
                requirements,
                stats_changes,
                {},
                new Set()
            );
        }
    }
    // /Intense Training

    return perks;
}

const PERKS = load_perks();

if (ASSERT_ON) {
    /**
     * @param {number} s
     * @param {number} p
     * @param {number} e
     * @param {number} c
     * @param {number} i
     * @param {number} a
     * @param {number} l
     * @returns {Object.<string, number>}
     */
    function specials(s, p, e, c, i, a, l) {
        return { [STRENGTH]: s, [PERCEPTION]: p, [ENDURANCE]: e, [CHARISMA]: c, [INTELLIGENCE]: i, [AGILITY]: a, [LUCK]: l };
    }

    const missing_per_unarmed = new Build(specials(1, 2, 3, 4, 5, 6, 7), [new LevelUp(new Set(), {}, new Set())]).level(1);
    assert_eq(PERKS.Ascetic.test(missing_per_unarmed), Result.err(`${PERCEPTION} < 6, doesn't have ${UNARMED} tagged`));

    const missing_per = new Build(specials(1, 2, 3, 4, 5, 6, 7), [new LevelUp(new Set([UNARMED]), {}, new Set())]).level(1);
    assert_eq(PERKS.Ascetic.test(missing_per), Result.err(`${PERCEPTION} < 6`));

    const missing_unarmed = new Build(specials(1, 6, 3, 4, 5, 6, 7), [new LevelUp(new Set(), {}, new Set())]).level(1);
    assert_eq(PERKS.Ascetic.test(missing_unarmed), Result.err(`doesn't have ${UNARMED} tagged`));

    const can_take_ascetic = new Build(specials(1, 6, 3, 4, 5, 6, 7), [new LevelUp(new Set([UNARMED]), {}, new Set())]).level(1);
    assert_eq(PERKS.Ascetic.test(can_take_ascetic), Result.ok(`${PERCEPTION} >= 6, has ${UNARMED} tagged`));

    const not_enough_char = new Build(specials(1, 2, 3, 2, 5, 6, 7), [new LevelUp(new Set(), {}, new Set())]).level(1);
    assert_eq(PERKS['Sex Appeal'].test(not_enough_char), Result.err(`${CHARISMA} < 3`));

    const can_take_sex_appeal = new Build(specials(1, 2, 3, 3, 5, 6, 7), [new LevelUp(new Set(), {}, new Set())]).level(1);
    assert_eq(PERKS['Sex Appeal'].test(can_take_sex_appeal), Result.ok(`${CHARISMA} >= 3`));

    const rapid_reload_build = new Build(specials(1, 2, 3, 4, 5, 6, 7), []);
    rapid_reload_build.level_up(new LevelUp(new Set(), {}, new Set())); // level 1
    rapid_reload_build.level_up(new LevelUp(new Set(), { [GUNS]: 10 }, new Set())); // level 2
    rapid_reload_build.level_up(new LevelUp(new Set(), {}, new Set())); // level 3
    rapid_reload_build.level_up(new LevelUp(new Set(), { [GUNS]: 10 }, new Set())); // level 4
    rapid_reload_build.level_up(new LevelUp(new Set(), {}, new Set())); // level 5
    rapid_reload_build.level_up(new LevelUp(new Set(), {}, new Set())); // level 6
    rapid_reload_build.level_up(new LevelUp(new Set(), { [GUNS]: 5 }, new Set())); // level 7
    rapid_reload_build.level_up(new LevelUp(new Set(), {}, new Set())); // level 8
    assert(PERKS['Rapid Reload 1'].test(rapid_reload_build.level(8)));
}

if (ASSERT_ON) {
    const lu1 = new LevelUp(new Set([UNARMED, GUNS, BARTER]), {}, new Set());
    const lu2 = new LevelUp(new Set(), { [BARTER]: 10 }, new Set(['Swift Learner']));
    const lu3 = new LevelUp(new Set(), { [GUNS]: 5, [BARTER]: 5 }, new Set());
    const lu4 = new LevelUp(new Set(), { [BARTER]: 10 }, new Set(['Tribal Ways']));
    const lu5 = new LevelUp(new Set(), { [UNARMED]: 10 }, new Set());
    const lu6 = new LevelUp(new Set(), { [GUNS]: 10 }, new Set(['Hunter']));
    const starting_stats = specials(5, 5, 5, 5, 5, 5, 5);
    const build = new Build(starting_stats, [lu1, lu2, lu3, lu4, lu5, lu6]);
    assert_eq(build, Build.fromJSON(build.toJSON()));
}

const App = () => {
    const stats_points = stats_map(() => vstate(5));
    const spent_points = vderive(() => Object.values(stats_points).reduce((a, s) => a + s.val - 1, 0));
    const tagged_skills = vstate(new Set());
    const level_ups = vstate([]);
    const build = vderive(() => {
        if (spent_points.val >= 33 && tagged_skills.val.size >= 3) {
            const starting_stats = stats_map(stat => stats_points[stat].val);
            if (level_ups.val.length === 0) {
                level_ups.val.push(new LevelUp(tagged_skills.val, {}, new Set()));
            }
            return new Build(starting_stats, level_ups.val);
        }
        level_ups.val = [];
        return null
    });
    const special_and_tagged = div({ class: "special-tagged" },
        SpecialSelection(stats_points, spent_points),
        TaggedSkillsSelection(tagged_skills)
    );
    return div({ class: "main" },
        ImportExportBuild(stats_points, tagged_skills, level_ups, build),
        special_and_tagged,
        vderive(() => build.val === null ? div() : div(Spreadsheet(build.val)))
    );
}

/**
 * @param {Object.<string, Van<number>>} stats_points
 * @param {Van<Set<string>>} tagged_skills
 * @param {Van<Array<LevelUp>>} level_ups
 * @param {Van<Build>} build
 */
const ImportExportBuild = (stats_points, tagged_skills, level_ups, build) => {
    const import_input = input({
        type: "file", style: "display: none;", onchange: e => {
            const reader = new FileReader();
            for (const stat of STATS) {
                stats_points[stat].val = 5;
            }
            tagged_skills.val = new Set();
            level_ups.val = [];
            reader.onload = () => {
                const parsed = JSON.parse(reader.result);
                const loaded_build = Build.fromJSON(parsed);
                console.log(loaded_build);
                level_ups.val = loaded_build.level_ups;
                if (loaded_build.level_ups.length > 0) {
                    tagged_skills.val = loaded_build.level_ups[0].tagged_skills;
                }
                for (const stat of STATS) {
                    stats_points[stat].val = loaded_build.starting_stats[stat];
                }
            };
            reader.readAsText(e.target.files[0]);
        }
    });
    const import_build = button({ onclick: () => import_input.click() }, "Import Build");
    const export_build = () => {
        const file = new Blob([JSON.stringify(build.val.toJSON(), null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(file);
        const anchor = a({ href: url, download: "build.json" });
        van.add(document.body, anchor);
        anchor.click();
        setTimeout(function () {
            anchor.remove();
            window.URL.revokeObjectURL(url);
        })
    };
    const export_button = vderive(() => button({ disabled: build.val == null, onclick: export_build }, "Export Build"));
    return div({ class: "import-export" }, export_button, import_input, import_build);
}

/**
     * @param {Van<boolean>} prev_level_ready
     * @param {number} level
     * @param {Build} build
     */
function new_row(body, prev_level_ready, level, build) {
    const prev_level = build.level(level == 1 ? level : level - 1);
    const skill_rate = level == 1 ? 0 : prev_level.skill_rate();

    if (build.level_ups.length < level) {
        build.level_ups.push(new LevelUp());
    }
    const level_up = build.level_ups[level - 1];
    const ready_for_next_level = vstate(build.level_ups.length > level);

    const perks = vstate(new Set(Array.from(level_up.perks)));

    /** @param {function(Perk): number} f */
    const perks_changes = f => vderive(() => Array.from(perks.val).reduce((a, p) => a + (f(p) ?? 0), 0));

    const stat_change = stat => perks_changes(p => p.stats_changes[stat]);
    const stats_changes = stats_map(stat_change);

    const stats = stats_map(stat => vderive(() => prev_level.stats[stat] + stats_changes[stat].val));

    const skills_change = skills_map(skill => vstate(level_up.skills_increases[skill] ?? 0));
    const skills_perk_change = skills_map(skill => perks_changes(p => p.skills_changes[skill]));
    const skills_stat_change = skills_map(skill => perks_changes(p => compute_skill_from_stat(p.stats_changes[SKILLS_STAT[skill]] ?? 0)));
    const skills_all_changes = skills_map(skill => vderive(() => skills_change[skill].val + skills_perk_change[skill].val + skills_stat_change[skill].val));
    const skills = skills_map(skill => vderive(() => prev_level.skills[skill] + skills_all_changes[skill].val));

    const skill_point_weight = (skill) => prev_level.tagged_skills.has(skill) ? 2 : 1;
    const skill_points_used = (skill) => vderive(() => skills_change[skill].val / skill_point_weight(skill));
    const skills_points_used = skills_map(skill_points_used)
    const skills_points_avail = vderive(() => skill_rate - SKILLS.reduce((a, s) => a + skills_points_used[s].val, 0));
    const skill_points = [vderive(() => skill_rate - skills_points_avail.val), "/", skill_rate];

    const skill_sub_hidden = skill => vderive(() => ready_for_next_level.val || skills_change[skill].val == 0);
    const skills_sub_hidden = skills_map(skill_sub_hidden);
    const skill_sub_onclick = skill => () => { skills_change[skill].val -= skill_point_weight(skill) };
    const skill_sub = skill => button({ class: "add-sub-button", invisible: skills_sub_hidden[skill], onclick: skill_sub_onclick(skill) }, '-');
    const skills_sub = skills_map(skill => skill_sub(skill));

    const skill_add_hidden = vderive(() => ready_for_next_level.val || skills_points_avail.val == 0);
    const skill_add_onclick = skill => () => { skills_change[skill].val += skill_point_weight(skill) };
    const skill_add = skill => button({ class: "add-sub-button", invisible: skill_add_hidden, onclick: skill_add_onclick(skill) }, '+');
    const skills_add = skills_map(skill => skill_add(skill));

    const stat_class = stat => vderive(() => stats_changes[stat].val > 0 ? "skill-increased" : stats_changes[stat].val < 0 ? "skill-decreased" : "");
    const stats_cells = STATS.map(stat => td({ class: stat_class(stat) }, stats[stat]));
    const skill_class = skill => vderive(() => skills_all_changes[skill].val > 0 ? "skill-increased" : skills_all_changes[skill].val < 0 ? "skill-decreased" : 0);
    const skills_cells = SKILLS.map(skill => td(
        table(tr(td(skills_sub[skill]), td({ class: skill_class(skill) }, skills[skill]), td(skills_add[skill])))));

    const perks_button = vderive(() => {
        const skills = skills_map(skill => prev_level.skills[skill] + skills_change[skill].val);
        const prev_perks = level == 1 ? new Set() : prev_level.perks
        const partial_level = new Level(level, prev_level.stats, skills, prev_level.tagged_skills, prev_perks, prev_level.additional_skill_rate_point);
        return PerksSelectionButton(partial_level, perks, ready_for_next_level);
    });
    const row = tr(td(level), td({ class: vderive(() => skills_points_avail.val == 0 ? "ready" : "not-ready") }, skill_points), skills_cells, stats_cells, td(perks_button));
    const next_level_button = button({
        invisible: vderive(() => ready_for_next_level.val || skills_points_avail.val > 0),
        onclick: () => { ready_for_next_level.val = true; }
    }, "Add Level");
    const remove_level_button = button({
        invisible: vderive(() => level < 2 || ready_for_next_level.val),
        onclick: () => {
            build.level_ups.pop();
            row.remove();
            prev_level_ready.val = false;
        }
    }, "Remove Level");
    van.add(row, td(next_level_button), td(remove_level_button))
    van.add(body, row);
    vderive(() => {
        if (ready_for_next_level.val) {
            for (const skill of SKILLS) {
                level_up.skills_increases[skill] = skills_change[skill].val;
            }
            level_up.perks = perks.val;
            new_row(body, ready_for_next_level, level + 1, build);
        }
    });
}

/**
 * @param {Build} build
 */
const Spreadsheet = (build) => {
    if (build.level_ups.length == 0) {
        build.level_ups.push(new LevelUp());
    }
    const body = tbody();
    new_row(body, vstate(true), 1, build);
    return table({ class: "spreadsheet" }, thead(th("Level"), th("Skill Points"), SKILLS.map(s => th(s)),
        th('S'), th('P'), th('E'), th('C'), th('I'), th('A'), th('L'),
        th('Perks/Traits'), th('Add Level'), th('Remove Level')), body);
}

/**
 * @param {Level} level
 * @param {Van<Set<Perk>>} selected_perks
 * @param {Van<boolean>} lock_button
 */
const PerksSelectionButton = (level, selected_perks, lock_button) => {
    const PerkSelection = () => {
        const show_non_playable = vstate(false);
        const show_req_not_met = vstate(false);
        const perks = Object.values(PERKS).filter(p => !level.perks_names.has(p.name));
        perks.sort((p1, p2) => p1.name.localeCompare(p2.name));
        const body = tbody(perks.map(perk => {
            let test_res = perk.test(level);
            const hidden = vderive(() => (!show_non_playable.val && !perk.is_playable) ||
                (!show_req_not_met.val && test_res.is_err()));
            const checked = vderive(() => selected_perks.val.has(perk));
            const onclick = () => {
                selected_perks.val = selected_perks.val.has(perk)
                    ? selected_perks.val.difference(new Set([perk]))
                    : selected_perks.val.union(new Set([perk]));
            };
            const checkbox = input({ type: "checkbox", checked: checked, onclick: onclick });
            return tr({ hidden: hidden }, td(checkbox), td(perk.name), vderive(() => td(test_res.get_err_or(""))));
        }));
        const perks_table = table({ class: "perks-table" }, thead(th(), th("Perk/Trait"), th(vderive(() => show_req_not_met.val ? "Missing Requirements" : ""))), body);
        const perk_div = div({ class: "modal-content" }, perks_table);
        const modal_div = div({ class: "modal", style: "display:block;" }, perk_div);

        van.add(perk_div, button({ onclick: () => { modal_div.remove(); } }, "Confirm"));

        const show_non_playable_cb = vderive(() => input({
            type: "checkbox", checked: show_non_playable.val,
            onclick: () => show_non_playable.val = show_non_playable.val ? false : true
        }));
        van.add(perk_div, div({ class: "show-option-checkbox" }, div(show_non_playable_cb), div("Show non playables")));

        const show_req_not_met_cb = vderive(() => input({
            type: "checkbox", checked: show_req_not_met.val,
            onclick: () => show_req_not_met.val = show_req_not_met.val ? false : true
        }));
        van.add(perk_div, div({ class: "show-option-checkbox" }, div(show_req_not_met_cb), div("Show perks with requirements not met")));

        van.add(document.body, modal_div);
    }
    const label = vderive(() => {
        const label_parts = [];
        for (const [i, perk] of Array.from(selected_perks.val).entries()) {
            if (i > 0) { label_parts.push(br()); }
            label_parts.push(perk.name);
        }
        return div(label_parts.length === 0 ? ["None"] : label_parts);
    })
    return button({ disabled: lock_button, onclick: () => { PerkSelection() } }, label);
}

window.onload = () => { van.add(document.body, App()) }