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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
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
  // background: ${colors.black};
  background: rgb(38, 29, 23);
`;
const Text = styled.div`
  animation: ${fadeIn} 1s ease forwards 1;
  transition: all 1s ease;
  font-size: ${units.SectionText};
  color: ${colors.white};
  max-width: 60%;
  line-height: 1.5rem;
  letter-spacing: 1px;
`;

export default function Industry() {
  const [selectedTab, setSelectedTab] = useState("civ");

  const tabsInfo = [
    {
      tabName: "civ",
      position: "first",
      text: "Civil",
      image: "/industria/civil.png",
      icon: "/icons/helmet.png",
      detailText:
        "Te ofrecemos ser el cimiento de tu estructura. Desde Arraigo nos encargaremos de realizar toda obra civil desde el inicio del proyecto, teniendo así una visión futura de los requerimientos del mismo para adecuar las instalaciones pertinentes logrando así una eficiencia constructiva",
    },
    {
      tabName: "tec",
      position: "center",
      text: "tecnología e innovación",
      image: "/industria/tec.png",
      icon: "/icons/engranaje.png",
      detailText:
        "Con un alto grado de infraestructura tecnológica, estamos al alcance de cualquier tipo de innovación en cuanto a lo que la tecnología refiere. Realizamos cableados estructurados de datos y E+, Inteligencia hogareña, sistemas de seguridad integrales, servicios de housing, entre otros.",
    },
    {
      tabName: "Energia",
      position: "last",
      text: "Energia",
      image: "/industria/clim.png",
      icon: "/icons/wind.png",
      detailText:
        "Tenemos un equipo especializado en ingenieria electromecanica y electronica para satisfacer todas las necesidades que se presenten para cada tipo de proyecto, tanto en equipamiento, como así también en servicios de instalación y mantenimiento preventivo/correctivo",
    },
  ];

  return (
    <Main>
      <Hero
        title={"INDUSTRIA"}
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/industria/industria-hero.jpg"}
      />
      <Tabs
        selectedTab={selectedTab}
        tabs={tabsInfo}
        handleClick={(tabName) => setSelectedTab(tabName)}
      />
      <TextContainer>
        {tabsInfo.map((tab) => {
          console.log(tab, selectedTab);
          if (tab.tabName === selectedTab) {
            return <Text>{tab.detailText}</Text>;
          } else return null;
        })}
      </TextContainer>
      <SectionImageText image="/industria/industria-1.jpg" />
      <SectionImageText image="/industria/industria-2.png" reverse last />
    </Main>
  );
}

Industry.Layout = MyLayout;
