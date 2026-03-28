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

// eslint-disable-next-line react-refresh/only-export-components -- This file is for exporting common components and utilities, not just React components.
export { default as styled } from "@emotion/styled";
