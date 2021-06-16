import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import Link from "next/link";
import hero from '../public/heros/nosotros-hero.webp'

import { units, colors } from "styles";

const TextContainer = styled.div`
  background: ${colors.footerBackground};
  padding: 60px 20px;
  @media (max-width: 800px) {
    padding: 20px;
  }
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
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;
const PContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Text = styled.div`
  color: ${colors.white};
  line-height: 1.5em;
  margin: 8px 0px;
  letter-spacing: 1.2px;
  width: 45%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const LastText = styled.div`
  color: ${colors.white};
  line-height: 1.5em;
  margin: 16px 0px;
  letter-spacing: 1.2px;
  width: 100%;
  text-align: center;
`;
const StyledLink = styled.span`
  text-decoration: underline !important;
  font-weight: bold;
`;
export default function Home() {
  return (
    <>
      <Hero
        title="CONOCENOS"
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={hero}
      />
      <TextContainer>
        <Title>
          <div>AMPLIANDO TUS LÍMITES</div>
        </Title>
        <PContainer>
          <Text>
            <p>
              Arraigo inicia en 2005, desarrollando sus primeros pasos en el
              ámbito de la construcción y dando nuestro mayor esfuerzo proyecto
              a proyecto. De esta manera logramos consolidar un equipo
              experimentado, eficaz y orientado al clientes siendo flexibles,
              responsables, innovadores, resolutivos, con alta capacidad de
              respuesta y cumpliendo con los plazos acordados.
            </p>
          </Text>
          <Text>
            <p>
              A su vez, nuestra esencia de evolucionar constantemente nos llevó
              a brindar un servicio integrador para poder cubrir sus necesidades
              en un solo lugar, reinventándonos como ingeniería de proyectos. De
              esta manera, diseñamos una nueva forma de trabajo,{" "}
              <Link href="/metodo" passHref>
                <StyledLink>Método ICI</StyledLink>
              </Link>
              , para entregarles soluciones innovadoras.
            </p>
          </Text>
          {/* <Text>
            <p>
         
            </p>
          </Text> */}
          <LastText>
            Nuestro objetivo es ampliar sus límites, esforzándonos codo a codo
            para potenciar su crecimiento al máximo.
          </LastText>
        </PContainer>
      </TextContainer>
    </>
  );
}

Home.Layout = MyLayout;
