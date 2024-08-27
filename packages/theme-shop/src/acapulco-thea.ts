import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as acapulcoTheaSpacing,
  defaultTypography as acapulcoTheaTypography,
  defaultCommonColors,
} from "./default";

export const acapulcoTheaLightColors: ColorsObject = {
  text: ["#e0ebe7", "#c2d6cf", "#a3c2b8", "#85ada0", "#669988", "#527a6d", "#3d5c52", "#293d36", "#141f1b"],
  background: ["#ddeeee", "#bbdddd", "#99cccc", "#77bbbb", "#55aaaa", "#448888", "#336666", "#224444", "#112222"],
  primary: ["#deede9", "#bddbd3", "#9cc9bd", "#7ab8a7", "#59a691", "#478574", "#366357", "#24423a", "#12211d"],
  secondary: ["#ddeeea", "#bbddd4", "#98cdbf", "#76bca9", "#54ab94", "#438976", "#326759", "#22443b", "#11221e"],
  accent: ["#dcefea", "#b9dfd5", "#96cfc0", "#73bfab", "#50af96", "#408c78", "#30695a", "#20463c", "#10231e"],
  complementary: ["#eddee2", "#dbbdc5", "#c99ca8", "#b87a8b", "#a6596e", "#854758", "#633642", "#42242c", "#211216"],
  tetradic: ["#e2deed", "#c4bddb", "#a79cc9", "#887ab8", "#6b59a6", "#554785", "#413663", "#2b2442", "#161221"],
  triadic: ["#e9deed", "#d3bddb", "#bd9cc9", "#a77ab8", "#9159a6", "#744785", "#573663", "#3a2442", "#1d1221"],
  analogous: ["#deede2", "#bddbc4", "#9cc9a7", "#7ab888", "#59a66b", "#478555", "#366341", "#24422b", "#122116"],
  ...defaultCommonColors,
};

export const acapulcoTheaDarkColors: ColorsObject = {
  text: ["#141f1b", "#293d36", "#3d5c52", "#527a6d", "#669988", "#85ada0", "#a3c2b8", "#c2d6cf", "#e0ebe7"],
  background: ["#141f1f", "#293d3d", "#3d5c5c", "#527a7a", "#669999", "#85adad", "#a3c2c2", "#c2d6d6", "#e0ebeb"],
  primary: ["#12211d", "#24423b", "#366358", "#478575", "#59a693", "#7ab8a8", "#9cc9be", "#bddbd4", "#deede9"],
  secondary: ["#11221e", "#22443b", "#326759", "#438976", "#54ab94", "#76bca9", "#98cdbf", "#bbddd4", "#ddeeea"],
  accent: ["#10231e", "#20463c", "#30695a", "#408c78", "#50af96", "#73bfab", "#96cfc0", "#b9dfd5", "#dcefea"],
  complementary: ["#211216", "#42242b", "#633641", "#854757", "#a6596c", "#b87a8a", "#c99ca7", "#dbbdc4", "#eddee2"],
  tetradic: ["#161221", "#2c2442", "#413663", "#574785", "#6c59a6", "#8a7ab8", "#a79cc9", "#c5bddb", "#e2deed"],
  triadic: ["#1d1221", "#3b2442", "#583663", "#764785", "#9359a6", "#a97ab8", "#be9cc9", "#d4bddb", "#e9deed"],
  analogous: ["#122116", "#24422c", "#366341", "#478557", "#59a66c", "#7ab88a", "#9cc9a7", "#bddbc5", "#deede2"],
  ...defaultCommonColors,
};

export const acapulcoTheaLightTheme: ThemeObject = {
  colors: acapulcoTheaLightColors,
  spacing: acapulcoTheaSpacing,
  typography: acapulcoTheaTypography,
};

export const acapulcoTheaDarkTheme: ThemeObject = {
  colors: acapulcoTheaDarkColors,
  spacing: acapulcoTheaSpacing,
  typography: acapulcoTheaTypography,
};

export { acapulcoTheaSpacing, acapulcoTheaTypography };

export const acapulcoTheaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: acapulcoTheaDarkTheme,
  },
  {
    name: "light",
    theme: acapulcoTheaLightTheme,
  },
];
