- <a name="blackfluxrobo-config-plugin-task-idx-ref-semantic-releasedefaultjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-semantic-releasedefaultjson">`semantic-release/@default.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-semantic-releasecommit-conventions">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-semantic-releasecommit-conventions">`semantic-release/commit-conventions`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-semantic-releasedefaultjson">semantic-release/@default.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-semantic-releasedefaultjson">`index`</a>)

Recommended base configuration when using [semantic-release](https://github.com/semantic-release/semantic-release).

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
<code>└─ .releaserc.json</code><br/>
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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-semantic-releasecommit-conventions">semantic-release/commit-conventions</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-semantic-releasecommit-conventions">`index`</a>)

_Updating `.releaserc.json` using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Slightly extended [release commit convention](https://github.com/semantic-release/semantic-release#commit-message-format) for semantic-release.

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
<code>└─ .releaserc.json</code><br/>
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

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-semantic-release">semantic-release</a> ([`link`](https://github.com/semantic-release/semantic-release)) 

*Automates npm package release workflow.*

Automates the package release workflow including:
- determining the next version number
- generating the release notes
- publishing the package

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

