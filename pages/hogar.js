import { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import MyLayout from "../layout";
import { useRouter } from "next/router";
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

const TextContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.footerBackground};
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    height: 300px;
     
    }
`;
const Text = styled.div`
  font-size: ${units.SectionText};
  animation: ${fadeIn} 1s ease forwards 1;
  color: ${colors.white};
  max-width: 60%;
  @media (max-width: 800px) {
    max-width: 90%;
    text-align: center;
  }

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
  white-space: nowrap;
`;


export default function Industry() {
  const [selectedTab, setSelectedTab] = useState("civ");
  const [tabDetails, setTabDetails] = useState({})
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  useEffect(() => {
   const selected = [...tabsInfo, ...tabsInfo2].find(tab => tab.tabName === selectedTab)

    setTabDetails(selected)
  },[selectedTab])

  const tabsInfo = [
    {
      tabName: "civ",
      position: "first",
      text: "Albañilería",
      image: "/hogar/albanileria.png",
      icon: "/icons/albanil.png",
      image1: '/hogar/servicios/civ/1.jpeg',
      image2: '/hogar/servicios/civ/2.jpeg',
      detailText: "En este amplio rubro, estará dejando en nuestras manos todo el trabajo de construcción y refacción para el hogar. Garantizamos una labor de calidad, confianza y responsabilidad con nuestros clientes.",
    },
    {
      tabName: "montaje",
      position: "center",
      text: "Montajes",
      image: "/hogar/carpinteria.png",
      icon: "/icons/rule.png",
      image1: '/hogar/servicios/montaje/1.jpeg',
      image2: '/hogar/servicios/montaje/2.jpeg',
      detailText:
        "Realizamos tareas de armado, refacción, y mantenimiento de estructuras, obras y equipamiento.",
    },
    {
      tabName: "pintura",
      position: "last",
      text: "pintura",
      image: "/hogar/pintura.png",
      icon: "/icons/paint.png",
      image1: '/hogar/servicios/pintura/1.jpeg',
      image2: '/hogar/servicios/pintura/2.jpeg',
      detailText:
        "Tenemos un equipo especializado en ingenieria electromecanica y electronica para satisfacer todas las necesidades que se presenten para cada tipo de proyecto, tanto en equipamiento, como así también en servicios de instalación y mantenimiento preventivo/correctivo",
    },
  ];

  const tabsInfo2 = [
    {
      tabName: "arenado",
      position: "first",
      text: "Arenado",
      image: "/hogar/albanileria.png",
      icon: "/icons/albanil.png",
      image1: '/hogar/servicios/arenado/1.jpeg',
      image2: '/hogar/servicios/arenado/2.jpeg',
      detailText:
        " En este amplio rubro, estará dejando en nuestras manos todo el trabajo de construcción y refacción para el hogar. Garantizamos una labor de calidad, confianza y responsabilidad con nuestros clientes.",
    },
    {
      tabName: "Revestimientos",
      position: "center",
      text: "Revestimientos",
      image: "/hogar/carpinteria.png",
      icon: "/icons/rule.png",
      image1: '/hogar/servicios/revestimientos/1.jpeg',
      image2: '/hogar/servicios/revestimientos/2.jpeg',
      detailText:
        "Realizamos tareas de armado, refacción, y mantenimiento de estructuras, obras y equipamiento.",
    },
    {
      tabName: "plomeria",
      position: "last",
      text: "Plomeria y Gas",
      image: "/hogar/pintura.png",
      icon: "/icons/paint.png",
      image1: '/hogar/servicios/plomeria/1.jpeg',
      image2: '/hogar/servicios/plomeria/2.jpeg',
      detailText:
        "Tenemos un equipo especializado en ingenieria electromecanica y electronica para satisfacer todas las necesidades que se presenten para cada tipo de proyecto, tanto en equipamiento, como así también en servicios de instalación y mantenimiento preventivo/correctivo",
    },
  ];

  return (
    <>
      <Hero
        title={"HOGAR"}
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/hogar/hogar-hero.jpg"}
      />
      <Tabs
        tabs={tabsInfo}
        secondLineTabs={tabsInfo2}
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
              {tabsInfo2.map((tab) => {
          if (tab.tabName === selectedTab) {
            return <Text>{tab.detailText}</Text>;
          } else return null;
        })}
            {tabsInfo2.map((tab) => {
          if (tab.tabName === selectedTab) {
            return <BackgroundText> {tab.text} </BackgroundText>;
          } else return null;
        })}
      </TextContainer>
      <SectionImageText image={tabDetails.image1} />
      <SectionImageText image={tabDetails.image2}reverse last />
    </>
  );
}

Industry.Layout = MyLayout;
