- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-error-defsjson">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-error-defsjson">`assorted/@sls-error-defs.json`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-structserverless-error-defs">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structserverless-error-defs">`struct/#serverless-error-defs`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-errors">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-errors">`struct/sls-test-errors`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-errors">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-errors">`struct/sls-src-errors`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-core-errors">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-core-errors">`struct/sls-src-core-errors`</a>

# :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-error-defsjson">assorted/@sls-error-defs.json</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-error-defsjson">`index`</a>)

Manages handling of error related files.

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
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcerrorsjs">errors.js</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreerrorsjson">errors.json</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testerrorsspecjs">errors.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-errorprefix">errorPrefix</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-structserverless-error-defs">struct/#serverless-error-defs</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structserverless-error-defs">`index`</a>)

Manages error related files.

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
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcerrorsjs">errors.js</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreerrorsjson">errors.json</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testerrorsspecjs">errors.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-errorprefix">errorPrefix</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-errors">struct/sls-test-errors</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-errors">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testerrorsspecjs">test/errors.spec.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Utility test to sync errors file.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testerrorsspecjs">errors.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-errorprefix">errorPrefix</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-errors">struct/sls-src-errors</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-errors">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srcerrorsjs">src/errors.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Initialize managed error definition file.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcerrorsjs">errors.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-core-errors">struct/sls-src-core-errors</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-core-errors">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srccoreerrorsjson">src/core/errors.json</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Template for error definitions.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreerrorsjson">errors.json</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a> ([`link`](https://github.com/blackflux/lambda-serverless-api)) 

*AWS Lambda Serverless API Gateway Framework.*

Abstracts the creation of a basic API and the most commonly desired features.

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-errorprefix">errorPrefix</a>  : `string`

*Error Identifier Prefix.*

Prefix that each error message in this project should start with.

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-testerrorsspecjs">test/errors.spec.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>

:small_blue_diamond: `other`

*Utility test to sync errors file.*

### <a name="blackfluxrobo-config-plugin-target-ref-srcerrorsjs">src/errors.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a>

:small_blue_diamond: `other`

*Error definitions.*

Auto generated API Gateway Error response definitions.

### <a name="blackfluxrobo-config-plugin-target-ref-srccoreerrorsjson">src/core/errors.json</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a>

:small_blue_diamond: `other`

*Template for Error definitions.*

API Gateway Error response definitions.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

### <a name="blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>  

:small_blue_diamond: `any`

*Does nothing when the file is already present, otherwise creates it.*

