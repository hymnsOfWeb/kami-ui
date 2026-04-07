import { useEffect, type PropsWithChildren } from "react";

const SbThemeInjector = ({ children }: PropsWithChildren<unknown>) => {
  useEffect(() => {
    // If in iframe, inject into parent. If standalone, inject into self.
    const isIframe = window.parent !== window;
    const appStyleHref = new URL(
      "./app-styles.css",
      isIframe ? parent.window.location.href : window.location.href,
    ).toString();
    let styleElem;
    if (isIframe) {
      styleElem = parent.document.querySelector(
        "head > #custom-app-style-link",
      );
      if (styleElem) return;
      styleElem = parent.document.createElement("link");
      styleElem.setAttribute("id", "custom-app-style-link");
      styleElem.setAttribute("rel", "stylesheet");
      styleElem.setAttribute("href", appStyleHref);
      parent.document.head.appendChild(styleElem);
    } else {
      styleElem = document.head.querySelector("#custom-app-style-link");
      if (styleElem) return;
      styleElem = document.createElement("link");
      styleElem.setAttribute("id", "custom-app-style-link");
      styleElem.setAttribute("rel", "stylesheet");
      styleElem.setAttribute("href", appStyleHref);
      document.head.appendChild(styleElem);
    }
  }, []);

  useEffect(() => {
    const isIframe = window.parent !== window;
    const callback: MutationCallback = () => {
      const styles = document.querySelector("#kami-ui-styles")?.innerHTML;
      if (!styles) return;
      if (isIframe) {
        let newStyleElem =
          parent.document.head.querySelector("#kami-ui-styles");
        if (!newStyleElem) {
          const tempElem = parent.document.createElement("style");
          tempElem.id = "kami-ui-styles";
          parent.document.head.appendChild(tempElem);
          newStyleElem = tempElem;
        }
        newStyleElem.innerHTML = styles;
      } else {
        let newStyleElem = document.head.querySelector("#kami-ui-styles");
        if (!newStyleElem) {
          const tempElem = document.createElement("style");
          tempElem.id = "kami-ui-styles";
          document.head.appendChild(tempElem);
          newStyleElem = tempElem;
        }
        newStyleElem.innerHTML = styles;
      }
    };
    const observer = new MutationObserver(callback);
    callback([], observer);
    observer.observe(document.head, {
      childList: true,
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const isIframe = window.parent !== window;
    const callback: MutationCallback = () => {
      if (
        !document.body.getAttribute("class")?.includes("kami-ui") ||
        !isIframe
      ) {
        return;
      }
      for (const parentBodyClass of parent.document.body.classList) {
        if (parentBodyClass.includes("kami-ui")) {
          parent.document.body.classList.remove(parentBodyClass);
        }
      }
      for (const bodyClass of document.body.classList) {
        if (bodyClass.includes("kami-ui")) {
          parent.document.body.classList.add(bodyClass);
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(document.body, {
      attributes: true,
    });
    callback([], observer);
    return () => {
      observer.disconnect();
    };
  }, []);

  return children;
};

export default SbThemeInjector;
