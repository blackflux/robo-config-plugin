- <a name="blackfluxrobo-config-plugin-task-idx-ref-licensemit-npmjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-licensemit-npmjson">`license/@MIT-npm.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-licensemit-file">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-licensemit-file">`license/MIT-file`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-licensemit-package">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-licensemit-package">`license/MIT-package`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-licensemit-npmjson">license/@MIT-npm.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-licensemit-npmjson">`index`</a>)

Manage license configuration for npm open source package on github.

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
<code>├─&nbsp;LICENSE</code><br/>
<code>└─&nbsp;package.json</code><br/>
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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-licensemit-file">license/MIT-file</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-licensemit-file">`index`</a>)

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
<code>└─&nbsp;LICENSE</code><br/>
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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-licensemit-package">license/MIT-package</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-licensemit-package">`index`</a>)

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
<code>└─&nbsp;package.json</code><br/>
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

### <a name="blackfluxrobo-config-plugin-req-ref-npm">npm</a> ([`link`](https://docs.npmjs.com/about-npm/)) 

*Javascript package repository.*

Requires the project to be conform with the npm standard, i.e. contain a package.json file.
Does not require the project to be published to npm.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-ownername">ownerName</a>  : `string`

*Name of the owner of this project.*

The owner name of the project is the name of the person or organization publishing the project under their license.

### <a name="blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a>  : `string`

*Repository key.*

The repository key contains the owner or organization of the project and the repository name itself, separated by a slash.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-shallow">merge-shallow</a>  

:small_blue_diamond: `json`, `yml`

*Does a shallow merge aka `Object.assign()`.*

Useful when specific keys of the target need to be overwritten.

