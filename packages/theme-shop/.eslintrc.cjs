module.exports = {
  extends: ["@kami-ui/eslint-config/base.eslintrc.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["scripts", "rollup.*"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "node/no-unpublished-import": ["error", { allowModules: ["@kami-ui/react-theme-common"] }],
  },
};
