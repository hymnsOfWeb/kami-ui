const reactConfig = require("./react.js");
const nextPlugin = require("@next/eslint-plugin-next");

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...reactConfig,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      "@next/next/no-img-element": "warn",
    },
    settings: {
      next: {
        rootDir: ".",
      },
    },
  },
];

module.exports = config;
