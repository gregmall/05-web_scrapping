const { taskQueue } = require('./queue');

taskQueue.process(5, `${__dirname}/worker-scraper.js`);
