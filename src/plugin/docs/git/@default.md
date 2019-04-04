- <a name="blackfluxrobo-config-plugin-task-idx-ref-gitdefaultjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-gitdefaultjson">`git/@default.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-gitgitignore">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-gitgitignore">`git/gitignore`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-gitdefaultjson">git/@default.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-gitdefaultjson">`index`</a>)

Recommended base configuration when using [git](https://en.wikipedia.org/wiki/Git).

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
<code>└─ .gitignore</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-git">git</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-gitgitignore">git/gitignore</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-gitgitignore">`index`</a>)

_Updating `.gitignore` using <a href="#blackfluxrobo-config-plugin-strat-ref-unique-top">unique-top</a>._

- Inject recommended entries into [gitignore file](https://help.github.com/en/articles/ignoring-files).
- Default ignores for JetBrains IDE.
- Default ignores for OSX
- Default ignores for NodeJs

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
<code>└─ .gitignore</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-git">git</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-git">git</a> ([`link`](https://git-scm.com/)) 

*Version control system.*

The most used version control system. Not to be confused with github (which uses git).

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-unique-top">unique-top</a>  

:small_blue_diamond: `list`

*Merges content at the top of the file and removes existing, duplicate lines.*

Useful for managing e.g. `.gitignore` when the original content should be kept.

