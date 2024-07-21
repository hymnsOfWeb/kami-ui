module.exports = {
  extends: ["./next.eslintrc.cjs", "plugin:storybook/recommended", "plugin:mdx/recommended", "prettier"],
  globals: {
    React: true,
    JSX: true,
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
