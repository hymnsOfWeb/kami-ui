import { CustomToastContainer, GlobalStyles } from "@common";
import { MultiThemeProvider, useTheme } from "@kami-ui/react-theme";
import * as allThemes from "@kami-ui/theme-shop";
import { useEffect, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { defaultThemeName } from "./common";
import SbThemeInjector from "./theme-injector";

const objectKeysArr = Object.keys(allThemes).filter((key) => {
  return key.includes("DarkTheme") || key.includes("LightTheme");
});

const themes = objectKeysArr.map((objKey) => {
  return {
    name: objKey,
    theme: allThemes[objKey as keyof typeof allThemes] as allThemes.ThemeObject,
  };
});

const THEME_STORAGE_KEY = "kami-ui-storybook-theme";

const CommonDecorator = ({
  breakPoint,
  children,
}: PropsWithChildren<{
  breakPoint?: boolean;
}>) => {
  const [toastRoot, setToastRoot] = useState<HTMLDivElement | null>(null);
  const [persistedTheme, setPersistedTheme] = useState<string | undefined>(
    undefined,
  );
  const { getCurrentTheme } = useTheme();

  // On mount, read theme from localStorage
  useEffect(() => {
    if (typeof window === "undefined" || breakPoint) return;
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (
      stored &&
      themes.some((t) => {
        return t.name === stored;
      })
    ) {
      setPersistedTheme(stored);
    } else {
      // Try to get current theme from provider if available
      const current = getCurrentTheme();
      if (
        current &&
        themes.some((t) => {
          return t.name === current;
        })
      ) {
        setPersistedTheme(current);
      } else {
        setPersistedTheme(defaultThemeName);
      }
    }
  }, [breakPoint, getCurrentTheme]);

  // Listen for theme changes and update localStorage using getCurrentTheme
  useEffect(() => {
    if (typeof window === "undefined" || breakPoint) return;
    const observer = new MutationObserver(() => {
      const themeName = getCurrentTheme();
      if (
        themeName &&
        themes.some((t) => {
          return t.name === themeName;
        })
      ) {
        window.localStorage.setItem(THEME_STORAGE_KEY, themeName);
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      return observer.disconnect();
    };
  }, [breakPoint, getCurrentTheme]);

  // Sync theme across tabs
  useEffect(() => {
    if (typeof window === "undefined" || breakPoint) return;
    const handler = (e: StorageEvent) => {
      if (
        e.key === THEME_STORAGE_KEY &&
        e.newValue &&
        themes.some((t) => {
          return t.name === e.newValue;
        })
      ) {
        setPersistedTheme(e.newValue);
        // Update body class using getCurrentTheme if possible
        const current = getCurrentTheme();
        if (current !== e.newValue) {
          // Remove old theme class
          for (const bodyClass of Array.from(document.body.classList)) {
            if (bodyClass.startsWith("kami-ui-")) {
              document.body.classList.remove(bodyClass);
              break;
            }
          }
          document.body.classList.add(`kami-ui-${e.newValue}`);
        }
      }
    };
    window.addEventListener("storage", handler);
    return () => {
      return window.removeEventListener("storage", handler);
    };
  }, [breakPoint, getCurrentTheme]);

  useEffect(() => {
    if (!document.body || breakPoint) return;
    const el = document.createElement("div");
    el.id = "react-toastify";
    document.body.appendChild(el);
    setToastRoot(el);
    return () => {
      document.body.removeChild(el);
      setToastRoot(null);
    };
  }, [breakPoint]);

  if (breakPoint) return children;

  // Wait for persistedTheme to be determined
  if (persistedTheme === undefined) return null;

  return (
    <MultiThemeProvider themes={themes} defaultThemeName={persistedTheme}>
      <SbThemeInjector />
      <GlobalStyles />
      {children}
      {toastRoot && createPortal(<CustomToastContainer />, toastRoot)}
    </MultiThemeProvider>
  );
};

export default CommonDecorator;
