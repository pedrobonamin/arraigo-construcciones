import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import Tabs from './components/Tabs'

const Main = styled.main`
  height: 3000px;
`;

export default function Home() {
  return (
    <Main>
      <Hero
        title={"HOGAR"}
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/hogar/hogar-hero.jpg"}
      />
    </Main>
  );
}

Home.Layout = MyLayout;
