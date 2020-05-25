## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-s3-instance">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-s3-instance">`assorted/@sls-s3-instance`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlesss3">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlesss3">`serverless/#s3`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-s3-bucket">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-s3-bucket">`serverless/serverless-data-s3-bucket`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-s3">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-s3">`serverless/serverless-data-s3`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-s3-bucket">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-s3-bucket">`serverless/serverless-api-s3-bucket`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-s3">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-s3">`serverless/serverless-api-s3`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-s3-instance">assorted/@sls-s3-instance</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-s3-instance">`index`</a>)

Manages S3 instance cloud formation files.

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
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">data.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;api</code><br/>
<code>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;s3</code><br/>
<code>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapis3bucketyml">${bucket}.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;data</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;s3</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatas3bucketyml">${bucket}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-bucket">bucket</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-serverlesss3">serverless/#s3</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlesss3">`index`</a>)

Manage serverless configuration for an s3 bucket.

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
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">data.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;api</code><br/>
<code>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;s3</code><br/>
<code>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapis3bucketyml">${bucket}.yml</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;data</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;s3</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatas3bucketyml">${bucket}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-bucket">bucket</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-s3-bucket">serverless/serverless-data-s3-bucket</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-s3-bucket">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatas3bucketyml">serverless/data/s3/${bucket}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Initialize data stack resource definitions for an s3 bucket.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;s3</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatas3bucketyml">${bucket}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-bucket">bucket</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-s3">serverless/serverless-data-s3</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-s3">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">serverless/data.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference data stack resource definitions for an s3 bucket.

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-bucket">bucket</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-s3-bucket">serverless/serverless-api-s3-bucket</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-s3-bucket">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapis3bucketyml">serverless/api/s3/${bucket}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Initialize api stack resource definitions for an s3 bucket.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;s3</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapis3bucketyml">${bucket}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-bucket">bucket</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-s3">serverless/serverless-api-s3</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-s3">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference api stack resource definitions for an s3 bucket.

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-bucket">bucket</a></li>
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

### <a name="blackfluxrobo-config-plugin-var-ref-bucket">bucket</a>  : `string`

*Name of Bucket.*

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessdatas3bucketyml">serverless/data/s3/${bucket}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Data stack resource definition for an s3 bucket.*

Contains data stack definition for s3.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessdatayml">serverless/data.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>, <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>

:small_blue_diamond: `yml`

*Data stack resource definition.*

Contains user defined data stack resource definitions.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapis3bucketyml">serverless/api/s3/${bucket}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Api stack resource definition for an s3 bucket.*

Contains api stack definition for s3.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>, <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>

:small_blue_diamond: `yml`

*Api stack resource definition.*

Contains user defined api stack resource definitions.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

### <a name="blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>  

:small_blue_diamond: `json`, `yml`

*Does a "smart" deep merge.*

This will not work as desired for all object deep merging, but should for many cases.

