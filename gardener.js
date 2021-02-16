// eslint-disable-next-line import/no-extraneous-dependencies
const gardener = require('js-gardener');

if (require.main === module) {
  gardener({
    skip: ['robo']
  }).catch(() => process.exit(1));
}
