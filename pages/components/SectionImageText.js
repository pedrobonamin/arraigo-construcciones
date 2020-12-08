import styled from "styled-components";
import { units, colors } from "styles";

const Main = styled.div`
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  ${(props) =>
    props.last &&
    `
    background: rgb(38,29,23);
background: linear-gradient(125deg, rgba(38,29,23) 66%, rgba(255,255,255,1) 66%);
    `}
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 65vw;
  min-width: 320px;
  flex-shrink: 0;
  padding: 20px 0 0 20px;
`;

const ImageBefore = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  z-index: 2;
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
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`;
const TextContainer = styled.div`
  display: flex;
  z-index: 1;
  height: 100%;
  width: 35vw;
  min-width: 320px;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 1px;
  align-items: center;
  > div {
    width: 500px;
    max-width: 70%;
  }
  ${props => props.last && `
  color: white;`}
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

const Component = ({ reverse, last, image }) => {
  return (
    <Main reverse={reverse} last={last}>
      <ImageContainer>
        <ImageBefore reverse={reverse}>
          <Image src={image} alt={"trayectoria"} />
        </ImageBefore>
      </ImageContainer>
      <TextContainer last={last}>
        <Title>
          <div style={{ color: colors.red }}>NUESTRA TRAYECTORIA</div>
          <div>ES SINÓNIMO DE CALIDAD</div>
        </Title>
        <Text>
          Somos un estudio de arquitectura especializado en la construcción de
          viviendas. Cuidamos cada detalle, desde el inicio hasta el final, para
          que nuestros clientes se sientan felices en su nuevo hogar.
        </Text>
      </TextContainer>
    </Main>
  );
};

export default Component;
