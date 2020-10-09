import { useEffect, useState } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function scrollHandle() {
      setScrollPosition(window.scrollY);
    }

    document.addEventListener("scroll", scrollHandle);

    return () => {
      document.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
