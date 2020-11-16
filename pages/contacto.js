import {useState} from 'react'
import styled from "styled-components";
import MyLayout from "../layout";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Hero from "./components/Hero";
import { colors, units } from "styles";
import Button from './components/Button'

const Main = styled.main``;
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
      border-color: white !important;
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
    }
  }
`;

const StyledSelect = styled(Select)`
  && {
    border-radius: 0;
    @media (max-width: 640px) {
      width: 100%;
    }
    > div {
      border-radius: 0;
    }
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 450px;
`;

const StyledFormControl = styled(FormControl)`
  && {
    margin: ${props => props.fullWidth ? '8px 0 32px 0' : '8px 0'};
    width: ${(props) => (props.fullWidth ? "100%" : "45%")};

    color: white;
    border-radius: 0;
    @media (max-width: 640px) {
      width: 100%;
    }
    > label {
      color: white;
    }

    > div {
      border-radius: 0;
      color: white;
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
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: colors.white,
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: colors.red,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: colors.red,
          borderWidth: 1,
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

const Contact = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e, input) => {
    setFormState({ ...formState, [input]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('FORM STATE', formState)
 
  }
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
                value={formState.nombre}
                onChange={(event) => handleChange(event, "nombre")}
                required
              />
              <StyledTextField
                label="E-mail"
                variant="outlined"
                name="email"
                value={formState.email}
                required
                onChange={(event) => handleChange(event, "email")}
                // error={emailError}
                // helperText={emailError ? "Email incorrecto" : ""}
              />
              <StyledTextField
                label="Tel / Cel"
                variant="outlined"
                name="email"
                type="number"
                required
                value={formState.telefono}
                onChange={(event) => handleChange(event, "telefono")}
              />
              <StyledFormControl variant="outlined">
                <InputLabel id="demo-simple-select-filled-label">
                  Asunto
                </InputLabel>
                <StyledSelect
                  required
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={formState.asunto}
                  onChange={(event) => handleChange(event, "asunto")}
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
                value={formState.mensaje}
                onChange={(event) => handleChange(event, "mensaje")}
              />
              <div style={{flexGrow: 1, width: '30px'}}/>
              <Button text='ENVIAR' onClick={handleSubmit} />
            </InputsContainer>
          </FormContainer>
        </SecondBlock>
        <Map
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.736963456959!2d-60.65909509931456!3d-32.940311111991846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d6a35d69ff2e036!2sCentro%20de%20Capacitaci%C3%B3n%20BlackSheep!5e0!3m2!1ses-419!2sar!4v1599488847516!5m2!1ses-419!2sar"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </Main>
    </ThemeProvider>
  );
};

Contact.Layout = MyLayout;

export default Contact;
