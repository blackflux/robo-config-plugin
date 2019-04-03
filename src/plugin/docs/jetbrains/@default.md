- :open_file_folder: <a href="#blackfluxrobo-config-plugin-task-ref-jetbrainsdefaultjson">`jetbrains/@default.json`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-jetbrainsexclude-coverage-folder">`jetbrains/exclude-coverage-folder`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-jetbrainsdefaultjson">jetbrains/@default.json</a>

Recommended base configuration when using Jetbrains.

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
<code>└─ .idea</code><br/>
<code>   └─ ${projectName}.iml</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-jetbrains">jetbrains</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-nyc">nyc</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-projectname">projectName</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-jetbrainsexclude-coverage-folder">jetbrains/exclude-coverage-folder</a>

_Updating `.idea/${projectName}.iml` using <a href="#blackfluxrobo-config-plugin-strat-ref-xml-merge">xml-merge</a>._

- Mark `coverage` Folder as excluded in Jetbrains.

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
<code>└─ .idea</code><br/>
<code>   └─ ${projectName}.iml</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-jetbrains">jetbrains</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-nyc">nyc</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-projectname">projectName</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-jetbrains">jetbrains</a>

[Website](https://www.jetbrains.com)

Collection of various IDEs.

*Details:*
Collection of various IDEs. There exists one for every major programming language and 
they are all very similar (i.e. shortcuts, layout), which makes them great when switching languages.

### <a name="blackfluxrobo-config-plugin-req-ref-nyc">nyc</a>

[Website](https://github.com/istanbuljs/nyc#readme)

Coverage testing for javascript projects.

*Details:*
A major coverage testing framework for javascript.
Comes with all the bells and whistles.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-projectname">projectName</a>

Type: `string`

Name of the project.

*Details:*
The project name is in most cases identical to the repository name.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-xml-merge">xml-merge</a>

Valid for: `xml`

Does a "smart" deep merge.

*Details:*
This will not work as desired for all xml merging, but should for many cases.

