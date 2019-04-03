- :open_file_folder: <a href="#blackfluxrobo-config-plugin-task-ref-licensemit-npmjson">`license/@MIT-npm.json`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-licensemit-license">`license/MIT-LICENSE`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-licensemit-npm">`license/MIT-npm`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-licensemit-npmjson">license/@MIT-npm.json</a>

Recommended base configuration when using MIT License with npm.

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
<code>├─ LICENSE</code><br/>
<code>└─ package.json</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-npm">npm</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-ownername">ownerName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-licensemit-license">license/MIT-LICENSE</a>

_Updating `LICENSE` using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Generate [MIT license](https://en.wikipedia.org/wiki/MIT_License) file.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Variables</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─ LICENSE</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-ownername">ownerName</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-licensemit-npm">license/MIT-npm</a>

_Updating `package.json` using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-shallow">merge-shallow</a>._

- Link MIT license file into [npm](https://www.npmjs.com/) configuration.

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
<code>└─ package.json</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-npm">npm</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-ownername">ownerName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-npm">npm</a>

[Website](https://docs.npmjs.com/about-npm/)

Javascript package repository.

*Details:*
Requires the project to be conform with the npm standard, i.e. contain a package.json file.
Does not require the project to be published to npm.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-ownername">ownerName</a>

Type: `string`

Name of the owner of this project.

*Details:*
The owner name of the project is the name of the person or organization publishing the project under their license.

### <a name="blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a>

Type: `string`

Repository key.

*Details:*
The repository key contains the owner or organization of the project and the repository name itself, separated by a slash.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>

Valid for: `any`

Simply replace the old with the new content.

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-shallow">merge-shallow</a>

Valid for: `json`, `yml`

Does a shallow merge aka `Object.assign()`.

*Details:*
Useful when specific keys of the target need to be overwritten.

