## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-queue-instance">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-queue-instance">`assorted/@sls-queue-instance`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlesssqs">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlesssqs">`serverless/#sqs`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-src-handler-queue-processor-queue">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-src-handler-queue-processor-queue">`serverless/serverless-src-handler-queue-processor-queue`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-sqs-queue">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-sqs-queue">`serverless/serverless-data-sqs-queue`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-sqs">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-sqs">`serverless/serverless-data-sqs`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-sqs-queue">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-sqs-queue">`serverless/serverless-api-sqs-queue`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-sqs">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-sqs">`serverless/serverless-api-sqs`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-queue-instance">assorted/@sls-queue-instance</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-queue-instance">`index`</a>)

Manages SQS instance cloud formation files.

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
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;sqs</code><br/>
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapisqsqueueyml">${queue}.yml</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;data</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;sqs</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatasqsqueueyml">${queue}.yml</a></code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;handler</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;processor</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerqueueprocessorqueuejs">${queue}.js</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queue">queue</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queuetimeout">queueTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessorbatchsize">queueProcessorBatchSize</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessorreservedconcurrency">queueProcessorReservedConcurrency</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessormemorysize">queueProcessorMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-serverlesssqs">serverless/#sqs</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlesssqs">`index`</a>)

Manage serverless configuration for an sqs queue.

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
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;sqs</code><br/>
<code>│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapisqsqueueyml">${queue}.yml</a></code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;data</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;sqs</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatasqsqueueyml">${queue}.yml</a></code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;handler</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;processor</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerqueueprocessorqueuejs">${queue}.js</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queue">queue</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queuetimeout">queueTimeout</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessorbatchsize">queueProcessorBatchSize</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessorreservedconcurrency">queueProcessorReservedConcurrency</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessormemorysize">queueProcessorMemorySize</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-src-handler-queue-processor-queue">serverless/serverless-src-handler-queue-processor-queue</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-src-handler-queue-processor-queue">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srchandlerqueueprocessorqueuejs">src/handler/queue/processor/${queue}.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Create queue processor handler.

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
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;handler</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;processor</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srchandlerqueueprocessorqueuejs">${queue}.js</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queue">queue</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-sqs-queue">serverless/serverless-data-sqs-queue</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-sqs-queue">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatasqsqueueyml">serverless/data/sqs/${queue}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Initialize data stack resource definitions for an sqs queue.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;sqs</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatasqsqueueyml">${queue}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queue">queue</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queuetimeout">queueTimeout</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-data-sqs">serverless/serverless-data-sqs</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-data-sqs">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessdatayml">serverless/data.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference data stack resource definitions for an sqs queue.

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queue">queue</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-sqs-queue">serverless/serverless-api-sqs-queue</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-sqs-queue">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapisqsqueueyml">serverless/api/sqs/${queue}.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Initialize api stack resource definitions for an sqs queue.

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
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;sqs</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-serverlessapisqsqueueyml">${queue}.yml</a></code><br/>
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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queue">queue</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessorbatchsize">queueProcessorBatchSize</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessorreservedconcurrency">queueProcessorReservedConcurrency</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queueprocessormemorysize">queueProcessorMemorySize</a></li>
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queuetimeout">queueTimeout</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-serverlessserverless-api-sqs">serverless/serverless-api-sqs</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-serverlessserverless-api-sqs">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-serverlessapiyml">serverless/api.yml</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-merge-deep">merge-deep</a>._

- Reference api stack resource definitions for an sqs queue.

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
          <li><a href="#blackfluxrobo-config-plugin-var-ref-queue">queue</a></li>
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

### <a name="blackfluxrobo-config-plugin-var-ref-queue">queue</a>  : `string`

*Name of Queue.*

### <a name="blackfluxrobo-config-plugin-var-ref-queuetimeout">queueTimeout</a>  : `number`

*Timeout of Queue.*

Maximum duration that a queue step can take to process

### <a name="blackfluxrobo-config-plugin-var-ref-queueprocessorbatchsize">queueProcessorBatchSize</a>  : `number`

*Batch size of Queue Processor.*

Maximum number of payloads processed in parallel in code logic by aws lambda processor

### <a name="blackfluxrobo-config-plugin-var-ref-queueprocessorreservedconcurrency">queueProcessorReservedConcurrency</a>  : `number`

*Reserved Concurrency for Queue Processor.*

Restricts how many concurrent aws lambda processors for this queue can be spawned by aws

### <a name="blackfluxrobo-config-plugin-var-ref-queueprocessormemorysize">queueProcessorMemorySize</a>  : `number`

*Memory Size of Queue Processor.*

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-srchandlerqueueprocessorqueuejs">src/handler/queue/processor/${queue}.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>, <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `other`

*Queue processor handler.*

Contains queue processor handler declaration.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessdatasqsqueueyml">serverless/data/sqs/${queue}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Data stack resource definition for an sqs queue.*

Contains data stack definition for sqs.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessdatayml">serverless/data.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>, <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>

:small_blue_diamond: `yml`

*Data stack resource definition.*

Contains user defined data stack resource definitions.

### <a name="blackfluxrobo-config-plugin-target-ref-serverlessapisqsqueueyml">serverless/api/sqs/${queue}.yml</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `yml`

*Api stack resource definition for an sqs queue.*

Contains api stack definition for sqs.

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

