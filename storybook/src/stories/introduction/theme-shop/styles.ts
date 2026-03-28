import { styled } from "@common";
import { css } from "@emotion/react";
import { breakpoints } from "@styles/global";

export const loaderCss = css`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #3b3b3b;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: 0 auto;
`;

export const copyBtnCss = css`
  display: flex;
  gap: 0.25em;
  height: fit-content;
  width: fit-content;
  padding: 0.5em 1em;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.125);
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 10px;
  }
`;

export const ComponentWrapper = styled.div`
  width: 100%;
  font-family:
    "Nunito Sans",
    -apple-system,
    ".SFNSText-Regular",
    "San Francisco",
    BlinkMacSystemFont,
    "Segoe UI",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;

  .observer {
    height: 1px;
    width: 100%;
  }

  .loader-wrapper {
    width: 100%;
    display: flex;
    .loader {
      ${loaderCss}
    }
  }

  hr {
    margin: 3rem 0 1.5rem 0;
    border: 1px solid var(--color-background-300);
  }
`;

export const ThemeCardWrapper = styled.div`
  width: 100%;
`;

export const ThemeCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .inner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const ThemeCardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const ColorWrapper = styled.div`
  .palette-wrapper {
    width: 100%;
    display: flex;
    border: 2px solid var(--color-background-600);
    border-radius: 8px;
    overflow: hidden;
    height: 50px;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    h4 {
      margin: 1rem 0;
    }

    .palette-wrapper {
      height: 40px;
      width: min(calc(40px * 9), 100%);
    }
  }
`;
