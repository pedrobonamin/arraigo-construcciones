import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import MyLayout from "../layout";
import Hero from "./components/Hero";
import Image from "next/image";
import Button from "./components/Button";
import { units, colors } from "styles";
import useInMobile from "hooks/useInMobile";
import useScroll from "hooks/useScroll";
import hero from "../public/heros/home-hero.webp";
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
  width: 60vw;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  transition: all 1s ease;
  cursor: pointer;
  ${(props) =>
    props.first
      ? `left: 0;
    clip-path: polygon(100% 0, 80% 100%, 0 100%, 0 0);
    `
      : `right: 0;
      clip-path: polygon(100% 0,100% 100%,10% 100%,30% 0);
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
  ${(props) => (props.first ? `left: 25%` : `right: 25%`)};

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
  font-size: 36px;
  @media (max-width: 800px) {
    font-size: 24px;
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
  const scrolled = useScroll();

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
        src={hero}
      />

      <ThirdBlock onMouseLeave={() => setHover()}>
        <ThirdBlockImageContainer
          first
          onClick={(e) => {
            if (!isMobile) {
              console.log("CLICKED ON INDUSTRIA");
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
              if (isMobile) {
                console.log("CLICKED ON industria");
                e.stopPropagation();
                router.push("/industria");
              }
            }}
          >
            <Image
              src="/icons/industry.png"
              alt="Industria"
              height={isMobile ? 100 : 140}
              width={isMobile ? 100 : 140}
              layout="fixed"
            />
            <ThirdBlockText>INDUSTRIA</ThirdBlockText>
          </LogoText>
          <Image
            position={"left: 0;"}
            src="https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/home%2Foptimized-home-industria.webp?alt=media&token=18c707a0-d154-4aed-aef8-daf1d2b276df"
            alt="Industria"
            layout="fill"
            loading="eager"
          />
        </ThirdBlockImageContainer>

        <ThirdBlockImageContainer
          onMouseLeave={() => setHover()}
          onClick={(e) => {
            if (!isMobile) {
              e.stopPropagation();
              router.push("/hogar");
            }
          }}
        >
          <Filter hover={hover} />
          <LogoText
            onClick={(e) => {
              if (isMobile) {
                e.stopPropagation();
                router.push("/hogar");
              }
            }}
            hover={hover}
            onMouseEnter={() => setHover("second")}
            onMouseLeave={() => setHover()}
          >
            <Image
              src="/icons/home.png"
              alt="Industria"
              height={isMobile ? 100 : 140}
              width={isMobile ? 100 : 140}
              layout="fixed"
            />
            <ThirdBlockText>HOGAR</ThirdBlockText>
          </LogoText>
          <Image
            position={"right: 0;"}
            src="https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/home%2Foptimized-home-hogar.webp?alt=media&token=584ed5cf-2860-4fbb-82ca-d417f173db9e"
            alt="Hogar"
            layout="fill"
            loading="eager"
          />
        </ThirdBlockImageContainer>
      </ThirdBlock>
      {scrolled && (
        <SecondBlock>
          <ImageContainer>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/home%2Foptimized-home-trayectoria.webp?alt=media&token=8bdab547-2954-4578-b272-661e5f9f5123"
              alt="trayectoria"
              layout="fill"
              loading="eager"
              placeholder="blur"
              blurDataURL="LBE:0n4nRjIU~qM{%MRj?bD%%MD%"
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
      )}
    </Main>
  );
}

Home.Layout = MyLayout;
