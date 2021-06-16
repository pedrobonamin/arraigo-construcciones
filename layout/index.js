import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html , body {
  scroll-behavior: smooth;
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

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Arraigo Ingenieria de Proyectos</title>
      </Head>

      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
