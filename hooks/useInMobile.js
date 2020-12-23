import { useState, useEffect } from "react";

const inMobile = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [mount, setMount] = useState(false)

  function reportWindowSize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  useEffect(() => {
    if(mount){

      setScreenWidth(window.innerWidth);
    }
  }, [mount])
  useEffect(() => {
    setMount(true)
  },[])



  return screenWidth < 800;
};

export default inMobile;
