module.exports = {
  extends: ["@kami-ui/eslint-config/react.eslintrc.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
