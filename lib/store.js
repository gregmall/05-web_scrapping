const Books = require('./models/Book');

const store = books => {
  return Promise.all(
    books.map(book => Books.insert(book))
  );
};

module.exports = store;
