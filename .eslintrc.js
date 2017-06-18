module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [
    'html'
  ],
  // custom rules
  'rules': {
    'brace-style': 0,
    'generator-star-spacing': 0,
    'comma-style': [ 'error', 'last' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'no-empty': [ 'error', { 'allowEmptyCatch': true } ],
    'quote-props': [ 'error', 'as-needed' ],
    'eol-last': [ 'error', 'always' ],
    'no-useless-concat': [ 'error' ],
    'no-console': [ 'error' ],
    'no-var': [ 'error' ],
    'padded-blocks': [ 'error', { classes: 'always' } ],
    'prefer-template': [ 'error' ],
    'prefer-arrow-callback': [ 'error' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'ignore',
    } ],
  },
}
