---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "two-raw-reserve | Solhint"
---

# two-raw-reserve
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Security%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Two or more following raw.reserve(...) in one function is excessive.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "two-raw-reserve": "warn"
  }
}
```


## Examples
### 👍 Examples of **correct** code for this rule

#### Two or more raw.reserve(...) in one function when they are not following by each other

```solidity

contract TwoRawReserveGood {
    function good() public {
        bool something;
        if (something){
            tvm.rawReserve(1 ever, 0);
        }else tvm.rawReserve(2 ever, 0);
    }
}        
    
```

### 👎 Examples of **incorrect** code for this rule

#### raw.reserve(...) in one function following by another raw.reserve(...)

```solidity

contract TwoRawReserveBad {
    function bad() public {
        tvm.rawReserve(1 ever, 0);
        tvm.rawReserve(2 ever, 0);
    }    
    
```

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/security/two-raw-reserve.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/security/two-raw-reserve.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/security/two-raw-reserve.js)
