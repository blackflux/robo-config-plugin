import path from 'path';
import https from 'https';
import fs from 'smart-fs';
import { expect } from 'chai';
import { describe } from 'node-tdd';
import dirname from '../src/util/dirname.js';

describe('Testing sls configuration', { timeout: 10000 }, () => {
  it('Testing aws-sdk version', async () => {
    const r = await new Promise((resolve) => {
      https.get(
        {
          protocol: 'https:',
          hostname: 'docs.aws.amazon.com',
          path: '/lambda/latest/dg/lambda-runtimes.html',
          headers: {
            'user-agent': '@blackflux/robo-config-plugin'
          }
        },
        (resp) => {
          let data = '';
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            resolve(data);
          });
        }
      );
    });
    const version = r.match(
      /<td>\s+<p><code class="code">nodejs14\.x<\/code><\/p>\s+<\/td>\s+<td>\s+<p>(\d+\.\d+\.\d+)<\/p>\s+<\/td>/
    )[1];
    const pkg = fs.smartRead(path.join(dirname(import.meta.url), '..', 'package.json'));
    expect(pkg.devDependencies['aws-sdk'], `devDependencies.aws-sdk !== $\{version}`).to.equal(version);
    expect(pkg.peerDependencies['aws-sdk'], `peerDependencies.aws-sdk !== $\{version}`).to.equal(version);
  });
});
