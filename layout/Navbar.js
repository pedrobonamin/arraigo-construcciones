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
`;
const Nav = styled.nav`
// position: fixed;
// top: 0;
// z-index: 1;
  width: 100%;
  background: ${colors.grey};
  color: ${colors.white};
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 2px 0px rgba(0, 0, 0, 0.27);
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
  background: ${colors.blackWithOpacity};
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

  const [secondary, setSecondary] = useState(false);
  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 100) {
      setSecondary(true);
    } else {
      setSecondary(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("SECONDARY?", secondary);

  const height = 70;
  const width = height * 3.2;
  return (
    <Headroom > 
      <Nav>
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
          {secondary && (
            <Image
              src="/logoalt.png"
              alt="Picture"
              width={height}
              height={height}
              layout="fixed"
            />
          )}
          {!secondary && (
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
     </Headroom>
  );
};
export default Navbar;
