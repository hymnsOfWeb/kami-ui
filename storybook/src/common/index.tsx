/* eslint-disable react-refresh/only-export-components -- This file is for exporting common components and utilities, not just React components.*/
import { Global } from "@emotion/react";
import globalStyles from "@styles/global";
import type { FC } from "react";
import { Slide, ToastContainer } from "react-toastify";

export const GlobalStyles: FC<unknown> = () => {
  return <Global styles={globalStyles} />;
};

export const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
  );
};

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

export { default as styled } from "@emotion/styled";
