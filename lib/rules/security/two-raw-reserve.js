const BaseChecker = require('../base-checker')

const ruleId = 'two-raw-reserve'
const meta = {
  type: 'security',

  docs: {
    description: `Two or more following raw.reserve(...) in one function is excessive.`,
    category: 'Security Rules',
    examples: {
      bad: [
        {
          description: 'raw.reserve(...) in one function following by another raw.reserve(...)',
          code: require('../../../test/fixtures/security/two-raw-reserve-bad')
        }
      ],
      good: [
        {
          description:
            'Two or more raw.reserve(...) in one function when they are not following by each other',
          code: require('../../../test/fixtures/security/two-raw-reserve-good')
        }
      ]
    }
  },

  isDefault: false,
  recommended: true,
  defaultSetup: 'warn',

  schema: null
}

class TwoRawReserve extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta)
  }

  Block(node) {
    const statements = node.statements

    const rawReserveStatement = statements.filter(subNode => {
      if (subNode.type !== 'ExpressionStatement') return false
      let expression = subNode.expression
      if (expression.type !== 'FunctionCall') return false
      expression = expression.expression
      if (expression.type !== 'MemberAccess') return false
      if (typeof expression.memberName === 'undefined') return false
      if (expression.memberName !== 'rawReserve') return false
      return true
    })

    if (rawReserveStatement.length > 1)
      this._warn(node, 'Two or more following raw.reserve(...) in one function is excessive.')
  }

  _warn(ctx, msg) {
    this.warn(ctx, msg)
  }
}
module.exports = TwoRawReserve
