import React from "react";
import { Stack } from "@mui/material";
import Mpc from "./Mpc";

const SoundPad = () => {
  return (
    <>
      <span className="soundPad">
        <Stack className="soundPadSegment">
          <p className="soundPadSegmentTitle">{"Give me a beat! (click the icons 😉)"}</p>
        </Stack>

        <Stack className="soundPadSegment">
          <Mpc />
        </Stack>
      </span>
    </>
  );
};

export default SoundPad;
