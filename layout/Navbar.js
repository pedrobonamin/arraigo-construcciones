import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { colors, units } from "styles";
import Image from "next/image";
import { useRouter } from "next/router";
import HeadroomComponent from "react-headroom";

const Headroom = styled(HeadroomComponent)`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
  .headroom--unpinned {
    position: fixed;
    transform: translateY(0%);
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  width: 100%;
  background: ${(props) =>
    props.scrolled ? colors.blackWithOpacity : "transparent"};
  color: ${colors.white};
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  max-width: 100vw;
`;

const Ul = styled.ul`
  margin-left: 5%;
  padding: 8px 0;
  flex-grow: 1;
  display: flex;
  font-weight: 200;
  font-size: ${units.NavbarTitles};
  line-height: ${units.NavbarTitles};
  @media (max-width: 800px) {
    margin-left: 0;
    justify-content: center;
    padding: 0 0 8px 0;
    font-size: 12px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 60px;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  min-width: 350px;
  @media (max-width: 800px) {
    width: 100%;
    clip-path: unset;
    min-width: 250px;
    padding: 8px 0;
  }
`;
const Li = styled.li`
  margin-left: 5%;

  ${(props) =>
    props.selected &&
    `
  color: ${colors.red};
  font-weight: 400;
  `}
`;

const MobileLogo = styled.div`
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
${(props) => props.background && ` background: ${colors.black};`}
`;

const MobileNav = styled.div`
position: fixed;
top: 0;
width: 100vw;
z-index: 10;
background: ${colors.blackWithOpacity};
  color: white;
`;
const Navbar = () => {
  const router = useRouter();
  const links = useMemo(
    () => [
      {
        name: "INICIO",
        ref: "/",
      },
      {
        name: "MÉTODO",
        ref: "/metodo",
      },
      {
        name: "NOSOTROS",
        ref: "/nosotros",
      },
      {
        name: "CONTACTO",
        ref: "/contacto",
      },
    ],
    []
  );

  const [scrolled, setScrolled] = useState(false);
  const [mount, setMount] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScroll = () => {
    const scroll = window.scrollY;
    console.log("SCROLL", scroll);
    if (screenWidth < 800 && scroll > 76) {
      return setScrolled(true);
    } else if (screenWidth < 800 && scroll < 76) {
      return setScrolled(false);
    }
    if (scroll >= 200) {
      setScrolled((prev) => prev < 200 && true);
    } else {
      setScrolled((prev) => prev > 200 && false);
    }
  };
  function reportWindowSize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    setMount(true);
  }, []);
  useEffect(() => {
    if (mount) {
      setScreenWidth(window.innerWidth);
    }
  }, [mount]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const height = 60;
  const width = height * 3.2;
  return (
    <>
      {screenWidth > 800 && (
        <Nav scrolled={scrolled}>
          <Ul>
            {(links || []).map((link, index) => (
              <Li key={index} selected={router.route === link.ref}>
                <Link href={link.ref}>
                  <a>{link.name}</a>
                </Link>
              </Li>
            ))}
          </Ul>
          <ImageContainer>
            {scrolled && (
              <Image
                src="/logoalt.png"
                alt="Picture"
                width={height}
                height={height}
                layout="fixed"
              />
            )}
            {!scrolled && (
              <Image
                src="/logo.png"
                alt="Picture"
                width={width}
                height={height}
                layout="fixed"
              />
            )}
          </ImageContainer>
        </Nav>
      )}
      {screenWidth < 800 && (
        <>
          {scrolled && (
            <MobileNav>
              <MobileLogo>
                <Image
                  src="/logo.png"
                  alt="Picture"
                  width={width / 2}
                  height={height / 2}
                  layout="fixed"
                />
              </MobileLogo>
              <Ul>
                {(links || []).map((link, index) => (
                  <Li key={index} selected={router.route === link.ref}>
                    <Link href={link.ref}>
                      <a>{link.name}</a>
                    </Link>
                  </Li>
                ))}
              </Ul>
            </MobileNav>
          )}
          <MobileLogo background>
            <Image
              src="/logo.png"
              alt="Picture"
              width={width}
              height={height}
              layout="fixed"
            />
          </MobileLogo>
        </>
      )}
    </>
  );
};

export default Navbar;
