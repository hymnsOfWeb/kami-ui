module.exports = {
  env: { browser: true, es2020: true, es6: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "airbnb-base",
    "airbnb-typescript/base",
  ],
  ignorePatterns: ["dist", ".eslintrc*.cjs", "node_modules"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["prettier"],
};
