import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as electricVioletArtemisSpacing,
  defaultTypography as electricVioletArtemisTypography,
  defaultCommonColors,
} from "./default";

export const electricVioletArtemisLightColors: ColorsObject = {
  text: ["#ecccff", "#da99ff", "#c766ff", "#b433ff", "#a200ff", "#8100cc", "#610099", "#410066", "#200033"],
  background: ["#eaccff", "#d499ff", "#bf66ff", "#aa33ff", "#9500ff", "#7700cc", "#590099", "#3b0066", "#1e0033"],
  primary: ["#eacdfe", "#d49bfd", "#bf68fd", "#a936fc", "#9404fb", "#7603c9", "#590297", "#3b0264", "#1e0132"],
  secondary: ["#fecdda", "#fd9bb5", "#fd6890", "#fc366b", "#fb0446", "#c90338", "#97022a", "#64021c", "#32010e"],
  accent: ["#fed4cd", "#fda99b", "#fd7f68", "#fc5436", "#fb2904", "#c92103", "#971902", "#641002", "#320801"],
  complementary: ["#e1fecd", "#c4fd9b", "#a6fd68", "#88fc36", "#6bfb04", "#55c903", "#409702", "#2b6402", "#153201"],
  tetradic: ["#fed2cd", "#fda39b", "#fd7468", "#fc4636", "#fb1904", "#c91303", "#970e02", "#640a02", "#320601"],
  triadic: ["#feeacd", "#fdd49b", "#fdbf68", "#fcaa36", "#fb9404", "#c97703", "#975902", "#643b02", "#321e01"],
  analogous: ["#d2cdfe", "#a39bfd", "#7468fd", "#4736fc", "#1904fb", "#1403c9", "#0e0297", "#0a0264", "#060132"],
  ...defaultCommonColors,
};

export const electricVioletArtemisDarkColors: ColorsObject = {
  text: ["#210033", "#420066", "#630099", "#8500cc", "#a600ff", "#b833ff", "#c966ff", "#db99ff", "#edccff"],
  background: ["#1f0033", "#3d0066", "#5c0099", "#7a00cc", "#9900ff", "#ad33ff", "#c266ff", "#d699ff", "#ebccff"],
  primary: ["#1e0132", "#3b0264", "#590297", "#7603c9", "#9404fb", "#a936fc", "#bf68fd", "#d49bfd", "#eacdfe"],
  secondary: ["#32010e", "#64021c", "#97022a", "#c90338", "#fb0446", "#fc366b", "#fd6890", "#fd9bb5", "#fecdda"],
  accent: ["#320801", "#641002", "#971902", "#c92103", "#fb2904", "#fc5436", "#fd7f68", "#fda99b", "#fed4cd"],
  complementary: ["#153201", "#2b6402", "#409702", "#55c903", "#6bfb04", "#88fc36", "#a6fd68", "#c4fd9b", "#e1fecd"],
  tetradic: ["#320601", "#640a02", "#970e02", "#c91303", "#fb1904", "#fc4636", "#fd7468", "#fda39b", "#fed2cd"],
  triadic: ["#321e01", "#643b02", "#975902", "#c97703", "#fb9404", "#fcaa36", "#fdbf68", "#fdd49b", "#feeacd"],
  analogous: ["#060132", "#0a0264", "#0e0297", "#1403c9", "#1904fb", "#4736fc", "#7468fd", "#a39bfd", "#d2cdfe"],
  ...defaultCommonColors,
};

export const electricVioletArtemisLightTheme: ThemeObject = {
  colors: electricVioletArtemisLightColors,
  spacing: electricVioletArtemisSpacing,
  typography: electricVioletArtemisTypography,
};

export const electricVioletArtemisDarkTheme: ThemeObject = {
  colors: electricVioletArtemisDarkColors,
  spacing: electricVioletArtemisSpacing,
  typography: electricVioletArtemisTypography,
};

export { electricVioletArtemisSpacing, electricVioletArtemisTypography };

export const electricVioletArtemisTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: electricVioletArtemisDarkTheme,
  },
  {
    name: "light",
    theme: electricVioletArtemisLightTheme,
  },
];
