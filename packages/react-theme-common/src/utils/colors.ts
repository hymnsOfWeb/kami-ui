export const isHexColor = (color: string): boolean => {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color);
};

export const getAlphaFromHex = (hex: string): string | null => {
  if (hex.length === 9) {
    const alphaHex = hex.slice(7, 9);
    const alpha = parseInt(alphaHex, 16) / 255;
    return alpha.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
  }
  return null;
};

export const hexToHsl = (hex: string): string => {
  const full =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex.length === 9
        ? hex.slice(0, 7)
        : hex;
  const r = parseInt(full.slice(1, 3), 16) / 255;
  const g = parseInt(full.slice(3, 5), 16) / 255;
  const b = parseInt(full.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

export const toHslString = (input: any): { hsl: string; alpha: string } => {
  const defaultReturn = { hsl: "0 0% 0%", alpha: "1" };
  if (typeof input === "string") {
    if (!isHexColor(input)) return defaultReturn;
    const alpha = getAlphaFromHex(input);
    return {
      hsl: hexToHsl(input),
      alpha: alpha ?? "1",
    };
  }
  if (Array.isArray(input)) {
    if (input.length === 3) {
      return { hsl: `${input[0]} ${input[1]}% ${input[2]}%`, alpha: "1" };
    }
    if (input.length === 4) {
      return {
        hsl: `${input[0]} ${input[1]}% ${input[2]}%`,
        alpha: String(input[3]),
      };
    }
    return defaultReturn;
  }
  if (typeof input === "object" && input !== null) {
    if ("h" in input && "s" in input && "l" in input) {
      return {
        hsl: `${input.h} ${input.s}% ${input.l}%`,
        alpha: input.a !== undefined ? String(input.a) : "1",
      };
    }
    if ("hue" in input && "saturation" in input && "lightness" in input) {
      return {
        hsl: `${input.hue} ${input.saturation}% ${input.lightness}%`,
        alpha: input.alpha !== undefined ? String(input.alpha) : "1",
      };
    }
  }
  return defaultReturn;
};
