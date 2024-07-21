module.exports = {
  extends: ["@kami-ui/eslint-config/next.eslintrc.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
