const { taskQueue, storageQueue } = require('./queue');

taskQueue.process(5, `${__dirname}/worker-scraper.js`);

taskQueue.on('completed', job => {
  
  storageQueue.add({ books: job.returnvalue });

});

storageQueue.process(5, `${__dirname}/storage-worker.js`);


