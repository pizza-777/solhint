---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "default-flag-bounce-is-omitted | Solhint"
---

# default-flag-bounce-is-omitted
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Security%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Default flag, bounce is omitted.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "default-flag-bounce-is-omitted": "warn"
  }
}
```


## Examples
### 👍 Examples of **correct** code for this rule

#### Default flag, bounce is set.

```solidity

contract ShowDefaultParams {
    function bad() public {
        address a;
        a.transfer(1, true, 3);        
    }
}        
    
```

### 👎 Examples of **incorrect** code for this rule

#### Default flag, bounce is omitted.

```solidity

contract ShowDefaultParams {
    function bad() public {
        address a;
        a.transfer(1);        
    }
}        
    
```

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/security/default-flag-bounce-is-omitted.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/security/default-flag-bounce-is-omitted.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/security/default-flag-bounce-is-omitted.js)
