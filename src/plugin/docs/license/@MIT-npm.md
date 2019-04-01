#  `license/@MIT-npm.json`

Recommended base configuration when using MIT License with npm.

<!---0--><details>
<!---0--><summary>Targets</summary>

```
project
├─ LICENSE
└─ package.json
```

<!---0--></details>

<!---0--><details>
<!---0--><summary>Requires</summary>

- [npm](#blackfluxrobo-config-plugin-req-ref-npm)

<!---0--></details>

<!---0--><details>
<!---0--><summary>Variables</summary>

- [ownerName](#blackfluxrobo-config-plugin-var-ref-ownername)
- [repoKey](#blackfluxrobo-config-plugin-var-ref-repokey)

<!---0--></details>

<!---0--><details>
<!---0--><summary>Details</summary>

## > license/MIT-LICENSE

_Updating `LICENSE` using `overwrite`._

- Generate [MIT license](https://en.wikipedia.org/wiki/MIT_License) file.

<!---1--><details>
<!---1--><summary>Targets</summary>

```
project
└─ LICENSE
```

<!---1--></details>

<!---1--><details>
<!---1--><summary>Variables</summary>

- [ownerName](#blackfluxrobo-config-plugin-var-ref-ownername)

<!---1--></details>

## > license/MIT-npm

_Updating `package.json` using `merge-shallow`._

- Link MIT license file into [npm](https://www.npmjs.com/) configuration.

<!---1--><details>
<!---1--><summary>Targets</summary>

```
project
└─ package.json
```

<!---1--></details>

<!---1--><details>
<!---1--><summary>Requires</summary>

- [npm](#blackfluxrobo-config-plugin-req-ref-npm)

<!---1--></details>

<!---1--><details>
<!---1--><summary>Variables</summary>

- [ownerName](#blackfluxrobo-config-plugin-var-ref-ownername)
- [repoKey](#blackfluxrobo-config-plugin-var-ref-repokey)

<!---1--></details>

</details>

------
------

## Requires

### <a name="blackfluxrobo-config-plugin-req-ref-npm">npm</a>

[Website](https://docs.npmjs.com/about-npm/)

Javascript package repository.

<!---0--><details>
<!---0--><summary>Details</summary>

Requires the project to be conform with the npm standard, i.e. contain a package.json file.
Does not require the project to be published to npm.

<!---0--></details>

------
------

## Variables

### <a name="blackfluxrobo-config-plugin-var-ref-ownername">ownerName</a>

Type: `string`

Name of the owner of this project.

<!---0--><details>
<!---0--><summary>Details</summary>

The owner name of the project is the name of the person or organization publishing the project under their license.

<!---0--></details>

### <a name="blackfluxrobo-config-plugin-var-ref-repokey">repoKey</a>

Type: `string`

Repository key.

<!---0--><details>
<!---0--><summary>Details</summary>

The repository key contains the owner or organization of the project and the repository name itself, separated by a slash.

<!---0--></details>

