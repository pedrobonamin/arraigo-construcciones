import styled from "styled-components";
import MyLayout from "../layout";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Hero from "./components/Hero";
import Image from "next/image";
import { colors, units } from "styles";
import { createMuiTheme, ThemeProvider , withStyles} from "@material-ui/core/styles";


const styledComponentsTheme = {
  primary: colors.red,
  secondary: colors.white,
  fontFamily: "Roboto",
};

const Main = styled.main`
  height: 3000px;
`;
const SecondBlock = styled.div`
  background-image: url("/contacto/contact.png");
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100vw;
  display: flex;
  justify-content: flex-end;
`;

const FormContainer = styled.div`
  width: 70vw;
  height: 100%;
  background: #231f20;
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > div {
    max-width: 50%;
  }
`;

const Title = styled.div`
  font-size: ${units.SectionTitle};
  text-align: left;
  :after {
    margin-top: 8px;
    content: "";
    display: block;
    margin: 8px 40% 0 40%;
    height: 4px;
    background-color: ${colors.red};
  }
`;
const Text = styled.div`
  font-size: ${units.SectionText};
  margin: 32px 0;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  && {
    margin: 8px 0;
    width: ${(props) => (props.fullWidth ? "100%" : "45%")};
    color: white;
    border-radius: 0;
    :hover {
      border-color: white;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
    > label {
      color: white;
    }

    > div {
      border-radius: 0;
      color: white;
      > fieldset {
        border-color: white;
  
      }
    }
  }
`;

const StyledSelect = styled(Select)`
  && {
    border-radius: 0;
    color: white;
    @media (max-width: 640px) {
      width: 100%;
    }
    > div {
      border-radius: 0;
    }
  }
`;

const StyledFormControl = styled(FormControl)`
&& {
  margin: 8px 0;
  width: 45%;
  color: white;
  @media (max-width: 640px) {
    width: 100%;
  }
}
`;
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

const Contact = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Main>
        <Hero
          title="ESCRIBINOS"
          text="AMPLIANDO TUS LÍMITES"
          textAlign="left"
          src={"/contacto/contacto-hero.jpg"}
        />
        <SecondBlock>
          <FormContainer>
            <Title>CONTACTO</Title>
            <Text>
              Estamos esperandote para poder ayudarte en lo que necesites.
              Escribinos para mantenernos unidos.
            </Text>
            <InputsContainer>
              <StyledTextField
                label="Nombre y apellido"
                variant="outlined"
                name="name"
                // value={formState.name}
                onChange={(event) => handleChange(event, "name")}
                required
              />
              <StyledTextField
                label="E-mail"
                variant="outlined"
                name="email"
                // value={formState.email}
                required
                // error={emailError}
                // helperText={emailError ? "Email incorrecto" : ""}
                onChange={(event) => handleChange(event, "email")}
              />
              <StyledTextField
                label="Tel / Cel"
                variant="outlined"
                name="email"
                type="number"
                required
                // value={formState.email}
                // error={emailError}
                // helperText={emailError ? "Email incorrecto" : ""}
                onChange={(event) => handleChange(event, "email")}
              />
              <StyledFormControl variant="outlined">
                <InputLabel id="demo-simple-select-filled-label">
                  Evento
                </InputLabel>
                <StyledSelect
                  required
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={formState.event}
                  // onChange={(event) => handleChange(event, "event")}
                >
                  <MenuItem value={"Industria"}>INDUSTRIA</MenuItem>
                  <MenuItem value={"Hogar"}>HOGAR</MenuItem>
                </StyledSelect>
              </StyledFormControl>
              <StyledTextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                required
                multiline
                rows={5}
                // value={formState.email}
                // error={emailError}
                // helperText={emailError ? "Email incorrecto" : ""}
                onChange={(event) => handleChange(event, "email")}
              />
            </InputsContainer>
          </FormContainer>
        </SecondBlock>
      </Main>
    </ThemeProvider>
  );
};

Contact.Layout = MyLayout;

export default Contact;
