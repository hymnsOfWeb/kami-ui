import {
  objectKeysArr,
  shopItemsMapper,
} from "@stories/introduction/theme-shop/mappers";
import { ComponentWrapper } from "@stories/introduction/theme-shop/styles";
import { useEffect, useRef, useState } from "react";

const Component = () => {
  const observerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number>(10);
  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries, obv) => {
      const { isIntersecting } = entries?.[0] ?? ({} as never);
      if (!isIntersecting) return;
      setVisibleItems((prevItems) => {
        const newNum = prevItems + 10;
        if (newNum < objectKeysArr.length) {
          return newNum;
        }
        obv.disconnect();
        return objectKeysArr.length;
      });
    };
    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <ComponentWrapper>
      {objectKeysArr.slice(0, visibleItems).map(shopItemsMapper)}
      <div className="observer" ref={observerRef} />
      {visibleItems !== objectKeysArr.length && (
        <div className="loader-wrapper">
          <div className="loader" />
        </div>
      )}
    </ComponentWrapper>
  );
};

export default Component;
