const path = require('path');
const { plugin } = require('robo-config');

module.exports = plugin(path.join(__dirname, 'plugin'));
