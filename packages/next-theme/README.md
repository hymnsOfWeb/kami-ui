---

# @kami-ui/next-theme Theme Library

A versatile and customizable theme library for React that allows you to define and manage themes effortlessly. It provides utilities for handling colors, typography, spacing, and more, making it easier to maintain a consistent design across your application.

## Features

- **Flexible Theme Definition**: Define colors, typography, and spacing with support for responsive design.
- **Multiple Themes Support**: Easily switch between multiple themes.
- **Customizable Providers**: Wrap your application with `ThemeProvider` or `MultiThemeProvider` for theme management.
- **Utilities**: Includes utilities for string trimming, theme validation, and theme building.

## Installation

To install the package, use npm or yarn:

```bash
npm install @kami-ui/next-theme
```

or

```bash
yarn add @kami-ui/next-theme
```

## Usage

### ThemeProvider

Wrap your application with `ThemeProvider` to provide a single theme:

```jsx
import React from 'react';
import { ThemeProvider } from 'your-theme-library';

const theme = {
  colors: {
    primary: ["#0a082b", "#141056", "#1e1881", "#2821ab", "#3129d6", "#5b54de", "#847ee7", "#ada9ef", "#d6d4f7"], // An array of 9 shades of the primary color
    secondary: [] // An array of 9 shades of the secondary color,
    accent?: [] // An array of 9 shades of the accent color,
    neutral?: [] // An array of 9 shades of the neutral color,
    complementary?: [] // An array of 9 shades of the complementary color,
    analogous?: [] // An array of 9 shades of the analogous color,
    triadic?: [] // An array of 9 shades of the triadic color,
    tetradic?: [] // An array of 9 shades of the tetradic color,
    success?: [] // An array of 9 shades of the success color,
    warning?: [] // An array of 9 shades of the warning color,
    info?: [] // An array of 9 shades of the info color,
    error?: [] // An array of 9 shades of the error color,
    gray?: [] // An array of 9 shades of the gray color,
    white?: "#FAFAFA", // A constant shade / hue of white
    black?: "#1A1A1A", // A constant shade / hue of black
    text?: [] // An array of 9 shades of the text color,
    background?: [] // An array of 9 shades of the background color,
  },
  typography: {
    fontSizes: ["0.75rem", "0.875rem", "1rem", "1.125rem", "1.25rem", "1.5rem", "1.75rem"], // An array of 7, 9, or 11 strings representing font sizes
    fontFamilies: {
      cursive: "Allura, cursive",
      sans: 'Arial, sans-serif',
      serif: 'Georgia, serif',
      mono: 'Courier New, monospace',
    },
  },
  spacing: {
    borderRadius: ['4px', '8px', '12px'], // Border radius: An array of 3, 5, or 7 strings representing border radius values
    space: ['4px', '8px', '16px', '32px', '64px', ...], // An array of 20 strings representing space values
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    {/* Your app components */}
  </ThemeProvider>
);
```

### MultiThemeProvider

If you need to support multiple themes, use `MultiThemeProvider`:

```jsx
import React from 'react';
import { MultiThemeProvider } from 'your-theme-library';

const themes = [
  {
    name: 'light',
    theme: {
      colors: { primary: '#fff', secondary: '#000' },
      // ... other theme properties
    },
  },
  {
    name: 'dark',
    theme: {
      colors: { primary: '#000', secondary: '#fff' },
      // ... other theme properties
    },
  },
];

const App = () => (
  <MultiThemeProvider themes={themes}>
    {/* Your app components */}
  </MultiThemeProvider>
);
```

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

### `useTheme`

#### Return Value

- `updateTheme(themeName: string)`: Function to switch to a different theme.
- `getColor(color: keyof ColorsObject, index: number)`: Function to get a color value from the theme.
- `getTheme(themeName?: string)`: Function to get a theme by name.

### Utility Functions

- `stringTrimmer(str: string)`: Trims whitespace from a string.
- `themeValidator(themes: Array<{ name: string; theme: ThemeObject }>)`: Validates the theme configuration.
- `themeBuilder(theme: ThemeObject, mode?: string)`: Builds a theme string for use in styles.

### Types

- `BorderRadiusArray`
- `Breakpoint`
- `BreakpointSize`
- `BreakpointSizeArray`
- `ColorType`
- `ColorsObject`
- `FontSizeArray`
- `MultiThemeProviderProps`
- `SpacingObject`
- `ThemeObject`
- `ThemeProviderProps`
- `TypographyObject`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.