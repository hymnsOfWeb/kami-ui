import type { StorybookConfig } from "@storybook/react-vite";

import { createRequire } from "module";
import { dirname, join } from "path";
import { mergeConfig } from "vite";

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string) => {
  return dirname(require.resolve(join(value, "package.json")));
};
const config: StorybookConfig = {
  stories: [
    "../**/stories/**/*.mdx",
    "../**/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../**/stories/**/*.story.@(js|jsx|mjs|ts|tsx)",
    "../**/stories/**/*.story.*",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  staticDirs: ["../public"],
  // eslint-disable-next-line @typescript-eslint/require-await -- IGNORE
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: process.env.PUBLIC_BASE_PATH ?? "/",
    });
  },
};
export default config;
