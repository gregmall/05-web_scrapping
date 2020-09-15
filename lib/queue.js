const Queue = require('bull');

const taskQueue = new Queue('task', {
  redis: process.env.REDIS_URL
});

module.exports = {
  taskQueue
};
