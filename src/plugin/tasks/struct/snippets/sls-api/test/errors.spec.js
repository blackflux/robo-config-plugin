const path = require('path');
const expect = require('chai').expect;
const fs = require('smart-fs');

it('Synchronizing errors file...', () => {
  const srcFolder = path.join(__dirname, '..', 'src');
  const errorsFile = path.join(srcFolder, 'errors.js');
  const errorDefinitions = fs.smartRead(path.join(srcFolder, 'core', 'errors.json'));
  const serviceId = '${errorPrefix}';
  const errorGroups = Object.entries(errorDefinitions);
  const errors = errorGroups.reduce((p, [groupId, group]) => {
    Object.entries(group).forEach(([errorId, err]) => {
      const identifier = `$\{serviceId}-$\{groupId}-$\{errorId}`;
      p.push(`module.exports.${err[0]} = ctx => ApiError('${err[1]}', ${err[2]}, '$\{identifier}', ctx);`);
    });
    return p;
  }, []);
  const result = fs.smartWrite(errorsFile, [
    '/* eslint-disable max-len */',
    "const { ApiError } = require('./core/api.js');",
    '',
    ...errors
  ], { treatAs: 'txt' });
  expect(result, 'Errors file updated').to.equal(false);
});
