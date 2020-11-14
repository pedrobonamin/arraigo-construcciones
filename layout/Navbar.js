import { useMemo } from "react";
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
`
const Nav = styled.nav`
  width: 100%;
  background: ${colors.grey};
  background: linear-gradient(
    315deg,
    ${colors.blackWithOpacity} 44%,
    ${colors.grey} 44%
  );
  color: ${colors.white};
  padding: 20px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 2px 0px rgba(0, 0, 0, 0.27);
`;

const Ul = styled.ul`
  display: flex;
  font-weight: 200;
  font-size: ${units.NavbarTitles};
  line-height: ${units.NavbarTitles};
  width: 60%;
`;

const Li = styled.li`
  margin-right: 24px;
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

  const height = 70
  const width = height * 3.20
  return (
    <Headroom>
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
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={width}
          height={height}
          layout='fixed'
        />
      </Nav>
    </Headroom>
  );
};
export default Navbar;
