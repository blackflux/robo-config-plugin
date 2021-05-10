- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-cron-instancejson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-cron-instancejson">`assorted/@sls-cron-instance.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlesscron">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlesscron">`serverless/#cron`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-crons-cron">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-crons-cron">`serverless/serverless-api-crons-cron`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-crons">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-crons">`serverless/serverless-api-crons`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-cron-instancejson">assorted/@sls-cron-instance.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-cron-instancejson">`index`</a>)

Manages cron instance cloud formation files.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;crons</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapicronscronyml">${cron}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cron">cron</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cronrate">cronRate</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-crontimeout">cronTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cronmemorysize">cronMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-serverlesscron">serverless/#cron</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlesscron">`index`</a>)

Manage serverless configuration for a serverless api cron.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;crons</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapicronscronyml">${cron}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cron">cron</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cronrate">cronRate</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-crontimeout">cronTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cronmemorysize">cronMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-crons-cron">serverless/serverless-api-crons-cron</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-crons-cron">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapicronscronyml">serverless/api/crons/${cron}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Initialize api cron definition.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;crons</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapicronscronyml">${cron}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cron">cron</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cronrate">cronRate</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-crontimeout">cronTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cronmemorysize">cronMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-crons">serverless/serverless-api-crons</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-crons">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference api stack resource definitions for an api cron.

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-cron">cron</a></li>
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

### <a name="blackfluxrobo-config-plugin-var-ref-cron">cron</a>  : `string`

*Name of Cron.*

### <a name="blackfluxrobo-config-plugin-var-ref-cronrate">cronRate</a>  : `string`

*Cron rate.*

As [defined](https://www.serverless.com/examples/aws-node-scheduled-cron) by serverless framework

### <a name="blackfluxrobo-config-plugin-var-ref-crontimeout">cronTimeout</a>  : `integer`

*Cron timeout.*

### <a name="blackfluxrobo-config-plugin-var-ref-cronmemorysize">cronMemorySize</a>  : `integer`

*Cron allocated memory size.*

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapicronscronyml">serverless/api/crons/${cron}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Api stack resource definition for a cron instance.*

Contains api stack definition for a cron.

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

