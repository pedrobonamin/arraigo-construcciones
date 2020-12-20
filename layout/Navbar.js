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
// top: 0;
// z-index: 1;
// position: absolute;
top: 0;
width: 100%;
z-index: 100;
  width: 100%;
  background: ${props => props.scrolled ? colors.blackWithOpacity: 'transparent'};
  color: ${colors.white};
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
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
    padding: 16px 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background: ${colors.blackWithOpacity};
  padding: 8px 60px;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  min-width: 350px;
  @media (max-width: 800px) {
    width: 100%;
    clip-path: unset;
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
  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll >= 200) {
      setScrolled(prev => prev < 200 && true);
    } else {
      setScrolled(prev => prev > 200 && false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const height = 60;
  const width = height * 3.2;
  return (
    // <Headroom > 
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
              width={width }
              height={height}
              layout="fixed"
            />
          )}
        </ImageContainer>
      </Nav>
    //  </Headroom>
  );
};
export default Navbar;
