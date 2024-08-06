# @kami-ui/next-theme

A versatile and customizable theme library for React that allows you to define and manage themes effortlessly. It provides utilities for handling colors, typography, spacing, and more, making it easier to maintain a consistent design across your application.

---

## Features

- **Flexible Theme Definition**: Define colors, typography, and spacing with support for responsive design.
- **Multiple Themes Support**: Easily switch between multiple themes.
- **Customizable Providers**: Wrap your application with `ThemeProvider` or `MultiThemeProvider` for theme management.

## Installation

To install the package, use npm or yarn:

```bash
npm install @kami-ui/next-theme
```

or

```bash
yarn add @kami-ui/next-theme
```

For getting **69 out-of-the-box themes**, you can install the **`@kami-ui/theme-shop`** package alongside:

```bash
npm install @kami-ui/theme-shop @kami-ui/next-theme
```

or

```bash
yarn add @kami-ui/theme-shop @kami-ui/next-theme
```

---

## Usage

### ThemeProvider

Wrap your `_app.tsx` file with `ThemeProvider` to provide a single theme:

```tsx
import React from 'react';
import { ThemeProvider, ThemeObject } from '@kami-ui/next-theme';

const theme: ThemeObject = {
  // ... custom theme properties
}; // or import from @kami-ui/theme-shop

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    {/* Your app's other components */}
  </ThemeProvider>
);

export default App;
```

### MultiThemeProvider

If you need to support multiple themes, use `MultiThemeProvider`:

```tsx
import React from 'react';
import { MultiThemeProvider, ThemeObject } from '@kami-ui/next-theme';

// Note: Having themes name "light" and "dark" is recommended for better compatibility out-of-the-box.

const themes: ThemeObject = [
  {
    name: 'light',
    theme: {
      // ... custom light theme properties
    },
  },
  {
    name: 'dark',
    theme: {
      // ... custom dark theme properties
    },
  },
]; // or import from @kami-ui/theme-shop

const App = ({ Component, pageProps }: AppProps) => (
  <MultiThemeProvider themes={themes}>
    <Component {...pageProps} />
    {/* Your app's other components */}
  </MultiThemeProvider>
);

export default App;
```

---

## Wrappers

### `ThemeProvider`

#### Props

- `theme` (`ThemeObject`): The theme configuration object.
- `injectInBody` (`boolean`, optional): Whether to inject the theme styles into the body.
- `mode` (`string`, optional): The mode for the theme (e.g., light or dark).

### `MultiThemeProvider`

#### Props

- `themes` (`Array<{ name: string; theme: ThemeObject }>`): An array of theme objects with their names.
- `injectInBody` (`boolean`, optional): Whether to inject the theme styles into the body.
- `disableConsole` (`boolean`, optional): Whether to disable console warnings.

---

## Hooks

### `useTheme`

To be used with MultiThemeProvider; It returns the following methods:

- `updateTheme(themeName: string)`: Function to switch to a different theme.
- `getColor(color: keyof ColorsObject, index: number)`: Function to get a color value from the theme.
- `getTheme(themeName?: string)`: Function to get a theme by name.
- `getCurrentTheme()`: Function to get the current theme.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/hymnsOfWeb/kami-ui).