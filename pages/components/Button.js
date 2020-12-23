import React from "react";
import { createMuiTheme, ThemeProvider , withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { colors } from "styles";

const MuiTheme = createMuiTheme({
    root: { 
        borderRadius: 0,
    },
  palette: {
    primary: {
      main: colors.red,
    },
    secondary: {
      main: colors.grey,
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

const MUIButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      // fontSize: 18,
      padding: '6px 24px',
      borderRadius: 0,
      lineHeight: 1.5,
      letterSpacing: 1.5,
      fontWeight: 400
    },
  })(Button);

const Component = ({ text, fontSize='18px', onClick, disabled, size}) => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <MUIButton disabled={disabled} style={{marginTop: '16px'}} onClick={onClick} fontSize={fontSize} size={size} variant="contained" color="primary">
        {text}
      </MUIButton>
    </ThemeProvider>
  );
};

export default Component;
