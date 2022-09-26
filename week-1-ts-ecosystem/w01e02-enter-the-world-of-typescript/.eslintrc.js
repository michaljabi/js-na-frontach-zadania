module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:jsx-a11y/recommended', 'eslint-config-prettier'],
  rules: {},
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
