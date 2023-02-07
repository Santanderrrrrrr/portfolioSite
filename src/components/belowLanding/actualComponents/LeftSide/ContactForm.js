import React from "react";
import { Stack } from "@mui/material";
import SantiSmile from "./SantiSmile";
import MockPhone from "./MockPhone";
import RedAndOrange from "./RedAndOrange";
import SecondBlob from "./SecondBlob";
import "../actualComponents.css";
import dotMesh from "../../assets/dotMesh.png"
import paperPlane from "../../assets/paperPlane.png"

const ContactForm = () => {
  return (
    <div className="belowLanding">
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
          <img src={paperPlane} alt="a mesh of dots" className="paperPlane" />
        </div>
        <div className="dotMeshDiv">
          <img src={dotMesh} alt="a mesh of dots" className="dotMesh" />
        </div>
        <SantiSmile />
        <MockPhone />
      </Stack>
      <Stack className="contactRightSide"></Stack>
    </div>
  );
};

export default ContactForm;
