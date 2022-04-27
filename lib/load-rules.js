const path = require('path')
const { walkSync } = require('./common/utils')

const blacklistedFiles = ['index.js', 'base-deprecation.js', 'load-rules.js']

/**
 * Load all rule modules from specified directory
 */
const loadRules = () => {
  const rulesDir = path.join(__dirname, 'rules')
  const rules = []
  const files = walkSync(rulesDir)

  const filesFiltered = files.filter(file => {
    const filename = path.parse(file).base
    return path.extname(filename) === '.js' && !blacklistedFiles.includes(filename)
  })

  for (const file of filesFiltered) {
    const FileRule = require(file)

    const isClass = typeof FileRule === 'function'
    if (!isClass) {
      return
    }

    const instance = new FileRule()
    if (instance && instance.ruleId) {
      rules.push({ ruleId: instance.ruleId, meta: instance.meta, file })
    }
  }
 return rules.filter(rule => disabledRules.includes(rule.ruleId) === false)
}

//disable rules that doesn't needed in ton-solidity
const disabledRules = [
  "payable-fallback",
  "avoid-call-value",
  "avoid-low-level-calls",
  "avoid-sha3",
  "avoid-suicide",
  "avoid-throw",
  "avoid-tx-origin",
  "check-send-result" ,
  "func-visibility", //compiler already have it
  "mark-callable-contracts", //didn't see this in ton
  "multiple-sends", //works fine in ton. For example in depools
  "no-inline-assembly", //unused in ton
  "reentrancy", //unused in ton
]

const loadRule = rule => {
  const rulesDir = path.join(__dirname, 'rules')
  let fileInstance
  const files = walkSync(rulesDir)

  const filesFiltered = files.filter(file => {
    const filename = path.parse(file).base
    return path.extname(filename) === '.js' && !blacklistedFiles.includes(filename)
  })

  for (const file of filesFiltered) {
    const filename = path.parse(file).name
    if (filename !== rule) {
      continue
    }
    const FileRule = require(file)

    const isClass = typeof FileRule === 'function'
    if (!isClass) {
      continue
    }

    fileInstance = new FileRule()
  }

  return fileInstance
}

module.exports = {
  loadRules,
  loadRule
}
