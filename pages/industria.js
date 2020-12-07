import { useState } from "react";

import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import SectionImageText from './components/SectionImageText'
import { colors, units } from "styles";

const Main = styled.main`
  // height: 3000px;
`;
const TextContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: ${colors.black};
  background: rgb(38,29,23);

`;
const Text = styled.div`
  font-size: ${units.SectionText};
  color: ${colors.white};
  max-width: 60%;
  line-height: 1.5rem;
  letter-spacing: 1px;
`;

export default function Industry() {
  const [selectedTab, setSelectedTab] = useState("civ");

  console.log("SELECTED TAB", selectedTab);
  const tabsInfo = [
    {
      tabName: "civ",
      position: "first",
      text: "Civil",
      image: "/hogar/albanileria.png",
      icon: "/icons/helmet.png",
      detailText:
        "Una obra civil es aquella que se desarrolla con infraestructuras que van dirigidas a la población. Las obras civiles pueden ser carreteras, represas, puentes o alcantarillado, por ejemplo.",
    },
    {
      tabName: "tec",
      position: "center",
      text: "tecnología e innovación",
      image: "/hogar/albanileria.png",
      icon: "/icons/engranaje.png",
      detailText: " en tecnología somos los mejores",
    },
    {
      tabName: "clim",
      position: "last",
      text: "E + Y Climatización",
      image: "/hogar/albanileria.png",
      icon: "/icons/wind.png",
      detailText: " en albañileria  te salvamos la vida",
    },
  ];

  return (
    <Main>
      <Hero
        title={"INDUSTRIA"}
        text="AMPLIANDO TUS LÍMITES"
        textAlign="left"
        src={"/hogar/hogar-hero.jpg"}
      />
      <Tabs
        tabs={tabsInfo}
        handleClick={(tabName) => setSelectedTab(tabName)}
      />
      <TextContainer>
        <Text>
          {tabsInfo.find((tab) => tab.tabName === selectedTab)?.detailText}
        </Text>
      </TextContainer>
      <SectionImageText/>
      <SectionImageText reverse last/>
    </Main>
  );
}

Industry.Layout = MyLayout;
