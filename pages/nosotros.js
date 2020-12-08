import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";

import { units, colors } from "styles";
const Main = styled.main`
  // height: 3000px;
`;

const TextContainer = styled.div`
  min-height: 1000px;
  background: rgb(38, 29, 23);
  padding: 100px 20px;
`;
const Title = styled.div`
  font-size: ${units.SectionTitle};
  text-align: left;
  color: ${colors.white};
  max-width: 300px;
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
color: ${colors.white};
line-height: 1.5em;
margin: 16px 0px;
letter-spacing: 1px;
`;
export default function Home() {
  return (
    <Main>
      <Hero
        title="CONOCENOS"
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/nosotros/nosotros-hero.png"}
      />
      <TextContainer>
        <Title>
          <div>AMPLIANDO TUS LÍMITES</div>
        </Title>
        <Text>
          Somos una empresa con una cultura de compromiso con el cliente, cuyo
          objetivo es alcanzar la calidad y el cumplimiento del plazo de los
          proyectos, priorizando la seguridad en obra y nuestra vocación de
          servicio. Más que Obras, Construimos Proyectos Integrales, abarcamos
          obras civiles, metalúrgicas, combinando proyecto, dirección y
          servicios, dando soluciones definitivas a cada proyecto en particular.
        </Text>
      </TextContainer>
    </Main>
  );
}

Home.Layout = MyLayout;
