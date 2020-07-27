## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-router-instance">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-router-instance">`assorted/@sls-router-instance`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessrouter">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessrouter">`serverless/#router`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-routers-router">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-routers-router">`serverless/serverless-api-routers-router`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-routers">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-routers">`serverless/serverless-api-routers`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-router-instance">assorted/@sls-router-instance</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-router-instance">`index`</a>)

Manages router instance cloud formation files.

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
<code>└─&nbsp;serverless</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">api.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;api</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;routers</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiroutersrouteryml">${router}.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-router">router</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routermemorysize">routerMemorySize</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerprovisionedconcurrency">routerProvisionedConcurrency</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerwarmerrateinminutes">routerWarmerRateInMinutes</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routermethod">routerMethod</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerauthorizer">routerAuthorizer</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-serverlessrouter">serverless/#router</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessrouter">`index`</a>)

Manage serverless configuration for a serverless api router.

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
<code>└─&nbsp;serverless</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">api.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;api</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;routers</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiroutersrouteryml">${router}.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-router">router</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routermemorysize">routerMemorySize</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerprovisionedconcurrency">routerProvisionedConcurrency</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerwarmerrateinminutes">routerWarmerRateInMinutes</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routermethod">routerMethod</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerauthorizer">routerAuthorizer</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-routers-router">serverless/serverless-api-routers-router</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-routers-router">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiroutersrouteryml">serverless/api/routers/${router}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Initialize api router definition.

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
<code>└─&nbsp;serverless</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;api</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;routers</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiroutersrouteryml">${router}.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-router">router</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routermemorysize">routerMemorySize</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerprovisionedconcurrency">routerProvisionedConcurrency</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerwarmerrateinminutes">routerWarmerRateInMinutes</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routermethod">routerMethod</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-routerauthorizer">routerAuthorizer</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-routers">serverless/serverless-api-routers</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-routers">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference api stack resource definitions for an api router.

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
<code>└─&nbsp;serverless</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">api.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-router">router</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-serverless">serverless</a> ([`link`](https://serverless.com/)) 

*Serverless Framework.*

The Serverless Framework is a free and open-source web framework that was 
developed for building serverless applications.

### <a name="blackfluxrobo-config-plugin-req-ref-aws">aws</a> ([`link`](https://aws.amazon.com/)) 

*Amazon Web Services.*

Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud 
computing platforms to individuals, companies and governments, on a metered pay-as-you-go basis.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-router">router</a>  : `string`

*Name of Router.*

### <a name="blackfluxrobo-config-plugin-var-ref-routermemorysize">routerMemorySize</a>  : `integer`

*Router allocated memory size.*

### <a name="blackfluxrobo-config-plugin-var-ref-routerprovisionedconcurrency">routerProvisionedConcurrency</a>  : `integer`

*Router allocated concurrency.*

### <a name="blackfluxrobo-config-plugin-var-ref-routerwarmerrateinminutes">routerWarmerRateInMinutes</a>  : `integer`

*Warmer invoke interval for Router in minutes.*

### <a name="blackfluxrobo-config-plugin-var-ref-routermethod">routerMethod</a>  : `string`

*Method for Router.*

### <a name="blackfluxrobo-config-plugin-var-ref-routerauthorizer">routerAuthorizer</a>  : `string`

*Authorizer for Router.*

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapiroutersrouteryml">serverless/api/routers/${router}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Api stack resource definition for a router instance.*

Contains api stack definition for router.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>, <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>

:small_blue_diamond: `yml`

*Api stack resource definition.*

Contains user defined api stack resource definitions.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>  

:small_blue_diamond: `json`, `yml`

*Does a "smart" deep merge.*

This will not work as desired for all object deep merging, but should for many cases.

