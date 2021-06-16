import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import { units, colors } from "styles";
import hero from '../public/heros/metodo-hero.webp'

const Main = styled.div``;
const SecondSection = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  padding: 80px 20px;
  ${(props) =>
    props.last &&
    `
    background: ${colors.footerBackground};
    background: linear-gradient(114deg, ${colors.footerBackground} 50%, rgba(255,255,255,1) 45%);
    `}
  @media (max-width: 800px) {
    ${(props) =>
      props.last &&
      `
      padding: 20px 20px;
      background: ${colors.footerBackground};`}
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  min-width: 320px;
  min-height: 400px;
  @media (max-width: 800px) {
    width: 100vw;
    min-height: 320px;
  }
`;

const ImageBefore = styled.div`
  // flex-shrink: 0;
  width: 70%;
  // height: 40%;
  position: relative;
  z-index: 2;
  // min-height: 400px;
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
  @media (max-width: 800px) {
    min-height: 80vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  z-index: 1;
  width: 45vw;
  min-width: 320px;
  flex-direction: column;
  letter-spacing: 1px;
  align-items: flex-start;
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
    align-items: center;
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
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;
const Text = styled.div`
  padding: 1em;
  background: ${colors.footerBackground};
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
        src={hero}
      />

      <SecondSection last reverse>
        <ImageContainer>
          <ImageBefore reverse={true}>
            <Image
              reverse
              src="https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/ezgif.com-gif-maker.webp?alt=media&token=a2726fe5-9574-4212-a036-31bee4a47827"
              alt="trayectoria"
            />
          </ImageBefore>
          <ImageText>
            <p>
              Está construcción se afronta de manera integral para cubrir
              constantemente cada necesidad. Ofreciendo un abanico muy amplio de
              servicios, dando una excelente calidad de producto final.
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
              Para ampliar tus límites es necesario accionar de forma innovadora
              y eficaz, pero a su vez empleando la experiencia adquirida a
              través de cada paso. Esto nos llevó a desarrollar un método propio
              para llevar a otro nivel la ejecución de cada proyecto,
              materializando sus ideas y haciendo realidad sus sueños.
            </p>
            <p>
              La metodología de trabajo es inteligente partiendo de su esencia
              proactiva en la auditoría exhaustiva de los requerimientos y
              objetivos de cada proyecto. Generando una planificación de las
              previsiones actuales e incluso creando soluciones para acciones
              futuras. De este modo logramos la optimización de los recursos,
              disponiendo de personal capacitado para que el crecimiento de su
              empresa llegue hasta el último detalle.
            </p>
          </Text>
        </TextContainer>
      </SecondSection>
    </Main>
  );
}

Home.Layout = MyLayout;
