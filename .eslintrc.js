module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    'no-alert': 'off',
    'no-async-promise-executor': 'off',
    'import/no-cycle': 'off',
    'no-lonely-if': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'arrow-parens': 'off'
  },
};
