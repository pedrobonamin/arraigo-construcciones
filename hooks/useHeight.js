
import { useState, useEffect } from "react";

const inMobile = () => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [mount, setMount] = useState(false)

  function reportWindowSize() {
    setScreenHeight(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  useEffect(() => {
    if(mount){
      setScreenHeight(window.innerHeight);
    }
  }, [mount])
  useEffect(() => {
    setMount(true)
  },[])



  return screenHeight;
};

export default inMobile;
