- <a name="blackfluxrobo-config-plugin-task-idx-ref-jetbrainsdefaultjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-jetbrainsdefaultjson">`jetbrains/@default.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-jetbrainsexclude-coverage-folder">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-jetbrainsexclude-coverage-folder">`jetbrains/exclude-coverage-folder`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-jetbrainsdefaultjson">jetbrains/@default.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-jetbrainsdefaultjson">`index`</a>)

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-jetbrainsexclude-coverage-folder">jetbrains/exclude-coverage-folder</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-jetbrainsexclude-coverage-folder">`index`</a>)

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

### <a name="blackfluxrobo-config-plugin-req-ref-jetbrains">jetbrains</a> ([`link`](https://www.jetbrains.com)) 

*Collection of various IDEs.*

Collection of various IDEs. There exists one for every major programming language and 
they are all very similar (i.e. shortcuts, layout), which makes them great when switching languages.

### <a name="blackfluxrobo-config-plugin-req-ref-nyc">nyc</a> ([`link`](https://github.com/istanbuljs/nyc#readme)) 

*Coverage testing for javascript projects.*

A major coverage testing framework for javascript.
Comes with all the bells and whistles.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-projectname">projectName</a>  : `string`

*Name of the project.*

The project name is in most cases identical to the repository name.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-xml-merge">xml-merge</a>  

:small_blue_diamond: `xml`

*Does a "smart" deep merge.*

This will not work as desired for all xml merging, but should for many cases.

