import { stringTrimmer } from "../helpers";
import type { BreakpointSize, FontSizeArray, ThemeObject } from "../types";

const colorBuilder = (colorsProp: ThemeObject["colors"]) => {
  let vars = "";
  if (!colorsProp) return vars;
  const colors: ThemeObject["colors"] = {
    white: "#fff",
    black: "#000",
    ...colorsProp,
  };
  for (const colorKey in colors) {
    const colorArr = colors[colorKey as keyof ThemeObject["colors"]];
    if (!colorArr) continue;
    if (typeof colorArr === "string") {
      vars += `--color-${colorKey}:${colorArr};`;
      continue;
    }
    for (let i = 0; i < colorArr?.length ?? 0; i++) {
      vars += `--color-${colorKey}-${(i + 1) * 100}:${colorArr[i]};`;
    }
  }
  return vars;
};

const typographyBuilder = (typography: ThemeObject["typography"]) => {
  let vars = "";
  if (!typography) return vars;
  const { fontSizes, fontFamilies } = typography;
  if (fontFamilies) {
    for (const fontFamily in fontFamilies) {
      vars += `--font-${fontFamily}:${fontFamilies[fontFamily as keyof typeof fontFamilies]};`;
    }
  }
  const len = fontSizes?.length;
  if (!len && typeof fontSizes === "object") return vars;
  const sizeArr = ["4xs", "3xs", "2xs", "1xs", "s", "m", "l", "1xl", "2xl", "3xl", "4xl"];
  const getSizeArStart = (fontSizeLength: number): number => {
    switch (fontSizeLength) {
      case 7:
        return 2;
      case 9:
        return 1;
      case 11:
        return 0;
      default:
        return 0;
    }
  };
  switch (typeof fontSizes[0]) {
    case "string":
      try {
        for (let i = 0; i < len; i++) {
          vars += `--font-size-${sizeArr[i + getSizeArStart(len)]}:${fontSizes[i] as string};`;
        }
      } catch {
        // todo
      }
      break;
    case "object":
      try {
        for (const { breakpoint, size } of fontSizes as BreakpointSize<FontSizeArray>[]) {
          vars += "@media only screen ";
          if (breakpoint?.min) {
            vars += `and (min-width:${breakpoint.min}) `;
          }
          if (breakpoint?.max) {
            vars += `and (max-width:${breakpoint.max}) `;
          }
          if (breakpoint?.orientation) {
            vars += `and (orientation:${breakpoint.orientation}) `;
          }
          vars += "{";
          try {
            for (let i = 0; i < size.length; i++) {
              vars += `--font-size-${sizeArr[i + getSizeArStart(size.length)]}:${size[i]};`;
            }
          } catch {
            // todo
          }
          vars += "}";
        }
      } catch {
        // todo
      }
      break;
    default:
      // todo
      break;
  }
  return vars;
};

const themeBuilder = (theme: ThemeObject, mode?: string): string => {
  if (!theme) return "";
  const { colors: c, typography: t } = theme;
  const colors = colorBuilder(c);
  // const spacing = spacingBuilder(s || defaultTheme.spacing);
  const typography = typographyBuilder(t);
  const formattedVars = `${mode ? `body.kami-ui-${stringTrimmer(mode)}` : `:root`}{${colors}${typography}}`;
  return formattedVars;
};

export default themeBuilder;
