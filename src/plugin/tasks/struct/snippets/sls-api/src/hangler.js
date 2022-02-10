import api from './core/api.js';
import * as routes from './routes.js';

export default {
  ...routes,
  apiRouter: api.router,
  internalApi: api
};
