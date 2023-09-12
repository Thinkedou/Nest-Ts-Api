print(' START injection mode ~~~~~~~~~~~~~ ');

const INIT_DATASET = [
    {
        title: '1984',
        originalTitle: 'Nineteen Eighty-Four',
        author: { firstName: 'George', lastName: 'Orwell' },
        publicationYear: 1950,
        genre: 'Science Fiction',
        coverUri: 'https://media.senscritique.com/media/000004731893/300/1984.jpg',
        recap: ''
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
        recap: ''
      }
]


db = db.getSiblingDB('bookstore');
db.createCollection('books');
db.books.insertMany(INIT_DATASET)

print(' END injection mode ~~~~~~~~~~~~~ ');