import styled from "styled-components";
import Image from "next/image";
import { colors } from "styles";
import FacebookIcon from "@material-ui/icons/Facebook";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import LinkedinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = styled.footer`
  display: flex;
  z-index: 10;
  width: 100%;
  padding: 20px 0;
  border-top: 8px solid ${colors.greyDivider};
  background: ${colors.footerBackground};
  color: white;
  > div {
    width: 33%;
    display: flex;
    justify-content: center;
    padding: 12px 16px;
  }
  @media (max-width: 800px) {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
  }
`;

const Contact = styled.div`
  font-size: 10px;
  line-height: 16px;
`;
const Staff = styled.div`
  border-right: 1px solid ${colors.greyDivider};
  border-left: 1px solid ${colors.greyDivider};
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
const Titles = styled.span`
  font-size: 14px;
`;

const Component = () => {
  const height = 60;
  const width = height * 3.2;
  return (
    <Footer>
      <div>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={width}
          height={height}
          layout="fixed"
        />
      </div>
      <Staff>
        <Titles>STAFF DE APOYO</Titles>
        <Image
          src="/icons/martini.png"
          height="60"
          width={60*1.575}
          alt="contact-image"
        />
      </Staff>
      <Contact>
        <address style={{fontStyle: 'normal'}}>
          <ul>
            <li>
              <Titles>CONTACTO:</Titles>
            </li>
            <li>
              {" "}
              <a href="mailto:administracion@grupoarraigo.com">
                administracion@grupoarraigo.com
              </a>
            </li>

            <li> +54 (0341) 2972732 </li>
            <li>
              {" "}
              <a
                href="https://goo.gl/maps/oWHUHgeypuuNTWpMA"
                target="_blank"
                rel="noreferrer"
              >
                San Lorenzo 1047 1 A, Rosario, Santa Fe{" "}
              </a>
            </li>
            <li>
              {/* <YouTubeIcon fontSize="small" style={{ marginRight: "4px" }} /> */}
              <FacebookIcon fontSize="small" style={{ marginRight: "4px" }} />
              {/* <LinkedinIcon fontSize="small" style={{ marginRight: "4px" }} /> */}
              <InstagramIcon fontSize="small" style={{ marginRight: "4px" }} />
            </li>
          </ul>
        </address>
      </Contact>
    </Footer>
  );
};
export default Component;
