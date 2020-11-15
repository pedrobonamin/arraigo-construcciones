import { useRouter } from 'next/router'
import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";

const Main = styled.main`
  height: 3000px;
`;

export default function Home() {
  const router = useRouter()

const handleButtonClick = () => {
  console.log('CLICKED')
  
  router.push('/metodo')
  console.log('CLICKED')
}
  return (
    <Main>
      <Hero
        title={
          <>
            MÉTODO ICI
            <span style={{ fontSize: "36px", verticalAlign: "super" }}>®</span> 
          </>
        }
        underline='center'
        button='VER MÁS'
        buttonAction={handleButtonClick}
        text="Somos un estudio de arquitectura especializado en la construcción de
        viviendas. Cuidamos cada detalle, desde el inicio hasta el final,
        para que nuestros clientes se sientan felices en su nuevo hogar."
        textMaxWidth={'60%'}
        src={"/home/home-hero.jpg"}
      />
    </Main>
  );
}

Home.Layout = MyLayout;
