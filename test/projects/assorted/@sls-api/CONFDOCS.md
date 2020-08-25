## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-api">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-api">`assorted/@sls-api`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-structserverless-api">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structserverless-api">`struct/#serverless-api`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-routes">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-routes">`struct/sls-test-routes`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-handler-conf">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-handler-conf">`struct/sls-test-handler-conf`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-handler">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-handler">`struct/sls-test-handler`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-env">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-env">`struct/sls-test-env`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-swagger">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-swagger">`struct/sls-swagger`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-routes">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-routes">`struct/sls-src-routes`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-handler">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-handler">`struct/sls-src-handler`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-core-api">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-core-api">`struct/sls-src-core-api`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-gitignoreserverless-api">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-gitignoreserverless-api">`gitignore/#serverless-api`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-gitignorelambda-tdd">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-gitignorelambda-tdd">`gitignore/lambda-tdd`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-api">assorted/@sls-api</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-api">`index`</a>)

Manage serverless project using lambda-serverless-api and lambda-tdd.

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
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-gitignore">.gitignore</a></code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a></code><br/>
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerjs">handler.js</a></code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcroutesjs">routes.js</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">api.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">env.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhandlerconfjs">handler.conf.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhandlerspecjs">handler.spec.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testroutesspecjs">routes.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-git">git</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awsregion">awsRegion</a></li>
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
      <th>Variables</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a></code><br/>
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerjs">handler.js</a></code><br/>
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcroutesjs">routes.js</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">api.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">env.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhandlerconfjs">handler.conf.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhandlerspecjs">handler.spec.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testroutesspecjs">routes.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awsregion">awsRegion</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-routes">struct/sls-test-routes</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-routes">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testroutesspecjs">test/routes.spec.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Utility test to sync routes file.

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
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testroutesspecjs">routes.spec.js</a></code><br/>
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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-handler-conf">struct/sls-test-handler-conf</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-handler-conf">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testhandlerconfjs">test/handler.conf.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Create confiuration template for lambda-tdd test setup.

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
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhandlerconfjs">handler.conf.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-handler">struct/sls-test-handler</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-handler">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testhandlerspecjs">test/handler.spec.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Managed file to run lambda-tdd tests and sync swagger docs.

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
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhandlerspecjs">handler.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-env">struct/sls-test-env</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-env">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testenvyml">test/env.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Create configuration template for lambda-tdd test setup.

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
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awsregion">awsRegion</a></li>
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

- Manage handler definition file.

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

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-gitignoreserverless-api">gitignore/#serverless-api</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-gitignoreserverless-api">`index`</a>)

Manage gitignore content for serverless project using lambda-serverless-api and lambda-tdd.

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
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-gitignore">.gitignore</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-git">git</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-gitignorelambda-tdd">gitignore/lambda-tdd</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-gitignorelambda-tdd">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-gitignore">.gitignore</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-append-new">append-new</a>._

- Inject recommended entries for lambda-tdd setup.

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
<code>└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-gitignore">.gitignore</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-git">git</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
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

### <a name="blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a> ([`link`](https://github.com/blackflux/lambda-tdd)) 

*Testing Framework for AWS Lambda.*

Testing Framework for AWS Lambda that uses recordings to work offline without requiring Cloud environment.

### <a name="blackfluxrobo-config-plugin-req-ref-swagger">swagger</a> ([`link`](https://swagger.io/resources/open-api/)) 

*Swagger RESTful API Specification.*

Swagger™ is a format used to describe and document RESTful APIs.

### <a name="blackfluxrobo-config-plugin-req-ref-git">git</a> ([`link`](https://git-scm.com/)) 

*Version control system.*

The most used version control system. Not to be confused with github (which uses git).

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-awsregion">awsRegion</a>  : `string`

*Aws data center region code gets deployed to.*

List of available regions can be found [here](https://docs.aws.amazon.com/general/latest/gr/rande.html).

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-testroutesspecjs">test/routes.spec.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>

:small_blue_diamond: `other`

*Utility test to sync routes file.*

### <a name="blackfluxrobo-config-plugin-target-ref-testhandlerconfjs">test/handler.conf.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Configuration for lambda-tdd test setup.*

### <a name="blackfluxrobo-config-plugin-target-ref-testhandlerspecjs">test/handler.spec.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Test Utility to run lambda-tdd tests and sync swagger docs.*

### <a name="blackfluxrobo-config-plugin-target-ref-testenvyml">test/env.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Configuration definitions for lambda-tdd test setup.*

### <a name="blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a>

:small_blue_diamond: `yml`

*Swagger RESTful API definition.*

Swagger documentation for project.

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

### <a name="blackfluxrobo-config-plugin-target-ref-srccoreapijs">src/core/api.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-aws">aws</a>

:small_blue_diamond: `other`

*Template for Api initialization.*

API initialization file.

### <a name="blackfluxrobo-config-plugin-target-ref-gitignore">.gitignore</a> ([`link`](https://git-scm.com/docs/gitignore)) 

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-git">git</a>

:small_blue_diamond: `list`

*Exclude files from being tracked.*

Specifies files intentionally untracked by git.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

### <a name="blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>  

:small_blue_diamond: `any`

*Does nothing when the file is already present, otherwise creates it.*

### <a name="blackfluxrobo-config-plugin-strat-ref-append-new">append-new</a>  

:small_blue_diamond: `list`

*Appends content to end of the file if lines do not exists in file.*

Useful for managing e.g. `.gitignore` when the original content should be kept.

