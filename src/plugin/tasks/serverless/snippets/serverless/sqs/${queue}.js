import Queue from '../../../queue/queue.js';

export default {
  handler: Queue.handler('${queue}')
};
