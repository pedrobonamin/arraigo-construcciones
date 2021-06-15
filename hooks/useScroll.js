import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const useScroll = (offset = 400) => {
  const [scrolled, setScrolled] = useState(false);
  const prevScroll = useRef(false);
  const router = useRouter()
  const handleScroll = () => {
    const scroll = window.scrollY;
    if(scroll === 0) router.push('#')
    if (scroll >= offset && !prevScroll.current) {
      setScrolled(true);
      prevScroll.current = true;
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
