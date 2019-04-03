- :open_file_folder: <a href="#blackfluxrobo-config-plugin-task-ref-badgesnpm-opensourcejson">`badges/@npm-opensource.json`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgesjs-gardener">`badges/js-gardener`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgessemantic-release">`badges/semantic-release`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgesnpm-downloads">`badges/npm-downloads`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgesnpm-status">`badges/npm-status`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgesdavid-dm">`badges/david-dm`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgesdependabot">`badges/dependabot`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgescoveralls">`badges/coveralls`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-badgescircleci">`badges/circleci`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-badgesnpm-opensourcejson">badges/@npm-opensource.json</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesjs-gardener">badges/js-gardener</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgessemantic-release">badges/semantic-release</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesnpm-downloads">badges/npm-downloads</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesnpm-status">badges/npm-status</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesdavid-dm">badges/david-dm</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgesdependabot">badges/dependabot</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgescoveralls">badges/coveralls</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-badgescircleci">badges/circleci</a>

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

### <a name="blackfluxrobo-config-plugin-req-ref-js-gardener">js-gardener</a>

[Website](https://github.com/blackflux/js-gardener#readme)

NodeJs Project Management.

*Details:*
Enforces and helps setting up best practices around NodeJs projects.
Enforces highest code quality and minimizes package setup and maintenance complexity - so you can focus on writing code.
Highly recommended if you are getting started with a new package and extremely useful if you are maintaining multiple packages.

### <a name="blackfluxrobo-config-plugin-req-ref-semantic-release">semantic-release</a>

[Website](https://github.com/semantic-release/semantic-release)

Automates npm package release workflow.

*Details:*
Automates the package release workflow including:
- determining the next version number
- generating the release notes
- publishing the package

### <a name="blackfluxrobo-config-plugin-req-ref-npm-published">npm-published</a>

[Website](https://docs.npmjs.com/about-npm/)

Javascript package repository published.

*Details:*
Requires the project to be published to npm either as a private or public package.

### <a name="blackfluxrobo-config-plugin-req-ref-david-dm">david-dm</a>

[Website](https://david-dm.org/)

Dependency badge for javascript github repositories.

*Details:*
Enables displaying of a status badge indicated whether the dependencies are outdated.

### <a name="blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a>

[Website](https://dependabot.com/)

Automatic dependency updates.

*Details:*
Makes dependency updates very easy by automatically creating pull requests in your repo.
All major programming languages are supported or work is done towards supporting them.

### <a name="blackfluxrobo-config-plugin-req-ref-coveralls">coveralls</a>

[Website](https://coveralls.io/)

Showcase and analyze coverage reports.

*Details:*
Enables displaying of a status badge indicated code coverage percent of the project.
Furthermore allows anyone to easily drill down into missing coverage or coverage changes.

### <a name="blackfluxrobo-config-plugin-req-ref-circleci">circleci</a>

[Website](https://circleci.com/)

Run automated jobs using docker containers.

*Details:*
Allows set up for ci/cd using docker containers.
Automates development process quickly, safely, and at scale.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-packagename">packageName</a>

Type: `string`

Name of the package on npm.

*Details:*
The name of the project as published to npm.
Note that for scoped packages the name can differ significantly from the repo name.

### <a name="blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a>

Type: `string`

Repository key.

*Details:*
The repository key contains the owner or organization of the project and the repository name itself, separated by a slash.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-below-title">merge-below-title</a>

Valid for: `list`, `nostruct`

Merges content below title.

