import { commonConfig, dtsCommonPlugins, dtsDelete } from "@kami-ui/rollup";

const outputFolder = "dist";
const config = commonConfig({ tsConfigOpts: { outDir: outputFolder } });

/** @type {import("rollup").RollupOptions} */
const themeConfig = [
  {
    ...config,
    input: "index.ts",
    output: [
      {
        file: `${outputFolder}/index.mjs`,
        format: "esm",
        interop: "auto",
      },
      {
        file: `${outputFolder}/index.js`,
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
    plugins: [...dtsCommonPlugins, dtsDelete(["dist/**/*.*", "dist/**", "!dist/index.*{d.ts,js}"])],
  },
];

export default themeConfig;
