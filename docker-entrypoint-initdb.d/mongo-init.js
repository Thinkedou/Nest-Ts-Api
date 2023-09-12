print(' START injection mode ~~~~~~~~~~~~~ ');

const INIT_DATASET = [

    {
        title: '1984',
        originalTitle: 'Nineteen Eighty-Four',
        author: { firstName: 'George', lastName: 'Orwell' },
        publicationYear: 1950,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000004731893/300/1984.jpg',
        recap: '',
        createdAt:new Date()
    },
    {
        title: 'Dune',
        originalTitle: 'Dune',
        author:{
            firstName:"Frank",
            lastName :"Herbert"
        },
        publicationYear: 1965,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000020354712/300/dune.jpg',
        recap: '',
        createdAt:new Date()
    },
    {
        title: 'Fondation',
        originalTitle: 'Foundation',
        author:{
            firstName:"Isaac",
            lastName :"Asimov"
        },
        publicationYear: 1957,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000016623850/300/fondation_le_cycle_de_fondation_tome_1.png',
        recap: '',
        createdAt:new Date()
    },

    {
        title: 'Le Meilleur des mondes',
        originalTitle: 'Brave New World',
        author:{
            firstName:"Aldous",
            lastName :"Huxley"
        },
        publicationYear: 1931,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000009127977/300/le_meilleur_des_mondes.jpg',
        recap: '',
        createdAt:new Date()
    },
    {
        title: 'Fahrenheit 451',
        originalTitle: 'Fahrenheit 451',
        author:{
            firstName:"Ray",
            lastName :"Bradbury"
        },
        publicationYear: 1953,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000016623847/300/fahrenheit_451.png',
        recap: '',
        createdAt:new Date()
    },
    {
        title: 'Ubik',
        originalTitle: 'Ubik',
        author:{
            firstName:"Philip",
            lastName :"K. Dick"
        },
        publicationYear: 1970,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000016687465/300/ubik.jpg',
        createdAt:new Date(),
        recap: "Nous sommes en 1992, la société futuriste décrite est celle d'un monde ultra-capitaliste dirigé par des chefs d'entreprise monopolistiques."
    },
    {
        title: "Les Cantos d'Hypérion",
        originalTitle: 'Hypérion',
        author:{
            firstName:"Dan",
            lastName :"Simmons"
        },
        publicationYear: 1989,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000007607303/300/hyperion.jpg',
        createdAt:new Date(),
        recap: "Hypérion, le port spatial, offre un spectacle de fin du monde. Des millions d'habitants de la planète sont sûrs que le gritche va venir les prendre."
    },
    {
        title: "La horde du contrevent",
        originalTitle: 'La horde du contrevent',
        author:{
            firstName:"Alain",
            lastName :"Damasio"
        },
        publicationYear: 2004,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000017346551/300/la_horde_du_contrevent.jpg',
        recap: "Imaginez une Terre poncée, avec en son centre une bande de cinq mille kilomètres de large et sur ses franges un miroir de glace à peine rayable, inhabité. Imaginez qu’un vent féroce en rince la surface. Que les villages qui s’y sont accrochés, avec leurs maisons en goutte d’eau, les chars à voile qui la strient, les airpailleurs debout en plein flot, tous résistent. Imaginez qu’en Extrême-Aval ait été formé un bloc d’élite d’une vingtaine d’enfants aptes à remonter au cran, rafale en gueule, leur vie durant, le vent jusqu’à sa source, à ce jour jamais atteinte : l’Extrême-Amont. Mon nom est Sov Strochnis, scribe. Mon nom est Caracole le troubadour et Oroshi Melicerte, aéromaître. Je m’appelle aussi Golgoth, traceur de la Horde, Arval l’éclaireur et parfois même Larco lorsque je braconne l’azur à la cage volante. Ensemble, nous formons la Horde du Contrevent. Il en a existé trente-trois en huit siècles, toutes infructueuses. Je vous parle au nom de la trente-quatrième : sans doute l’ultime. "
    },
    {
        title: "La nuit des temps",
        originalTitle: 'La nuit des temps',
        author:{
            firstName:"René",
            lastName :"Barjavel"
        },
        publicationYear: 1968,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000016623783/300/la_nuit_des_temps.jpg',
        recap: "Une équipe de chercheurs en Antarctique découvre à une grande profondeur une civilisation éteinte depuis 900 000 ans et les corps d'un homme et d'une femme."
    },
    {
        title: "La Stratégie Ender",
        originalTitle: "Ender's Game",
        author:{
            firstName:"Orson Scott",
            lastName :"Card"
        },
        publicationYear: 1986,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000016903864/300/la_strategie_ender_le_cycle_d_ender_tome_1.jpg',
        recap: "Andrew n’est pas un garçon comme les autres, il suit un programme militaire pour devenir le seul pouvant sauver le monde de l’invasion des Doryphores."
    },
    {
        title: "Les androïdes rêvent-ils de moutons électriques ?",
        originalTitle: "Blade Runner",
        author:{
            firstName:"Philip",
            lastName :"K. Dick"
        },
        publicationYear: 1968,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000020083854/300/les_androides_revent_ils_de_moutons_electriques.jpg',
        recap: "Rick Deckard est un chasseur de primes chargé de démasquer et éliminer des androïdes séjournant sur terre illégalement. On les appelle les Andys."
    },
    {
        title: "Chroniques martiennes",
        originalTitle: "The Martian Chronicles",
        author:{
            firstName:"Ray",
            lastName :"Bradbury"
        },
        publicationYear: 1950,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000016623845/300/chroniques_martiennes.png',
        recap: "Le livre est composé de nouvelles parues dans des magazines entre 1945 et 1950 ainsi que de nouveaux textes écrits spécialement pour le recueil."
    },
    {
        title: "La Planète des singes",
        originalTitle: "La Planète des singes",
        author:{
            firstName:"Pierre",
            lastName :"Boulle"
        },
        publicationYear: 1963,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000017972512/300/la_planete_des_singes.jpg',
        recap: "En survolant la supergéante Bételgeuse, Antelle, Arthur Levain et Ulysse Mérou découvrent une planète jumelle de la Terre, où le singe domine l'homme."
    },
    {
        title: "Les Robots",
        originalTitle: "I, Robot",
        author:{
            firstName:"Isaac",
            lastName :"Asimov"
        },
        publicationYear: 1950,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000017589902/300/les_robots_le_cycle_des_robots_tome_1.jpg',
        recap: "Première Loi : Un robot ne peut porter atteinte à un être humain ni, restant passif, laisser cet être humain exposé au danger. Deuxième Loi : Un robot doit obéir aux ordres donnés par les êtres humains, sauf si de tels ordres entrent en contradiction avec la Première Loi. Troisième Loi : Un robot doit protéger son existence dans la mesure où cette protection n'entre pas en contradiction avec la Première ou la Deuxième Loi."
    },
    {
        title: "Je suis une légende",
        originalTitle: "I Am Legend",
        author:{
            firstName:"Richard",
            lastName :"Matheson"
        },
        publicationYear: 1954,
        createdAt:new Date(),
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000020125748/300/je_suis_une_legende.jpg',
        recap: "Un virus inconnu et foudroyant a transformé les humains en vampires. Un homme seul résiste à la nouvelle peste. Comment tout cela est arrivé ?"
    },
    {
        title: "Demain les chiens",
        originalTitle: "City",
        author:{
            firstName:"Clifford",
            lastName :"D. Simak"
        },
        publicationYear: 1952,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000021017640/300/demain_les_chiens.jpg',
        recap: "Que faut-il voir à travers la figure emblématique de \"l’Homme\" ? Que recouvrent des concepts aussi étrangers à notre culture que ceux de \"Cité\" ou de \"Voyage dans les étoiles\""
    },
    {
        title: "Vingt Mille Lieues sous les mers",
        originalTitle: "Vingt Mille Lieues sous les mers",
        author:{
            firstName:"Jules",
            lastName :"Verne"
        },
        publicationYear: 1869,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000004487167/300/vingt_mille_lieues_sous_les_mers.jpg',
        recap: "Un monstre marin, été signalé par plusieurs navires. Une expédition est organisée sur l'Abraham Lincoln, pour chasser ce monstre inquiétant"
    },
    {
        title: "Spin",
        originalTitle: "Spin",
        author:{
            firstName:"Robert Charles",
            lastName :"Wilson"
        },
        publicationYear: 2005,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000000103157/300/spin.gif',
        recap: "La Terre a été coupée du reste de l’univers par une mystérieuse barrière opaque à l’extérieur de laquelle le temps s’écoule des millions de fois plus vite. Il reste donc peu de temps avant que le Soleil ne transforme la planète en une boule de feu, exterminant ainsi l'humanité."
    },
    {
        title: "La Route",
        originalTitle: "The Road",
        author:{
            firstName:"Cormac",
            lastName :"McCarthy"
        },
        publicationYear: 2008,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000006962137/300/la_route.jpg',
        recap: "L'apocalypse a eu lieu. Le monde est couvert de cendres. Un père et son fils errent sur une route. Ils doivent affronter le temps mais aussi l'homme."
    },
    {
        title: "La Chute d'Hypérion",
        originalTitle: "The Fall of Hyperion",
        author:{
            firstName:"Dan",
            lastName :"Simmons"
        },
        publicationYear: 1990,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000019786407/300/la_chute_d_hyperion.jpg',
        recap: "La Chute d'Hypérion raconte l’arrivée des pèlerins dans la vallée des Tombeaux du Temps et leur confrontation individuelle avec le Gritche."
    },
    {
        title: "Des milliards de tapis de cheveux",
        originalTitle: "Die Haarteppichknüpfer",
        author:{
            firstName:"Andreas",
            lastName :"Eschbach"
        },
        publicationYear: 1995,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000006958440/300/des_milliards_de_tapis_de_cheveux.png',
        recap: "Quelque part aux confins de l'Empire, sur un monde oublié de tous... une petite planète apparemment anodine. Sauf que, depuis des temps immémoriaux, les hommes s'y livrent à une étrange occupation : tisseurs de père en fils, ils fabriquent des tapis de cheveux destinés à orner le Palais des Étoiles de l'Empereur."
    },
    {
        title: "Stalker",
        originalTitle: "Пикник на обочине",
        author:{
            firstName:"Arkadi",
            lastName :"Strougatski"
        },
        publicationYear: 1972,
        createdAt:new Date(),
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000005698174/300/stalker.jpg',
        recap: "L’Homme découvre l’existence d’une forme de vie extraterrestre qui laisse sur son passage six zones théâtre d’évènements inexplicables."
    },
    {
        title: "Malevil",
        originalTitle: "Malevil",
        author:{
            firstName:"Robert",
            lastName :"Merle"
        },
        publicationYear: 1972,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000012138402/300/malevil.jpg',
        recap: "Suite à une guerre atomique qui a devasté la planète, un groupe de survivants s’organise derrière les rempart d’une forteresse en France."
    },
    {
        title: "Le problème à trois corps",
        originalTitle: "sān tǐ",
        author:{
            firstName:"Liu",
            lastName :"Cixin"
        },
        publicationYear: 2008,
        genre: 'Science Fiction',
        createdAt:new Date(),
        coverUri: 'https://media.senscritique.com/media/000016419784/300/le_probleme_a_trois_corps.jpg',
        recap: "En pleine Révolution Culturelle, le pouvoir chinois construit une base militaire secrète destinée à abriter un programme de recherche de potentielles civilisations extra-terrestres."
    }

]
db = db.getSiblingDB('bookstore');
db.setLogLevel(-1, "query")
db.createCollection('books');
db.books.insertMany(INIT_DATASET)

print(' END injection mode ~~~~~~~~~~~~~ ');