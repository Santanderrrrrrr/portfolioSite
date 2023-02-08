import { Stack, Typography } from "@mui/material";
import { EmailOutlined, MapsHomeWorkOutlined } from "@mui/icons-material";
import githubLogo from "../../../../assets/github.png";
import React from "react";

const InfoCard = () => {

  const handleClick = () => {
    window.location.href = "https://github.com/Santanderrrrrrr";
  };
  
  return (
    <>
      <Stack className="infoCard">
        <Typography
          variant="h5"
          className="infoCardTitle"
          sx={{
            color: "rgb(80,80,80)",
            fontWeight: "700",
            mt: 15
          }}
        >
          Or have my card:
        </Typography>
        <Stack
          className="infoCardDeets"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            height: "40%",
            justifyContent: "flex-end",
            pb: 1.5,
            pl: 1.5,
            background: "linear-gradient(to bottom right,#4658fa ,#048)",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-end",
              ml: "auto",
              mr: "auto",
              pr: 1.5,
              color: "white",
              fontWeight: "900",
              mb: 6,
              // fontStyle: "italic",
              color: " #048"
            }}
            onClick={handleClick}
          >
            <img className="githubLogoICD" src={githubLogo} alt={"github link"} />
            {"SANTANDERRRRRRR"}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              ml: "auto",
              mr: "auto",
              color: "white",
              fontWeight: "500",
            }}
          >
            {"Leon Omollo"}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              ml: "auto",
              mr: "auto",
              color: "white",
              fontWeight: "500",
            }}
          >
            <EmailOutlined sx={{ mr: 1 }} /> {"leonofaugust@gmail.com"}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              ml: "auto",
              mr: "auto",
              color: "white",
              fontWeight: "500",
            }}
          >
            <MapsHomeWorkOutlined sx={{ mr: 1 }} /> {"Gdansk, Poland"}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default InfoCard;
