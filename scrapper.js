const request = require('./lib/request');
const parser = require('./lib/parser');
const store = require('./lib/store');


request()
  .then(document => parser(document))
  .then(books => store(books))
  .then(books => console.log(books.length));


 

