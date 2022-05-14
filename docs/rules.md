---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "Rule Index of Solhint"
---

## Best Practise Rules

| Rule Id                                                            | Error                                                                                                                 | Recommended |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| [code-complexity](./rules/best-practises/code-complexity.md)       | Function has cyclomatic complexity "current" but allowed no more than maxcompl.                                       |             |
| [function-max-lines](./rules/best-practises/function-max-lines.md) | Function body contains "count" lines but allowed no more than maxlines.                                               |             |
| [max-line-length](./rules/best-practises/max-line-length.md)       | Line length must be no more than maxlen.                                                                              |             |
| [max-states-count](./rules/best-practises/max-states-count.md)     | Contract has "some count" states declarations but allowed no more than maxstates.                                     | ✔️          |
| [no-empty-blocks](./rules/best-practises/no-empty-blocks.md)       | Code contains empty block.                                                                                            | ✔️          |
| [no-unused-vars](./rules/best-practises/no-unused-vars.md)         | Variable "name" is unused.                                                                                            | ✔️          |
| [reason-string](./rules/best-practises/reason-string.md)           | Require or revert statement must have a reason string and check that each reason string is at most N characters long. | ✔️          |
| [constructor-syntax](./rules/best-practises/constructor-syntax.md) | Constructors should use the new constructor keyword.                                                                  |             |
        

## Miscellaneous

| Rule Id                                                                     | Error                                                                                                                                  | Recommended |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [comprehensive-interface](./rules/miscellaneous/comprehensive-interface.md) | Check that all public or external functions are override. This is iseful to make sure that the whole API is extracted in an interface. |             |
        

## Style Guide Rules

| Rule Id                                                                              | Error                                                                                  | Recommended |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ----------- |
| [quotes](./rules/miscellaneous/quotes.md)                                            | Use double quotes for string literals. Values must be 'single' or 'double'.            | ✔️          |
| [const-name-snakecase](./rules/naming/const-name-snakecase.md)                       | Constant name must be in capitalized SNAKE_CASE.                                       | ✔️          |
| [contract-name-camelcase](./rules/naming/contract-name-camelcase.md)                 | Contract name must be in CamelCase.                                                    | ✔️          |
| [event-name-camelcase](./rules/naming/event-name-camelcase.md)                       | Event name must be in CamelCase.                                                       | ✔️          |
| [func-name-mixedcase](./rules/naming/func-name-mixedcase.md)                         | Function name must be in camelCase.                                                    | ✔️          |
| [func-param-name-mixedcase](./rules/naming/func-param-name-mixedcase.md)             | Function param name must be in mixedCase                                               |             |
| [modifier-name-mixedcase](./rules/naming/modifier-name-mixedcase.md)                 | Modifier name must be in mixedCase.                                                    |             |
| [private-vars-leading-underscore](./rules/naming/private-vars-leading-underscore.md) | Private and internal names must start with a single underscore.                        |             |
| [use-forbidden-name](./rules/naming/use-forbidden-name.md)                           | Avoid to use letters 'I', 'l', 'O' as identifiers.                                     | ✔️          |
| [var-name-mixedcase](./rules/naming/var-name-mixedcase.md)                           | Variable name must be in mixedCase.                                                    | ✔️          |
| [func-order](./rules/order/func-order.md)                                            | Function order is incorrect.                                                           |             |
| [imports-on-top](./rules/order/imports-on-top.md)                                    | Import statements must be on top.                                                      | ✔️          |
| [ordering](./rules/order/ordering.md)                                                | Check order of elements in file and inside each contract, according to the style guide |             |
| [visibility-modifier-order](./rules/order/visibility-modifier-order.md)              | Visibility modifier must be first in list of modifiers.                                | ✔️          |
        

## Security Rules

| Rule Id                                                                                                                | Error                                                                                    | Recommended |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| [bounce-true-in-responsible-onbounce-in-contract](./rules/security/bounce-true-in-responsible-onbounce-in-contract.md) | Incompatible with bounce true in responsible function and onBounce function in contract. | ✔️          |
| [compiler-version](./rules/security/compiler-version.md)                                                               | Compiler version must satisfy a semver requirement.                                      | ✔️          |
| [default-flag-bounce-is-omitted](./rules/security/default-flag-bounce-is-omitted.md)                                   | Default flag, bounce is omitted.                                                         | ✔️          |
| [no-complex-fallback](./rules/security/no-complex-fallback.md)                                                         | Fallback function must be simple.                                                        | ✔️          |
| [not-rely-on-block-hash](./rules/security/not-rely-on-block-hash.md)                                                   | Do not rely on "block.blockhash". Miners can influence its value.                        | ✔️          |
| [not-rely-on-time](./rules/security/not-rely-on-time.md)                                                               | Avoid to make time-based decisions in your business logic.                               | ✔️          |
| [responsible-without-flag](./rules/security/responsible-without-flag.md)                                               | Responsible functions must have flag in return statement for avoid vulnerabilities.      | ✔️          |
| [state-visibility](./rules/security/state-visibility.md)                                                               | Explicitly mark visibility of state.                                                     | ✔️          |
| [tvm-accept-before-require](./rules/security/tvm-accept-before-require.md)                                             | Responsible functions must have flag in return statement for avoid vulnerabilities.      | ✔️          |
| [two-raw-reserve](./rules/security/two-raw-reserve.md)                                                                 | Two or more following raw.reserve(...) in one function is excessive.                     | ✔️          |
        

## References

- [ConsenSys Guide for Smart Contracts](https://consensys.github.io/smart-contract-best-practices/recommendations/)
- [Solidity Style Guide](http://solidity.readthedocs.io/en/develop/style-guide.html)
