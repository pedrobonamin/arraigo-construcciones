import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import Image from "next/image";
import Button from "./components/Button";
import { units, colors } from "styles";
import useInMobile from "hooks/useInMobile";
import Link from "next/link";
const Main = styled.main``;
const SecondBlock = styled.div`
  position: relative;
  min-height: 600px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
    min-height: 400px;
  }
`;
const ImageContainer = styled.div`
  width: 60vw;
  height: 100%;
  position: absolute;
  left: 0;
  @media (max-width: 800px) {
    width: 100vw;
    position: unset;
  }
`;
const TextContainer = styled.div`
  display: flex;
  z-index: 1;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 5vw;
  width: 62vw;
  min-width: 750px;
  min-width: 500px;
  padding: 32px;
  background: linear-gradient(245deg, white 70%, transparent 70%);
  > div {
    width: 500px;
    max-width: 70%;
  }
  @media (max-width: 800px) {
    width: 100vw;
    position: relative;
    min-width: unset;
    padding: 16px;
    margin: 0;
    justify-items: right;
    justify-content: flex-start;
    min-height: 400px;
  }
`;
const Title = styled.div`
  font-size: ${units.SectionTitle};
  text-align: left;
  :after {
    margin-top: 8px;
    content: "";
    display: block;
    margin: 8px 75% 0 0;
    height: 8px;
    background-color: ${colors.red};
  }
  @media (max-width: 800px) {
    margin-top: 16px;
    max-width: 100% !important;
  font-size: 24px;

  }
`;
const Text = styled.div`
  font-size: ${units.SectionText};
  margin: 32px 0;
  @media (max-width: 800px) {
    margin: 16px 0;


  }
`;

const StyledButton = styled(Button)`
  align-self: flex-end !important;
`;

const ThirdBlock = styled.div`
  position: relative;
  min-height: 600px;
  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
    min-height: 400px;
  }
`;

const ThirdBlockImageContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  transition: all 1s ease;

  ${(props) =>
    props.first
      ? `left: 0;
    clip-path: polygon(60% 0, 50% 100%, 0 100%, 0 0);
    `
      : `right: 0;
  clip-path: polygon(100% 0, 100% 100%, 40% 100%, 60% 0);
  `};

  @media (max-width: 800px) {
    width: 60%;
    ${(props) =>
      props.first
        ? `left: 0;
        // clip-path: polygon(0 0, 0% 100%, 100% 0);
        // clip-path: unset;

    clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
  }

      `
        : `right: 0;

        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);

  }

    `};
  }
`;
const Filter = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  transition: all 1s ease;
  :hover {
    background: ${colors.redHighlight};
    opacity: 0.8;
  }
  ${(props) =>
    props.first &&
    props.hover === "first" &&
    `
    background: ${colors.redHighlight};
    opacity: 0.8;
    `};
  ${(props) =>
    !props.first &&
    props.hover === "second" &&
    `
    background: ${colors.redHighlight};
    opacity: 0.8;
    `}
`;

const LogoText = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.first ? `left: 15%` : `right: 15%`)};

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    ${(props) => (props.first ? `left: 10px` : `right: 10px`)};
    padding: 20px;
  }
`;
const ThirdBlockText = styled.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  font-size: 48px;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const ImageDiv = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-size: cover;
  height: 100%;
  width: 60%;
  position: absolute;
  ${(props) => props.position};
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const BackgroundText = styled.div`
  position: absolute;
  right: 170px;
  width: 100%;
  text-align: right;
  z-index: 0;
  font-size: 100px;
  font-weight: 800;
  letter-spacing: 20px;
  color: white;
  text-transform: uppercase;
  top: -25px;
  color: rgb(45 45 45 / 20%);
  white-space: nowrap;
  @media (max-width: 800px) {
    font-size: 17.5vw;
  letter-spacing: 6px;

    left: 0px;
    top: -5vw;
  }
