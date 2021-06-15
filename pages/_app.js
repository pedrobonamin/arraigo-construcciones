import React from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import {colors} from 'styles'


export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  const styledComponentsTheme = {
    primary: colors.red,
    secondary: colors.white,
    fontFamily: 'Roboto'
  };
  
  return (
    <StyledComponentThemeProvider theme={styledComponentsTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledComponentThemeProvider>
  );
}
