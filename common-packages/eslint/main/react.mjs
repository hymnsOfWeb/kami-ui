import eslintReact from "@eslint-react/eslint-plugin";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import baseConfig from "./index.mjs";

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
      "@eslint-react/set-state-in-effect": "off",
      "@eslint-react/dom/no-unknown-property": ["error", { ignore: ["css"] }],
    },
  },
];

export default config;
