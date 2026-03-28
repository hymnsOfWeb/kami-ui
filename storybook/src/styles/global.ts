import { css } from "@emotion/react";

const globalStyles = css`
  body {
    color: var(--color-text-900);
    box-sizing: border-box;

    --border-color: var(--color-background-600);
  }
  .sbdocs-wrapper,
  .sbdocs-preview {
    background-color: var(--color-background-100) !important;
  }
  .sbdocs-preview {
    border: 1px solid var(--border-color) !important;
  }
  .sbdocs-content > * {
    color: var(--color-text-900) !important;
  }
`;

export const breakpoints = Object.freeze({
  desktop: 1024,
  tablet: 900,
  mobile: 600,
} as const);

export default globalStyles;
