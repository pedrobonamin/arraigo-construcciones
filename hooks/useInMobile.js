import { useState, useEffect } from "react";

const inMobile = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  function reportWindowSize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  return screenWidth < 800;
};

export default inMobile;
