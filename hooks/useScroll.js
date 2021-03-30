import { useState, useEffect, useRef } from 'react';

const useScroll = (offset = 400) => {
  const [scrolled, setScrolled] = useState(false);
  const [mount, setMount] = useState(false);
  const prevScroll = useRef(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll >= offset && !prevScroll.current) {
      setScrolled(true);
      prevScroll.current = true;
    } else if (scroll <= offset && prevScroll.current) {
      setScrolled(false);
      prevScroll.current = false;
    }
    setScrolled(scroll >= offset);
  };

  useEffect(() => {
    if (mount) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mount]);

  return scrolled;
};

export default useScroll;
