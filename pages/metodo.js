import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import { units, colors } from "styles";

const Main = styled.div``;
const SecondSection = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  padding: 80px 20px;
  ${(props) =>
    props.last &&
    `
    background: rgb(38,29,23);
    background: linear-gradient(114deg, rgba(38,29,23,1) 45%, rgba(255,255,255,1) 45%);
    `}
  @media (max-width: 800px) {
    ${(props) =>
      props.last &&
      `
      background: rgb(38,29,23);`}
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55vw;
  min-width: 320px;
  min-height: 400px;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const ImageBefore = styled.div`
  flex-shrink: 0;
  width: 80%;
  height: 40%;
  position: relative;
  z-index: 2;
  min-height: 400px;
  ::before {
    z-index: 0;
    content: "";
    border: 5px solid #b1b1b1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -50px;
    ${(props) =>
      props.reverse
        ? `
        right: -40px;
        `
        : `
        left: -40px;`}
  }
`;
const Image = styled.div`
  flex-shrink: 0;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  min-height: 400px;
`;
const TextContainer = styled.div`
  display: flex;
  z-index: 1;
  width: 35vw;
  min-width: 320px;
  flex-direction: column;
  letter-spacing: 1px;
  align-items: center;
  > div {
    width: 500px;
    max-width: 70%;
    @media (max-width: 800px) {
      width: 100vw;
      max-width: unset;
      padding: 1em;
    }
  }
  color: white;
  @media (max-width: 800px) {
    width: 100vw;
    padding: 40px 20px;
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
  padding: 1em;
  background: rgb(38, 29, 23);
  font-size: ${units.SectionText};
  margin: 32px 0;
  line-height: 1.5em;
  margin: 16px 0px;
  letter-spacing: 1px;
`;
const ImageText = styled.div`
  padding: 1em;
  font-size: ${units.SectionText};
  margin: 32px 0;
  line-height: 1.5em;
  margin: 16px 0px;
  letter-spacing: 1px;
  max-width: 700px;
  @media (max-width: 800px) {
    max-width: unset;
    width: 100vw;
    color: white;
  }
`;

export default function Home() {
  return (
    <Main>
      <Hero
        title={
          <>
            MÉTODO ICI
            <span style={{ fontSize: "36px", verticalAlign: "super" }}>®</span> 
          </>
        }
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/metodo/metodo-hero.png"}
      />

      <SecondSection last reverse>
        <ImageContainer>
          <ImageBefore reverse={true}>
            <Image src={"/metodo/metodo.png"} alt={"trayectoria"} />
          </ImageBefore>
          <ImageText>
            <p>
              Somos un estudio de arquitectura especializado en la construcción
              de viviendas. Cuidamos cada detalle, desde el inicio hasta el
              final, para que nuestros clientes se sientan felices en su nuevo
              hogar.
            </p>
            <p>
              Somos un estudio de arquitectura especializado en la construcción
              de viviendas. Cuidamos cada detalle, desde el inicio hasta el
              final, para que nuestros clientes se sientan felices en su nuevo
              hogar.
            </p>
          </ImageText>
        </ImageContainer>
        <TextContainer>
          <Title>
            <div style={{ color: colors.red }}>NUESTRA TRAYECTORIA</div>
            <div>ES SINÓNIMO DE CALIDAD</div>
          </Title>
          <Text>
            <p>
              Somos un estudio de arquitectura especializado en la construcción
              de viviendas. Cuidamos cada detalle, desde el inicio hasta el
              final, para que nuestros clientes se sientan felices en su nuevo
              hogar.
            </p>
            <p>
              Somos un estudio de arquitectura especializado en la construcción
              de viviendas. Cuidamos cada detalle, desde el inicio hasta el
              final, para que nuestros clientes se sientan felices en su nuevo
              hogar.
            </p>
          </Text>
        </TextContainer>
      </SecondSection>
    </Main>
  );
}

Home.Layout = MyLayout;
