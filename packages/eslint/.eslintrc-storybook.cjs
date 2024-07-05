const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: ["./.eslintrc-next.cjs", "plugin:storybook/recommended", "plugin:mdx/recommended"],
  parserOptions: {
    project,
  },
  //   plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    "import/no-default-export": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-import": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
  },
};
