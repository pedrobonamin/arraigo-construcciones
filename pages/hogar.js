import { useState } from "react";
import styled, { keyframes } from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import SectionImageText from "./components/SectionImageText";
import { colors, units } from "styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Main = styled.main`
  // height: 3000px;
`;
const TextContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(38, 29, 23);
  position: relative;
`;
const Text = styled.div`
  font-size: ${units.SectionText};
  animation: ${fadeIn} 1s ease forwards 1;
  color: ${colors.white};
  max-width: 60%;
  line-height: 1.5rem;
  letter-spacing: 1px;
  z-index: 1;
`;

const BackgroundText = styled.div`
  position: absolute;
  z-index: 0;
  font-size: 15vw;
  font-weight: 800;
  letter-spacing: 6px;
  color: white;
  text-transform: uppercase;
  bottom: 0;
  color: rgb(45 45 45 / 80%);
`;

const Divider = styled.div`
width: 100%;
height: 8px;
background ${colors.black};
`;

export default function Industry() {
  const [selectedTab, setSelectedTab] = useState("civ");

  const tabsInfo = [
    {
      tabName: "civ",
      position: "first",
      text: "Albañilería",
      image: "/hogar/albanileria.png",
      icon: "/icons/albanil.png",
      detailText:
        " En este amplio rubro, estará dejando en nuestras manos todo el trabajo de construcción y refacción para el hogar. Garantizamos una labor de calidad, confianza y responsabilidad con nuestros clientes.",
    },
    {
      tabName: "tec",
      position: "center",
      text: "Carpintería",
      image: "/hogar/carpinteria.png",
      icon: "/icons/rule.png",
      detailText:
        "Realizamos tareas de armado, refacción, y mantenimiento de estructuras, obras y equipamiento.",
    },
    {
      tabName: "pintura",
      position: "last",
      text: "pintura",
      image: "/hogar/pintura.png",
      icon: "/icons/paint.png",
      detailText:
        "Tenemos un equipo especializado en ingenieria electromecanica y electronica para satisfacer todas las necesidades que se presenten para cada tipo de proyecto, tanto en equipamiento, como así también en servicios de instalación y mantenimiento preventivo/correctivo",
    },
  ];

  const tabsInfo2 = [
    {
      tabName: "civil",
      position: "first",
      text: "Albañilería",
      image: "/hogar/albanileria.png",
      icon: "/icons/albanil.png",
      detailText:
        " En este amplio rubro, estará dejando en nuestras manos todo el trabajo de construcción y refacción para el hogar. Garantizamos una labor de calidad, confianza y responsabilidad con nuestros clientes.",
    },
    {
      tabName: "tecno",
      position: "center",
      text: "Carpintería",
      image: "/hogar/carpinteria.png",
      icon: "/icons/rule.png",
      detailText:
        "Realizamos tareas de armado, refacción, y mantenimiento de estructuras, obras y equipamiento.",
    },
    {
      tabName: "pinturas",
      position: "last",
      text: "pintura",
      image: "/hogar/pintura.png",
      icon: "/icons/paint.png",
      detailText:
        "Tenemos un equipo especializado en ingenieria electromecanica y electronica para satisfacer todas las necesidades que se presenten para cada tipo de proyecto, tanto en equipamiento, como así también en servicios de instalación y mantenimiento preventivo/correctivo",
    },
  ];

  return (
    <Main>
      <Hero
        title={"HOGAR"}
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/hogar/hogar-hero.jpg"}
      />
      <Tabs
        tabs={tabsInfo}
        selectedTab={selectedTab}
        handleClick={(tabName) => setSelectedTab(tabName)}
      />
      <Divider />
      <Tabs
        tabs={tabsInfo2}
        selectedTab={selectedTab}
        handleClick={(tabName) => setSelectedTab(tabName)}
      />
      <TextContainer>
        {tabsInfo.map((tab) => {
          if (tab.tabName === selectedTab) {
            return <Text>{tab.detailText}</Text>;
          } else return null;
        })}

        {tabsInfo.map((tab) => {
          if (tab.tabName === selectedTab) {
            return <BackgroundText> {tab.text} </BackgroundText>;
          } else return null;
        })}
      </TextContainer>
      <SectionImageText image="/industria/industria-1.jpg" />
      <SectionImageText image="/industria/industria-2.png" reverse last />
    </Main>
  );
}

Industry.Layout = MyLayout;
