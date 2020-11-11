import { useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";
import { colors, units } from "styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Headroom from "react-headroom";

const Nav = styled.nav`
  width: 100%;
  background: ${colors.grey};
  background: linear-gradient(
    315deg,
    ${colors.blackWithOpacity} 44%,
    ${colors.greyWithOpacity} 44%
  );
  color: ${colors.white};
  padding: 15px 60px;
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
  margin-right: 16px;
  ${(props) =>
    props.selected &&
    `
  color: ${colors.red};
  font-weight: 400;
  `}
`;
const LogoContainer = styled.div``;
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

  return (
    <Headroom>
      <Nav>
        <Ul>
          {(links || []).map((link) => (
            <Li selected={router.route === link.ref}>
              <Link href={link.ref}>
                <a>{link.name}</a>
              </Link>
            </Li>
          ))}
        </Ul>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={300}
          height={80}
        />
      </Nav>
    </Headroom>
  );
};
export default Navbar;
