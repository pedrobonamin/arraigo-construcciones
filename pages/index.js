import Head from "next/head";
import { Footer, Navbar } from "./components";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html , body {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
  a {
    color: inherit;
    text-decoration: none;
  }

 h1 {
   font-size: 4rem;
 }
 ul {
  list-style: none;
  padding: 0;
  margin: 0;
 }
`;
const Container = styled.div`
 height: 2000px;

`

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Navbar />
      <Container>

      </Container>
      <Footer />
    </>
  );
}
