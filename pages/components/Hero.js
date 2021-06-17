import styled from "styled-components";
import Image from "next/image";
import { units, colors } from "styles";
import Button from "./Button";
import useInMobile from "hooks/useInMobile";

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  background: #0e0e0e;
  z-index: 1;
  position: absolute;
  overflow: hidden;
  opacity: 0.4;
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
const Title = styled.h1`
  font-size: ${units.HeroTitle};
  font-weight: 400;
  z-index: 1;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 36px !important;
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

const Text = styled.h2`
  font-size: ${units.HeroText};
  font-weight: 300;
  text-align: ${(props) => props.textAlign};
  line-height: 1.5em;
  margin: 16px 0px;
  width: 100%;
  text-align: center;
  ${(props) => props.textAlign === "left" && " align-self: flex-start;"}
  max-width: ${(props) => props.maxWidth};
  @media (max-width: 800px) {
    font-size: 18px;
    text-overflow: ellipsis;
    width: 100%;
    text-align: center;
  }
`;

const SubText = styled.span`
  font-size: 18px;
  position: absolute;
  top: 70px;
  right: 65px;
  color: white;
  z-index: 2;
  letter-spacing: 2px;
  font-weight: 300;
  @media (max-width: 800px) {
    top: 20px;
    right: 8px;
    font-size: 12px;
  }
`;
const LogoImage = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-size: cover;
  height: 60vw;
  width: 60vw;
  min-height: 50vh;
  position: absolute;
  bottom: -5%;
  left: -120px;
  z-index: 1;
  min-width: 50vh;
  max-height: 400px;
  max-width: 400px;
  @media (max-width: 800px) {
    max-height: 200px;
    max-width: 200px;
    left: -150px;
  }
`;
// const Image = styled.div`
// background-image: url(${(props) => props.src});
// background-position: center;
// background-size: cover;
// min-height: 100vh;
// width: 100vw;
// z-index: 0;
// `;

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

  return (
    <HeroContainer>
      <Filter addSquares={addSquares} />
      <Image
        layout="fill"
        src={src}
        alt={title || 'Page hero'}
        loading="eager"
        placeholder="blur"
        objectFit="cover"
        objectPosition='center'
      />

      {/*   
      <Image  
        src={src}
        alt={src}
        priority
      /> */}
      {!addSquares && <SubText>AMPLIANDO TUS LIMITES</SubText>}
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
