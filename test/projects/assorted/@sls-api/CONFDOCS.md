## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-api">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-api">`assorted/@sls-api`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-structserverless-api">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structserverless-api">`struct/#serverless-api`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-hangler-gen">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-hangler-gen">`struct/sls-test-hangler-gen`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-hangler-conf">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-hangler-conf">`struct/sls-test-hangler-conf`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-hangler">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-hangler">`struct/sls-test-hangler`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-env">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-env">`struct/sls-test-env`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-swagger">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-swagger">`struct/sls-swagger`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-hangler">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-hangler">`struct/sls-src-hangler`</a>
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
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchanglerjs">hangler.js</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">api.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenv-varsyml">env-vars.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhangler-genspecjs">hangler-gen.spec.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhanglerconfjs">hangler.conf.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhanglerspecjs">hangler.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-git">git</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awssessiontoken">awsSessionToken</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awssecretaccesskey">awsSecretAccessKey</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awsaccesskeyid">awsAccessKeyId</a></li>
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
<code>│&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchanglerjs">hangler.js</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srccoreapijs">api.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenv-varsyml">env-vars.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhangler-genspecjs">hangler-gen.spec.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhanglerconfjs">hangler.conf.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhanglerspecjs">hangler.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awssessiontoken">awsSessionToken</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awssecretaccesskey">awsSecretAccessKey</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awsaccesskeyid">awsAccessKeyId</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awsregion">awsRegion</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-hangler-gen">struct/sls-test-hangler-gen</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-hangler-gen">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testhangler-genspecjs">test/hangler-gen.spec.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Managed file to generate hangler.js file.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhangler-genspecjs">hangler-gen.spec.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-hangler-conf">struct/sls-test-hangler-conf</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-hangler-conf">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testhanglerconfjs">test/hangler.conf.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhanglerconfjs">hangler.conf.js</a></code><br/>
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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-hangler">struct/sls-test-hangler</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-hangler">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testhanglerspecjs">test/hangler.spec.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testhanglerspecjs">hangler.spec.js</a></code><br/>
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

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testenv-varsyml">test/env-vars.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testenv-varsyml">env-vars.yml</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a></li>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awssessiontoken">awsSessionToken</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awssecretaccesskey">awsSecretAccessKey</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-awsaccesskeyid">awsAccessKeyId</a></li>
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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-hangler">struct/sls-src-hangler</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-hangler">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srchanglerjs">src/hangler.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchanglerjs">hangler.js</a></code><br/>
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

### <a name="blackfluxrobo-config-plugin-req-ref-serverless">serverless</a> ([`link`](https://serverless.com/)) 

*Serverless Framework.*

The Serverless Framework is a free and open-source web framework that was 
developed for building serverless applications.

### <a name="blackfluxrobo-config-plugin-req-ref-swagger">swagger</a> ([`link`](https://swagger.io/resources/open-api/)) 

*Swagger RESTful API Specification.*

Swagger™ is a format used to describe and document RESTful APIs.

### <a name="blackfluxrobo-config-plugin-req-ref-git">git</a> ([`link`](https://git-scm.com/)) 

*Version control system.*

The most used version control system. Not to be confused with github (which uses git).

------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-awssessiontoken">awsSessionToken</a>  : `string`

**Default**: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

*Aws session token.*

Should only be filled in with dummy credentials for tests.

### <a name="blackfluxrobo-config-plugin-var-ref-awssecretaccesskey">awsSecretAccessKey</a>  : `string`

**Default**: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

*Aws secret access key.*

Should only be filled in with dummy credentials for tests.

### <a name="blackfluxrobo-config-plugin-var-ref-awsaccesskeyid">awsAccessKeyId</a>  : `string`

**Default**: `XXXXXXXXXXXXXXXXXXXX`

*Aws access key id.*

Should only be filled in with dummy credentials for tests.

### <a name="blackfluxrobo-config-plugin-var-ref-awsregion">awsRegion</a>  : `string`

*Aws data center region code gets deployed to.*

List of available regions can be found [here](https://docs.aws.amazon.com/general/latest/gr/rande.html).

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-testhangler-genspecjs">test/hangler-gen.spec.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>, <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Managed file that generates hangler.js file.*

### <a name="blackfluxrobo-config-plugin-target-ref-testhanglerconfjs">test/hangler.conf.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Configuration for lambda-tdd test setup.*

### <a name="blackfluxrobo-config-plugin-target-ref-testhanglerspecjs">test/hangler.spec.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-serverless-api">lambda-serverless-api</a>, <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Test Utility to run lambda-tdd tests and sync swagger docs.*

### <a name="blackfluxrobo-config-plugin-target-ref-testenv-varsyml">test/env-vars.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-lambda-tdd">lambda-tdd</a>

:small_blue_diamond: `other`

*Configuration definitions for lambda-tdd test setup.*

### <a name="blackfluxrobo-config-plugin-target-ref-swaggeryml">swagger.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-swagger">swagger</a>

:small_blue_diamond: `yml`

*Swagger RESTful API definition.*

Swagger documentation for project.

### <a name="blackfluxrobo-config-plugin-target-ref-srchanglerjs">src/hangler.js</a>  

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

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>  

:small_blue_diamond: `json`, `yml`

*Does a "smart" deep merge.*

This will not work as desired for all object deep merging, but should for many cases.

### <a name="blackfluxrobo-config-plugin-strat-ref-append-new">append-new</a>  

:small_blue_diamond: `list`

*Appends content to end of the file if lines do not exists in file.*

Useful for managing e.g. `.gitignore` when the original content should be kept.

