import { describe } from 'node-tdd';
import fs from 'smart-fs';
import path from 'path';
import { expect } from 'chai';

describe('Testing lib-test.sh', () => {
  it('Generating...', async () => {
    const dirname = fs.dirname(import.meta.url);
    const tests = fs.walkDir(path.join(dirname, 'handler'))
      .filter((t) => t.endsWith('.spec.json'));
    const r = fs.smartWrite(path.join(dirname, 'lib-test.sh'), [
      'yarn build-clean',
      "RED='\\033[0;31m'",
      "NC='\\033[0m'",
      '',
      'code=0',
      '',
      ...tests.flatMap((t) => [
        [
          'yarn tsv',
          `-g 'Test ${t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}'`,
          '--folder lib',
          "2> /dev/null | grep '✔ Test' || {"
        ].join(' '),
        `  printf "$\\{RED}    ✗ Test $\{t}$\\{NC}\\n"`,
        '  code=1',
        '}'
      ]),
      '',
      'yarn clean',
      '',
      'exit $code'
    ]);
    expect(r, 'File lib-test.sh has updated').to.equal(false);
  });
});
