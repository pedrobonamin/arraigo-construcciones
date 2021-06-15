import styled from "styled-components";
import { units, colors } from "styles";

const Main = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  padding: 80px 0;
  ${(props) =>
    props.last &&
    `
    background: ${colors.footerBackground};
background: linear-gradient(125deg, ${colors.footerBackground} 66%, rgba(255,255,255,1) 66%);
    `}
  @media (max-width: 800px) {
    ${(props) =>
      props.last &&
      `
      background: ${colors.footerBackground};`}
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  flex-grow: 1;
  width: 60vw;
  min-width: 320px;
  padding: 40px 20px;
  height: 40vw;
  min-height: 400px;
`;

const ImageBefore = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  z-index: 2;
  ::before {
    z-index: 0;
    content: "";
    border: 5px solid #b1b1b1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -50px;
    ${(props) =>
      props.reverse
        ? `
        right: -40px;
        `
        : `
        left: -40px;`}
  }
`;
const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-position: ${(props) => (props.bottom ? "bottom" : "center")};
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`;
const TextContainer = styled.div`
  display: flex;
  z-index: 1;
  height: 100%;
  width: 35vw;
  min-width: 320px;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 1px;
  align-items: center;
  > div {
    width: 500px;
    max-width: 70%;
  }
  ${(props) =>
    props.last &&
    `
  color: white;`}
  @media (max-width: 800px) {
    > div {
      width: 90%;
      max-width: unset;
    }
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
`;
const Text = styled.div`
  font-size: ${units.SectionText};
  margin: 32px 0;
`;

const Component = ({ reverse, last, image, text, title, bottom }) => {
  const titleArray = title?.split(" ") || [];
  const first = titleArray.slice(0, 2).join(" ");
  const second = titleArray.slice(2, titleArray.length).join(" ");

  return (
    <Main reverse={reverse} last={last}>
      <ImageContainer>
        <ImageBefore reverse={reverse}>
          <Image
            bottom={image === "/hogar/servicios/plomeria/1.jpeg"}
            src={image}
            alt={"trayectoria"}
          />
        </ImageBefore>
      </ImageContainer>
      <TextContainer last={last}>
        <Title>
          <div style={{ color: colors.red }}>{first}</div>
          <div>{second}</div>
        </Title>
        {text && <Text>{text}</Text>}
      </TextContainer>
    </Main>
  );
};

export default Component;
