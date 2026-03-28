const eslintReact = require("@eslint-react/eslint-plugin");
const pluginReactHooks = require("eslint-plugin-react-hooks");
const pluginReactRefresh = require("eslint-plugin-react-refresh");
const baseConfig = require("./index.js");

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...baseConfig,
  eslintReact.configs["recommended-typescript"],
  pluginReactHooks.configs.flat["recommended-latest"],
  pluginReactRefresh.configs.recommended,
  {
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/set-state-in-effect": "off",
      "@eslint-react/dom/no-unknown-property": ["error", { ignore: ["css"] }],
    },
  },
];

module.exports = config;
