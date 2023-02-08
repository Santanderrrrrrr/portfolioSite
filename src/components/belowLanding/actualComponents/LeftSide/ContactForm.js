import React from "react";
import { Stack } from "@mui/material";
import SantiSmile from "./SantiSmile";
import MockPhone from "./MockPhone";
import RedAndOrange from "./RedAndOrange";
import SecondBlob from "./SecondBlob";
import FormItself from "../RightSide/FormItself";
import "../actualComponents.css";
import dotMesh from "../../assets/dotMesh.png";
import paperPlane from "../../assets/paperPlane.png";
import GreyAndBlue from '../RightSide/GreyAndBlue';
import Navbar from "../../../navbar/Navbar"


const ContactForm = () => {
  return (
    <>
      <Navbar/>
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="belowLanding">
          <div className="blueAndGreyContainer">
            <GreyAndBlue />
            <GreyAndBlue />
          </div>

          <Stack className="contactLeftSide">
            <div className="secondBlobDiv">
              <SecondBlob />
              <SecondBlob />
            </div>
            <div className="redAndOrangeHue">
              <RedAndOrange />
              <RedAndOrange />
            </div>
            <div className="paperPlaneDiv">
              <img
                src={paperPlane}
                alt="a mesh of dots"
                className="paperPlane"
              />
            </div>
            <div className="dotMeshDiv">
              <img src={dotMesh} alt="a mesh of dots" className="dotMesh" />
            </div>
            <SantiSmile />
            <MockPhone />
          </Stack>
          <Stack className="contactRightSide">
            <FormItself />
          </Stack>
        </div>
      </Stack>
    </>
  );
};

export default ContactForm;
