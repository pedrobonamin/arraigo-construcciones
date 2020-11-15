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
        text="AMPLIANDO TUS LÍMITES"
        textAlign='left'
        src={"/metodo/metodo-hero.png"}
      />
    </Main>
  );
}

Home.Layout = MyLayout;
