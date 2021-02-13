- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-dynamodb-instancejson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-dynamodb-instancejson">`assorted/@sls-dynamodb-instance.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessdynamodb">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessdynamodb">`serverless/#dynamodb`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-test-env-dynamodb">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-test-env-dynamodb">`serverless/serverless-test-env-dynamodb`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-src-dynamodb-dy">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-src-dynamodb-dy">`serverless/serverless-src-dynamodb-dy`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb-table">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb-table">`serverless/serverless-data-dynamodb-table`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb">`serverless/serverless-data-dynamodb`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb-table">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb-table">`serverless/serverless-api-dynamodb-table`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb">`serverless/serverless-api-dynamodb`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-dynamodb-instancejson">assorted/@sls-dynamodb-instance.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-dynamodb-instancejson">`index`</a>)

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
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcdynamodbdyjs">dy.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">env.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-projectname">projectName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-tablestreamenabled">tableStreamEnabled</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-serverlessdynamodb">serverless/#dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessdynamodb">`index`</a>)

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
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcdynamodbdyjs">dy.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">env.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-projectname">projectName</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-table">table</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-tablestreamenabled">tableStreamEnabled</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-test-env-dynamodb">serverless/serverless-test-env-dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-test-env-dynamodb">`index`</a>)

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

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-src-dynamodb-dy">serverless/serverless-src-dynamodb-dy</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-src-dynamodb-dy">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srcdynamodbdyjs">src/dynamodb/dy.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Create aws-sdk-wrap dynamodb-tools function file to access defined models.

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
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;dynamodb</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcdynamodbdyjs">dy.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb-table">serverless/serverless-data-dynamodb-table</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb-table">`index`</a>)

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-tablestreamenabled">tableStreamEnabled</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-dynamodb">serverless/serverless-data-dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-dynamodb">`index`</a>)

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

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb-table">serverless/serverless-api-dynamodb-table</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb-table">`index`</a>)

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-tablestreamenabled">tableStreamEnabled</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-dynamodb">serverless/serverless-api-dynamodb</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-dynamodb">`index`</a>)

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

### <a name="blackfluxrobo-config-plugin-req-ref-javascript">javascript</a> ([`link`](https://en.wikipedia.org/wiki/JavaScript)) 

*Programming Language.*

JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.
It is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-projectname">projectName</a>  : `string`

*Name of the project.*

The project name is in most cases identical to the repository name.

### <a name="blackfluxrobo-config-plugin-var-ref-table">table</a>  : `string`

*Name of Table.*

### <a name="blackfluxrobo-config-plugin-var-ref-tablestreamenabled">tableStreamEnabled</a>  : `boolean`

*Enable Stream for Table.*

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-testenvyml">test/env.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Configuration definitions for lambda-tdd test setup.*

### <a name="blackfluxrobo-config-plugin-target-ref-srcdynamodbdyjs">src/dynamodb/dy.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a>

:small_blue_diamond: `other`

*Dynamodb function to access defined models.*

Dy tables initialization file.

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

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

