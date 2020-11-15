import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";

const Main = styled.main`
  height: 3000px;
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
        button='VER MÁS'
        text="Somos un estudio de arquitectura especializado en la construcción de
        viviendas. Cuidamos cada detalle, desde el inicio hasta el final,
        para que nuestros clientes se sientan felices en su nuevo hogar."
        src={"/home/home-hero.jpg"}
      />
    </Main>
  );
}

Home.Layout = MyLayout;
