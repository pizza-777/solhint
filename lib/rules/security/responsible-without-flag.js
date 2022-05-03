const BaseChecker = require('../base-checker')

const ruleId = 'responsible-without-flag'
const meta = {
  type: 'security',

  docs: {
    description: `Responsible functions must have flag in return statement for avoid vulnerabilities.`,
    category: 'Security Rules',
    examples: {
      bad: [
        {
          description: 'No flag in responsible',
          code: require('../../../test/fixtures/security/responsible-without-flag')
        }
      ],
      good: [
        {
          description: 'Responsible function have flag in return statement',
          code: require('../../../test/fixtures/security/responsible-with-flag')
        }
      ]
    }
  },

  isDefault: false,
  recommended: true,
  defaultSetup: 'warn',

  schema: null
}

class ResponsibleWithoutFlag extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta)
  }

  FunctionDefinition(node) {
    if (!node.isResponsible) return

    const statements = node.body.statements

    const returnStatement = statements.filter(subNode => subNode.type === 'ReturnStatement')

    if (returnStatement.length === 0)
      this._warn(node, 'Return statement in responsible function needed')

    const expression = returnStatement[0].expression

    if (expression.type !== 'NameValueExpression') {
      this._warn(
        node,
        'Responsible function must return expression like {value: ..., flag: ..., bounce: ...}'
      )
    }
    const args = expression.arguments
    if (!args.type === 'NameValueList' || args.identifiers.length === 0)
      this._warn(
        node,
        'Responsible function must return expression like {value: ..., flag: ..., bounce: ...}'
      )

    const hasFlag = args.identifiers.some(subNode => subNode.name === 'flag')

    if (!hasFlag)
      this._warn(
        node,
        'Responsible functions must have flag in return statement for avoid vulnerabilities'
      )
  }

  _warn(ctx, msg) {
    this.warn(ctx, msg)
  }
}
module.exports = ResponsibleWithoutFlag
