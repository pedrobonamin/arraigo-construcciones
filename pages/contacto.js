import { useState, useEffect } from "react";
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
import Button from "./components/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useScroll from "hooks/useScroll";
import hero from '../public/heros/contacto-hero.webp'

const Main = styled.main``;
const SecondBlock = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/arraigo-ingeniera.appspot.com/o/contact.webp?alt=media&token=ecfbf08b-95df-40e1-a9e7-ef917ceb4848");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const FormContainer = styled.div`
  width: 70vw;
  height: 100%;
  background: ${colors.footerBackground};
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 20px 18%;
  text-align: center;
  min-height: 800px;
  @media (max-width: 800px) {
    width: 100%;
    clip-path: none;
    padding: 20px;
    border-radius: 8px;
  }
  // > div {
  //   max-width: 50%;
  //   @media (max-width: 800px) {
  //     max-width: 100%;
  //   }
  // }
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
    margin: ${(props) => (props.fullWidth ? "8px 0 32px 0" : "8px 0")};
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrolled = useScroll();
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);
  function validateEmail(email) {
    // eslint-disable-next-line
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorMessage(false);
  };

  const handleChange = (e, input) => {
    setFormState({ ...formState, [input]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formState.email)) {
      return setErrorMessage("Por favor, ingrese un email válido");
    }
    if (!formState.telefono) {
      return setErrorMessage("Por favor, ingrese un teléfono");
    }
    if (!formState.nombre) {
      return setErrorMessage("Por favor, ingrese un nombre");
    }
    if (!formState.asunto) {
      return setErrorMessage("Por favor, seleccione un asunto");
    }
    if (!formState.mensaje) {
      return setErrorMessage("Por favor, ingrese una consulta");
    }
    setLoading(true);
    const msg = {
      to: "administracion@grupoarraigo.com",
      from: "administracion@grupoarraigo.com",
      subject: formState.asunto,
      text: formState.mensaje,
      html: `
      <div>
        <strong>Nueva consulta de ${formState.nombre}</strong>
        <br/>
        <strong>Nombre:</strong> ${formState.nombre}
        <br/>
        <strong> Teléfono: </strong> ${formState.telefono}
        <br/>
        <p> ${formState.mensaje}</p>
      </div>
      `,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg }),
      });
      if (response.status === 200) {
        setSuccess(true);
      } else {
        setErrorMessage("Lo sentimos, hubo un error, intente de nuevo.");
      }
    } catch (e) {
      setErrorMessage("Lo sentimos, hubo un error, intente de nuevo.");
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <Main>
        <Hero
          title="ESCRIBINOS"
          text="AMPLIANDO TUS LÍMITES"
          textAlign="left"
          src={hero}
        />
        {mounted && (
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
                  label="Mensaje"
                  variant="outlined"
                  name="mensaje"
                  required
                  multiline
                  rows={5}
                  value={formState.mensaje}
                  onChange={(event) => handleChange(event, "mensaje")}
                />
                <div style={{ flexGrow: 1, width: "30px" }} />
                <Button
                  disabled={loading}
                  text="ENVIAR"
                  onClick={handleSubmit}
                />
              </InputsContainer>
            </FormContainer>
          </SecondBlock>
        )}

        <Map
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2302769123003!2d-60.63774693743764!3d-32.94492919026916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab18fa019b8d%3A0xeca6f7adb350f2f0!2sARG%2C%20San%20Lorenzo%201047%2C%20S2000%20Rosario%2C%20Provincia%20de%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1608554214822!5m2!1ses-419!2sar"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </Main>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Email enviado correctamente!
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorMessage}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

Contact.Layout = MyLayout;

export default Contact;
