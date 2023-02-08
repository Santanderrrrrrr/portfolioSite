import React from "react";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";

const FormItselfForm = () => {

    const handleSubmit = () => {
        const nameInput = document.querySelector(".nameInput input");
        const workPlaceInput = document.querySelector(".workPlaceInput input");
        const emailInput = document.querySelector(".emailInput input");
        const textArea = document.querySelector("textarea");

        console.log("Name: ", nameInput.value);
        console.log("Work place: ", workPlaceInput.value);
        console.log("Email: ", emailInput.value);
        console.log("Message: ", textArea.value);
    }
    
  return (
    <Stack className="formItselfForm">
      <Typography
        variant="h2"
        className="formTitle"
        sx={{
          fontWeight: "900",
          fontSize: "2rem",
          color: "rgb(80, 80, 80)",
        }}
      >
        Shoot me a mail here 👇
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "300",
          fontSize: "1rem",
          color: "rgb(80, 80, 80)",
          mb: 1,
        }}
      >
        remember to add your email address 😉
      </Typography>
      <Stack className="formItselfFormWithin" component="form">
        <Input
          className="nameInput"
          color="info"
          required
          size="lg"
          placeholder="My name is..."
          variant="outlined"
          sx={{
            mb: 1,
            width: "100%",
          }}
        />
        <Input
          className="workPlaceInput"
          color="info"
          placeholder="I work at..."
          size="md"
          variant="outlined"
          sx={{
            mb: 1,
            width: "100%",
          }}
        />
        <Input
          className="emailInput"
          color="info"
          required
          placeholder="My email address is..."
          size="lg"
          variant="outlined"
          sx={{
            mb: 1,
            width: "100%",
          }}
        />
        <Textarea
          color="primary"
          minRows={5}
          placeholder="and I wanted to say..."
          variant="outlined"
          sx={{
            mb: 1,
            width: "100%",
          }}
        />
              <Button
                  className="submitFormButton"
                  sx={{
                      alignSelf: "flex-end",
                      mt: 1,

                  }}
                  onClick={handleSubmit}
              >
                  SEND
              </Button>
      </Stack>
    </Stack>
  );
};

export default FormItselfForm;
