import { css } from "@emotion/react";

export { default as styled } from "@emotion/styled";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  body {
    background-color: var(--color-background-100);
    color: var(--color-text-900);
    box-sizing: border-box;

    --border-color: var(--color-background-600);
    font-family: var(--font-sans) !important;
  }

  .sbdocs-wrapper,
  .sbdocs-preview {
    background-color: var(--color-background-100) !important;
  }

  .sbdocs-content {
    *:not([class*="kami"]) {
      color: var(--color-text-800) !important;
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
    div[focusable="true"] {
      &:focus {
        outline: var(--color-complementary-800) solid 2px;
      }
    }
    pre {
      background-color: var(--color-background-200) !important;
      & > * {
        background-color: transparent !important;
      }
      div:has(> button) {
        background-color: transparent !important;
      }
      button {
        background-color: var(--color-background-300) !important;
        &:focus {
          box-shadow: var(--color-complementary-800) 0px -3px 0px 0px inset !important;
        }
      }
    }
  }

  .sbdocs-preview {
    border: 1px solid var(--border-color) !important;
    div[role="toolbar"] {
      background: transparent !important;
      * {
        color: var(--color-text-700) !important;
      }
    }
  }

  .docblock-argstable {
    thead {
      tr > * {
        border-top: 1px solid var(--color-background-300) !important;
        &:first-child {
          border-left: 1px solid var(--color-background-300) !important;
          border-top-left-radius: 5px;
        }
        &:last-child {
          border-right: 1px solid var(--color-background-300) !important;
          border-top-right-radius: 5px;
        }
      }
    }
    tbody > tr > * {
      background: var(--color-background-200) !important;
    }
    tbody > tr:first-of-type > td:first-of-type {
      border-inline-start: 0px solid transparent !important;
      border-block-start: 0px solid transparent !important;
      border-top-left-radius: 0px !important;
    }
    tbody > tr:first-of-type > td:last-child {
      border-inline-end: 0px solid transparent !important;
      border-block-start: 0px solid transparent !important;
      border-top-right-radius: 0px !important;
    }
    td select {
      background: var(--color-background-300) !important;
      cursor: pointer;
    }
    span:has(select) > svg {
      fill: currentColor !important;
      path {
        fill: currentColor !important;
      }
    }
    textarea {
      background: var(--color-background-300) !important;
      color: var(--color-text-900) !important;
      &:focus {
        box-shadow: var(--color-complementary-500) 0px 0px 0px 1px inset !important;
      }
    }
    label:has(input[role="switch"]) {
      background: var(--color-background-400) !important;
    }
    input[role="switch"] {
      /* background: var(--color-background-400) !important; */
      &:checked ~ span:last-of-type,
      &:not(:checked) ~ span:first-of-type {
        background: var(--color-background-300) !important;
      }
      &:focus {
        box-shadow: var(--color-complementary-500) 0px 0px 0px 1px inset !important;
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
