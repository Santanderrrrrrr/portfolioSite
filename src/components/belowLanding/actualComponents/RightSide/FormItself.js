import React from "react";
import { Stack } from "@mui/system";
import {Divider} from "@mui/material";
import FormItselfForm from './FormItselfForm';
import InfoCard from './InfoCard';

const FormItself = () => {
  return (
    <Stack
      className="formBody"
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Stack className="leftFormBody">
        <FormItselfForm />
      </Stack>
      <Divider orientation="vertical" sx={{mt: "auto", mb: "auto", maxHeight: "80%"}} />
      <Stack className="rightFormBody">
        <InfoCard />
      </Stack>
    </Stack>
  );
};

export default FormItself;
