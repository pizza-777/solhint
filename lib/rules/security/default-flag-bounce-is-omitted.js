const BaseChecker = require('../base-checker')

const ruleId = 'default-flag-bounce-is-omitted'
const meta = {
  type: 'security',

  docs: {
    description: `Default flag, bounce is omitted.`,
    category: 'Security Rules',
    examples: {
      bad: [
        {
          description: 'Default flag, bounce is omitted.',
          code: require('../../../test/fixtures/security/default-flag-bounce-is-omitted-bad')
        }
      ],
      good: [
        {
          description: 'Default flag, bounce is set.',
          code: require('../../../test/fixtures/security/default-flag-bounce-is-omitted-good')
        }
      ]
    }
  },

  isDefault: false,
  recommended: true,
  defaultSetup: 'warn',

  schema: null
}

class DefaultFalgBounceIsomitted extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta)
  }

  FunctionCall(node) {
    // .transfer(...)
    if (typeof node.expression === 'undefined') return
    if (typeof node.expression.memberName === 'undefined') return
    if (node.expression.memberName !== 'transfer') return

    if (arguments.length === 1) this._warn(node, 'Default flag, bounce is omitted.')
    if (arguments.length === 2) this._warn(node, 'Default flag is omitted.')
  }

  _warn(ctx, msg) {
    this.warn(ctx, msg)
  }
}
module.exports = DefaultFalgBounceIsomitted
