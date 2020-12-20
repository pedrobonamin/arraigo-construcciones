import styled from "styled-components";
import Image from "next/image";
import { units, colors } from "styles";
import Button from "./Button";

const HeroContainer = styled.div`
  position: relative;
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  background: #0e0e0ea3;
  z-index: 1;
  position: absolute;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 1px black;
`;

const TextSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: ${units.HeroTitle};
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 48px !important;
  }
  :after {
    content: "";
    display: block;
    margin: ${(props) =>
      props.underline === "center" ? "0 30%" : "0 60% 0 0"};
    height: 4px;
    background-color: ${colors.white};
  }
`;

const Text = styled.div`
  font-size: ${units.HeroText};
  text-align: ${(props) => props.textAlign};
  line-height: 1.5em;
  margin: 16px 0px;
  ${(props) => props.textAlign === "left" && " align-self: flex-start;"}
  max-width: ${(props) => props.maxWidth};
`;

const LogoImage = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-size: cover;
  height: 40%;
  width: 30%;
  position: absolute;
  bottom: 0;
  left: -110px;
  z-index: 1;
`;
const Hero = ({
  src,
  title,
  text,
  button,
  buttonAction,
  underline,
  textAlign = "center",
  textMaxWidth,
  addSquares = true,
}) => {
  return (
    <HeroContainer>
      <Filter addSquares={addSquares} />
      <Image
        src={src}
        alt={src}
        height="1000"
        width="1600"
        sizes="60vh"
        priority
      />
      {addSquares && <LogoImage src="/isologoContorno.png" />}
      <TextContainer>
        <TextSubContainer>
          <Title underline={underline}>{title}</Title>
          <Text maxWidth={textMaxWidth} textAlign={textAlign}>
            {text}
          </Text>
          {button && <Button text={button} onClick={buttonAction} />}
        </TextSubContainer>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
