const fs = require("fs");
const path = require("path");
const eslintReact = require("@eslint-react/eslint-plugin");
const pluginReactHooks = require("eslint-plugin-react-hooks");
const pluginReactRefresh = require("eslint-plugin-react-refresh");
const baseConfig = require("./index.js");

const detectReactVersion = () => {
  const cwd = process.cwd();

  // 1. Try from cwd. Node's module resolution walks up the directory tree,
  //    so this covers: normal repos, monorepo package dirs, and hoisted react.
  try {
    const pkgPath = require.resolve("react/package.json", { paths: [cwd] });
    return String(require(pkgPath).version);
  } catch {
    // noop
  }

  // 2. Monorepo fallback: ESLint is running from the repo root but react is
  //    not hoisted (e.g. pnpm with shamefully-hoist=false). Walk workspace
  //    package directories defined in the root package.json.
  try {
    const rootPkg = JSON.parse(
      fs.readFileSync(path.join(cwd, "package.json"), "utf8"),
    );
    const ws = rootPkg.workspaces ?? [];
    const patterns = Array.isArray(ws) ? ws : (ws.packages ?? []);

    for (const pattern of patterns) {
      // Strip trailing glob (e.g. "packages/*" → "packages")
      const baseDir = path.join(cwd, String(pattern).replace(/\/\*.*$/, ""));
      try {
        const entries = fs.readdirSync(baseDir, { withFileTypes: true });
        for (const entry of entries) {
          if (!entry.isDirectory()) continue;
          try {
            const pkgPath = require.resolve("react/package.json", {
              paths: [path.join(baseDir, entry.name)],
            });
            return String(require(pkgPath).version);
          } catch {
            // noop
          }
        }
      } catch {
        // noop
      }
    }
  } catch {
    // noop
  }

  return "19.0";
};

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...baseConfig,
  eslintReact.configs["recommended-typescript"],
  pluginReactHooks.configs.flat["recommended-latest"],
  pluginReactRefresh.configs.recommended,
  {
    settings: {
      react: {
        // Prevent eslint-plugin-react from calling the removed
        // context.getFilename() API (removed in ESLint 10) during version detection.
        version: detectReactVersion(),
      },
    },
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

module.exports = config;
