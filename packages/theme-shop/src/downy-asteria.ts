import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as downyAsteriaSpacing,
  defaultTypography as downyAsteriaTypography,
  defaultCommonColors,
} from "./default";

export const downyAsteriaLightColors: ColorsObject = {
  text: ["#deeced", "#bdd9db", "#9cc6c9", "#7ab3b8", "#599fa6", "#478085", "#366063", "#244042", "#122021"],
  background: ["#dcecef", "#b9d9df", "#96c5cf", "#73b2bf", "#509faf", "#407f8c", "#305f69", "#204046", "#102023"],
  primary: ["#d9eff2", "#b3dee5", "#8dced8", "#67becb", "#41adbe", "#348b98", "#276872", "#1a454c", "#0d2326"],
  secondary: ["#d6f1f5", "#aee3ea", "#85d5e0", "#5dc7d5", "#34b9cb", "#2a94a2", "#1f6f7a", "#154a51", "#0a2529"],
  accent: ["#d4f2f7", "#a9e6ef", "#7ed9e7", "#53cddf", "#28c0d7", "#209aac", "#187381", "#104d56", "#08262b"],
  complementary: ["#f2dcd9", "#e5bab3", "#d8978d", "#cb7467", "#be5241", "#984134", "#723127", "#4c211a", "#26100d"],
  tetradic: ["#e8d9f2", "#d3b3e5", "#bd8dd8", "#a667cb", "#9041be", "#733498", "#572772", "#3a1a4c", "#1c0d26"],
  triadic: ["#f2d9ef", "#e5b3de", "#d88dce", "#cb67be", "#be41ad", "#98348b", "#722768", "#4c1a45", "#260d23"],
  analogous: ["#d9f2e8", "#b3e5d3", "#8dd8bc", "#67cba6", "#41be90", "#349873", "#277257", "#1a4c3a", "#0d261c"],
  ...defaultCommonColors,
};

export const downyAsteriaDarkColors: ColorsObject = {
  text: ["#112022", "#234143", "#346165", "#458187", "#57a2a8", "#78b4ba", "#9ac7cb", "#bcdadc", "#ddecee"],
  background: ["#112222", "#224444", "#336666", "#448888", "#55aaaa", "#77bbbb", "#99cccc", "#bbdddd", "#ddeeee"],
  primary: ["#0d2326", "#1a454c", "#276872", "#348b98", "#41adbe", "#67becb", "#8dced8", "#b3dee5", "#d9eff2"],
  secondary: ["#0a2529", "#154a51", "#1f6f7a", "#2a94a2", "#34b9cb", "#5dc7d5", "#85d5e0", "#aee3ea", "#d6f1f5"],
  accent: ["#08262b", "#104d56", "#187381", "#209aac", "#28c0d7", "#53cddf", "#7ed9e7", "#a9e6ef", "#d4f2f7"],
  complementary: ["#26100d", "#4c211a", "#723127", "#984134", "#be5241", "#cb7467", "#d8978d", "#e5bab3", "#f2dcd9"],
  tetradic: ["#1c0d26", "#3a1a4c", "#572772", "#733498", "#9041be", "#a667cb", "#bd8dd8", "#d3b3e5", "#e8d9f2"],
  triadic: ["#260d23", "#4c1a45", "#722768", "#98348b", "#be41ad", "#cb67be", "#d88dce", "#e5b3de", "#f2d9ef"],
  analogous: ["#0d261c", "#1a4c3a", "#277257", "#349873", "#41be90", "#67cba6", "#8dd8bc", "#b3e5d3", "#d9f2e8"],
  ...defaultCommonColors,
};

export const downyAsteriaLightTheme: ThemeObject = {
  colors: downyAsteriaLightColors,
  spacing: downyAsteriaSpacing,
  typography: downyAsteriaTypography,
};

export const downyAsteriaDarkTheme: ThemeObject = {
  colors: downyAsteriaDarkColors,
  spacing: downyAsteriaSpacing,
  typography: downyAsteriaTypography,
};

export { downyAsteriaSpacing, downyAsteriaTypography };

export const downyAsteriaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: downyAsteriaDarkTheme,
  },
  {
    name: "light",
    theme: downyAsteriaLightTheme,
  },
];
