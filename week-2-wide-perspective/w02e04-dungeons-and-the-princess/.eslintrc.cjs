module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  rules: {
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/space-before-function-paren": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-unused-vars": 1,
  }
}
