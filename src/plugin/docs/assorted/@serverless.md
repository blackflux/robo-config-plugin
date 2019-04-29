- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedserverlessjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedserverlessjson">`assorted/@serverless.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-structserverless">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structserverless">`struct/#serverless`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structtemplate-mocha-opts">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structtemplate-mocha-opts">`struct/template-mocha-opts`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structtemplate-eslintrc">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structtemplate-eslintrc">`struct/template-eslintrc`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structtemplate-babelrc">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structtemplate-babelrc">`struct/template-babelrc`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-editordefault">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-editordefault">`editor/#default`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-editortwo-space">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-editortwo-space">`editor/two-space`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesserverless">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesserverless">`badges/#serverless`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesjs-gardener">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesjs-gardener">`badges/js-gardener`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgescircleci-private">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgescircleci-private">`badges/circleci-private`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedserverlessjson">assorted/@serverless.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedserverlessjson">`index`</a>)

Manage various configuration files for serverless project.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
      <th>Variables</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-babelrc">.babelrc</a></code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-editorconfig">.editorconfig</a></code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-eslintrcjson">.eslintrc.json</a></code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-readmemd">README.md</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testmochaopts">mocha.opts</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-mocha">mocha</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-eslint">eslint</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-babel">babel</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-js-gardener">js-gardener</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-circleci">circleci</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-circlecireadtoken">circleCiReadToken</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-structserverless">struct/#serverless</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structserverless">`index`</a>)

Manage basic project structure for serverless project.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-babelrc">.babelrc</a></code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-eslintrcjson">.eslintrc.json</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testmochaopts">mocha.opts</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-mocha">mocha</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-eslint">eslint</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-babel">babel</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structtemplate-mocha-opts">struct/template-mocha-opts</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structtemplate-mocha-opts">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testmochaopts">test/mocha.opts</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Create options file for mocha tests.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testmochaopts">mocha.opts</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-mocha">mocha</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structtemplate-eslintrc">struct/template-eslintrc</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structtemplate-eslintrc">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-eslintrcjson">.eslintrc.json</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Create configuration file for eslint enforcing opinionated, best practices.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-eslintrcjson">.eslintrc.json</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-eslint">eslint</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structtemplate-babelrc">struct/template-babelrc</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structtemplate-babelrc">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-babelrc">.babelrc</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Create configuration file for babel.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-babelrc">.babelrc</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-babel">babel</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-editordefault">editor/#default</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-editordefault">`index`</a>)

Manage editor configuration for project.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-editorconfig">.editorconfig</a></code><br/>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-editortwo-space">editor/two-space</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-editortwo-space">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-editorconfig">.editorconfig</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Two space line indentation.
- Set `lf` line endings.
- Set `utf8` encoding.
- Remove unnecessary whitespaces.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-editorconfig">.editorconfig</a></code><br/>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-badgesserverless">badges/#serverless</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesserverless">`index`</a>)

Add badged for serverless project.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
      <th>Variables</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-readmemd">README.md</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-js-gardener">js-gardener</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-circleci">circleci</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-circlecireadtoken">circleCiReadToken</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesjs-gardener">badges/js-gardener</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesjs-gardener">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-readmemd">README.md</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [js-gardener](https://github.com/blackflux/js-gardener) badge in README.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-readmemd">README.md</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-js-gardener">js-gardener</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgescircleci-private">badges/circleci-private</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgescircleci-private">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-readmemd">README.md</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [circleci](https://circleci.com/) badge for private repo in README.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
      <th>Variables</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-readmemd">README.md</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-circleci">circleci</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-circlecireadtoken">circleCiReadToken</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-javascript">javascript</a> ([`link`](https://en.wikipedia.org/wiki/JavaScript)) 

*Programming Language.*

JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.
It is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

### <a name="blackfluxrobo-config-plugin-req-ref-mocha">mocha</a> ([`link`](https://mochajs.org/)) 

*JavaScript test framework.*

Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.

### <a name="blackfluxrobo-config-plugin-req-ref-eslint">eslint</a> ([`link`](https://eslint.org/)) 

*Linting for JavaScript.*

JSLint is a static code analysis tool used in software development for 
checking if JavaScript source code complies with coding rules.

### <a name="blackfluxrobo-config-plugin-req-ref-babel">babel</a> ([`link`](https://babeljs.io/)) 

*JavaScript Compiler.*

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards
compatible version of JavaScript in current and older browsers or environments.

### <a name="blackfluxrobo-config-plugin-req-ref-js-gardener">js-gardener</a> ([`link`](https://github.com/blackflux/js-gardener#readme)) 

*NodeJs Project Management.*

Enforces and helps setting up best practices around NodeJs projects.
Enforces highest code quality and minimizes package setup and maintenance complexity - so you can focus on writing code.
Highly recommended if you are getting started with a new package and extremely useful if you are maintaining multiple packages.

### <a name="blackfluxrobo-config-plugin-req-ref-circleci">circleci</a> ([`link`](https://circleci.com/)) 

*Run automated jobs using docker containers.*

Allows set up for ci/cd using docker containers.
Automates development process quickly, safely, and at scale.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-circlecireadtoken">circleCiReadToken</a>  : `string`

*CircleCi Read Api Token.*

CircleCi read only api token used to access build status.

### <a name="blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a>  : `string`

*Repository key.*

The repository key contains the owner or organization of the project and the repository name itself, separated by a slash.

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-testmochaopts">test/mocha.opts</a> ([`link`](https://mochajs.org/#mochaopts)) 

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-mocha">mocha</a>, <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>

:small_blue_diamond: `list`

*Mocha test configuration file.*

### <a name="blackfluxrobo-config-plugin-target-ref-eslintrcjson">.eslintrc.json</a> ([`link`](https://eslint.org/docs/user-guide/configuring)) 

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-eslint">eslint</a>

:small_blue_diamond: `json`

*Configuration file for eslint.*

### <a name="blackfluxrobo-config-plugin-target-ref-babelrc">.babelrc</a> ([`link`](https://babeljs.io/docs/en/configuration#babelrc)) 

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-babel">babel</a>

:small_blue_diamond: `json`

*Configuration for babel.*

### <a name="blackfluxrobo-config-plugin-target-ref-editorconfig">.editorconfig</a> ([`link`](https://editorconfig.org/)) 

:small_blue_diamond: `other`

*Defines file formatting.*

Defines file formatting that an IDE can pick up and use to format project files.

### <a name="blackfluxrobo-config-plugin-target-ref-readmemd">README.md</a> ([`link`](https://help.github.com/en/articles/about-readmes)) 

:small_blue_diamond: `nostruct`

*Project readme file.*

Contains lots of information about the project itself.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>  

:small_blue_diamond: `any`

*Does nothing when the file is already present, otherwise creates it.*

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>  

:small_blue_diamond: `json`, `yml`

*Does a "smart" deep merge.*

This will not work as desired for all object deep merging, but should for many cases.

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>  

:small_blue_diamond: `list`, `nostruct`

*Merges content below title.*

