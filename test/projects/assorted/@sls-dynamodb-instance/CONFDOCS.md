## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-dynamodb-instance">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-dynamodb-instance">`assorted/@sls-dynamodb-instance`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessdynamodb">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessdynamodb">`serverless/#dynamodb`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-test-env-dynamodb">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-test-env-dynamodb">`serverless/serverless-test-env-dynamodb`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb-table">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb-table">`serverless/serverless-data-dynamodb-table`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb">`serverless/serverless-data-dynamodb`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb-table">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb-table">`serverless/serverless-api-dynamodb-table`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb">`serverless/serverless-api-dynamodb`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-dynamodb-instance">assorted/@sls-dynamodb-instance</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-dynamodb-instance">`index`</a>)

Manages Dynamodb instance cloud formation files.

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
<code>├─&nbsp;serverless</code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">api.yml</a></code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">data.yml</a></code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;api</code><br/>
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapidynamodbtableyml">${table}.yml</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;data</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatadynamodbtableyml">${table}.yml</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">env.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-projectname">projectName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-serverlessdynamodb">serverless/#dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessdynamodb">`index`</a>)

Manage serverless configuration for a dynamodb table.

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
<code>├─&nbsp;serverless</code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">api.yml</a></code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">data.yml</a></code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;api</code><br/>
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapidynamodbtableyml">${table}.yml</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;data</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatadynamodbtableyml">${table}.yml</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">env.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-projectname">projectName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-test-env-dynamodb">serverless/serverless-test-env-dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-test-env-dynamodb">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">test/env.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Initialize DynamoDb Table Name in test configuration.

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
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">env.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-projectname">projectName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb-table">serverless/serverless-data-dynamodb-table</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb-table">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatadynamodbtableyml">serverless/data/dynamodb/${table}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Initialize data stack resource definitions for an dynamodb table.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;data</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatadynamodbtableyml">${table}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb">serverless/serverless-data-dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">serverless/data.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference data stack resource definitions for a dynamodb table.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">data.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb-table">serverless/serverless-api-dynamodb-table</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb-table">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapidynamodbtableyml">serverless/api/dynamodb/${table}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Initialize api stack resource definitions for a dynamodb table.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapidynamodbtableyml">${table}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb">serverless/serverless-api-dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference api stack resource definitions for a dynamodb table.

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
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

### <a name="blackfluxrobo-config-plugin-var-ref-projectname">projectName</a>  : `string`

*Name of the project.*

The project name is in most cases identical to the repository name.

### <a name="blackfluxrobo-config-plugin-var-ref-table">table</a>  : `string`

*Name of Table.*

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-testenvyml">test/env.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Configuration definitions for lambda-tdd test setup.*

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessdatadynamodbtableyml">serverless/data/dynamodb/${table}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Data stack resource definition for a dynamodb table.*

Contains data stack definition for dynamodb.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessdatayml">serverless/data.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>, <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>

:small_blue_diamond: `yml`

*Data stack resource definition.*

Contains user defined data stack resource definitions.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapidynamodbtableyml">serverless/api/dynamodb/${table}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Api stack resource definition for a dynamodb table.*

Contains api stack definition for dynamodb.

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

