import styled from "styled-components";
import Image from "next/image";
import { colors } from "styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = styled.footer`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-top: 8px solid ${colors.greyDivider};
  background: ${colors.blackWithOpacity};
  color: white;
  > div {
    width: 33%;
    display: flex;
    justify-content: center;
    padding: 12px 16px;
  }
`;

const Contact = styled.div`
  font-size: 10px;
  line-height: 16px;
`;
const Staff = styled.div`
  border-right: 1px solid ${colors.greyDivider};
  border-left: 1px solid ${colors.greyDivider};
`;
const Titles = styled.span`
  font-size: 14px;
`;

const Component = () => {
  return (
    <Footer>
      <div>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={300}
          height={80}
        />
      </div>
      <Staff>
        <Titles>STAFF</Titles>
      </Staff>
      <Contact>
        <ul>
          <li>
            <Titles>CONTACTO:</Titles>
          </li>
          <li>info@arraigo.com.ar</li>
          <li> +54 (341) 4683676 | +54 (341) 3871945</li>
          <li> J.M Gutierrez 1994, Rosario, Argentina</li>
          <li>
            <YouTubeIcon fontSize="small" style={{ marginRight: "4px" }} />
            <FacebookIcon fontSize="small" style={{ marginRight: "4px" }} />
            <LinkedinIcon fontSize="small" style={{ marginRight: "4px" }} />
            <InstagramIcon fontSize="small" style={{ marginRight: "4px" }} />
          </li>
        </ul>
      </Contact>
    </Footer>
  );
};
export default Component;
