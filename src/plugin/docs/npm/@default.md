- <a name="blackfluxrobo-config-plugin-task-idx-ref-npmdefaultjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-npmdefaultjson">`npm/@default.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-npmnpmignore">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-npmnpmignore">`npm/npmignore`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-npmdefaultjson">npm/@default.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-npmdefaultjson">`index`</a>)

Recommended base configuration when using [npm](https://www.npmjs.com/).

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
<code>└─ .npmignore</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-npm">npm</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-npmnpmignore">npm/npmignore</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-npmnpmignore">`index`</a>)

_Updating `.npmignore` using <a href="#blackfluxrobo-config-plugin-strat-ref-unique-top">unique-top</a>._

- Inject comment into .npmignore explaining when to use it.

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
<code>└─ .npmignore</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-npm">npm</a></li>
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

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-unique-top">unique-top</a>  

:small_blue_diamond: `list`

*Merges content at the top of the file and removes existing, duplicate lines.*

Useful for managing e.g. `.gitignore` when the original content should be kept.

