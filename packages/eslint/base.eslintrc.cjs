module.exports = {
  env: { browser: true, es2020: true, es6: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  ignorePatterns: [".eslintrc*.cjs", "node_modules", "dist"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["prettier"],
  rules: {
    "node/no-missing-import": [
      "error",
      {
        allowModules: [],
        resolvePaths: [],
        tryExtensions: [".ts", ".tsx", ".js", ".jsx", "./index.ts", "./index.tsx", "./index.js", "./index.jsx"],
      },
    ],
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "guard-for-in": "off",
    "no-continue": "off",
  },
};
