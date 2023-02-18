import React, { useState } from "react";
import ErrorModal from "./ErrorModal"
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";

const FormItselfForm = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");

  const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
  }
  const handleSubmit = async () => {
    const nameInput = document.querySelector(".nameInput input");
    const workPlaceInput = document.querySelector(".workPlaceInput input");
    const emailInput = document.querySelector(".emailInput input");
    const textArea = document.querySelector("textarea");

    
    const Name = nameInput.value;
    const Workplace = workPlaceInput.value;
    const Email = emailInput.value;
    const Message = textArea.value;
    
    if (!Name || !Email) {
      setMessage(prev => "Make sure your email and name are in the form and we have liftoff! 🚀")
      return setOpen(true)
    } else if (!Message) {
      setTitle(
        (prev) =>
          "No message detected. 😥"
      );
      setMessage(
        (prev) =>
          "...now, now... Out with it... Let's hear the message! 🧏"
      );
      return setOpen(true);
    }
    if (!isValidEmail(Email)) {
      setMessage((prev) => "That email address doesn't seem quite right... 🤔");
      return setOpen(true);
    }

    try {
      let requestData = JSON.stringify({
        name: Name,
        workplace: Workplace,
        email: Email,
        message: Message,
      });
      let response = await fetch(
        `${process.env.REACT_APP_LOSERVER_EMAIL_URL}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: requestData,
        }
      );
      if (response.status === 201) {
        nameInput.value = "";
        workPlaceInput.value = "";
        emailInput.value = "";
        textArea.value = "";

        setTitle((prev) => "Perfect! 👌");
        setMessage(
          (prev) => "There should be something in your mail in a few!"
        );
        return setOpen(true);
      }
    } catch (error) {
      setTitle((prev) => "Unknown server error.");
      setMessage((prev) => "Contact santanderrrrrrr@leonomollo.com urgently");
      return setOpen(true);
    }

    

  };

  return (
    <Stack className="formItselfForm" sx={{pl: 1}}>
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
          mb: 0.5,
        }}
      >
        remember to add your email address 😉
      </Typography>
      <Stack className="formItselfFormWithin" component="form">
        <Input
          className="nameInput"
          color="info"
          required
          size="md"
          placeholder="My name is..."
          variant="outlined"
          sx={{
            mb: 0.5,
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
            mb: 0.5,
            width: "100%",
          }}
        />
        <Input
          className="emailInput"
          color="info"
          required
          placeholder="My email address is..."
          size="md"
          variant="outlined"
          sx={{
            mb: 0.5,
            width: "100%",
          }}
        />
        <Textarea
          color="primary"
          minRows={4}
          placeholder="and I wanted to say..."
          variant="outlined"
          sx={{
            mb: 0.5,
            width: "100%",
          }}
        />
        <Button
          className="submitFormButton"
          sx={{
            alignSelf: "flex-end",
            mt: 0.5,
          }}
          onClick={handleSubmit}
        >
          SEND
        </Button>
      </Stack>
      <ErrorModal open={open} setOpen={setOpen} warnMessage={message} warnTitle={title} />
    </Stack>
  );
};

export default FormItselfForm;
