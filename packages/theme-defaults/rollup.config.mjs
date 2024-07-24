import { commonConfig, getDtsCommonPlugins, dtsDelete } from "@kami-ui/rollup";

const outputFolder = "dist";
const config = commonConfig({ tsConfigOpts: { outDir: outputFolder } });

/** @type {import("rollup").RollupOptions} */
const themeConfig = [
  {
    ...config,
    input: "src/index.ts",
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
  // {
  //   input: `${outputFolder}/index.d.ts`,
  //   output: {
  //     file: `${outputFolder}/index.d.ts`,
  //     format: "esm",
  //   },
  //   plugins: [...getDtsCommonPlugins(), dtsDelete(["dist/**/*.d.ts", "!dist/index.d.ts"])],
  // },
];

export default themeConfig;
