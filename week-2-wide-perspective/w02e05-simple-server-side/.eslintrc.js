module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
