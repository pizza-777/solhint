---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "tvm-accept-before-require | Solhint"
---

# tvm-accept-before-require
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
    "tvm-accept-before-require": "warn"
  }
}
```


## Examples
### 👎 Examples of **incorrect** code for this rule

#### tvm.accept() before require()

```solidity

    function r() public pure {
        tvm.accept();
        require(1 == 1, 101, 'test');
    }
```

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/security/tvm-accept-before-require.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/security/tvm-accept-before-require.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/security/tvm-accept-before-require.js)
