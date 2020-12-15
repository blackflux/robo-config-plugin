## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assorteddynamo-testing">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assorteddynamo-testing">`assorted/@dynamo-testing`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-dockerdynamo-testing">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dockerdynamo-testing">`docker/#dynamo-testing`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-dockerdynamo-testing-manage">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dockerdynamo-testing-manage">`docker/dynamo-testing-manage`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-dockerdynamo-testing-docker">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dockerdynamo-testing-docker">`docker/dynamo-testing-docker`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assorteddynamo-testing">assorted/@dynamo-testing</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assorteddynamo-testing">`index`</a>)

Manage AWS Lambda docker to run tests against dynamodb local.

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
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-managesh">manage.sh</a></code><br/>
<code>└─&nbsp;docker</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-dockerdockerfile">Dockerfile</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-docker">docker</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-dockerdynamo-testing">docker/#dynamo-testing</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dockerdynamo-testing">`index`</a>)

Manage AWS Lambda docker to run tests against dynamodb local.

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
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-managesh">manage.sh</a></code><br/>
<code>└─&nbsp;docker</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-dockerdockerfile">Dockerfile</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-docker">docker</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-dockerdynamo-testing-manage">docker/dynamo-testing-manage</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dockerdynamo-testing-manage">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-managesh">manage.sh</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Spawn docker container with joined dynamodb container.

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
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-managesh">manage.sh</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-docker">docker</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-dockerdynamo-testing-docker">docker/dynamo-testing-docker</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dockerdynamo-testing-docker">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-dockerdockerfile">docker/Dockerfile</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Docker environment definition for running tests in AWS Lambda container.

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
<code>└─&nbsp;docker</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-dockerdockerfile">Dockerfile</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-docker">docker</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-docker">docker</a> ([`link`](https://www.docker.com/)) 

*Container Platform.*

Docker is a computer program that performs operating-system-level virtualization.
Makes it for example possible to easily create and tear down complex test setups.

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-managesh">manage.sh</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-docker">docker</a>

:small_blue_diamond: `other`

*Prepare project to run tests.*

File starts docker container(s) with necessary setup to execute the project tests.

### <a name="blackfluxrobo-config-plugin-target-ref-dockerdockerfile">docker/Dockerfile</a> ([`link`](https://docs.docker.com/engine/reference/builder/)) 

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-docker">docker</a>

:small_blue_diamond: `other`

*Main docker container configuration file.*

Contains instructions for the main docker container this repository uses for testing.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

