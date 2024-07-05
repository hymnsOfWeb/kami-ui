import { nodeResolve } from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import del from "rollup-plugin-delete";
import terser from "@rollup/plugin-terser";

/** @type {typescript.RollupTypescriptOptions} */
export const tsOptions = {
  tsconfig: "tsconfig.json",
};

export const externalPackages = [
  "@emotion/styled",
  "@emotion/react",
  "@emotion",
  "@emotion/react/jsx-runtime",
  "react",
  "react-dom",
  "colord",
  "shade-generator",
  "next",
  "react-helment",
  "next/head",
];

export const dtsDelete = (paths = []) =>
  del({
    hook: "buildEnd",
    targets: paths,
  });

export const dtsCommonOptions = {
  compilerOptions: {
    baseUrl: ".",
    paths: {},
  },
};

export const dtsCommonPlugins = [dts(dtsCommonOptions)];

export const commonConfig = ({ tsConfigOpts: { outDir } }) => {
  const finalExternalPackages = [...externalPackages];
  /** @type {import('rollup').RollupOptions} */
  const forReturn = {
    external: finalExternalPackages,
    plugins: [
      nodeResolve({
        modulePaths: ["node_modules", "packages/", "../packages/"],
      }),
      typescript({ ...tsOptions, outDir: outDir }),
      commonjs({
        include: /node_modules|packages/,
        requireReturnsDefault: "auto",
      }),
      external(),
      terser(),
    ],
  };
  return forReturn;
};

export { dts };
