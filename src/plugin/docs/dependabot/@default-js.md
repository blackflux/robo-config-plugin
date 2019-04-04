- <a name="blackfluxrobo-config-plugin-task-idx-ref-dependabotdefault-jsjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dependabotdefault-jsjson">`dependabot/@default-js.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-dependabotjs-instant">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dependabotjs-instant">`dependabot/js-instant`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-dependabotdefault-jsjson">dependabot/@default-js.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dependabotdefault-jsjson">`index`</a>)

Recommended base [dependabot configuration](https://dependabot.com/) for javascript projects.

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
<code>└─ .dependabot</code><br/>
<code>   └─ config.yml</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-github">github</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-dependabotjs-instant">dependabot/js-instant</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dependabotjs-instant">`index`</a>)

_Updating `.dependabot/config.yml` using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Configure dependabot to instantly merge javascript dependency updates into the `dev` branch.

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
<code>└─ .dependabot</code><br/>
<code>   └─ config.yml</code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-github">github</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a> ([`link`](https://dependabot.com/)) 

*Automatic dependency updates.*

Makes dependency updates very easy by automatically creating pull requests in your repo.
All major programming languages are supported or work is done towards supporting them.

### <a name="blackfluxrobo-config-plugin-req-ref-github">github</a> ([`link`](https://github.com/)) 

*Major development platform powered by git.*

GitHub is a code hosting platform for collaboration and version control.
Lets you and others work together on projects.

### <a name="blackfluxrobo-config-plugin-req-ref-javascript">javascript</a> ([`link`](https://en.wikipedia.org/wiki/JavaScript)) 

*Programming Language.*

JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.
It is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

