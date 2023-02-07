import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { Stack } from "@mui/material";
import Model from "./Model"; /* highlight-line */
import BlobContainer from "./BlobContainer.js";
import grass from "../../assets/grassTuft.png";
import Chamomile from "./Chamomile";
import SoundPad from "./SoundPad";
import dove from "../../assets/dove.png";
import butterfly from "../../assets/butterfly.png";

const ModelCanvas = () => {
  return (
    <>
      <Stack className="scaffolding">
        <Stack className="blobAndDansan">
          {/**this is the mutating blob container */}
          <BlobContainer />

          {/**this is the grass under sants */}
          <div className="grassDiv">
            <img className="grassImg" src={grass} alt={"grass"} />
          </div>

          {/**this is the blue hue behind sants */}
          <div className="skyDiv"></div>

          {/**this is the div carrying the chamomiles*/}
          <Stack className="chamomileDiv">
            <Chamomile />
            <Chamomile />
            <img className="dovePng" src={dove} alt={"dove png"} />
            <img
              className="butterflyPng"
              src={butterfly}
              alt={"butterfly png"}
            />
          </Stack>

          {/**this is the soundpad */}
          <div className="soundpadDiv">
            <SoundPad />
          </div>

          {/**this is sants */}
          <div className="danSantander">
            <Canvas
              camera={{ position: [2, 0, 12.25], fov: 15 }}
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",
              }}
            >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                <Model position={[0.8, -0.9, 5]} /> {/* highlight-line */}
              </Suspense>
              {/* <OrbitControls /> */}
            </Canvas>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default ModelCanvas;
