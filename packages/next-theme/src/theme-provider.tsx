import { themeBuilder } from "@kami-ui/react-theme-common";
import Head from "next/head";
import { useAmp } from "next/amp";
import type { ThemeProviderProps } from "@kami-ui/types";

export const ThemeProvider = ({
  injectInBody = false,
  disableOnAmp = true,
  theme,
  mode,
  children,
}: ThemeProviderProps) => {
  const isAmp = useAmp();
  const styles = themeBuilder(theme, mode);
  const styleElem = <style id="kami-ui-styles" dangerouslySetInnerHTML={{ __html: styles }} />;
  const elem = injectInBody ? styleElem : <Head>{styleElem}</Head>;
  return (
    <>
      {!(disableOnAmp && isAmp) && elem}
      {children}
    </>
  );
};
