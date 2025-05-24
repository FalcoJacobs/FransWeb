export const vocabulaireCategories = [
    {
        category: "Veel voorkomend",
        items: [
            {
                name: "100 verbes les plus courants",
                translation: "100 meest voorkomende werkwoorden",
                wordCount: 100,
                usability: 'hoog (not determined)',
                id: 'most-common-verbes'
            },
            {
                name: "100 verbes les plus courants",
                translation: "100 meest voorkomende werkwoorden",
                wordCount: 100,
                usability: 'hoog (not determined)',
                id: 'most-common-verbes'
            },
            {
                name: "100 verbes les plus courants",
                translation: "100 meest voorkomende werkwoorden",
                wordCount: 100,
                usability: 'hoog (not determined)',
                id: 'most-common-verbes'
            },
        ],
    },
    {
        category: "Veel voorkomend",
        items: [
            {
                name: "100 verbes les plus courants",
                translation: "100 meest voorkomende werkwoorden",
                wordCount: 100,
                usability: 'hoog (not determined)',
                id: 'most-common-verbes'
            },
            {
                name: "100 verbes les plus courants",
                translation: "100 meest voorkomende werkwoorden",
                wordCount: 100,
                usability: 'hoog (not determined)',
                id: 'most-common-verbes'
            },
            {
                name: "100 verbes les plus courants",
                translation: "100 meest voorkomende werkwoorden",
                wordCount: 100,
                usability: 'hoog (not determined)',
                id: 'most-common-verbes'
            },
        ],
    },
]
export type VocabWord = { dutch: string | string[]; french: string | string[]};

interface VocabList {
  id: string;
  name: string;
  words: VocabWord[];
}

type VocabLists = {
  [key: string]: VocabList;
};

export const vocabLists: VocabLists = {
    "most-common-verbes": {
        id: "most-common-verbes",
        name: "most common verbs",
        words: [
            { dutch: "zijn", french: "être"},
            { dutch: "hebben", french: "avoir"},
            { dutch: ["doen", " maken"], french: "faire"},
            { dutch: "gaan", french: "aller"},
            { dutch: "nodig zijn", french: "falloir"},
            { dutch: ["zetten", " plaatsen"], french: ["mettre", "poser"]},
            { dutch: "willen", french: "vouloir"},
            { dutch: "kunnen", french: "pouvoir"},
            { dutch: "moeten", french: "devoir"},
            { dutch: "zeggen", french: "dire"},
            { dutch: "begrijpen", french: "comprendre"},
            { dutch: "geloven", french: "croire"},
            { dutch: "spreken", french: "parler"},
            { dutch: "nemen", french: "prendre"},
            { dutch: "komen", french: "venir"},
            { dutch: "vasthouden", french: "tenir"},
            { dutch: "weten", french: "savoir"},
            { dutch: ["houden van", " mogen"], french: "aimer"},
            { dutch: "geven", french: "donner"},
            { dutch: "vragen", french: ["demander", "poser une question"]},
            { dutch: ["voorbijgaan", " langskomen"], french: "passer"},
            { dutch: "blijven", french: "rester"},
            { dutch: "aankomen", french: "arriver"},
            { dutch: "binnenkomen", french: "entrer"},
            { dutch: ["uitgaan", " verlaten"], french: "sortir"},
            { dutch: "vertrekken", french: "partir"},
            { dutch: "denken", french: "penser"},
            { dutch: ["roepen", " bellen"], french: "appeler"},
            { dutch: "vinden", french: "trouver"},
            { dutch: "ontvangen", french: "recevoir"},
            { dutch: ["voelen", " ruiken"], french: "sentir"},
            { dutch: "volgen", french: "suivre"},
            { dutch: "schrijven", french: "écrire"},
            { dutch: "lezen", french: "lire"},
            { dutch: "zien", french: "voir"},
            { dutch: "openen", french: "ouvrir"},
            { dutch: "dragen", french: "porter"},
            { dutch: "zoeken", french: "chercher"},
            { dutch: "verliezen", french: "perdre"},
            { dutch: "teruggeven", french: "rendre"},
            { dutch: "wachten", french: "attendre"},
            { dutch: "terugkomen", french: "revenir"},
            { dutch: ["omhooggaan", " beklimmen"], french: "monter"},
            { dutch: "naar beneden gaan", french: "descendre"},
            { dutch: "leven", french: "vivre"},
            { dutch: "leren", french: "apprendre"},
            { dutch: "werken", french: "travailler"},
            { dutch: "eten", french: "manger"},
            { dutch: "drinken", french: "boire"},
            { dutch: "slapen", french: "dormir"},
            { dutch: "opstaan", french: "se lever"},
            { dutch: "gaan zitten", french: "s'asseoir"},
            { dutch: "luisteren", french: "écouter"},
            { dutch: "kijken", french: "regarder"},
            { dutch: "antwoorden", french: "répondre"},
            { dutch: "vergeten", french: "oublier"},
            { dutch: "rennen", french: "courir"},
            { dutch: "stoppen", french: "arrêter"},
            { dutch: "beginnen", french: ["commencer", "démarrer"]},
            { dutch: "beëindigen", french: "finir"},
            { dutch: "sluiten", french: "fermer"},
            { dutch: "gebruiken", french: "utiliser"},
            { dutch: "proberen", french: "essayer"},
            { dutch: "veranderen", french: "changer"},
            { dutch: "naar bed gaan", french: "se coucher"},
            { dutch: "zich aankleden", french: "s'habiller"},
            { dutch: "studeren", french: "étudier"},
            { dutch: "spelen", french: "jouer"},
            { dutch: "lachen", french: "rire"},
            { dutch: "huilen", french: "pleurer"},
            { dutch: "nadenken", french: "réfléchir"},
            { dutch: "betalen", french: "payer"},
            { dutch: "kopen", french: "acheter"},
            { dutch: "verkopen", french: "vendre"},
            { dutch: "rijden", french: "conduire"},
            { dutch: "helpen", french: "aider"},
            { dutch: "springen", french: "sauter"},
            { dutch: "schreeuwen", french: "crier"},
            { dutch: "uitzetten", french: "éteindre"},
            { dutch: "aanzetten", french: "allumer"},
            { dutch: "schoonmaken", french: "nettoyer"},
            { dutch: "wassen", french: "laver"},
            { dutch: "koken", french: "cuisiner"},
            { dutch: "kennen", french: "connaître"},
            { dutch: "herkennen", french: "reconnaître"},
            { dutch: "ontmoeten", french: "rencontrer"},
            { dutch: ["bewaren", " oppassen"], french: "garder"},
            { dutch: ["laten", " achterlaten"], french: "laisser"},
            { dutch: "bouwen", french: "construire"},
            { dutch: "meebrengen", french: "apporter"},
            { dutch: "lijden", french: "souffrir"},
            { dutch: "haten", french: "détester"},
            { dutch: "dol zijn op", french: "adorer"},
            { dutch: "zich herinneren", french: ["se rappeler", "se souvenir"]},
            { dutch: ["zich amuseren", " plezier hebben"], french: "s'amuser"},
            { dutch: "stelen", french: "voler"},
            { dutch: "verzenden", french: "envoyer"},
            { dutch: ["regelen", " organiseren"], french: "organiser"},
            { dutch: "beslissen", french: "décider"},
            { dutch: "bezoeken", french: 'visiter'},
        ]},
}