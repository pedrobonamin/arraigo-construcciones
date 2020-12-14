import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { units, colors } from "styles";

const TabsContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Tab = styled.div`
  display: flex;
  z-index: 1;
  height: 300px;
  width: 36%;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  flex-shrink: 0;
  ${(props) =>
    props.position === "center" &&
    `
    clip-path: polygon(22% 0, 100% 0, 78% 100%, 0% 100%);
    position: absolute;
    left: -10.5%;
    width: 50%;
    `}
  ${(props) =>
    props.position === "first" &&
    ` 
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
  padding-right: 10%;
  `};

  ${(props) =>
    props.position === "last" &&
    `
    position: absolute;
    left: -21%;

  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
  padding-right: 0%;
  padding-left: 10%;
  :hover {
      cursor: pointer;
  }
  `};

  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  position: relative;
  filter: grayscale(100%);
  transition: all 1s ease;
  ${props => props.selectedTab === props.tabName && !props.hover &&`
  filter: none;
`}
  :hover {
    filter: none;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  ${(props) => (props.first ? `left: 20%` : `right: 20%`)};
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  font-size: ${units.SectionTitle};
  text-align: center;
`;
const Filter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transition: all 1s ease;
  filter: none;
  :hover {
    background: ${colors.redHighlight};
    opacity: 0.8;
  }
  ${(props) =>
    props.selectedTab === props.tabName &&
    `
  background: ${colors.redHighlight};
  opacity: 0.8;
  `};
  ${(props) =>
    props.hover === props.text &&
    `
    background: ${colors.redHighlight};
    opacity: 0.8;
    `};
`;

const Component = ({ tabs, handleClick, selectedTab }) => {
  const [hover, setHover] = useState();

  return (
    <TabsContainer>
      {tabs?.map((tab, index) => {
        const { image, icon, text, position, tabName } = tab;
        return (
          <Tab
          selectedTab={selectedTab}
          tabName={tabName}
          hover={hover}
            onClick={() => handleClick(tabName)}
            key={index + text}
            position={position}
            url={image}
            onMouseEnter={() => setHover(text)}
            onMouseLeave={() => setHover()}
          >
            <Filter
              selectedTab={selectedTab}
              tabName={tabName}
              text={text}
              hover={hover}
            />
            <LogoText
       
            >
              <Image
                src={icon}
                alt={text}
                height="160"
                width="160"
                layout="fixed"
              />
              <Text>{text.toUpperCase()}</Text>
            </LogoText>
          </Tab>
        );
      })}
    </TabsContainer>
  );
};

export default Component;
