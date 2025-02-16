export interface VerbConjugation {
    [subject: string]: string;
}
  
export interface VerbData {
    type: string;
    tense: { [tense: string]: VerbConjugation };
}
  
export interface VerbLibrary {
    verbs: { [verbName: string]: VerbData };
}
export const verbLibrary = {
    verbs: {
        être: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'suis',
                    tu: 'es',
                    'il/elle/on': 'est',
                    nous: 'sommes',
                    vous: 'êtes',
                    'ils/elles': 'sont'
                },
                "Futur simple": {
                    je: 'serai',
                    tu: 'seras',
                    'il/elle/on': 'sera',
                    nous: 'serons',
                    vous: 'serez',
                    'ils/elles': 'seront'
                },
                "Passé simple": {
                    je: 'fus',
                    tu: 'fus',
                    'il/elle/on': 'fût',
                    nous: 'fûmes',
                    vous: 'fûtes',
                    'ils/elles': 'furent'
                },
                Imparfait: {
                    'j\'': 'étais',
                    tu: 'étais',
                    'il/elle/on': 'était',
                    nous: 'étions',
                    vous: 'étiez',
                    'ils/elles': 'étaient'
                },
                "Conditionnel présent": {
                    je: 'serais',
                    tu: 'serais',
                    'il/elle/on': 'serait',
                    nous: 'serions',
                    vous: 'seriez',
                    'ils/elles': 'seraient'
                },
                "Subjonctif présent": {
                    'que je': 'sois',
                    'que tu': 'sois',
                    'q\'il/elle/on': 'soit',
                    'que nous': 'soyons',
                    'que vous': 'soyez',
                    'qu\'ils/elles': 'soient'
                },
                "Futur proche": {
                    je: 'vais être',
                    tu: 'vas être',
                    'il/elle/on': 'va être',
                    nous: 'allons être',
                    vous: 'allez être',
                    'ils/elles': 'vont être'
                },
                "Passé composé": {
                    'j\'': 'ai été',
                    tu: 'as été',
                    'il/elle/on': 'a été',
                    nous: 'avons été',
                    vous: 'avez été',
                    'ils/elles': 'ont été'
                }
            }
        },
        avoir: {
            type: 'irregular',
            tense: {
                Présent: {
                    'j\'': 'ai',
                    tu: 'as',
                    'il/elle/on': 'a',
                    nous: 'avons',
                    vous: 'avez',
                    'ils/elles': 'ont'
                },
                "Futur simple": {
                    'j\'': 'aurai',
                    tu: 'auras',
                    'il/elle/on': 'aura',
                    nous: 'aurons',
                    vous: 'aurez',
                    'ils/elles': 'auront'
                },
                "Passé simple": {
                    'j\'': 'eus',
                    tu: 'eus',
                    'il/elle/on': 'eut',
                    nous: 'eûmes',
                    vous: 'eûtes',
                    'ils/elles': 'aurent'
                },
                Imparfait: {
                    'j\'': 'avais',
                    tu: 'avais',
                    'il/elle/on': 'avait',
                    nous: 'avions',
                    vous: 'aviez',
                    'ils/elles': 'avaient'
                },
                "Conditionnel présent": {
                    'j\'': 'aurais',
                    tu: 'aurais',
                    'il/elle/on': 'aurait',
                    nous: 'aurions',
                    vous: 'auriez',
                    'ils/elles': 'auraient'
                },
                "Subjonctif présent": {
                    'que j\'': 'aie',
                    'que tu': 'aies',
                    'qu\'il/elle/on': 'ait',
                    'que nous': 'ayons',
                    'que vous': 'ayez',
                    'qu\'ils/elles': 'aient'
                },
                "Futur proche": {
                    je: 'vais avoir',
                    tu: 'vas avoir',
                    'il/elle/on': 'va avoir',
                    nous: 'allons avoir',
                    vous: 'allez avoir',
                    'ils/elles': 'vont avoir'
                },
                "Passé composé": {
                    'j\'': 'ai eu',
                    tu: 'as eu',
                    'il/elle/on': 'a eu',
                    nous: 'avons eu',
                    vous: 'avez eu',
                    'ils/elles': 'ont eu'
                }
            }
        },
        faire: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'fais',
                    tu: 'fais',
                    'il/elle/on': 'fait',
                    nous: 'faisons',
                    vous: 'faites',
                    'ils/elles': 'font'
                },
                "Futur simple": {
                    je: 'ferai',
                    tu: 'feras',
                    'il/elle/on': 'fera',
                    nous: 'ferons',
                    vous: 'ferez',
                    'ils/elles': 'feront'
                },
                "Passé simple": {
                    je: 'fis',
                    tu: 'fis',
                    'il/elle/on': 'fit',
                    nous: 'fîmes',
                    vous: 'fîtes',
                    'ils/elles': 'firent'
                },
                Imparfait: {
                    je: 'faisais',
                    tu: 'faisais',
                    'il/elle/on': 'faisait',
                    nous: 'faisions',
                    vous: 'faisiez',
                    'ils/elles': 'faisaient'
                },
                "Conditionnel présent": {
                    je: 'ferais',
                    tu: 'ferais',
                    'il/elle/on': 'ferait',
                    nous: 'ferions',
                    vous: 'feriez',
                    'ils/elles': 'feraient'
                },
                "Subjonctif présent": {
                    'que je': 'fasse',
                    'que tu': 'fasses',
                    'qu\'il/elle/on': 'fasse',
                    'que nous': 'fassions',
                    'que vous': 'fassiez',
                    'qu\'ils/elles': 'fassent'
                },
                "Futur proche": {
                    je: 'vais faire',
                    tu: 'vas faire',
                    'il/elle/on': 'va faire',
                    nous: 'allons faire',
                    vous: 'allez faire',
                    'ils/elles': 'vont faire'
                },
                "Passé composé": {
                    'j\'': 'ai fait',
                    tu: 'as fait',
                    'il/elle/on': 'a fait',
                    nous: 'avons fait',
                    vous: 'avez fait',
                    'ils/elles': 'ont fait'
                }
            }
        },
        aller: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'vais',
                    tu: 'vas',
                    'il/elle/on': 'va',
                    nous: 'allons',
                    vous: 'allez',
                    'ils/elles': 'vont'
                },
                "Futur simple": {
                    'j\'': 'irai',
                    tu: 'iras',
                    'il/elle/on': 'ira',
                    nous: 'irons',
                    vous: 'irez',
                    'ils/elles': 'iront'
                },
                "Passé simple": {
                    'j\'': 'allai',
                    tu: 'allas',
                    'il/elle/on': 'alla',
                    nous: 'allâmes',
                    vous: 'allâtes',
                    'ils/elles': 'allèrent'
                },
                Imparfait: {
                    'j\'': 'allais',
                    tu: 'allais',
                    'il/elle/on': 'allait',
                    nous: 'allions',
                    vous: 'alliez',
                    'ils/elles': 'allaient'
                },
                "Conditionnel présent": {
                    'j\'': 'irais',
                    tu: 'irais',
                    'il/elle/on': 'irait',
                    nous: 'irions',
                    vous: 'iriez',
                    'ils/elles': 'iraient'
                },
                "Subjonctif présent": {
                    'que je': 'aille',
                    'que tu': 'ailles',
                    'qu\'il/elle/on': 'aille',
                    'que nous': 'allions',
                    'que vous': 'alliez',
                    'qu\'ils/elles': 'aillent'
                },
                "Futur proche": {
                    je: 'vais aller',
                    tu: 'vas aller',
                    'il/elle/on': 'va aller',
                    nous: 'allons aller',
                    vous: 'allez aller',
                    'ils/elles': 'vont aller'
                },
                "Passé composé": {
                    'j\'': 'ai allé',
                    tu: 'as allé',
                    'il/elle/on': 'a allé',
                    nous: 'avons allé',
                    vous: 'avez allé',
                    'ils/elles': 'ont allé'
                }
            }
        },
        falloir: {
            type: 'irregular',
            tense: {
                Présent: {
                    'il/elle/on': 'faut'
                    },
                "Futur simple": {
                    'il/elle/on': 'faudra'
                },
                "Passé simple": {
                    'il/elle/on': 'fallut'
                },
                Imparfait: {
                    'il/elle/on': 'fallait'
                },
                "Conditionnel présent": {
                    'il/elle/on': 'faudrait'
                },
                "Subjonctif présent": {
                    'qu\'il/elle/on': 'faille'
                },
                "Futur proche": {
                    'il/elle/on': 'va falloir'
                },
                "Passé composé": {
                    'il/elle/on': 'a fallu'
                }
            }
        },
        mettre: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'mets',
                    tu: 'mets',
                    'il/elle/on': 'met',
                    nous: 'mettons',
                    vous: 'mettez',
                    'ils/elles': 'mettent'
                },
                "Futur simple": {
                    je: 'mettrai',
                    tu: 'mettras',
                    'il/elle/on': 'mettra',
                    nous: 'mettrons',
                    vous: 'mettrez',
                    'ils/elles': 'mettront'
                },
                "Passé simple": {
                    je: 'mis',
                    tu: 'mis',
                    'il/elle/on': 'mit',
                    nous: 'mîmes',
                    vous: 'mîtes',
                    'ils/elles': 'mirent'
                },
                Imparfait: {
                    je: 'mettais',
                    tu: 'mettais',
                    'il/elle/on': 'mettait',
                    nous: 'mettions',
                    vous: 'mettiez',
                    'ils/elles': 'mattaient'
                },
                "Conditionnel présent": {
                    je: 'mettrais',
                    tu: 'mettrais',
                    'il/elle/on': 'mettrait',
                    nous: 'mettrions',
                    vous: 'mettriez',
                    'ils/elles': 'mettraient'
                },
                "Subjonctif présent": {
                    'que je': 'mette',
                    'que tu': 'mettes',
                    'qu\'il/elle/on': 'mette',
                    'que nous': 'mettions',
                    'que vous': 'mettiez',
                    'qu\'ils/elles': 'mettent'
                },
                "Futur proche": {
                    je: 'vais mettre',
                    tu: 'vas mettre',
                    'il/elle/on': 'va mettre',
                    nous: 'allons mettre',
                    vous: 'allez mettre',
                    'ils/elles': 'vont mettre'
                },
                "Passé composé": {
                    'j\'': 'ai mis',
                    tu: 'as mis',
                    'il/elle/on': 'a mis',
                    nous: 'avons mis',
                    vous: 'avez mis',
                    'ils/elles': 'ont mis'
                }
            }
        },
        vouloir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'veux',
                    tu: 'veux',
                    'il/elle/on': 'veut',
                    nous: 'voulons',
                    vous: 'voulez',
                    'ils/elles': 'veulent'
                },
                "Futur simple": {
                    je: 'voudrai',
                    tu: 'voudras',
                    'il/elle/on': 'voudra',
                    nous: 'voudrons',
                    vous: 'voudrez',
                    'ils/elles': 'voudront'
                },
                "Passé simple": {
                    je: 'voulus',
                    tu: 'voulus',
                    'il/elle/on': 'voulut',
                    nous: 'voulûmes',
                    vous: 'voulûtes',
                    'ils/elles': 'voulurent'
                },
                Imparfait: {
                    je: 'voulais',
                    tu: 'voulais',
                    'il/elle/on': 'voulait',
                    nous: 'voulions',
                    vous: 'vouliez',
                    'ils/elles': 'voulaient'
                },
                "Conditionnel présent": {
                    je: 'voudrais',
                    tu: 'voudrais',
                    'il/elle/on': 'voudrait',
                    nous: 'voudrions',
                    vous: 'voudriez',
                    'ils/elles': 'voudraient'
                },
                "Subjonctif présent": {
                    'que je': 'veuille',
                    'que tu': 'veuilles',
                    'qu\'il/elle/on': 'veuille',
                    'que nous': 'voulions',
                    'que vous': 'vouliez',
                    'qu\'ils/elles': 'veuillent'
                },
                "Futur proche": {
                    je: 'vais vouloir',
                    tu: 'vas vouloir',
                    'il/elle/on': 'va vouloir',
                    nous: 'allons vouloir',
                    vous: 'allez vouloir',
                    'ils/elles': 'vont vouloir'
                },
                "Passé composé": {
                    'j\'': 'ai voulu',
                    tu: 'as voulu',
                    'il/elle/on': 'a voulu',
                    nous: 'avons voulu',
                    vous: 'avez voulu',
                    'ils/elles': 'ont voulu'
                }
            }
        },
        pouvoir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'peux',
                    tu: 'peux',
                    'il/elle/on': 'peut',
                    nous: 'pouvons',
                    vous: 'pouvez',
                    'ils/elles': 'peuvent'
                },
                "Futur simple": {
                    je: 'pourrai',
                    tu: 'pourras',
                    'il/elle/on': 'pourra',
                    nous: 'pourrons',
                    vous: 'pourrez',
                    'ils/elles': 'pourront'
                },
                "Passé simple": {
                    je: 'pus',
                    tu: 'pus',
                    'il/elle/on': 'put',
                    nous: 'pûmes',
                    vous: 'pûtes',
                    'ils/elles': 'purent'
                },
                Imparfait: {
                    je: 'pouvais',
                    tu: 'pouvais',
                    'il/elle/on': 'pouvait',
                    nous: 'pouvions',
                    vous: 'pouviez',
                    'ils/elles': 'pouvaient'
                },
                "Conditionnel présent": {
                    je: 'pourrais',
                    tu: 'pourrais',
                    'il/elle/on': 'pourrait',
                    nous: 'pourrions',
                    vous: 'pourriez',
                    'ils/elles': 'pourraient'
                },
                "Subjonctif présent": {
                    'que je': 'puisse',
                    'que tu': 'puisses',
                    'qu\'il/elle/on': 'puisse',
                    'que nous': 'puissions',
                    'que vous': 'puissiez',
                    'qu\'ils/elles': 'puissent'
                },
                "Futur proche": {
                    je: 'vais pouvoir',
                    tu: 'vas pouvoir',
                    'il/elle/on': 'va pouvoir',
                    nous: 'allons pouvoir',
                    vous: 'allez pouvoir',
                    'ils/elles': 'vont pouvoir'
                },
                "Passé composé": {
                    'j\'': 'ai pu',
                    tu: 'as pu',
                    'il/elle/on': 'a pu',
                    nous: 'avons pu',
                    vous: 'avez pu',
                    'ils/elles': 'ont pu'
                }
            }
        },
        devoir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'dois',
                    tu: 'dois',
                    'il/elle/on': 'doit',
                    nous: 'devons',
                    vous: 'devez',
                    'ils/elles': 'doivent'
                },
                "Futur simple": {
                    je: 'devrai',
                    tu: 'devras',
                    'il/elle/on': 'devra',
                    nous: 'devrons',
                    vous: 'devrez',
                    'ils/elles': 'devront'
                },
                "Passé simple": {
                    je: 'dus',
                    tu: 'dus',
                    'il/elle/on': 'dut',
                    nous: 'dûmes',
                    vous: 'dûtes',
                    'ils/elles': 'durent'
                },
                Imparfait: {
                    je: 'devais',
                    tu: 'devais',
                    'il/elle/on': 'devait',
                    nous: 'devions',
                    vous: 'deviez',
                    'ils/elles': 'devaient'
                },
                "Conditionnel présent": {
                    je: 'devrais',
                    tu: 'devrais',
                    'il/elle/on': 'devrait',
                    nous: 'devrions',
                    vous: 'devriez',
                    'ils/elles': 'devraient'
                },
                "Subjonctif présent": {
                    'que je': 'doive',
                    'que tu': 'doives',
                    'qu\'il/elle/on': 'doive',
                    'que nous': 'devions',
                    'que vous': 'deviez',
                    'qu\'ils/elles': 'doivent'
                },
                "Futur proche": {
                    je: 'vais devoir',
                    tu: 'vas devoir',
                    'il/elle/on': 'va devoir',
                    nous: 'allons devoir',
                    vous: 'allez devoir',
                    'ils/elles': 'vont devoir'
                },
                "Passé composé": {
                    'j\'': 'ai dû',
                    tu: 'as dû',
                    'il/elle/on': 'a dû',
                    nous: 'avons dû',
                    vous: 'avez dû',
                    'ils/elles': 'ont dû'
                }
            }
        },
        dire: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'dis',
                    tu: 'dis',
                    'il/elle/on': 'dit',
                    nous: 'disons',
                    vous: 'dites',
                    'ils/elles': 'disent'
                },
                "Futur simple": {
                    je: 'dirai',
                    tu: 'diras',
                    'il/elle/on': 'dira',
                    nous: 'dirons',
                    vous: 'direz',
                    'ils/elles': 'diront'
                },
                "Passé simple": {
                    je: 'dis',
                    tu: 'dis',
                    'il/elle/on': 'dit',
                    nous: 'dîmes',
                    vous: 'dîtes',
                    'ils/elles': 'dirent'
                },
                Imparfait: {
                    je: 'disais',
                    tu: 'disais',
                    'il/elle/on': 'disait',
                    nous: 'disions',
                    vous: 'disiez',
                    'ils/elles': 'disaient'
                },
                "Conditionnel présent": {
                    je: 'dirais',
                    tu: 'dirais',
                    'il/elle/on': 'dirait',
                    nous: 'dirions',
                    vous: 'diriez',
                    'ils/elles': 'diraient'
                },
                "Subjonctif présent": {
                    'que je': 'dise',
                    'que tu': 'dises',
                    'qu\'il/elle/on': 'dise',
                    'que nous': 'disions',
                    'que vous': 'disiez',
                    'qu\'ils/elles': 'disent'
                },
                "Futur proche": {
                    je: 'vais dire',
                    tu: 'vas dire',
                    'il/elle/on': 'va dire',
                    nous: 'allons dire',
                    vous: 'allez dire',
                    'ils/elles': 'vont dire'
                },
                "Passé composé": {
                    'j\'': 'ai dit',
                    tu: 'as dit',
                    'il/elle/on': 'a dit',
                    nous: 'avons dit',
                    vous: 'avez dit',
                    'ils/elles': 'ont dit'
                }
            }
        },
        comprendre: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'comprends',
                    tu: 'comprends',
                    'il/elle/on': 'comprend',
                    nous: 'comprenons',
                    vous: 'comprenez',
                    'ils/elles': 'comprennent'
                },
                "Futur simple": {
                    je: 'comprendrai',
                    tu: 'comprendras',
                    'il/elle/on': 'comprendra',
                    nous: 'comprendrons',
                    vous: 'comprendrez',
                    'ils/elles': 'comprendront'
                },
                "Passé simple": {
                    je: 'compris',
                    tu: 'compris',
                    'il/elle/on': 'comprit',
                    nous: 'comprîmes',
                    vous: 'comprîtes',
                    'ils/elles': 'comprirent'
                },
                Imparfait: {
                    je: 'comprenais',
                    tu: 'comprenais',
                    'il/elle/on': 'comprenait',
                    nous: 'comprenions',
                    vous: 'compreniez',
                    'ils/elles': 'comprenaient'
                },
                "Conditionnel présent": {
                    je: 'comprendrais',
                    tu: 'comprendrais',
                    'il/elle/on': 'comprendrait',
                    nous: 'comprendrions',
                    vous: 'comprendriez',
                    'ils/elles': 'comprendraient'
                },
                "Subjonctif présent": {
                    'que je': 'comprenne',
                    'que tu': 'comprennes',
                    'qu\'il/elle/on': 'comprenne',
                    'que nous': 'comprenions',
                    'que vous': 'compreniez',
                    'qu\'ils/elles': 'comprennent'
                },
                "Futur proche": {
                    je: 'vais comprendre',
                    tu: 'vas comprendre',
                    'il/elle/on': 'va comprendre',
                    nous: 'allons comprendre',
                    vous: 'allez comprendre',
                    'ils/elles': 'vont comprendre'
                },
                "Passé composé": {
                    'j\'': 'ai compris',
                    tu: 'as compris',
                    'il/elle/on': 'a compris',
                    nous: 'avons compris',
                    vous: 'avez compris',
                    'ils/elles': 'ont compris'
                }
            }
        },
        croire: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'crois',
                    tu: 'crois',
                    'il/elle/on': 'croit',
                    nous: 'croyons',
                    vous: 'croyez',
                    'ils/elles': 'croient'
                },
                "Futur simple": {
                    je: 'croirai',
                    tu: 'croiras',
                    'il/elle/on': 'croira',
                    nous: 'croirons',
                    vous: 'croirez',
                    'ils/elles': 'croiront'
                },
                "Passé simple": {
                    je: 'crus',
                    tu: 'crus',
                    'il/elle/on': 'crut',
                    nous: 'crûmes',
                    vous: 'crûtes',
                    'ils/elles': 'crurent'
                },
                Imparfait: {
                    je: 'croyais',
                    tu: 'croyais',
                    'il/elle/on': 'croyait',
                    nous: 'croyions',
                    vous: 'croyiez',
                    'ils/elles': 'croyaient'
                },
                "Conditionnel présent": {
                    je: 'croirais',
                    tu: 'croirais',
                    'il/elle/on': 'croirait',
                    nous: 'croirions',
                    vous: 'croiriez',
                    'ils/elles': 'croiraient'
                },
                "Subjonctif présent": {
                    'que je': 'croie',
                    'que tu': 'croies',
                    'qu\'il/elle/on': 'croie',
                    'que nous': 'croyions',
                    'que vous': 'croyiez',
                    'qu\'ils/elles': 'croient'
                },
                "Futur proche": {
                    je: 'vais croire',
                    tu: 'vas croire',
                    'il/elle/on': 'va croire',
                    nous: 'allons croire',
                    vous: 'allez croire',
                    'ils/elles': 'vont croire'
                },
                "Passé composé": {
                    'j\'': 'ai cru',
                    tu: 'as cru',
                    'il/elle/on': 'a cru',
                    nous: 'avons cru',
                    vous: 'avez cru',
                    'ils/elles': 'ont cru'
                }
            }
        },
        parler: {
            type: 'regular',
            tense: {
                Présent: {
                    je: 'parle',
                    tu: 'parles',
                    'il/elle/on': 'parle',
                    nous: 'parlons',
                    vous: 'parlez',
                    'ils/elles': 'parlent'
                },
                "Futur simple": {
                    je: 'parlerai',
                    tu: 'parleras',
                    'il/elle/on': 'parlera',
                    nous: 'parlerons',
                    vous: 'parlerez',
                    'ils/elles': 'parleront'
                },
                "Passé simple": {
                    je: 'parlai',
                    tu: 'parlas',
                    'il/elle/on': 'parla',
                    nous: 'parlâmes',
                    vous: 'parlâtes',
                    'ils/elles': 'parlèrent'
                },
                Imparfait: {
                    je: 'parlais',
                    tu: 'parlais',
                    'il/elle/on': 'parlait',
                    nous: 'parlions',
                    vous: 'parliez',
                    'ils/elles': 'parlaient'
                },
                "Conditionnel présent": {
                    je: 'parlerais',
                    tu: 'parlerais',
                    'il/elle/on': 'parlerait',
                    nous: 'parlerions',
                    vous: 'parleriez',
                    'ils/elles': 'parlaient'
                },
                "Subjonctif présent": {
                    'que je': 'parle',
                    'que tu': 'parles',
                    'qu\'il/elle/on': 'parle',
                    'que nous': 'parlions',
                    'que vous': 'parliez',
                    'qu\'ils/elles': 'parlent'
                },
                "Futur proche": {
                    je: 'vais parler',
                    tu: 'vas parler',
                    'il/elle/on': 'va parler',
                    nous: 'allons parler',
                    vous: 'allez parler',
                    'ils/elles': 'vont parler'
                },
                "Passé composé": {
                    'j\'': 'ai parlé',
                    tu: 'as parlé',
                    'il/elle/on': 'a parlé',
                    nous: 'avons parlé',
                    vous: 'avez parlé',
                    'ils/elles': 'ont parlé'
                }
            }
        },
        prendre: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'prends',
                    tu: 'prends',
                    'il/elle/on': 'prend',
                    nous: 'prenons',
                    vous: 'prenez',
                    'ils/elles': 'prennent'
                },
                "Futur simple": {
                    je: 'prendrai',
                    tu: 'prendras',
                    'il/elle/on': 'prenda',
                    nous: 'prendrons',
                    vous: 'prendrez',
                    'ils/elles': 'prendront'
                },
                "Passé simple": {
                    je: 'pris',
                    tu: 'pris',
                    'il/elle/on': 'prit',
                    nous: 'prîmes',
                    vous: 'prîtes',
                    'ils/elles': 'prirent'
                },
                Imparfait: {
                    je: 'prenais',
                    tu: 'prenais',
                    'il/elle/on': 'prenait',
                    nous: 'prenions',
                    vous: 'preniez',
                    'ils/elles': 'prenaient'
                },
                "Conditionnel présent": {
                    je: 'prendrais',
                    tu: 'prendrais',
                    'il/elle/on': 'prendrait',
                    nous: 'prendrions',
                    vous: 'prendriez',
                    'ils/elles': 'prendraient'
                },
                "Subjonctif présent": {
                    'que je': 'prenne',
                    'que tu': 'prennes',
                    'qu\'il/elle/on': 'prenne',
                    'que nous': 'prenions',
                    'que vous': 'preniez',
                    'qu\'ils/elles': 'prennent'
                },
                "Futur proche": {
                    je: 'vais prendre',
                    tu: 'vas prendre',
                    'il/elle/on': 'va prendre',
                    nous: 'allons prendre',
                    vous: 'allez prendre',
                    'ils/elles': 'vont prendre'
                },
                "Passé composé": {
                    'j\'': 'ai pris',
                    tu: 'as pris',
                    'il/elle/on': 'a pris',
                    nous: 'avons pris',
                    vous: 'avez pris',
                    'ils/elles': 'ont pris'
                }
            }
        },
        venir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'viens',
                    tu: 'viens',
                    'il/elle/on': 'vient',
                    nous: 'venons',
                    vous: 'venez',
                    'ils/elles': 'viennent'
                },
                "Futur simple": {
                    je: 'viendrai',
                    tu: 'viendras',
                    'il/elle/on': 'viendra',
                    nous: 'viendrons',
                    vous: 'viendrez',
                    'ils/elles': 'viendront'
                },
                "Passé simple": {
                    je: 'vins',
                    tu: 'vins',
                    'il/elle/on': 'vint',
                    nous: 'vînmes',
                    vous: 'vîntes',
                    'ils/elles': 'vinrent'
                },
                Imparfait: {
                    je: 'venais',
                    tu: 'venais',
                    'il/elle/on': 'venait',
                    nous: 'venions',
                    vous: 'veniez',
                    'ils/elles': 'venaient'
                },
                "Conditionnel présent": {
                    je: 'viendrais',
                    tu: 'viendrais',
                    'il/elle/on': 'viendrait',
                    nous: 'viendrions',
                    vous: 'viendriez',
                    'ils/elles': 'viendraient'
                },
                "Subjonctif présent": {
                    'que je': 'vienne',
                    'que tu': 'viennes',
                    'qu\'il/elle/on': 'vienne',
                    'que nous': 'venions',
                    'que vous': 'vieniez',
                    'qu\'ils/elles': 'viennent'
                },
                "Futur proche": {
                    je: 'vais venir',
                    tu: 'vas venir',
                    'il/elle/on': 'va venir',
                    nous: 'allons venir',
                    vous: 'allez venir',
                    'ils/elles': 'vont venir'
                },
                "Passé composé": {
                    'j\'': 'ai venu',
                    tu: 'as venu',
                    'il/elle/on': 'a venu',
                    nous: 'avons venu',
                    vous: 'avez venu',
                    'ils/elles': 'ont venu'
                }
            }
        },
        tenir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'tiens',
                    tu: 'tiens',
                    'il/elle/on': 'tient',
                    nous: 'tenons',
                    vous: 'tenez',
                    'ils/elles': 'tiennent'
                },
                "Futur simple": {
                    je: 'tiendrai',
                    tu: 'tiendras',
                    'il/elle/on': 'tiendra',
                    nous: 'tiendrons',
                    vous: 'tiendrez',
                    'ils/elles': 'tiendront'
                },
                "Passé simple": {
                    je: 'tins',
                    tu: 'tins',
                    'il/elle/on': 'tint',
                    nous: 'tînmes',
                    vous: 'tîntes',
                    'ils/elles': 'tinrent'
                },
                Imparfait: {
                    je: 'tenais',
                    tu: 'tenais',
                    'il/elle/on': 'tenait',
                    nous: 'tenions',
                    vous: 'teniez',
                    'ils/elles': 'tenaient'
                },
                "Conditionnel présent": {
                    je: 'tiendrais',
                    tu: 'tiendrais',
                    'il/elle/on': 'tiendrait',
                    nous: 'tiendrions',
                    vous: 'tiendriez',
                    'ils/elles': 'tiendraient'
                },
                "Subjonctif présent": {
                    'que je': 'tienne',
                    'que tu': 'tiennes',
                    'qu\'il/elle/on': 'tienne',
                    'que nous': 'tenions',
                    'que vous': 'teniez',
                    'qu\'ils/elles': 'tiennent'
                },
                "Futur proche": {
                    je: 'vais tenir',
                    tu: 'vas tenir',
                    'il/elle/on': 'va tenir',
                    nous: 'allons tenir',
                    vous: 'allez tenir',
                    'ils/elles': 'vont tenir'
                },
                "Passé composé": {
                    'j\'': 'ai tenu',
                    tu: 'as tenu',
                    'il/elle/on': 'a tenu',
                    nous: 'avons tenu',
                    vous: 'avez tenu',
                    'ils/elles': 'ont tenu'
                }
            }
        },
        savoir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'sais',
                    tu: 'sais',
                    'il/elle/on': 'sait',
                    nous: 'savons',
                    vous: 'savez',
                    'ils/elles': 'savent'
                },
                "Futur simple": {
                    je: 'saurai',
                    tu: 'sauras',
                    'il/elle/on': 'saura',
                    nous: 'saurons',
                    vous: 'saurez',
                    'ils/elles': 'saurez'
                },
                "Passé simple": {
                    je: 'sus',
                    tu: 'sus',
                    'il/elle/on': 'sut',
                    nous: 'sûmes',
                    vous: 'sûtes',
                    'ils/elles': 'surent'
                },
                Imparfait: {
                    je: 'saurai',
                    tu: 'sauras',
                    'il/elle/on': 'saura',
                    nous: 'saurons',
                    vous: 'saurez',
                    'ils/elles': 'sauront'
                },
                "Conditionnel présent": {
                    je: 'saurais',
                    tu: 'saurais',
                    'il/elle/on': 'saurait',
                    nous: 'saurions',
                    vous: 'sauriez',
                    'ils/elles': 'sauraient'
                },
                "Subjonctif présent": {
                    'que je': 'sache',
                    'que tu': 'saches',
                    'qu\'il/elle/on': 'sache',
                    'que nous': 'sachions',
                    'que vous': 'sachiez',
                    'qu\'ils/elles': 'sachent'
                },
                "Futur proche": {
                    je: 'vais savoir',
                    tu: 'vas savoir',
                    'il/elle/on': 'va savoir',
                    nous: 'allons savoir',
                    vous: 'allez savoir',
                    'ils/elles': 'vont savoir'
                },
                "Passé composé": {
                    'j\'': 'ai su',
                    tu: 'as su',
                    'il/elle/on': 'a su',
                    nous: 'avons su',
                    vous: 'avez su',
                    'ils/elles': 'ont su'
                }
            }
        },
        aimer: {
            type: 'regular',
            tense: {
                Présent: {
                    'j\'': 'aime',
                    tu: 'aimes',
                    'il/elle/on': 'aime',
                    nous: 'aimons',
                    vous: 'aimez',
                    'ils/elles': 'aiment'
                },
                "Futur simple": {
                    'j\'': 'aimerai',
                    tu: 'aimeras',
                    'il/elle/on': 'aimera',
                    nous: 'aimerons',
                    vous: 'aimerez',
                    'ils/elles': 'aimeront'
                },
                "Passé simple": {
                    'j\'': 'aimai',
                    tu: 'aimas',
                    'il/elle/on': 'aima',
                    nous: 'aimâmes',
                    vous: 'aimâtes',
                    'ils/elles': 'aimèrent'
                },
                Imparfait: {
                    'j\'': 'aimais',
                    tu: 'aimais',
                    'il/elle/on': 'aimait',
                    nous: 'aimions',
                    vous: 'aimiez',
                    'ils/elles': 'aimaient'
                },
                "Conditionnel présent": {
                    'j\'': 'aimerais',
                    tu: 'aimerais',
                    'il/elle/on': 'aimerait',
                    nous: 'aimerions',
                    vous: 'aimeriez',
                    'ils/elles': 'aimeraient'
                },
                "Subjonctif présent": {
                    'que je': 'aime',
                    'que tu': 'aimes',
                    'qu\'il/elle/on': 'aime',
                    'que nous': 'aimions',
                    'que vous': 'aimiez',
                    'qu\'ils/elles': 'aiment'
                },
                "Futur proche": {
                    je: 'vais aimer',
                    tu: 'vas aimer',
                    'il/elle/on': 'va aimer',
                    nous: 'allons aimer',
                    vous: 'allez aimer',
                    'ils/elles': 'vont aimer'
                },
                "Passé composé": {
                    'j\'': 'ai aimé',
                    tu: 'as aimé',
                    'il/elle/on': 'a aimé',
                    nous: 'avons aimé',
                    vous: 'avez aimé',
                    'ils/elles': 'ont aimé'
                }
            }
        },
        donner: {
            type: 'regular',
            tense: {
                Présent: {
                    je: 'donne',
                    tu: 'donnes',
                    'il/elle/on': 'donne',
                    nous: 'donnons',
                    vous: 'donnez',
                    'ils/elles': 'donnent'
                },
                "Futur simple": {
                    je: 'donnerai',
                    tu: 'donneras',
                    'il/elle/on': 'donnera',
                    nous: 'donnerons',
                    vous: 'donnerez',
                    'ils/elles': 'donneront'
                },
                "Passé simple": {
                    je: 'donnai',
                    tu: 'donnas',
                    'il/elle/on': 'donna',
                    nous: 'donnâmes',
                    vous: 'donnâtes',
                    'ils/elles': 'donnèrent'
                },
                Imparfait: {
                    je: 'donnais',
                    tu: 'donnais',
                    'il/elle/on': 'donnait',
                    nous: 'donnions',
                    vous: 'donniez',
                    'ils/elles': 'donnaient'
                },
                "Conditionnel présent": {
                    je: 'donnerais',
                    tu: 'donnerais',
                    'il/elle/on': 'donnerait',
                    nous: 'donnerions',
                    vous: 'donneriez',
                    'ils/elles': 'donneraient'
                },
                "Subjonctif présent": {
                    'que je': 'donne',
                    'que tu': 'donnes',
                    'qu\'il/elle/on': 'donne',
                    'que nous': 'donnions',
                    'que vous': 'donniez',
                    'qu\'ils/elles': 'donnent'
                },
                "Futur proche": {
                    je: 'vais donner',
                    tu: 'vas donner',
                    'il/elle/on': 'va donner',
                    nous: 'allons donner',
                    vous: 'allez donner',
                    'ils/elles': 'vont donner'
                },
                "Passé composé": {
                    'j\'': 'ai donné',
                    tu: 'as donné',
                    'il/elle/on': 'a donné',
                    nous: 'avons donné',
                    vous: 'avez donné',
                    'ils/elles': 'ont donné'
                }
            }
        },
        demander: {
            type: 'regular',
            tense: {
                Présent: {
                    je: 'demande',
                    tu: 'demandes',
                    'il/elle/on': 'demande',
                    nous: 'demandons',
                    vous: 'demandez',
                    'ils/elles': 'demandent'
                },
                "Futur simple": {
                    je: 'demanderai',
                    tu: 'demanderas',
                    'il/elle/on': 'demandera',
                    nous: 'demanderons',
                    vous: 'demanderez',
                    'ils/elles': 'demanderont'
                },
                "Passé simple": {
                    je: 'demandai',
                    tu: 'demandas',
                    'il/elle/on': 'demandera',
                    nous: 'demanderons',
                    vous: 'demanderez',
                    'ils/elles': 'demanderont'
                },
                Imparfait: {
                    je: 'demandais',
                    tu: 'demandais',
                    'il/elle/on': 'demandait',
                    nous: 'demandions',
                    vous: 'demandiez',
                    'ils/elles': 'demandaient'
                },
                "Conditionnel présent": {
                    je: 'demanderais',
                    tu: 'demanderais',
                    'il/elle/on': 'demanderait',
                    nous: 'demanderions',
                    vous: 'demanderiez',
                    'ils/elles': 'demanderaient'
                },
                "Subjonctif présent": {
                    'que je': 'demande',
                    'que tu': 'demandes',
                    'qu\'il/elle/on': 'demande',
                    'que nous': 'demandions',
                    'que vous': 'demandiez',
                    'qu\'ils/elles': 'demandent'
                },
                "Futur proche": {
                    je: 'vais demander',
                    tu: 'vas demander',
                    'il/elle/on': 'va demander',
                    nous: 'allons demander',
                    vous: 'allez demander',
                    'ils/elles': 'vont demander'
                },
                "Passé composé": {
                    'j\'': 'ai demandé',
                    tu: 'as demandé',
                    'il/elle/on': 'a demandé',
                    nous: 'avons demandé',
                    vous: 'avez demandé',
                    'ils/elles': 'ont demandé'
                }
            }
        },
        passer: {
            type: 'regular',
            tense: {
                Présent: {
                    je: 'passe',
                    tu: 'passes',
                    'il/elle/on': 'passe',
                    nous: 'passons',
                    vous: 'passez',
                    'ils/elles': 'passent'
                },
                "Futur simple": {
                    je: 'passerai',
                    tu: 'passeras',
                    'il/elle/on': 'passera',
                    nous: 'passerons',
                    vous: 'passerez',
                    'ils/elles': 'passeront'
                },
                "Passé simple": {
                    je: 'passai',
                    tu: 'passas',
                    'il/elle/on': 'passa',
                    nous: 'passâmes',
                    vous: 'passâtes',
                    'ils/elles': 'passèrent'
                },
                Imparfait: {
                    je: 'passais',
                    tu: 'passais',
                    'il/elle/on': 'passait',
                    nous: 'passions',
                    vous: 'passiez',
                    'ils/elles': 'passaient'
                },
                "Conditionnel présent": {
                    je: 'passerais',
                    tu: 'passerais',
                    'il/elle/on': 'apasserait',
                    nous: 'passerions',
                    vous: 'passeriez',
                    'ils/elles': 'passeraient'
                },
                "Subjonctif présent": {
                    'que je': 'passe',
                    'que tu': 'passes',
                    'qu\'il/elle/on': 'passe',
                    'que nous': 'passions',
                    'que vous': 'passiez',
                    'qu\'ils/elles': 'passent'
                },
                "Futur proche": {
                    je: 'vais passer',
                    tu: 'vas passer',
                    'il/elle/on': 'va passer',
                    nous: 'allons passer',
                    vous: 'allez passer',
                    'ils/elles': 'vont passer'
                },
                "Passé composé": {
                    'j\'': 'ai passé',
                    tu: 'as passé',
                    'il/elle/on': 'a passé',
                    nous: 'avons passé',
                    vous: 'avez passé',
                    'ils/elles': 'ont passé'
                }
            }
        },
        rester: {
            type: 'regular',
            tense: {
                Présent: {
                    je: 'reste',
                    tu: 'restes',
                    'il/elle/on': 'reste',
                    nous: 'restons',
                    vous: 'restez',
                    'ils/elles': 'restent'
                },
                "Futur simple": {
                    je: 'resterai',
                    tu: 'resteras',
                    'il/elle/on': 'restera',
                    nous: 'resterons',
                    vous: 'resterez',
                    'ils/elles': 'resteront'
                },
                "Passé simple": {
                    je: 'restai',
                    tu: 'restas',
                    'il/elle/on': 'resta',
                    nous: 'restâmes',
                    vous: 'restâtes',
                    'ils/elles': 'restèrent'
                },
                Imparfait: {
                    je: 'restais',
                    tu: 'restais',
                    'il/elle/on': 'restait',
                    nous: 'restions',
                    vous: 'restiez',
                    'ils/elles': 'restaient'
                },
                "Conditionnel présent": {
                    je: 'resterais',
                    tu: 'resterais',
                    'il/elle/on': 'resterait',
                    nous: 'resterions',
                    vous: 'resteriez',
                    'ils/elles': 'resteraient'
                },
                "Subjonctif présent": {
                    'que je': 'reste',
                    'que tu': 'restes',
                    'qu\'il/elle/on': 'reste',
                    'que nous': 'restions',
                    'que vous': 'restiez',
                    'qu\'ils/elles': 'restent'
                },
                "Futur proche": {
                    je: 'vais rester',
                    tu: 'vas rester',
                    'il/elle/on': 'va rester',
                    nous: 'allons rester',
                    vous: 'allez rester',
                    'ils/elles': 'vont rester'
                },
                "Passé composé": {
                    'j\'': 'ai resté',
                    tu: 'as resté',
                    'il/elle/on': 'a resté',
                    nous: 'avons resté',
                    vous: 'avez resté',
                    'ils/elles': 'ont resté'
                }
            }
        },
        arriver: {
            type: 'regular',
            tense: {
                Présent: {
                    'j\'': 'arrive',
                    tu: 'arrives',
                    'il/elle/on': 'arrive',
                    nous: 'arrivons',
                    vous: 'arrivez',
                    'ils/elles': 'arrivent'
                },
                "Futur simple": {
                    'j\'': 'arriverai',
                    tu: 'arriveras',
                    'il/elle/on': 'arrivera',
                    nous: 'arriverons',
                    vous: 'arriverez',
                    'ils/elles': 'arriveront'
                },
                "Passé simple": {
                    'j\'': 'arrivai',
                    tu: 'arrivas',
                    'il/elle/on': 'arriva',
                    nous: 'arrivâmes',
                    vous: 'arrivâtes',
                    'ils/elles': 'arrivèrent'
                },
                Imparfait: {
                    'j\'': 'arrivais',
                    tu: 'arrivais',
                    'il/elle/on': 'arrivait',
                    nous: 'arrivions',
                    vous: 'arriviez',
                    'ils/elles': 'arrivaient'
                },
                "Conditionnel présent": {
                    'j\'': 'arriverais',
                    tu: 'arriverais',
                    'il/elle/on': 'arriverait',
                    nous: 'arriverions',
                    vous: 'arriveriez',
                    'ils/elles': 'arriveraient'
                },
                "Subjonctif présent": {
                    'que j\'': 'arrive',
                    'que tu': 'arrives',
                    'qu\'il/elle/on': 'arrive',
                    'que nous': 'arrivions',
                    'que vous': 'arriviez',
                    'qu\'ils/elles': 'arrivent'
                },
                "Futur proche": {
                    je: 'vais arriver',
                    tu: 'vas arriver',
                    'il/elle/on': 'va arriver',
                    nous: 'allons arriver',
                    vous: 'allez arriver',
                    'ils/elles': 'vont arriver'
                },
                "Passé composé": {
                    'j\'': 'ai arrivé',
                    tu: 'as arrivé',
                    'il/elle/on': 'a arrivé',
                    nous: 'avons arrivé',
                    vous: 'avez arrivé',
                    'ils/elles': 'ont arrivé'
                }
            }
        },
        entrer: {
            type: 'regular',
            tense: {
                Présent: {
                    'j\'': 'entre',
                    tu: 'entres',
                    'il/elle/on': 'entre',
                    nous: 'entrons',
                    vous: 'entrez',
                    'ils/elles': 'entrent'
                },
                "Futur simple": {
                    'j\'': 'entrerai',
                    tu: 'entreras',
                    'il/elle/on': 'entrera',
                    nous: 'entrerons',
                    vous: 'entrerez',
                    'ils/elles': 'entreront'
                },
                "Passé simple": {
                    'j\'': 'entrai',
                    tu: 'entras',
                    'il/elle/on': 'entra',
                    nous: 'entrâmes',
                    vous: 'entrâtes',
                    'ils/elles': 'entrèrent'
                },
                Imparfait: {
                    'j\'': 'entrais',
                    tu: 'entrais',
                    'il/elle/on': 'entrait',
                    nous: 'entrions',
                    vous: 'entriez',
                    'ils/elles': 'entraient'
                },
                "Conditionnel présent": {
                    'j\'': 'entrerais',
                    tu: 'entrerais',
                    'il/elle/on': 'entrerait',
                    nous: 'entrerions',
                    vous: 'entreriez',
                    'ils/elles': 'entreraient'
                },
                "Subjonctif présent": {
                    'que j\'': 'entre',
                    'que tu': 'entres',
                    'qu\'il/elle/on': 'entre',
                    'que nous': 'entrions',
                    'que vous': 'entriez',
                    'qu\'ils/elles': 'entrent'
                },
                "Futur proche": {
                    je: 'vais entrer',
                    tu: 'vas entrer',
                    'il/elle/on': 'va entrer',
                    nous: 'allons entrer',
                    vous: 'allez entrer',
                    'ils/elles': 'vont entrer'
                },
                "Passé composé": {
                    'j\'': 'ai entré',
                    tu: 'as entré',
                    'il/elle/on': 'a entré',
                    nous: 'avons entré',
                    vous: 'avez entré',
                    'ils/elles': 'ont entré'
                }
            }
        },
        sortir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'sors',
                    tu: 'sors',
                    'il/elle/on': 'sort',
                    nous: 'sortons',
                    vous: 'sortez',
                    'ils/elles': 'sortent'
                },
                "Futur simple": {
                    je: 'sortirai',
                    tu: 'sortiras',
                    'il/elle/on': 'sortira',
                    nous: 'sortirons',
                    vous: 'sortirez',
                    'ils/elles': 'sortiront'
                },
                "Passé simple": {
                    je: 'sortis',
                    tu: 'sortis',
                    'il/elle/on': 'sortit',
                    nous: 'sortîmes',
                    vous: 'sortîtes',
                    'ils/elles': 'sortirent'
                },
                Imparfait: {
                    je: 'sortais',
                    tu: 'sortais',
                    'il/elle/on': 'sortait',
                    nous: 'sortions',
                    vous: 'sortiez',
                    'ils/elles': 'sortaient'
                },
                "Conditionnel présent": {
                    je: 'sortirais',
                    tu: 'sortirais',
                    'il/elle/on': 'sortirait',
                    nous: 'sortirions',
                    vous: 'sortiriez',
                    'ils/elles': 'sortiraient'
                },
                "Subjonctif présent": {
                    'que je': 'sorte',
                    'que tu': 'sortes',
                    'qu\'il/elle/on': 'sorte',
                    'que nous': 'vions',
                    'que vous': 'sortiez',
                    'qu\'ils/elles': 'aientent'
                },
                "Futur proche": {
                    je: 'vais sortir',
                    tu: 'vas sortir',
                    'il/elle/on': 'va sortir',
                    nous: 'allons sortir',
                    vous: 'allez sortir',
                    'ils/elles': 'vont sortir'
                },
                "Passé composé": {
                    'j\'': 'ai sorti',
                    tu: 'as sorti',
                    'il/elle/on': 'a sorti',
                    nous: 'avons sorti',
                    vous: 'avez sorti',
                    'ils/elles': 'ont sorti'
                }
            }
        },
        partir: {
            type: 'irregular',
            tense: {
                Présent: {
                    je: 'pars',
                    tu: 'pars',
                    'il/elle/on': 'part',
                    nous: 'partons',
                    vous: 'partez',
                    'ils/elles': 'partent'
                },
                "Futur simple": {
                    je: 'partirai',
                    tu: 'partiras',
                    'il/elle/on': 'partira',
                    nous: 'partirons',
                    vous: 'partirez',
                    'ils/elles': 'partiront'
                },
                "Passé simple": {
                    je: 'partis',
                    tu: 'partis',
                    'il/elle/on': 'partit',
                    nous: 'partîmes',
                    vous: 'partîtes',
                    'ils/elles': 'partirent'
                },
                Imparfait: {
                    je: 'partais',
                    tu: 'partais',
                    'il/elle/on': 'partait',
                    nous: 'partions',
                    vous: 'partiez',
                    'ils/elles': 'partaient'
                },
                "Conditionnel présent": {
                    je: 'partirais',
                    tu: 'partirais',
                    'il/elle/on': 'partirait',
                    nous: 'partirions',
                    vous: 'partiriez',
                    'ils/elles': 'partiraient'
                },
                "Subjonctif présent": {
                    'que je': 'parte',
                    'que tu': 'partes',
                    'qu\'il/elle/on': 'parte',
                    'que nous': 'partions',
                    'que vous': 'partiez',
                    'qu\'ils/elles': 'partent'
                },
                "Futur proche": {
                    je: 'vais partir',
                    tu: 'vas partir',
                    'il/elle/on': 'va partir',
                    nous: 'allons partir',
                    vous: 'allez partir',
                    'ils/elles': 'vont partir'
                },
                "Passé composé": {
                    je: 'suis parti',
                    tu: 'es parti',
                    'il/elle/on': 'est parti',
                    nous: 'sommes partis',
                    vous: 'êtes partis',
                    'ils/elles': 'sont partis'
                }
            }
        },
        penser: {
            type: 'regular',
            tense: {
                Présent: {
                    je: 'pense',
                    tu: 'penses',
                    'il/elle/on': 'pense',
                    nous: 'pensons',
                    vous: 'pensez',
                    'ils/elles': 'pensent'
                },
                "Futur simple": {
                    je: 'penserai',
                    tu: 'penseras',
                    'il/elle/on': 'pensera',
                    nous: 'penserons',
                    vous: 'penserez',
                    'ils/elles': 'penseront'
                },
                "Passé simple": {
                    je: 'pensai',
                    tu: 'pensas',
                    'il/elle/on': 'pensa',
                    nous: 'pensâmes',
                    vous: 'pensâtes',
                    'ils/elles': 'pensèrent'
                },
                Imparfait: {
                    je: 'pensais',
                    tu: 'pensais',
                    'il/elle/on': 'pensait',
                    nous: 'pensions',
                    vous: 'pensiez',
                    'ils/elles': 'pensaient'
                },
                "Conditionnel présent": {
                    je: 'penserais',
                    tu: 'penserais',
                    'il/elle/on': 'penserait',
                    nous: 'penserions',
                    vous: 'penseriez',
                    'ils/elles': 'penseraient'
                },
                "Subjonctif présent": {
                    'que je': 'pense',
                    'que tu': 'penses',
                    'qu\'il/elle/on': 'pense',
                    'que nous': 'pensions',
                    'que vous': 'pensiez',
                    'qu\'ils/elles': 'pensent'
                },
                "Futur proche": {
                    je: 'vais penser',
                    tu: 'vas penser',
                    'il/elle/on': 'va penser',
                    nous: 'allons penser',
                    vous: 'allez penser',
                    'ils/elles': 'vont penser'
                },
                "Passé composé": {
                    'j\'': 'ai parti',
                    tu: 'as parti',
                    'il/elle/on': 'a parti',
                    nous: 'avons partis',
                    vous: 'avez partis',
                    'ils/elles': 'ont partis'
                }
            }
        },
    }
}