`;

export default function Home() {
  const isMobile = useInMobile();

  const router = useRouter();

  const [hover, setHover] = useState();
  return (
    <Main>
      <Hero
        addSquares={false}
        title={
          <>
            MÉTODO ICI
            <span style={{ fontSize: "36px", verticalAlign: "super" }}>®</span> 
          </>
        }
        underline="center"
        button="VER MÁS"
        buttonAction={() => router.push("/metodo")}
        text="Para ampliar tus límites es necesario accionar de forma innovadora y eficaz. Desarrollamos un método propio para llevar a otro nivel la ejecución de cada proyecto"
        textMaxWidth={"60%"}
        src={"/home/home-hero.jpg"}
      />

      <ThirdBlock onMouseLeave={() => setHover()}>
        <ThirdBlockImageContainer
          first
          onClick={(e) => {
            if(!isMobile) {
              console.log('CLICKED ON INDUSTRIA')
              e.stopPropagation();
              router.push("/industria");
            }
    
          }}
        >
          <Filter hover={hover} first />
          <LogoText
            first
            onMouseEnter={() => setHover("first")}
            onMouseLeave={() => setHover()}
            onClick={(e) => {
              if(isMobile) {
                console.log('CLICKED ON industria')
                e.stopPropagation();
                router.push("/industria");
              }
            }}
          >
            <Image
              src={"/icons/industry.png"}
              alt={"Industria"}
              height={isMobile ? 120 : 200}
              width={isMobile ? 120 : 200}
              layout="fixed"
            />
            <ThirdBlockText>INDUSTRIA</ThirdBlockText>
          </LogoText>
          <ImageDiv
            position={"left: 0;"}
            src={"/home/home-industria-bw.jpg"}
            alt={"Industria"}
            layout="fill"
            loading="eager"
          />
        </ThirdBlockImageContainer>

        <ThirdBlockImageContainer
          onMouseLeave={() => setHover()}
          onClick={(e) => {
            if(!isMobile) {
              console.log('CLICKED ON HOGAR')
              e.stopPropagation();
              router.push("/hogar");
            }
          }}
        >
          <Filter hover={hover} />
          <LogoText
                onClick={(e) => {
                  if(isMobile) {
                    console.log('CLICKED ON HOGAR')
                    e.stopPropagation();
                    router.push("/hogar");
                  }
                }}
            hover={hover}
            onMouseEnter={() => setHover("second")}
            onMouseLeave={() => setHover()}
          >
            <Image
              src={"/icons/home.png"}
              alt={"Industria"}
              height={isMobile ? 120 : 200}
              width={isMobile ? 120 : 200}
              layout="fixed"
            />
            <ThirdBlockText>HOGAR</ThirdBlockText>
          </LogoText>
          <ImageDiv
            position={"right: 0;"}
            src={"/home/home-hogar-bw.png"}
            alt={"Hogar"}
            layout="fill"
            loading="eager"
          />
        </ThirdBlockImageContainer>
      </ThirdBlock>

      <SecondBlock>
        <ImageContainer>
          <Image
            src={"/home/home-trayectoria.jpg"}
            alt={"trayectoria"}
            layout="fill"
            loading="eager"
          />
        </ImageContainer>

        <TextContainer>
          <Title>
            <div style={{ color: colors.red }}>NUESTRA TRAYECTORIA</div>
            <div>ES SINÓNIMO DE CALIDAD</div>
          </Title>
          <BackgroundText>NOSOTROS</BackgroundText>
          <Text>
          Arraigo inicia en 2005, desarrollando sus primeros pasos en el
              ámbito de la construcción y dando nuestro mayor esfuerzo proyecto
              a proyecto. De esta manera logramos consolidar un equipo
              experimentado, eficaz y orientado al clientes siendo flexibles,
              responsables, innovadores, resolutivos, con alta capacidad de
              respuesta y cumpliendo con los plazos acordados.
          </Text>
          <StyledButton
            text="VER MÁS"
            onClick={() => router.push("/nosotros")}
          />
        </TextContainer>
      </SecondBlock>
    </Main>
  );
}

Home.Layout = MyLayout;
