#  `jetbrains/@default.json`

Recommended base configuration when using Jetbrains.

<!---0--><details>
<!---0--><summary>Targets</summary>

```
project
└─ .idea
   └─ ${projectName}.iml
```

<!---0--></details>

<!---0--><details>
<!---0--><summary>Requires</summary>

- [jetbrains](#blackfluxrobo-config-plugin-req-ref-jetbrains)
- [nyc](#blackfluxrobo-config-plugin-req-ref-nyc)

<!---0--></details>

<!---0--><details>
<!---0--><summary>Variables</summary>

- [projectName](#blackfluxrobo-config-plugin-var-ref-projectname)

<!---0--></details>

<!---0--><details>
<!---0--><summary>Details</summary>

## > jetbrains/exclude-coverage-folder

_Updating `.idea/${projectName}.iml` using `xml-merge`._

- Mark `coverage` Folder as excluded in Jetbrains.

<!---1--><details>
<!---1--><summary>Targets</summary>

```
project
└─ .idea
   └─ ${projectName}.iml
```

<!---1--></details>

<!---1--><details>
<!---1--><summary>Requires</summary>

- [jetbrains](#blackfluxrobo-config-plugin-req-ref-jetbrains)
- [nyc](#blackfluxrobo-config-plugin-req-ref-nyc)

<!---1--></details>

<!---1--><details>
<!---1--><summary>Variables</summary>

- [projectName](#blackfluxrobo-config-plugin-var-ref-projectname)

<!---1--></details>

</details>

------
------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-jetbrains">jetbrains</a>

[Website](https://www.jetbrains.com)

Collection of various IDEs.

<!---0--><details>
<!---0--><summary>Details</summary>

Collection of various IDEs. There exists one for every major programming language and 
they are all very similar (i.e. shortcuts, layout), which makes them great when switching languages.

<!---0--></details>

### <a name="blackfluxrobo-config-plugin-req-ref-nyc">nyc</a>

[Website](https://github.com/istanbuljs/nyc#readme)

Coverage testing for javascript projects.

<!---0--><details>
<!---0--><summary>Details</summary>

A major coverage testing framework for javascript.
Comes with all the bells and whistles.

<!---0--></details>

------
------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-projectname">projectName</a>

Type: `string`

Name of the project.

<!---0--><details>
<!---0--><summary>Details</summary>

The project name is in most cases identical to the repository name.

<!---0--></details>

