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
      title1: 'Edificación Casa de 2 plantas',
      title2: 'Construccion de quincho',
      detailText: "En este amplio rubro, estará dejando en nuestras manos todo el trabajo de construcción y refacción para el hogar. Garantizamos una labor de calidad, confianza y responsabilidad con nuestros clientes.",
    },
    {
      tabName: "montaje",
      position: "center",
      text: "Montajes",
      image: "/hogar/servicios/montaje/2-bw.jpg",
      icon: "/icons/montaje.png",
      image1: '/hogar/servicios/montaje/2.jpeg',
      image2: '/hogar/servicios/montaje/1.jpeg',
      title2: 'Montaje de vigas',
      title1: 'Vigas a montar',
      detailText:
        "Estamos a la altura de la realizacion de todo tipo de montajes con maquinaria especializada y personal capacitado para dicha tarea.",
    },
    {
      tabName: "pintura",
      position: "last",
      text: "pintura",
      image: "/hogar/pintura.png",
      icon: "/icons/paint.png",
      image1: '/hogar/servicios/pintura/2.jpeg',
      image2: '/hogar/servicios/pintura/1.jpeg',
      title2: 'Pintado industrial con pistola',
      title1: 'Pintura industrial terminada',
      detailText:
        "Contamos con equipamiento de alta calidad para brindar el mejor servicio en pintura para el hogar y la industria. No tenemos limites para ello, ya que ofrecemos un servicio tanto terrestre como en alturas",
    },
  ];

  const tabsInfo2 = [
    {
      tabName: "arenado",
      position: "first",
      text: "Arenado",
      image: '/hogar/servicios/arenado/bw.png',
      icon: "/icons/arenado.png",
      image1: '/hogar/servicios/arenado/1.jpeg',
      image2: '/hogar/servicios/arenado/2.jpeg',
      title1: 'Arenado industrial',
      title2: 'Arenado industrial',
      detailText:
        "Con nuestras maquinas a presion nos especializamos en arenado para cualquier tipo de estructura que asi requiera. No solo lo realizamos para elementos hogareños, sino que tambien para el mundo de la industria",
    },
    {
      tabName: "Revestimientos",
      position: "center",
      text: "Revestimientos",
      image: "/hogar/carpinteria.png",
      icon: "/icons/revestimientos.png",
      title1: '',
      title2: '',
      detailText:
        "Si se busca realizar un cambio de apariencia o fachada para el hogar, nos encargaremos de ascesorar, guiar y llevar a cabo las tareas de revestimientos con nuestro equipo para dar las mejores terminaciones a la superficie deseada.",
    },
    {
      tabName: "plomeria",
      position: "last",
      text: "Plomeria y Gas",
      image: '/hogar/servicios/plomeria/bw.jpg',
      icon: "/icons/plomeria.png",
      image1: '/hogar/servicios/plomeria/1.jpeg',
      image2: '/hogar/servicios/plomeria/2.jpeg',
      title1: 'Refaccion de baño (Plomeria)',
      title2: 'Reparacion de cocina (Gas)',
      detailText:
        "Fisuras, perdidas, refacciones, instalaciones y mas es lo que Arraigo le ofrece a sus clientes en cuanto a trabajos de Plomeria y Gas, donde la calidad y profesionalismo son nuestro principal objetivo",
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
    </>
  );
}

Industry.Layout = MyLayout;
