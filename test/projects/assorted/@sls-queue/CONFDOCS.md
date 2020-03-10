## Plugin [@blackflux/robo-config-plugin](https://www.npmjs.com/package/@blackflux/robo-config-plugin)

- <a name="blackfluxrobo-config-plugin-task-idx-ref-assortedsls-queue">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-assortedsls-queue">`assorted/@sls-queue`</a>
  - <a name="blackfluxrobo-config-plugin-task-idx-ref-structserverless-queue">:open_file_folder:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structserverless-queue">`struct/#serverless-queue`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-test-queue-queue">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-test-queue-queue">`struct/sls-test-queue-queue`</a>
    - <a name="blackfluxrobo-config-plugin-task-idx-ref-structsls-src-queue-queue">:clipboard:</a> <a href="#blackfluxrobo-config-plugin-task-ref-structsls-src-queue-queue">`struct/sls-src-queue-queue`</a>

### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-assortedsls-queue">assorted/@sls-queue</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-assortedsls-queue">`index`</a>)

Manage serverless queues using aws-sdk-wrap.

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
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcqueuequeuejs">queue.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testqueuequeuespecjs">queue.spec.js</a></code><br/>
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

#### :open_file_folder: <a name="blackfluxrobo-config-plugin-task-ref-structserverless-queue">struct/#serverless-queue</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structserverless-queue">`index`</a>)

Manage queues using QueueProcessor in aws-sdk-wrap.

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
<code>├─&nbsp;src</code><br/>
<code>│&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcqueuequeuejs">queue.js</a></code><br/>
<code>└─&nbsp;test</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testqueuequeuespecjs">queue.spec.js</a></code><br/>
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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-test-queue-queue">struct/sls-test-queue-queue</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-test-queue-queue">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-testqueuequeuespecjs">test/queue/queue.spec.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Creates generic test suite for queue processor.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-testqueuequeuespecjs">queue.spec.js</a></code><br/>
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

##### :clipboard: <a name="blackfluxrobo-config-plugin-task-ref-structsls-src-queue-queue">struct/sls-src-queue-queue</a> (<a href="#blackfluxrobo-config-plugin-task-idx-ref-structsls-src-queue-queue">`index`</a>)

_Updating <a href="#blackfluxrobo-config-plugin-target-ref-srcqueuequeuejs">src/queue/queue.js</a> using <a href="#blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>._

- Creates a queue processor template.

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
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;queue</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#blackfluxrobo-config-plugin-target-ref-srcqueuequeuejs">queue.js</a></code><br/>
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

------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-javascript">javascript</a> ([`link`](https://en.wikipedia.org/wiki/JavaScript)) 

*Programming Language.*

JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.
It is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

------

## Targets

### <a name="blackfluxrobo-config-plugin-target-ref-testqueuequeuespecjs">test/queue/queue.spec.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>, <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `other`

*Queue Processor Tests.*

Contains tests for queue processor.

### <a name="blackfluxrobo-config-plugin-target-ref-srcqueuequeuejs">src/queue/queue.js</a>  

:small_red_triangle: <a href="#blackfluxrobo-config-plugin-req-ref-javascript">javascript</a>, <a href="#blackfluxrobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `other`

*Creates a queue processor.*

Contains queue processor declaration.

------

## Strategies

### <a name="blackfluxrobo-config-plugin-strat-ref-create-only">create-only</a>  

:small_blue_diamond: `any`

*Does nothing when the file is already present, otherwise creates it.*

