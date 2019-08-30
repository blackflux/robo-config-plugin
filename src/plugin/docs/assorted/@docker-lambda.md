- <a name="blackfluxrobo-config-plugin-task-idx-ref-assorteddocker-lambdajson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assorteddocker-lambdajson">`assorted/@docker-lambda.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-dockerserverless">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dockerserverless">`docker/#serverless`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-dockersls-manage">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dockersls-manage">`docker/sls-manage`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-dockersls-docker">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-dockersls-docker">`docker/sls-docker`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assorteddocker-lambdajson">assorted/@docker-lambda.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assorteddocker-lambdajson">`index`</a>)

Manage AWS Lambda docker runner for project.

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
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-dockerserverless">docker/#serverless</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dockerserverless">`index`</a>)

Manage docker test configuration for serverless project.

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
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-dockersls-manage">docker/sls-manage</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dockersls-manage">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-managesh">manage.sh</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Spawn docker container for serverless testing and deploying.

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
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-dockersls-docker">docker/sls-docker</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-dockersls-docker">`index`</a>)

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
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
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

### <a name="blackfluxrobo-config-plugin-req-ref-serverless">serverless</a> ([`link`](https://serverless.com/)) 

*Serverless Framework.*

The Serverless Framework is a free and open-source web framework that was 
developed for building serverless applications.

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

