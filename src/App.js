import { useState } from 'react';
import ModelCanvas from "./components/landingRight/ModelCanvas";
import GreenAndYellow from "./components/landingBkg/GreenAndYellow";
import BlueAndPurple from "./components/landingBkg/BlueAndPurple";
import Navbar from "./components/navbar/Navbar";
import TextAndDat from "./components/landingLeft/TextAndDat";
import ContactForm from "./components/belowLanding/actualComponents/LeftSide/ContactForm";
import "./App.css";
import { Stack } from "@mui/system";

function App() {
  const [weScrolling, setWeScrolling ] = useState(false)
  return (
    <div className="App">
      {/** logo elements below */}
      <Navbar />
      <Stack
        className="landingElements"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/** background elements below */}
        <Stack className="greenAndYellowHue">
          <GreenAndYellow />
        </Stack>
        <Stack className={`blueAndPurpleHue ${weScrolling ? "active" : ""}`}>
          <BlueAndPurple />
        </Stack>
        {/** landing text elements below */}
        <Stack
          className="stackForText"
          sx={{
            // backgroundColor: "#222",
            width: "50%",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextAndDat setWeScrolling={setWeScrolling} />
        </Stack>
        {/** santander dancing elements below */}
        <Stack
          sx={{
            // backgroundColor: "#222",
            width: "50%",
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ModelCanvas />
        </Stack>
      </Stack>
      <ContactForm />
    </div>
  );
}

export default App;
