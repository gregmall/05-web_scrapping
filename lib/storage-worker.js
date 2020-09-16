const store = require('./store');

module.exports = job => {
    
  console.log('storing page in database');
  return store(job.data.books);
   
};
