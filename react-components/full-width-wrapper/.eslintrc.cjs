module.exports = {
  extends: ["@kami-ui/eslint-config/next.eslintrc.cjs"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["scripts", "rollup.*"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["off", { devDependencies: true }],
    "@next/next/no-html-link-for-pages": "off",
  },
};
