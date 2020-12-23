import styled from "styled-components";
import Image from "next/image";
import { units, colors } from "styles";
import Button from "./Button";
import useInMobile from "hooks/useInMobile";
const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
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
  overflow: hidden;
`;

const TextSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
`;
const Title = styled.div`
  font-size: ${units.HeroTitle};
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 24px !important;
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
  width: 100%;
  text-align: center;
  ${(props) => props.textAlign === "left" && " align-self: flex-start;"}
  max-width: ${(props) => props.maxWidth};
  @media (max-width: 800px) {
    font-size: 16px;
    max-height: 40%;
    text-overflow: ellipsis;
  };
  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 1.2em;
    max-height: 40%;
    margin: 8px 0;
  }
`;

const LogoImage = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-size: cover;
  height: 78%;
  width: 45%;
  position: absolute;
  bottom: -5%;
  left: -10%;
  z-index: 1;
`;

// const Image = styled.div`
// background-image: url(${(props) => props.src});
// background-position: top;
// background-size: cover;
// height: 80vh;
// width: 100vw
// z-index: 0;
// `
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
  const isMobile = useInMobile();
  console.log("IS MOBILE", isMobile);

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
          {button && isMobile && (
            <Button size={"small"} text={button} onClick={buttonAction} />
          )}
          {button && !isMobile && (
            <Button text={button} onClick={buttonAction} />
          )}
        </TextSubContainer>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
