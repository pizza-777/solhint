---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "responsible-without-flag | Solhint"
---

# responsible-without-flag
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Security%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Responsible functions must have flag in return statement for avoid vulnerabilities.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "responsible-without-flag": "warn"
  }
}
```


## Examples
### 👍 Examples of **correct** code for this rule

#### Responsible function have flag in return statement

```solidity

  function r() public pure blabla responsible returns (address) {
      return {value: 0, bounce: false, flag: 64} msg.sender;
  }
```

### 👎 Examples of **incorrect** code for this rule

#### No flag in responsible

```solidity

function r() public pure blabla responsible returns (address) {
    return {value: 0, bounce: false} msg.sender;
}

```

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/security/responsible-without-flag.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/security/responsible-without-flag.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/security/responsible-without-flag.js)
