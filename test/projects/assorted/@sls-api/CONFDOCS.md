## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-api">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-api">`assorted/@sls-api`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-structserverless-api">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structserverless-api">`struct/#serverless-api`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-swagger">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-swagger">`struct/sls-swagger`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-routes">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-routes">`struct/sls-src-routes`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-handler">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-handler">`struct/sls-src-handler`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-errors">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-errors">`struct/sls-src-errors`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-core-errors">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-core-errors">`struct/sls-src-core-errors`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-core-api">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-core-api">`struct/sls-src-core-api`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-api">assorted/@sls-api</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-api">`index`</a>)

Manage serverless project using lambda-serverless-api and lambda-tdd.

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
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a></code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcerrorsjs">errors.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerjs">handler.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcroutesjs">routes.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">api.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreerrorsjson">errors.json</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-structserverless-api">struct/#serverless-api</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structserverless-api">`index`</a>)

Manage project structure for serverless project using lambda-serverless-api and lambda-tdd.

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
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a></code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcerrorsjs">errors.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerjs">handler.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcroutesjs">routes.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">api.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreerrorsjson">errors.json</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-swagger">struct/sls-swagger</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-swagger">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Create empty swagger definition file.

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
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-routes">struct/sls-src-routes</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-routes">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srcroutesjs">src/routes.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Initialize managed routes definition file.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcroutesjs">routes.js</a></code><br/>
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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-handler">struct/sls-src-handler</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-handler">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srchandlerjs">src/handler.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Create empty error definition file.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerjs">handler.js</a></code><br/>
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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-errors">struct/sls-src-errors</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-errors">`index`</a>)

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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-core-errors">struct/sls-src-core-errors</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-core-errors">`index`</a>)

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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-core-api">struct/sls-src-core-api</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-core-api">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">src/core/api.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Template for api instantiation.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">api.js</a></code><br/>
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

### <a name="blackfluxrobo-config-plugin-req-ref-swagger">swagger</a> ([`link`](https://swagger.io/resources/open-api/)) 

*Swagger RESTful API Specification.*

Swagger™ is a format used to describe and document RESTful APIs.

### <a name="blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a> ([`link`](https://github.com/blackflux/lambda-serverless-api)) 

*AWS Lambda Serverless API Gateway Framework.*

Abstracts the creation of a basic API and the most commonly desired features.

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a>

:small_blue_diamond: `yml`

*Swagger RESTful API definition.*

Contains swagger documentation for project.

### <a name="blackfluxrobo-config-plugin-target-ref-srcroutesjs">src/routes.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a>

:small_blue_diamond: `other`

*Route definitions.*

Auto generated Route definitions for Lambda handlers

### <a name="blackfluxrobo-config-plugin-target-ref-srchandlerjs">src/handler.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a>

:small_blue_diamond: `other`

*Handler definitions.*

Managed handler definition file.

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

### <a name="blackfluxrobo-config-plugin-target-ref-srccoreapijs">src/core/api.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a>

:small_blue_diamond: `other`

*Template for Api initialization.*

API initialization file.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>  

:small_blue_diamond: `any`

*Does nothing when the file is already present, otherwise creates it.*

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

