- :open_file_folder: <a href="#blackfluxrobo-config-plugin-task-ref-editordefaultjson">`editor/@default.json`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-editortwo-space">`editor/two-space`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-editordefaultjson">editor/@default.json</a>

Recommended base [code editor configuration](https://editorconfig.org/).

<table>
  <tbody>
    <tr>
      <th>Targets</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─ .editorconfig</code><br/>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-editortwo-space">editor/two-space</a>

_Updating `.editorconfig` using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

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
<code>└─ .editorconfig</code><br/>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>

Valid for: `any`

Simply replace the old with the new content.

