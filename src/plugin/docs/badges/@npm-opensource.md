- <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesnpm-opensourcejson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesnpm-opensourcejson">`badges/@npm-opensource.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesjs-gardener">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesjs-gardener">`badges/js-gardener`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgessemantic-release">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgessemantic-release">`badges/semantic-release`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesnpm-downloads">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesnpm-downloads">`badges/npm-downloads`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesnpm-status">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesnpm-status">`badges/npm-status`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesdavid-dm">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesdavid-dm">`badges/david-dm`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgesdependabot">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgesdependabot">`badges/dependabot`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgescoveralls">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgescoveralls">`badges/coveralls`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-badgescircleci">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-badgescircleci">`badges/circleci`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-badgesnpm-opensourcejson">badges/@npm-opensource.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesnpm-opensourcejson">`index`</a>)

Display various badges in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-js-gardener">js-gardener</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-semantic-release">semantic-release</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-npm-published">npm-published</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-david-dm">david-dm</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-coveralls">coveralls</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-circleci">circleci</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-packagename">packageName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesjs-gardener">badges/js-gardener</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesjs-gardener">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

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
<code>└─ README.md</code><br/>
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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgessemantic-release">badges/semantic-release</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgessemantic-release">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [semantic-release](https://github.com/semantic-release/semantic-release) badge in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-semantic-release">semantic-release</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesnpm-downloads">badges/npm-downloads</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesnpm-downloads">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [npm downloads](https://www.npmjs.com/) badge in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-npm-published">npm-published</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-packagename">packageName</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesnpm-status">badges/npm-status</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesnpm-status">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [npm status](https://www.npmjs.com/) badge in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-npm-published">npm-published</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-packagename">packageName</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesdavid-dm">badges/david-dm</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesdavid-dm">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [david-dm.com](https://david-dm.org/) badge in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-david-dm">david-dm</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesdependabot">badges/dependabot</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgesdependabot">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [dependabot](https://dependabot.com/) badge in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgescoveralls">badges/coveralls</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgescoveralls">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [coveralls](https://coveralls.io/) badge in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-coveralls">coveralls</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgescircleci">badges/circleci</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-badgescircleci">`index`</a>)

_Updating `README.md` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>._

- Display [circleci](https://circleci.com/) badge in README.

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
<code>└─ README.md</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-circleci">circleci</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-js-gardener">js-gardener</a> ([`link`](https://github.com/blackflux/js-gardener#readme)) 

*NodeJs Project Management.*

Enforces and helps setting up best practices around NodeJs projects.
Enforces highest code quality and minimizes package setup and maintenance complexity - so you can focus on writing code.
Highly recommended if you are getting started with a new package and extremely useful if you are maintaining multiple packages.

### <a name="blackfluxrobo-config-plugin-req-ref-semantic-release">semantic-release</a> ([`link`](https://github.com/semantic-release/semantic-release)) 

*Automates npm package release workflow.*

Automates the package release workflow including:
- determining the next version number
- generating the release notes
- publishing the package

### <a name="blackfluxrobo-config-plugin-req-ref-npm-published">npm-published</a> ([`link`](https://docs.npmjs.com/about-npm/)) 

*Javascript package repository published.*

Requires the project to be published to npm either as a private or public package.

### <a name="blackfluxrobo-config-plugin-req-ref-david-dm">david-dm</a> ([`link`](https://david-dm.org/)) 

*Dependency badge for javascript github repositories.*

Enables displaying of a status badge indicated whether the dependencies are outdated.

### <a name="blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a> ([`link`](https://dependabot.com/)) 

*Automatic dependency updates.*

Makes dependency updates very easy by automatically creating pull requests in your repo.
All major programming languages are supported or work is done towards supporting them.

### <a name="blackfluxrobo-config-plugin-req-ref-coveralls">coveralls</a> ([`link`](https://coveralls.io/)) 

*Showcase and analyze coverage reports.*

Enables displaying of a status badge indicated code coverage percent of the project.
Furthermore allows anyone to easily drill down into missing coverage or coverage changes.

### <a name="blackfluxrobo-config-plugin-req-ref-circleci">circleci</a> ([`link`](https://circleci.com/)) 

*Run automated jobs using docker containers.*

Allows set up for ci/cd using docker containers.
Automates development process quickly, safely, and at scale.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-packagename">packageName</a>  : `string`

*Name of the package on npm.*

The name of the project as published to npm.
Note that for scoped packages the name can differ significantly from the repo name.

### <a name="blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a>  : `string`

*Repository key.*

The repository key contains the owner or organization of the project and the repository name itself, separated by a slash.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>  

:small_blue_diamond: `list`, `nostruct`

*Merges content below title.*

