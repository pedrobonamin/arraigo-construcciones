import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
  background: ${colors.footerBackground};
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    height: 300px;
  }
`;
const Text = styled.div`
  animation: ${fadeIn} 1s ease forwards 1;
  transition: all 1s ease;
  font-size: ${units.SectionText};
  color: ${colors.white};
  max-width: 60%;
  line-height: 1.5rem;
  letter-spacing: 1px;
  z-index: 1;
  @media (max-width: 800px) {
    max-width: 90%;
    text-align: center;
  }
`;

const BackgroundText = styled.div`
  position: absolute;
  z-index: 0;
  font-size: 10vw;
  font-weight: 800;
  letter-spacing: 6px;
  color: white;
  text-transform: uppercase;
  bottom: -2vw;
  color: rgb(45 45 45 / 80%);
  white-space: nowrap;
`;

export default function Industry() {
  const [selectedTab, setSelectedTab] = useState("civ");
  const [tabDetails, setTabDetails] = useState({});

  useEffect(() => {
    const selected = [...tabsInfo].find((tab) => tab.tabName === selectedTab);

    setTabDetails(selected);
  }, [selectedTab]);

  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  const tabsInfo = [
    {
      tabName: "civ",
      position: "first",
      text: "Civil",
      image: "https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/civil.webp?alt=media&token=e525922a-5a53-4150-b58f-cb125e05acdb",
      icon: "/icons/helmet.png",
      image1: "/industria/servicios/civil/1.jpg",
      image2: "/industria/servicios/civil/2.jpg",
      title1: "Techado sombreado",
      title2: "Construcción en acopio",
      detailText:
        "Te ofrecemos ser el cimiento de tu estructura. Desde Arraigo nos encargaremos de realizar toda obra civil desde el inicio del proyecto, teniendo así una visión futura de los requerimientos del mismo para adecuar las instalaciones pertinentes logrando así una eficiencia constructiva",
    },
    {
      tabName: "tec",
      position: "center",
      text: "tecnología e innovación",
      image: "https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/tec.webp?alt=media&token=5dfe8b0b-3300-48db-a30d-6d6225d2bb70",
      icon: "/icons/engranaje.png",
      image1: "/industria/servicios/tec/1-tec.jpg",
      image2: "/industria/servicios/tec/2.jpeg",
      title1: "Mantenimiento IT",
      title2: "Cableado de Fibra Óptica",
      detailText:
        "Con un alto grado de infraestructura tecnológica, estamos al alcance de cualquier tipo de innovación en cuanto a lo que la tecnología refiere. Realizamos cableados estructurados de datos y E+, Inteligencia hogareña, sistemas de seguridad integrales, servicios de housing, entre otros.",
    },
    {
      tabName: "Energia",
      position: "last",
      text: "Energia",
      image: "https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/clim.webp?alt=media&token=b82112d8-0ed1-41c8-96b6-3c76c32878c8",
      icon: "/icons/wind.png",
      image1: "/industria/servicios/energia/1.jpg",
      image2: "/industria/servicios/energia/2.jpg",
      title1: "Tablero Electrico",
      title2: "Generadores",
      detailText:'Tenemos un equipo especializado en ingenieria electromecanica y electronica para satisfacer todas las necesidades que se presenten para cada tipo de proyecto, tanto en equipamiento, como así también en servicios de instalación y mantenimiento preventivo/correctivo.'
    },
  ];

  return (
    <Main>
      <Hero
        title={"INDUSTRIA"}
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src="https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/industria-hero.webp?alt=media&token=e59edc25-a8ea-43d5-af8f-d6ea86c0a649"
      />
      <Tabs
        selectedTab={selectedTab}
        tabs={tabsInfo}
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
            return <BackgroundText> {tab.text}</BackgroundText>;
          } else return null;
        })}
      </TextContainer>
      {tabDetails.image1 && (
        <SectionImageText image={tabDetails.image1} title={tabDetails.title1} />
      )}
      {tabDetails.image2 && (
        <SectionImageText
          image={tabDetails.image2}
          title={tabDetails.title2}
          reverse
          last
        />
      )}
    </Main>
  );
}

Industry.Layout = MyLayout;
