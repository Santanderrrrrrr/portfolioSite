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
            mt: 10,
            mb: 5,
          }}
        >
          Or have my card:
        </Typography>
        <Stack
          className="infoCardDeets"
          sx={{
            display: "flex",
            flexDirection: "column",
            // height: "40%",
            pb: 1.5,
            pl: 1.5,
            background: "linear-gradient(to bottom right,#4658fa ,#048)",
            borderRadius: "10px",
            "@media (max-width: 1024px)": {
              display: "none",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "100%",
              width: "100%",
              justifyContent: "flex-start",
              ml: "auto",
              mr: "auto",
              pr: 1.5,
              color: "white",
              fontWeight: "900",
              mb: 6,
              fontStyle: "italic",
              fontSize: 10,
              color: " #048",
              "@media (max-width: 1024px)": {
                display: "none",
              },
            }}
            onClick={handleClick}
          >
            <img
              className="githubLogoICD"
              src={githubLogo}
              alt={"github link"}
            />
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
              "@media (max-width: 1024px)": {
                display: "none",
              },
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
              maxWidth: "100%",
              justifyContent: "flex-start",
              ml: "auto",
              mr: "auto",
              color: "white",
              fontWeight: "500",
              fontSize: 8,
              "@media (max-width: 1024px)": {
                display: "none",
              },
            }}
          >
            <EmailOutlined sx={{ mr: 1 }} /> {"santanderrrrrrr@leonomollo.com"}
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
              "@media (max-width: 1024px)": {
                display: "none",
              },
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
