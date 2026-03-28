export const colorKeys = Object.freeze({
  base: {
    primary: "primary",
    secondary: "secondary",
  },
  extra: {
    accent: "accent",
    neutral: "neutral",
    complementary: "complementary",
    analogous: "analogous",
    triadic: "triadic",
    tetradic: "tetradic",
  },
  states: {
    error: "error",
    info: "info",
    success: "success",
    warning: "warning",
  },
  text: {
    text: "text",
  },
  background: {
    background: "background",
  },
  neutral: {
    gray: "gray",
    white: "white",
    black: "black",
  },
} as const);
