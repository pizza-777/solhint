---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "bounce-true-in-responsible-onbounce-in-contract | Solhint"
---

# bounce-true-in-responsible-onbounce-in-contract
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Security%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Incompatible with bounce true in responsible function and onBounce function in contract.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "bounce-true-in-responsible-onbounce-in-contract": "warn"
  }
}
```


## Examples
### 👎 Examples of **incorrect** code for this rule

#### Bounce `true` in responsible function and onBounce function in contract

```solidity

contract Test {
    function r() public pure responsible returns (address) {
        return {value: 0, bounce: true, flag: 64} this;
    }

    onBounce(TvmSlice body) external {}
}        
    
```

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/security/bounce-true-in-responsible-onbounce-in-contract.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/security/bounce-true-in-responsible-onbounce-in-contract.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/security/bounce-true-in-responsible-onbounce-in-contract.js)
