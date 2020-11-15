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
  background: #0e0e0e75;
  z-index: 1;
  position: absolute;
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
const Title = styled.div`
  font-size: ${units.HeroTitle};
  z-index: 1;
  :after {
	content: '';
	display: block;
	width: 30%;
	height: 4px;
	background-color: ${colors.white};
}
}
`;

const Text = styled.div`
  font-size: ${units.HeroText};
  width: 60%;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 16px;
`;

const Hero = ({ src, title, text, button }) => {
  return (
    <HeroContainer>
      <Filter />
      <Image
        src={src}
        alt={src}
        height="1000"
        width="1600"
        sizes="60vh"
        priority
      />
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {button && <Button text={button} />}
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
