const BaseChecker = require('../base-checker')

const ruleId = 'tvm-accept-before-require'
const meta = {
  type: 'security',

  docs: {
    description: `Responsible functions must have flag in return statement for avoid vulnerabilities.`,
    category: 'Security Rules',
    examples: {
      bad: [
        {
          description: 'tvm.accept() before require()',
          code: require('../../../test/fixtures/security/tvm-accept-before-require')
        }
      ]
    }
  },
  isDefault: false,
  recommended: true,
  defaultSetup: 'warn',

  schema: null
}

class TvmAcceptBeforeRequire extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta)
    this.requirePoint = 1
    this.tvmAcceptPoint = 2
  }

  FunctionDefinition(node) {
    // find start positions of expressions that are tvm.accept() and require()
    node.body.statements.forEach(subNode => {
      if (subNode.type === 'ExpressionStatement') {
        this._TvmAccept(subNode)
        this._require(subNode)
      }
    })
    if (this.tvmAcceptPoint < this.requirePoint) {
      this._warn(node, 'tvm.accept() must be before require()')
    }
  }

  _TvmAccept(ExpressionStatement) {
    if (
      typeof ExpressionStatement.expression !== 'undefined' &&
      typeof ExpressionStatement.expression.expression !== 'undefined' &&
      typeof ExpressionStatement.expression.expression.expression !== 'undefined' &&
      ExpressionStatement.expression.expression.expression.name === 'tvm' &&
      ExpressionStatement.expression.expression.memberName === 'accept'
    ) {
      this.tvmAcceptPoint = ExpressionStatement.expression.expression.range[0]
    }
  }

  // subNode.expression.expression.name
  _require(ExpressionStatement) {
    if (
      typeof ExpressionStatement.expression !== 'undefined' &&
      typeof ExpressionStatement.expression.expression !== 'undefined' &&
      ExpressionStatement.expression.expression.name === 'require'
    ) {
      this.requirePoint = ExpressionStatement.expression.expression.range[0]
    }
  }

  _warn(ctx, msg) {
    this.warn(ctx, msg)
  }
}
module.exports = TvmAcceptBeforeRequire
