const path = require('path');

module.exports = ({
  name: '@blackflux/robo-config-plugin',
  taskDir: path.join(__dirname, 'plugin', 'tasks'),
  reqDir: path.join(__dirname, 'plugin', 'reqs'),
  varDir: path.join(__dirname, 'plugin', 'vars'),
  docDir: path.join(__dirname, 'plugin', 'docs')
});
