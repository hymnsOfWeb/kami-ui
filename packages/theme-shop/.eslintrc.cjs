module.exports = {
  extends: ["@kami-ui/eslint-config/base.eslintrc.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["scripts", "rollup.*"],
};
