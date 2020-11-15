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
        title="CONOCENOS"
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/nosotros/nosotros-hero.png"}
      />
    </Main>
  );
}

Home.Layout = MyLayout;
