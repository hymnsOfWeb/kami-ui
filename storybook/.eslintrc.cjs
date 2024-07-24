module.exports = {
  extends: ["@kami-ui/eslint-config/storybook.eslintrc.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig",
      },
    },
  },
};
