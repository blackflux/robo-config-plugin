## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-trigger-instance">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-trigger-instance">`assorted/@sls-trigger-instance`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlesstrigger">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlesstrigger">`serverless/#trigger`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-triggers-trigger">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-triggers-trigger">`serverless/serverless-api-triggers-trigger`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-triggers">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-triggers">`serverless/serverless-api-triggers`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-trigger-instance">assorted/@sls-trigger-instance</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-trigger-instance">`index`</a>)

Manages trigger instance cloud formation files.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;triggers</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapitriggerstriggeryml">${trigger}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-trigger">trigger</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-triggertimeout">triggerTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-triggermemorysize">triggerMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-serverlesstrigger">serverless/#trigger</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlesstrigger">`index`</a>)

Manage serverless configuration for a serverless api trigger.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;triggers</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapitriggerstriggeryml">${trigger}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-trigger">trigger</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-triggertimeout">triggerTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-triggermemorysize">triggerMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-triggers-trigger">serverless/serverless-api-triggers-trigger</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-triggers-trigger">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapitriggerstriggeryml">serverless/api/triggers/${trigger}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Initialize api trigger definition.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;triggers</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapitriggerstriggeryml">${trigger}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-trigger">trigger</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-triggertimeout">triggerTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-triggermemorysize">triggerMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-triggers">serverless/serverless-api-triggers</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-triggers">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference api stack resource definitions for an api trigger.

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-trigger">trigger</a></li>
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

### <a name="blackfluxrobo-config-plugin-var-ref-trigger">trigger</a>  : `string`

*Name of Trigger.*

### <a name="blackfluxrobo-config-plugin-var-ref-triggertimeout">triggerTimeout</a>  : `integer`

*Trigger timeout.*

### <a name="blackfluxrobo-config-plugin-var-ref-triggermemorysize">triggerMemorySize</a>  : `integer`

*Trigger allocated memory size.*

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapitriggerstriggeryml">serverless/api/triggers/${trigger}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Api stack resource definition for a trigger instance.*

Contains api stack definition for a trigger.

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

