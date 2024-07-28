import { commonConfig, getDtsCommonPlugins, dtsDelete, externalPackages } from "@kami-ui/rollup";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const outputFolder = "dist";
const config = commonConfig({
  tsConfigOpts: {
    outDir: outputFolder,
    compilerOptions: {
      baseUrl: ".",
      paths: {
        "@kami-ui/react-theme-common": ["../../react-theme-common/dist/index.d.ts"],
      },
    },
  },
});

/** @type {import("rollup").RollupOptions} */
const themeConfig = [
  {
    ...config,
    input: "src/index.tsx",
    output: [
      {
        file: `${outputFolder}/index.mjs`,
        format: "esm",
        interop: "auto",
      },
      {
        file: `${outputFolder}/index.cjs`,
        format: "cjs",
        interop: "auto",
      },
    ],
  },
  {
    input: `${outputFolder}/index.d.ts`,
    output: {
      file: `${outputFolder}/index.d.ts`,
      format: "esm",
    },
    plugins: [...getDtsCommonPlugins(), dtsDelete(["dist/**/*.*", "dist/**", "!dist/index.*{d.ts,js}"])],
    external: externalPackages,
  },
];

export default themeConfig;
