import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { purple } from "@mui/material/colors";

import NameHighlighted from "./NameHighlighted";
import Typewriter from "./Typewriter";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const TextAndDat = ({ setWeScrolling}) => {

  const navigate = useNavigate()

  const handleScroll = () => {
    // setWeScrolling((prev)=> !prev)
    // window.scrollTo({
    //   top: 5000,
    //   left: 0,
    //   behavior: "smooth",
    // });
    navigate('/contact')
  };
  
  return (
    <>
      <Stack className="textAndDat">
        <p className="introductoryPhrase">{"Nice to meet you, I'm "}</p>
        <NameHighlighted />
        <span className="followUpPhrase">
          {"Your new "}
          <Typewriter />
        </span>
        <span
          className="talkative"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "1.5rem",
            letterSpacing: "-2px",
            color: "rgb(80,80,80)",
            // marginLeft: "auto",
            // marginRight: "30%",
            marginTop: "4rem",
            filter: "drop-shadow(0px 30px 40px rgba(10,10,10,0.2))",
          }}
        >
          {"Let's"}
          <ThemeProvider theme={theme}>
            <Button
              color="secondary"
              sx={{
                ml: 1.5,
                color: "white",
                display: "flex",
                flexDirection: "row",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(1,254,1,1) 26%, rgba(76,168,69,1) 100%)",
              }}
              variant="contained"
              className="talkButton"
              onClick={handleScroll}
            >
              Talk
            </Button>
          </ThemeProvider>
        </span>
      </Stack>
    </>
  );
};

export default TextAndDat;
