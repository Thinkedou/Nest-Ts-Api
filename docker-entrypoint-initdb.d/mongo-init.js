print('Start #################################################################');

db = db.getSiblingDB('bookstore');
db.createCollection('books');
db.books.insert( { name: "biclou", price: 1115 } )

print('END #################################################################');