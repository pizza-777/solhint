<p align="center">
  <img src="solhint.png">
</p>

[![NPM version](https://badge.fury.io/js/solhint.svg)](https://www.npmjs.com/package/tvm-solhint)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/protofire/solhint/ton-solidity/LICENSE)

This is an open source project for linting [Everscale Solidity](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md) code. This project
provides both **Security** and **Style Guide** validations.

## Installation

You can install Solhint using **npm**:

```sh
npm install -g tvm-solhint

# verify that it was installed correctly
solhint --version
```

## Usage

First initialize a configuration file, if you don't have one:

```sh
solhint --init
```

This will create a `.tvm-solhint.json` file with the all rules enabled. Then run Solhint with one or more [Globs](https://en.wikipedia.org/wiki/Glob_(programming)) as arguments. For example, to lint all files inside `contracts` directory, you can do:

```sh
solhint 'contracts/**/*.sol'
```

To lint a single file:

```sh
solhint contracts/MyToken.sol
```

Run `solhint` without arguments to get more information:

```text
Usage: solhint [options] <file> [...other_files]

Linter for Solidity programming language

Options:

  -V, --version                           output the version number
  -f, --formatter [name]                  report formatter name (stylish, table, tap, unix)
  -w, --max-warnings [maxWarningsNumber]  number of allowed warnings
  -c, --config [file_name]                file to use as your .solhint.json
  -q, --quiet                             report errors only - default: false
  --ignore-path [file_name]               file to use as your .solhintignore
  --fix                                   automatically fix problems
  --init                                  create configuration file for solhint
  -h, --help                              output usage information

Commands:

  stdin [options]                         linting of source code data provided to STDIN
```

## Configuration

You can use a `.solhint.json` file to configure Solhint for the whole project.

To generate a new  sample `.solhint.json` file in current folder you can do:

```sh
solhint --init 
```

This file has the following
format:


```json
  {
    "extends": "solhint:recommended",
    "plugins": [],
    "rules": {
      "avoid-suicide": "error",
      "avoid-sha3": "warn"
    }
  }
```
A full list of all supported rules can be found [here](docs/rules.md).

To ignore files that do not require validation you can use a `.solhintignore` file. It supports rules in
the `.gitignore` format.

```
node_modules/
additional-tests.sol
```

### Extendable rulesets

The default rulesets provided by solhint are the following:

+ solhint:default
+ solhint:recommended

Use one of these as the value for the "extends" property in your configuration file.

### Configure the linter with comments

You can use comments in the source code to configure solhint in a given line or file.

For example, to disable all validations in the line following a comment:

```solidity
  // solhint-disable-next-line
  uint[] a;
```

You can disable specific rules on a given line. For example:

```solidity
  // solhint-disable-next-line not-rely-on-time, not-rely-on-block-hash
  uint pseudoRand = uint(keccak256(abi.encodePacked(now, blockhash(block.number))));
```

Disable validation on current line:

```solidity
  uint pseudoRand = uint(keccak256(abi.encodePacked(now, blockhash(block.number)))); // solhint-disable-line
```

Disable specific rules on current line:

```solidity
   uint pseudoRand = uint(keccak256(abi.encodePacked(now, blockhash(block.number)))); // solhint-disable-line not-rely-on-time, not-rely-on-block-hash
```

You can disable a rule for a group of lines:

```solidity
  /* solhint-disable avoid-tx-origin */
  function transferTo(address to, uint amount) public {
    require(tx.origin == owner);
    to.call.value(amount)();
  }
  /* solhint-enable avoid-tx-origin */
```

Or disable all validations for a group of lines:

```solidity
  /* solhint-disable */
  function transferTo(address to, uint amount) public {
    require(tx.origin == owner);
    to.call.value(amount)();
  }
  /* solhint-enable */
```

## Rules
### Security Rules
[Full list with all supported Security Rules](docs/rules.md#security-rules)
### Style Guide Rules
[Full list with all supported Style Guide Rules](docs/rules.md#style-guide-rules)
### Best Practices Rules
[Full list with all supported Best Practices Rules](docs/rules.md#best-practise-rules)

## Documentation

Related documentation you may find [here](https://protofire.github.io/solhint/).

## Table of Contents

* [Roadmap](ROADMAP.md): The core project's roadmap - what the core team is looking to work on in the near future.
* [Contributing](docs/contributing.md): The core Solhint team :heart: contributions. This describes how you can contribute to the Solhint Project.
* [Shareable configs](docs/shareable-configs.md): How to create and share your own configurations.
* [Writing plugins](docs/writing-plugins.md): How to extend Solhint with your own rules.

## Acknowledgements

The Everscale Solidity parser used is [`pizza-777/parser`](https://github.com/pizza-777/parser).

## Licence

MIT
