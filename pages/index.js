import styled from "styled-components";
import MyLayout from "../layout";
import Image from "next/image";
import { units } from "styles";
import Button from './components/Button'

const Main = styled.main`
  height: 3000px;
`;
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
`;
const Text = styled.div`
  font-size: ${units.HeroText};
  width: 60%;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 16px;
`;


export default function Home() {
  return (
    <Main>
      <HeroContainer>
        <Filter />
        <Image
          src="/home/home-hero.jpg"
          alt="Home-hero"
          height="1000"
          width="1600"
          sizes="60vh"
          priority
        />
        <TextContainer>
          <Title>
            MÉTODO  ICI{" "}
            <span style={{ fontSize: "36px", verticalAlign: "super" }}>®</span> 
          </Title>
          <Text>
            Somos un estudio de arquitectura especializado en la construcción de
            viviendas. Cuidamos cada detalle, desde el inicio hasta el final,
            para que nuestros clientes se sientan felices en su nuevo hogar.
          </Text>
          <Button text={'VER MÁS'}/>
        </TextContainer>
      </HeroContainer>
    </Main>
  );
}

Home.Layout = MyLayout;
