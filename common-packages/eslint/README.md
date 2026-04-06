# `@kami-ui/eslint-config`

Shared ESLint flat configs for Kami UI packages and apps.
It includes typed TypeScript rules, Prettier integration, and ready-to-use presets for React, Next.js, and Storybook.

## Install

### pnpm

```bash
pnpm add -D eslint typescript @kami-ui/eslint-config
```

### npm

```bash
npm install -D eslint typescript @kami-ui/eslint-config
```

### Yarn

```bash
yarn add -D eslint typescript @kami-ui/eslint-config
```

> This package expects `eslint@>=9` and the flat config format (`eslint.config.js`).

## Available presets

| Preset | Import path | Use case |
| --- | --- | --- |
| Base | `@kami-ui/eslint-config` or `@kami-ui/eslint-config/base` | Shared packages, libraries, and general TS/JS projects |
| React | `@kami-ui/eslint-config/react` | React apps and component libraries |
| Next.js | `@kami-ui/eslint-config/next` | Next.js applications |
| Storybook | `@kami-ui/eslint-config/storybook` | Projects that also lint Storybook files |

## Usage

Create an `eslint.config.js` file and spread the preset you want to use.

### Base

```js
import config from "@kami-ui/eslint-config";

export default [...config];
```

### React

```js
import config from "@kami-ui/eslint-config/react";

export default [...config];
```

### Next.js

```js
import config from "@kami-ui/eslint-config/next";

export default [...config];
```

### Storybook

```js
import config from "@kami-ui/eslint-config/storybook";

export default [...config];
```

## Custom overrides

You can extend the shared rules with project-specific overrides:

```js
import config from "@kami-ui/eslint-config/react";

export default [
  ...config,
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
```

## What is included

Depending on the preset, this package enables rules from:

- `@eslint/js`
- `typescript-eslint` recommended type-checked configs
- `eslint-plugin-prettier`
- `eslint-plugin-import`
- `eslint-plugin-eslint-comments`
- `eslint-plugin-prefer-arrow-functions`
- React, React Hooks, and React Refresh plugins
- Next.js and Storybook plugins

## Recommended scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Notes

- Keep a `tsconfig.json` in the project root so typed linting can work correctly.
- The React preset attempts to auto-detect your installed React version.
- The config is opinionated and includes rules such as `no-console` warnings and arrow-function preferences.
