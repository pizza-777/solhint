const BaseChecker = require('../base-checker')

const ruleId = 'bounce-true-in-responsible-onbounce-in-contract'
const meta = {
  type: 'security',

  docs: {
    description: `Incompatible with bounce true in responsible function and onBounce function in contract.`,
    category: 'Security Rules',
    examples: {
      bad: [
        {
          description: 'Bounce `true` in responsible function and onBounce function in contract',
          code: require('../../../test/fixtures/security/bounce-true-in-responsible-onbounce-in-contract')
        }
      ]
    }
  },
  isDefault: false,
  recommended: true,
  defaultSetup: 'warn',

  schema: null
}

class BounceTrueInResponsibleOnBounceInContract extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta)
    this.bounce = false
    this.onBounce = false
  }

  FunctionDefinition(node) {
    if (node.isOnBounce) this.onBounce = true
    if (node.isResponsible) {
      this._findAndSetBounceInResponsibleReturn(node) // find bounce in return statement
    }
    if (this.bounce === true && this.onBounce === true) {
      this._warn(
        node,
        'Incompatible with bounce true in responsible function and onBounce function in contract'
      )
    }
  }

  _findAndSetBounceInResponsibleReturn(node) {
    const statements = node.body.statements
    const returnStatement = statements.filter(subNode => subNode.type === 'ReturnStatement')

    if (returnStatement.length === 0) return
    const expression = returnStatement[0].expression
    if (expression.type !== 'NameValueExpression') return
    const args = expression.arguments
    if (!args.type === 'NameValueList' || args.identifiers.length === 0) return
    const bounceIndex = args.identifiers.findIndex(subNode => subNode.name === 'bounce')
    if (bounceIndex === -1) return
    if (typeof args.arguments[bounceIndex].value === 'undefined') return
    if (this.bounce === false) this.bounce = args.arguments[bounceIndex].value
  }

  _warn(ctx, msg) {
    this.warn(ctx, msg)
  }
}
module.exports = BounceTrueInResponsibleOnBounceInContract
