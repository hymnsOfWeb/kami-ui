import * as shop from "@kami-ui/theme-shop";
import { ColorWrapper } from "@stories/introduction/theme-shop/styles";
import ThemeCard from "@stories/introduction/theme-shop/theme-card";
import { getThemeName } from "@stories/introduction/theme-shop/utils";
import { Fragment } from "react";

export const objectKeysArr = Object.keys(shop).filter((key) => {
  return !(
    key.includes("DarkColors") ||
    key.includes("DarkTheme") ||
    key.includes("LightColors") ||
    key.includes("LightTheme") ||
    key.includes("Spacing") ||
    key.includes("Typography") ||
    key.includes("defaultCommonColors")
  );
});

export const colorBlockMapper = (color: string, index: number) => {
  return (
    <div
      css={{
        height: `100%`,
        width: `100%`,
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      key={`${index}-${color}`}
    />
  );
};

export const colorMapper = (colorObject: shop.ColorsObject) => {
  const mapperFn = (colorObjKey: string, index: number) => {
    if (
      [
        "neutral",
        "error",
        "info",
        "success",
        "warning",
        "gray",
        "text",
        "background",
      ].includes(colorObjKey)
    )
      return null;
    const colorArr = colorObject[colorObjKey as keyof typeof colorObject] ?? [];
    if (!Array.isArray(colorArr)) return null;
    return (
      <ColorWrapper key={`${colorObjKey}-${index}`}>
        <h4>{colorObjKey}</h4>
        <div className="palette-wrapper">
          {colorArr.map(colorBlockMapper as any)}
        </div>
      </ColorWrapper>
    );
  };
  return mapperFn;
};

export const shopItemsMapper = (key: string, index: number) => {
  const theme = shop[key as keyof typeof shop];

  if (!Array.isArray(theme)) return null;

  const [darkThemeObj] = theme;

  if (!darkThemeObj) return null;

  const {
    theme: { colors: darkThemeColors },
  } = darkThemeObj;

  const items = Object.keys(darkThemeColors).map(colorMapper(darkThemeColors));

  return (
    <Fragment key={`shop-item-${index}`}>
      <ThemeCard
        title={`${index + 1}. ${getThemeName(key)}`}
        themeName={key}
        items={items}
      />
      {objectKeysArr.length - 1 !== index && <hr />}
    </Fragment>
  );
};
