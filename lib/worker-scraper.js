const request = require('./request');
const parser = require('./parser');
const store = require('./store');

module.exports = job => {
  console.log(`Fixin' to scrape page ${job.data.page}`);
  return request(job.data.page)
    .then(parser)
    .then(store);
};


