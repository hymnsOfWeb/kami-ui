import { jsx } from "@emotion/react";
import { fullWidthContainerCss, fullWidthWrapperCss } from "./styles";
import { FullWidthWrapperProps } from "./types";

export function FullWidthWrapper({
  containerSize = "90%",
  maxContentWidth = "1800px",
  className,
  children,
  element = "section",
  secondContainer,
  wrapperClassName,
  wrapperCss,
  isContainerCenter = true,
}: FullWidthWrapperProps) {
  const innerElement = jsx(
    "div",
    {
      css: [fullWidthContainerCss(containerSize, maxContentWidth)],
      className,
    },
    children,
  );
  const outerElement = jsx(
    element,
    {
      className: wrapperClassName,
      css: [fullWidthWrapperCss(isContainerCenter), wrapperCss],
    },
    innerElement,
    secondContainer,
  );
  return outerElement as JSX.Element;
}

export type * from "./types";
