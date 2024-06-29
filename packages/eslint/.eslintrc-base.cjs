module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "airbnb-base",
    "airbnb-typescript/base",
  ],
  ignorePatterns: ["dist", ".eslintrc*.cjs", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier"],
};
