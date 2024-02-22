module.exports = {
  root: true,
  env: { browser: false, es2020: true },
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
