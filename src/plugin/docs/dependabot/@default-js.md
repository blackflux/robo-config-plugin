- :open_file_folder: <a href="#blackfluxrobo-config-plugin-task-ref-dependabotdefault-jsjson">`dependabot/@default-js.json`</a>
  - :clipboard: <a href="#blackfluxrobo-config-plugin-task-ref-dependabotjs-instant">`dependabot/js-instant`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-dependabotdefault-jsjson">dependabot/@default-js.json</a>

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

## :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-dependabotjs-instant">dependabot/js-instant</a>

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

### <a name="blackfluxrobo-config-plugin-req-ref-dependabot">dependabot</a>

[Website](https://dependabot.com/)

Automatic dependency updates.

*Details:*
Makes dependency updates very easy by automatically creating pull requests in your repo.
All major programming languages are supported or work is done towards supporting them.

### <a name="blackfluxrobo-config-plugin-req-ref-github">github</a>

[Website](https://github.com/)

Major development platform powered by git.

*Details:*
GitHub is a code hosting platform for collaboration and version control.
Lets you and others work together on projects.

### <a name="blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>

[Website](https://en.wikipedia.org/wiki/JavaScript)

Programming Language.

*Details:*
JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.
It is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>

Valid for: `any`

Simply replace the old with the new content.

