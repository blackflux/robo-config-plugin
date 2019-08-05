const api = require('./core/api');
const routes = require('./routes');

module.exports = {
  ...routes,
  apiRouter: api.router,
  internalApi: api
};
