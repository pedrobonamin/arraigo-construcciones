import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const useScroll = (offset = 400) => {
  const [scrolled, setScrolled] = useState(false);
  const prevScroll = useRef(false);
  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll >= offset && !prevScroll.current) {
      setScrolled(true);
      prevScroll.current = true;
    }
    if(scroll < offset && prevScroll.current){
      setScrolled(false);
      prevScroll.current = false;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolled;
};

export default useScroll;
