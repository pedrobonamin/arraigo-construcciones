import { useRouter } from "next/router";
import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import Image from "next/image";
import Button from "./components/Button";
import { units, colors } from "styles";

const Main = styled.main``;
const SecondBlock = styled.div`
position: relative;
  min-height: 600px;
  display: flex;
  justify-content: flex-end;
`;
const ImageContainer = styled.div`
  width: 60vw;
  height: 100%;
  position: absolute;
  left: 0;
`;
const TextContainer = styled.div`
  display: flex;
  z-index: 1;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 5vw;
  width: 62vw;
  min-width: 750px;
  min-width: 500px;
  padding: 32px;
  background: linear-gradient(245deg,white 70%,transparent 70%);
  >div {
    width: 500px;
    max-width: 70%;
  }

`;
const Title = styled.div`
  font-size: ${units.SectionTitle};
  text-align: left;
  :after {
    margin-top: 8px;
    content: "";
    display: block;
    margin: 8px 75% 0 0;
    height: 8px;
    background-color: ${colors.red};
  }
`;
const Text = styled.div`
  font-size: ${units.SectionText};
  margin: 32px 0;
`;

const StyledButton = styled(Button)`
  align-self: flex-end !important;
`;
export default function Home() {
  const router = useRouter();

  return (
    <Main>
      <Hero
        title={
          <>
            MÉTODO ICI
            <span style={{ fontSize: "36px", verticalAlign: "super" }}>®</span> 
          </>
        }
        underline="center"
        button="VER MÁS"
        buttonAction={() => router.push("/metodo")}
        text="Somos un estudio de arquitectura especializado en la construcción de
        viviendas. Cuidamos cada detalle, desde el inicio hasta el final,
        para que nuestros clientes se sientan felices en su nuevo hogar."
        textMaxWidth={"60%"}
        src={"/home/home-hero.jpg"}
      />

      <SecondBlock>
        <ImageContainer>
          <Image
            src={"/home/home-trayectoria.jpg"}
            alt={"trayectoria"}
            layout="fill"
            loading="eager"
          />
        </ImageContainer>
        <TextContainer>
          <Title>
            <div style={{ color: colors.red }}>NUESTRA TRAYECTORIA</div>
            <div>ES SINÓNIMO DE CALIDAD</div>
          </Title>
            <Text>
              Somos un estudio de arquitectura especializado en la construcción
              de viviendas. Cuidamos cada detalle, desde el inicio hasta el
              final, para que nuestros clientes se sientan felices en su nuevo
              hogar.
            </Text>
          <StyledButton
            text="VER MÁS"
            onClick={() => router.push("/nosotros")}
          />
        </TextContainer>
      </SecondBlock>
    </Main>
  );
}

Home.Layout = MyLayout;
