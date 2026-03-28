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
  .sbdocs-content {
    * {
      color: var(--color-text-900) !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    ul,
    ol,
    li {
      font-family: var(--font-sans) !important;
    }
    code {
      background-color: var(--color-background-200) !important;
      border: 1px solid var(--color-background-700) !important;
      font-family: var(--font-mono) !important;
    }
    pre {
      & > * {
        background-color: var(--color-background-200) !important;
      }
      div:has(> button) {
        background-color: transparent !important;
      }
      div[focusable="true"] {
        &:focus {
          outline: var(--color-complementary-800) solid 2px;
        }
      }
      button {
        background-color: var(--color-background-300) !important;
        &:focus {
          box-shadow: var(--color-complementary-800) 0px -3px 0px 0px inset !important;
        }
      }
    }
  }
`;

export const breakpoints = Object.freeze({
  desktop: 1024,
  tablet: 900,
  mobile: 600,
} as const);

export default globalStyles;
