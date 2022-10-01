module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "eslint-config-prettier",
  ],
  rules: {
    "no-unused-vars": 0,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
